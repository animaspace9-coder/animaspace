"use client";

import { useState } from "react";
import { eventTypes, mockSlotsByMode, EventType, ConsultationMode, clinicDetails } from "@/app/data/booking";
import { generateGoogleCalendarUrl, generateGoogleMeetLink, generateValidGoogleMeetUrl } from "@/app/lib/google-calendar";
import { Button } from "@/app/components/ui/Button";

// Helper to get days in month
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

// Helper to get first day of month (0 = Sun, 1 = Mon...)
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function CalScheduler() {
  // Mode selection: online vs offline
  const [mode, setMode] = useState<ConsultationMode>("online");

  // Filter event types by allowed mode
  const filteredEventTypes = eventTypes.filter((et) => et.allowedModes.includes(mode));

  // Booking state
  const [selectedEventType, setSelectedEventType] = useState<EventType>(filteredEventTypes[0]);

  // Current view date state
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  // Selection state
  const [selectedDate, setSelectedDate] = useState<number | null>(today.getDate());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Form & Step state
  const [step, setStep] = useState<"calendar" | "details" | "confirmed">("calendar");
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [meetLink, setMeetLink] = useState("");
  const [gcalUrl, setGcalUrl] = useState("");

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  // Switch mode handler
  const handleModeChange = (newMode: ConsultationMode) => {
    setMode(newMode);
    const validEvents = eventTypes.filter((et) => et.allowedModes.includes(newMode));
    if (!validEvents.some((e) => e.id === selectedEventType.id)) {
      setSelectedEventType(validEvents[0]);
    }
    setSelectedTime(null);
  };

  // Month navigation
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
  };

  // Check if date is in past
  const isPastDate = (day: number) => {
    const checkDate = new Date(currentYear, currentMonth, day);
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return checkDate < startOfToday;
  };

  // Check if date is Sunday
  const isSunday = (day: number) => {
    const checkDate = new Date(currentYear, currentMonth, day);
    return checkDate.getDay() === 0;
  };

  // Get available slots for selected date & mode
  const currentSlotList = mockSlotsByMode[mode];
  const availableSlots = selectedDate && isSunday(selectedDate)
    ? currentSlotList.weekend
    : currentSlotList.weekday;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    const bookingDate = new Date(currentYear, currentMonth, selectedDate);
    // Parse time string e.g. "10:00 AM" or "10:00 AM (Clinic)"
    const cleanTimeStr = selectedTime.replace(" (Clinic)", "");
    const [timeStr, period] = cleanTimeStr.split(" ");
    let [hours, minutes] = timeStr.split(":").map(Number);
    if (period === "PM" && hours < 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    bookingDate.setHours(hours, minutes, 0, 0);

    const isOnlineMode = mode === "online";
    const validMeet = isOnlineMode ? generateValidGoogleMeetUrl() : "";
    setMeetLink(validMeet);

    const calendarUrl = generateGoogleCalendarUrl({
      title: `[${isOnlineMode ? "Online" : "In-Clinic"}] ${selectedEventType.title} with ${clinicDetails.doctor}`,
      description: `Consultation Mode: ${mode.toUpperCase()}\nSession: ${selectedEventType.title}\nParent: ${parentName}\nPhone: ${phone}\nNotes: ${notes}`,
      startDate: bookingDate,
      durationMinutes: selectedEventType.duration,
      attendeeEmail: email,
      attendeeName: parentName,
      location: isOnlineMode ? "Google Meet Video Call" : `${clinicDetails.name}, ${clinicDetails.address}`,
      isOnline: isOnlineMode,
    });

    setGcalUrl(calendarUrl);
    setStep("confirmed");
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-[2rem] border-3 border-[var(--color-brand-navy)] shadow-[8px_8px_0px_0px_var(--color-brand-navy)] overflow-hidden">
      
      {/* Header Bar */}
      <div className="bg-[var(--color-brand-navy)] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src="/prashanthi-simon.png"
            alt="Prashanthi Simon"
            className="w-14 h-14 rounded-full border-2 border-[var(--color-brand-sky)] object-cover object-top shadow-md flex-shrink-0"
          />
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-sky)] mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Real-Time Availability
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold">
              Schedule with Prashanthi Simon
            </h2>
          </div>
        </div>
        
        {/* Step Indicator */}
        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs font-semibold">
          <span className={step === "calendar" ? "text-[var(--color-brand-pink)] font-bold" : "text-white/60"}>
            1. Mode &amp; Slot
          </span>
          <span>→</span>
          <span className={step === "details" ? "text-[var(--color-brand-pink)] font-bold" : "text-white/60"}>
            2. Details
          </span>
          <span>→</span>
          <span className={step === "confirmed" ? "text-emerald-400 font-bold" : "text-white/60"}>
            3. Confirmation
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-8">

        {step === "calendar" && (
          <div className="flex flex-col gap-8">

            {/* Mode Selection Tabs (Online vs Offline) */}
            <div className="bg-[var(--color-brand-off-white)] p-4 rounded-2xl border-2 border-[var(--color-brand-navy)]">
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-brand-mauve)] mb-3">
                Step 1: Choose Consultation Mode
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleModeChange("online")}
                  className={`p-4 rounded-xl border-2 transition-all text-left flex items-center justify-between ${
                    mode === "online"
                      ? "bg-[var(--color-brand-sky)] border-[var(--color-brand-navy)] shadow-[4px_4px_0px_0px_var(--color-brand-navy)] font-bold"
                      : "bg-white border-gray-200 hover:border-[var(--color-brand-navy)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🌐</span>
                    <div>
                      <h4 className="font-heading text-base font-bold text-[var(--color-brand-navy)]">
                        Online Video Call
                      </h4>
                      <p className="text-xs text-[var(--color-brand-espresso)]">
                        Google Meet link generated automatically
                      </p>
                    </div>
                  </div>
                  {mode === "online" && <span className="text-lg font-black text-[var(--color-brand-navy)]">✓</span>}
                </button>

                <button
                  type="button"
                  onClick={() => handleModeChange("offline")}
                  className={`p-4 rounded-xl border-2 transition-all text-left flex items-center justify-between ${
                    mode === "offline"
                      ? "bg-[var(--color-brand-pink)] border-[var(--color-brand-navy)] shadow-[4px_4px_0px_0px_var(--color-brand-navy)] font-bold"
                      : "bg-white border-gray-200 hover:border-[var(--color-brand-navy)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">📍</span>
                    <div>
                      <h4 className="font-heading text-base font-bold text-[var(--color-brand-navy)]">
                        In-Clinic Consultation
                      </h4>
                      <p className="text-xs text-[var(--color-brand-espresso)]">
                        Anima Space Center, Jubilee Hills, Hyderabad
                      </p>
                    </div>
                  </div>
                  {mode === "offline" && <span className="text-lg font-black text-[var(--color-brand-navy)]">✓</span>}
                </button>
              </div>
            </div>

            {/* Event Type Selection Tabs */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-brand-mauve)] mb-3">
                Step 2: Select Session Type ({mode === "online" ? "Online" : "In-Clinic"})
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredEventTypes.map((et) => {
                  const isSelected = selectedEventType.id === et.id;
                  return (
                    <button
                      key={et.id}
                      type="button"
                      onClick={() => setSelectedEventType(et)}
                      className={`text-left p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                        isSelected
                          ? `${et.color} border-[var(--color-brand-navy)] shadow-[4px_4px_0px_0px_var(--color-brand-navy)] -translate-y-1`
                          : "bg-white border-gray-200 hover:border-[var(--color-brand-navy)]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl">{et.icon}</span>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-white border border-[var(--color-brand-navy)]">
                          {et.duration} min
                        </span>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-[var(--color-brand-navy)] mb-1">
                          {et.title}
                        </h4>
                        <p className="text-xs text-[var(--color-brand-espresso)] line-clamp-2 leading-relaxed">
                          {et.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Calendar Grid + Time Slots Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-gray-100">
              
              {/* Left Column: Calendar View (7 cols) */}
              <div className="lg:col-span-7 bg-[var(--color-brand-off-white)] p-6 rounded-2xl border-2 border-[var(--color-brand-navy)]">
                
                {/* Calendar Navigation Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading font-bold text-lg text-[var(--color-brand-navy)]">
                    {MONTH_NAMES[currentMonth]} {currentYear}
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevMonth}
                      type="button"
                      className="p-2 rounded-xl bg-white border border-[var(--color-brand-navy)] hover:bg-[var(--color-brand-sky)] transition-colors font-bold text-sm"
                      aria-label="Previous Month"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextMonth}
                      type="button"
                      className="p-2 rounded-xl bg-white border border-[var(--color-brand-navy)] hover:bg-[var(--color-brand-sky)] transition-colors font-bold text-sm"
                      aria-label="Next Month"
                    >
                      →
                    </button>
                  </div>
                </div>

                {/* Days of Week Header */}
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {WEEKDAYS.map((wd) => (
                    <div key={wd} className="text-xs font-bold text-[var(--color-brand-mauve)] py-1">
                      {wd}
                    </div>
                  ))}
                </div>

                {/* Calendar Days Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {/* Empty cells before month starts */}
                  {Array.from({ length: firstDay }).map((_, idx) => (
                    <div key={`empty-${idx}`} className="h-10 sm:h-12" />
                  ))}

                  {/* Day cells */}
                  {Array.from({ length: daysInMonth }).map((_, idx) => {
                    const dayNumber = idx + 1;
                    const isPast = isPastDate(dayNumber);
                    const isToday =
                      dayNumber === today.getDate() &&
                      currentMonth === today.getMonth() &&
                      currentYear === today.getFullYear();
                    const isSelected = selectedDate === dayNumber;

                    return (
                      <button
                        key={`day-${dayNumber}`}
                        disabled={isPast}
                        type="button"
                        onClick={() => {
                          setSelectedDate(dayNumber);
                          setSelectedTime(null);
                        }}
                        className={`h-10 sm:h-12 rounded-xl text-sm font-bold flex flex-col items-center justify-center transition-all ${
                          isPast
                            ? "text-gray-300 cursor-not-allowed bg-transparent"
                            : isSelected
                            ? "bg-[var(--color-brand-mauve)] text-white border-2 border-[var(--color-brand-navy)] shadow-[2px_2px_0px_0px_var(--color-brand-navy)] scale-105"
                            : isToday
                            ? "bg-[var(--color-brand-sky)] text-[var(--color-brand-navy)] border-2 border-[var(--color-brand-navy)] font-black"
                            : "bg-white text-[var(--color-brand-navy)] border border-gray-200 hover:border-[var(--color-brand-navy)] hover:bg-[var(--color-brand-pink)]/30"
                        }`}
                      >
                        <span>{dayNumber}</span>
                        {isToday && (
                          <span className="text-[9px] uppercase font-extrabold leading-none text-[var(--color-brand-mauve)]">
                            Today
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-xs text-[var(--color-brand-espresso)] mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full bg-[var(--color-brand-sky)] border border-[var(--color-brand-navy)]" /> Today
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full bg-[var(--color-brand-mauve)] border border-[var(--color-brand-navy)]" /> Selected
                    </span>
                  </div>
                  <span className="font-semibold text-gray-500">Mode: {mode.toUpperCase()}</span>
                </div>
              </div>

              {/* Right Column: Available Time Slots (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[var(--color-brand-navy)] mb-2">
                    Available {mode === "online" ? "Online" : "In-Clinic"} Slots
                  </h3>
                  <p className="text-xs text-[var(--color-brand-espresso)] mb-4">
                    {selectedDate
                      ? `Select a slot for ${MONTH_NAMES[currentMonth]} ${selectedDate}, ${currentYear}`
                      : "Please select a date on the calendar"}
                  </p>

                  {selectedDate ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[280px] overflow-y-auto pr-1">
                      {availableSlots.map((slot) => {
                        const isSelected = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`py-3 px-4 rounded-xl font-bold text-xs sm:text-sm border-2 transition-all flex items-center justify-between ${
                              isSelected
                                ? "bg-[var(--color-brand-pink)] border-[var(--color-brand-navy)] text-[var(--color-brand-navy)] shadow-[3px_3px_0px_0px_var(--color-brand-navy)]"
                                : "bg-white border-gray-200 text-[var(--color-brand-navy)] hover:border-[var(--color-brand-navy)]"
                            }`}
                          >
                            <span>🕒 {slot}</span>
                            {isSelected && <span>✓</span>}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-8 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 text-xs text-gray-400">
                      📅 Click any date to view available time slots.
                    </div>
                  )}
                </div>

                {/* Continue to Details Button */}
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <Button
                    variant="primary"
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => setStep("details")}
                    className="w-full justify-center"
                  >
                    Next: Enter Attendee Details →
                  </Button>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* Step 2: Attendee Details Form */}
        {step === "details" && (
          <form onSubmit={handleBookingSubmit} className="max-w-2xl mx-auto flex flex-col gap-6">
            
            <div className="bg-[var(--color-brand-sky)]/30 p-4 rounded-2xl border-2 border-[var(--color-brand-navy)] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[var(--color-brand-mauve)] uppercase">
                  {mode === "online" ? "🌐 Online Video Call" : "📍 In-Clinic Consultation"}
                </span>
                <h4 className="font-heading font-bold text-base text-[var(--color-brand-navy)]">
                  {selectedEventType.title} ({selectedEventType.duration} mins)
                </h4>
                <p className="text-xs text-[var(--color-brand-espresso)]">
                  📅 {selectedDate} {MONTH_NAMES[currentMonth]} {currentYear} at 🕒 {selectedTime}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStep("calendar")}
                className="text-xs font-bold underline text-[var(--color-brand-mauve)] hover:text-[var(--color-brand-navy)]"
              >
                Change
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[var(--color-brand-navy)] uppercase" htmlFor="cal-parent">
                  Parent / Guardian Name *
                </label>
                <input
                  id="cal-parent"
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="e.g. Ananya Rao"
                  className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[var(--color-brand-navy)] uppercase" htmlFor="cal-email">
                  Email Address *
                </label>
                <input
                  id="cal-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[var(--color-brand-navy)] uppercase" htmlFor="cal-phone">
                  Phone / WhatsApp Number *
                </label>
                <input
                  id="cal-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98664 10936"
                  className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[var(--color-brand-navy)] uppercase" htmlFor="cal-notes">
                  Child&apos;s Age / Brief Note (Optional)
                </label>
                <input
                  id="cal-notes"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. 10 yrs old, anxiety with exams"
                  className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
                />
              </div>
            </div>

            {mode === "online" ? (
              <div className="p-4 bg-emerald-50 rounded-2xl border-2 border-emerald-300 text-emerald-900 text-xs flex items-center gap-3">
                <span className="text-2xl">📹</span>
                <div>
                  <p className="font-bold">Google Meet Link Auto-Generation</p>
                  <p className="opacity-80">A unique Google Meet video link will be generated and dispatched upon confirmation.</p>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-blue-50 rounded-2xl border-2 border-blue-300 text-blue-900 text-xs flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-bold">In-Clinic Session Instructions</p>
                  <p className="opacity-80">{clinicDetails.name} — {clinicDetails.landmark}. {clinicDetails.parking}.</p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setStep("calendar")}
                className="px-6 py-3 rounded-full border-2 border-[var(--color-brand-navy)] font-bold text-sm hover:bg-gray-100 transition-colors"
              >
                ← Back
              </button>
              <Button type="submit" variant="primary" className="flex-1 justify-center">
                Confirm &amp; Book {mode === "online" ? "Online Call" : "In-Clinic Visit"} →
              </Button>
            </div>

          </form>
        )}

        {/* Step 3: Booking Confirmation */}
        {step === "confirmed" && (
          <div className="max-w-xl mx-auto text-center py-6 flex flex-col items-center gap-6">
            
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border-2 border-emerald-600 flex items-center justify-center text-3xl font-black shadow-[4px_4px_0px_0px_#059669]">
              ✓
            </div>

            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
                Booking Successfully Scheduled
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-brand-navy)]">
                You&apos;re All Set, {parentName}!
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-brand-espresso)] mt-2">
                Your <strong>{mode === "online" ? "Online" : "In-Clinic"}</strong> session for <strong>{selectedEventType.title}</strong> is confirmed for:
              </p>
              <div className="inline-block mt-3 px-4 py-2 bg-[var(--color-brand-sky)]/40 rounded-xl border border-[var(--color-brand-navy)] text-sm font-bold text-[var(--color-brand-navy)]">
                📅 {selectedDate} {MONTH_NAMES[currentMonth]} {currentYear} at 🕒 {selectedTime}
              </div>
            </div>

            {/* Mode Specific Box */}
            {mode === "online" ? (
              <div className="w-full p-6 bg-white rounded-2xl border-3 border-[var(--color-brand-navy)] shadow-[6px_6px_0px_0px_var(--color-brand-navy)] flex flex-col gap-4 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-mauve)] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Valid Google Meet &amp; Calendar Sync
                  </span>
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-300">
                    Confirmed
                  </span>
                </div>
                <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex flex-col gap-2">
                  <p className="font-bold text-sm">📅 Instant Google Calendar Event Creation</p>
                  <p className="opacity-90 leading-relaxed">
                    Click <strong>&ldquo;Add to Google Calendar&rdquo;</strong> below to add this session to your calendar. Google Calendar will automatically attach a valid Google Meet video call room and send invites to both you and Prashanthi Simon.
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full p-6 bg-white rounded-2xl border-3 border-[var(--color-brand-navy)] shadow-[6px_6px_0px_0px_var(--color-brand-navy)] flex flex-col gap-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-mauve)] flex items-center gap-1.5">
                    📍 Clinic Consultation Pass
                  </span>
                  <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full border border-blue-300">
                    Confirmed
                  </span>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs text-[var(--color-brand-navy)] flex flex-col gap-2">
                  <p className="font-bold text-sm">{clinicDetails.name}</p>
                  <p className="text-gray-600">{clinicDetails.address}</p>
                  <p className="text-gray-500 text-[11px]">📍 Landmark: {clinicDetails.landmark}</p>
                  <a
                    href={clinicDetails.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[var(--color-brand-mauve)] underline mt-1"
                  >
                    🗺️ Open in Google Maps →
                  </a>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="w-full flex flex-col sm:flex-row items-center gap-3">
              <a
                href={gcalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-brand-mauve)] text-white font-bold text-sm border-2 border-[var(--color-brand-navy)] shadow-[3px_3px_0px_0px_var(--color-brand-navy)] hover:bg-[var(--color-brand-navy)] transition-all"
              >
                <span>📅 Add to Google Calendar</span>
              </a>

              {mode === "online" ? (
                <a
                  href={generateGoogleMeetLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-brand-sky)] text-[var(--color-brand-navy)] font-bold text-sm border-2 border-[var(--color-brand-navy)] shadow-[3px_3px_0px_0px_var(--color-brand-navy)] hover:bg-[var(--color-brand-pink)] transition-all"
                >
                  <span>📹 Launch Instant Meet Room</span>
                </a>
              ) : (
                <a
                  href={`https://wa.me/919866410936?text=${encodeURIComponent(
                    `Hi Prashanthi Simon, I scheduled an IN-CLINIC session: ${selectedEventType.title} on ${selectedDate} ${MONTH_NAMES[currentMonth]} at ${selectedTime}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#60D66A] text-black font-bold text-sm border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#52c45b] transition-all"
                >
                  <span>💬 WhatsApp Confirmation</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                setStep("calendar");
                setSelectedDate(today.getDate());
                setSelectedTime(null);
              }}
              className="text-xs font-bold text-[var(--color-brand-mauve)] underline hover:text-[var(--color-brand-navy)] pt-2"
            >
              ← Book Another Session
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
