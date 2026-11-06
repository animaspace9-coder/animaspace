"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "./coreui-calendar.css";

// Dynamically import calendar to prevent SSR hydration mismatches
const CCalendar = dynamic(
  () => import("@coreui/react-pro").then((mod) => mod.CCalendar),
  { ssr: false }
);

// Current IST date (YYYY-MM-DD)
export function todayIST(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
}

// Max booking date: up to two weeks (14 days) in advance from today
export function maxBookingDateIST(): string {
  const d = new Date();
  d.setDate(d.getDate() + 14);
  return d.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
}

// Format ISO date (YYYY-MM-DD) to DD/MM/YYYY
export function formatDateDDMMYYYY(isoDateStr: string): string {
  if (!isoDateStr) return "";
  const parts = isoDateStr.split("-");
  if (parts.length === 3) {
    const [y, m, d] = parts;
    return `${d}/${m}/${y}`;
  }
  return isoDateStr;
}

// Current minute of the day in IST (0 to 1439)
export function currentMinsIST(): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const h = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10);
  const m = parseInt(parts.find((p) => p.type === "minute")?.value || "0", 10);
  return h * 60 + m;
}

export interface Slot {
  time: string; // '10:00'
  label: string; // '10:00 AM – 11:00 AM'
  available: boolean;
}

// 1-hour slot generator for working hours 10:00 AM to 6:00 PM (up to 2 weeks prior)
// Only returns currently available, upcoming slots (past slots are not displayed)
export function generateSlots(
  selectedDate?: string,
  startHour = 10,
  endHour = 17, // Last 1-hour window starts at 5:00 PM (ends at 6:00 PM)
  intervalMins = 60
): Slot[] {
  const todayStr = todayIST();
  const maxDateStr = maxBookingDateIST();
  const dateStr = selectedDate || todayStr;

  // Sundays are non-working days
  const [y, m, d] = dateStr.split("-").map(Number);
  const dayOfWeek = new Date(y, (m || 1) - 1, d || 1).getDay();
  if (dayOfWeek === 0 || dateStr > maxDateStr || dateStr < todayStr) {
    return [];
  }

  const slots: Slot[] = [];
  const start = startHour * 60;
  const end = endHour * 60;
  const nowMins = currentMinsIST();
  const isToday = dateStr === todayStr;

  for (let mins = start; mins <= end; mins += intervalMins) {
    // Skip slots that have already passed for today
    if (isToday && mins <= nowMins) {
      continue;
    }

    const startH = Math.floor(mins / 60);
    const endH = startH + 1;
    const pad = (n: number) => String(n).padStart(2, "0");

    const startPeriod = startH < 12 ? "AM" : "PM";
    const displayStartH = startH === 0 ? 12 : startH > 12 ? startH - 12 : startH;

    const endPeriod = endH < 12 ? "AM" : "PM";
    const displayEndH = endH === 0 ? 12 : endH > 12 ? endH - 12 : endH;

    slots.push({
      time: `${pad(startH)}:00`,
      label: `${displayStartH}:00 ${startPeriod} – ${displayEndH}:00 ${endPeriod}`,
      available: true,
    });
  }
  return slots;
}

// Returns the initial selectable date with open slots
// If today is Sunday or today has no remaining slots (after 5 PM IST), advances to next working day
export function getInitialWorkingDate(): string {
  const todayStr = todayIST();
  const [y, m, d] = todayStr.split("-").map(Number);
  const dateObj = new Date(y, (m || 1) - 1, d || 1);
  const nowMins = currentMinsIST();

  // If today is Sunday or current time has passed the last slot start (5:00 PM / 1020 mins)
  if (dateObj.getDay() === 0 || nowMins >= 17 * 60) {
    dateObj.setDate(dateObj.getDate() + 1);
    // If tomorrow is Sunday, advance to Monday
    if (dateObj.getDay() === 0) {
      dateObj.setDate(dateObj.getDate() + 1);
    }
  }

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export interface StepDateTimeProps {
  selectedDate?: string;
  selectedTime?: string;
  onSelect?: (date: string, time: string, timeLabel: string) => void;
  className?: string;
}

export function StepDateTime({
  selectedDate: initialDate,
  selectedTime: initialTime,
  onSelect,
  className = "",
}: StepDateTimeProps) {
  const todayStr = todayIST();
  const maxDateStr = maxBookingDateIST();
  const defaultDate = initialDate || getInitialWorkingDate();

  const [date, setDate] = useState<string>(defaultDate);
  const [time, setTime] = useState<string>(initialTime || "");
  const [timeLabel, setTimeLabel] = useState<string>("");
  const [slots, setSlots] = useState<Slot[]>(() => generateSlots(defaultDate));
  const [isSunday, setIsSunday] = useState<boolean>(false);
  const [isLoadingSlots, setIsLoadingSlots] = useState<boolean>(false);

  // Clear selected time if it becomes unavailable
  useEffect(() => {
    if (time) {
      const currentSlot = slots.find((s) => s.time === time);
      if (currentSlot && !currentSlot.available) {
        setTime("");
        setTimeLabel("");
      }
    }
  }, [slots, time]);

  // Fetch slots from API with fallback to client-side 1-hour generator
  useEffect(() => {
    let isCancelled = false;
    async function loadAvailability() {
      setIsLoadingSlots(true);
      try {
        const res = await fetch(`/api/availability?date=${encodeURIComponent(date)}`);
        if (res.ok) {
          const data = await res.json();
          if (!isCancelled) {
            setIsSunday(Boolean(data.isSunday));
            if (Array.isArray(data.slots)) {
              setSlots(data.slots);
              setIsLoadingSlots(false);
              return;
            }
          }
        }
      } catch (err) {
        console.warn("Availability API fallback active:", err);
      }
      if (!isCancelled) {
        const fallback = generateSlots(date);
        const [y, m, d] = date.split("-").map(Number);
        const isSun = new Date(y, (m || 1) - 1, d || 1).getDay() === 0;
        setIsSunday(isSun);
        setSlots(fallback);
        setIsLoadingSlots(false);
      }
    }

    loadAvailability();
    return () => {
      isCancelled = true;
    };
  }, [date]);

  // Prevent past dates, dates beyond 2 weeks, and Sundays
  const handleDateClick = (dateStr: string) => {
    if (dateStr < todayStr || dateStr > maxDateStr) return;
    const [y, m, d] = dateStr.split("-").map(Number);
    const dayOfWeek = new Date(y, (m || 1) - 1, d || 1).getDay();
    if (dayOfWeek === 0) {
      return;
    }
    setDate(dateStr);
    setTime("");
    setTimeLabel("");
  };

  // Guard slot selection
  const handleSlotSelect = (slot: Slot) => {
    if (!slot.available) return;
    setTime(slot.time);
    setTimeLabel(slot.label);
    if (onSelect) {
      onSelect(date, slot.time, slot.label);
    }
  };

  // Convert Date object from calendar into YYYY-MM-DD IST string
  const handleCalendarChange = (rawDate: Date | string | null) => {
    if (!rawDate) return;
    const d = rawDate instanceof Date ? rawDate : new Date(rawDate);
    if (isNaN(d.getTime())) return;
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const dateStr = `${year}-${month}-${day}`;
    handleDateClick(dateStr);
  };

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {/* 2-Column Responsive Layout: Calendar on Left, 1-Hour Slot Picker on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Calendar Column */}
        <div className="lg:col-span-7 flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]">
              1. Select Date
            </span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[var(--color-brand-sky)]/50 text-[var(--color-brand-navy)]">
              {formatDateDDMMYYYY(date)}
            </span>
          </div>

          <div className="anima-coreui-calendar">
            <CCalendar
              locale="en-US"
              firstDayOfWeek={0} // Starting day of week is Sunday
              minDate={todayStr}
              maxDate={maxDateStr} // Allows booking up to 2 weeks in advance
              selectAdjacementDays={true} // Allows clicking next month days directly
              showAdjacementDays={true}
              startDate={date}
              disabledDates={(d: Date) => {
                const year = d.getFullYear();
                const month = String(d.getMonth() + 1).padStart(2, "0");
                const day = String(d.getDate()).padStart(2, "0");
                const checkStr = `${year}-${month}-${day}`;
                const isPast = checkStr < todayStr;
                const isBeyondTwoWeeks = checkStr > maxDateStr;
                const isSun = d.getDay() === 0;

                return isPast || isBeyondTwoWeeks || isSun;
              }}
              onStartDateChange={handleCalendarChange}
            />
          </div>
        </div>

        {/* Available 1-Hour Time Slots Column */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]">
              2. Select Available Time
            </span>
            {isLoadingSlots && (
              <span className="text-[10px] text-[var(--color-brand-mauve)] animate-pulse">
                Updating slots…
              </span>
            )}
          </div>

          <div className="p-4 rounded-2xl bg-white border-2 border-[var(--color-brand-navy)] shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
              <span className="text-xs font-bold text-[var(--color-brand-navy)] block">
                Available Slots ({formatDateDDMMYYYY(date)})
              </span>
            </div>

            {/* Sunday notice */}
            {isSunday ? (
              <div className="rounded-xl p-4 text-xs text-rose-800 bg-rose-50 border border-rose-200 text-center flex flex-col gap-1.5">
                <span className="font-bold text-sm">Sunday is a Non-Working Day</span>
                <p className="text-[11px] opacity-80">
                  Anima Space is closed on Sundays. Please select a Monday – Saturday date.
                </p>
              </div>
            ) : slots.length === 0 ? (
              <div className="rounded-xl p-4 text-xs text-neutral-700 bg-neutral-50 border border-neutral-200 text-center">
                No slots available for this date. Please select an upcoming date from the calendar.
              </div>
            ) : (
              <div className="flex flex-col gap-2 max-h-[340px] overflow-y-auto pr-1">
                {slots.map((slot) => {
                  const isSelected = slot.time === time;
                  return (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => handleSlotSelect(slot)}
                      className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium transition-all text-left flex items-center justify-between border ${
                        isSelected
                          ? "bg-[var(--color-brand-mauve)] text-white font-semibold cursor-pointer border-[var(--color-brand-navy)] shadow-xs"
                          : "bg-neutral-50 text-neutral-900 hover:border-[var(--color-brand-mauve)] hover:bg-[var(--color-brand-sky)]/20 cursor-pointer"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="opacity-70">🕒</span>
                        <span>{slot.label}</span>
                      </span>
                      {isSelected && <span className="text-xs font-bold">✓ Selected</span>}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {time && !isSunday && (
            <div className="p-3 bg-[var(--color-brand-sky)]/30 rounded-xl border border-[var(--color-brand-navy)]/30 text-xs text-[var(--color-brand-navy)] flex items-center justify-between">
              <span>
                Selected: <strong>{formatDateDDMMYYYY(date)}</strong> at{" "}
                <strong>{timeLabel || time}</strong>
              </span>
              <span className="text-emerald-700 font-bold">✓ Ready</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
