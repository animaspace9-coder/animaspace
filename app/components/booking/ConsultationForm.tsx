"use client";

import React, { useState } from "react";
import { bookingServiceOptions } from "@/app/data/content";
import { generateGoogleCalendarUrl } from "@/app/lib/google-calendar";
import { Button } from "@/app/components/ui/Button";
import { StepDateTime, todayIST, formatDateDDMMYYYY, getInitialWorkingDate } from "@/app/components/booking/StepDateTime";
import { CheckCircle2, Calendar, Globe, MapPin, Send, AlertCircle, Mail } from "lucide-react";

export function ConsultationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState(getInitialWorkingDate());
  const [time, setTime] = useState("");
  const [timeLabel, setTimeLabel] = useState("");
  const [mode, setMode] = useState<"Online" | "Offline">("Online");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!firstName || !email || !phone || !service || !date || !time) {
      setErrorMessage("Please complete all required fields and select an available appointment slot.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Server-side booking guard check
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email,
          phone,
          service,
          mode,
          date,
          time: timeLabel || time,
          notes: message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setErrorMessage(
          result.error || "Cannot book appointments in the past. Please select an upcoming slot."
        );
        setIsSubmitting(false);
        return;
      }

      if (result?.booking?.id) {
        setConfirmedBookingId(result.booking.id);
      }
    } catch (err: any) {
      setErrorMessage("Could not connect to booking service. Please check your internet connection or reach out on WhatsApp (+91 98664 10936).");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    const waText = encodeURIComponent(
      `Hi Prashanthi Simon, I have submitted a consultation request on Anima Space:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMode: ${mode}\nDate: ${formatDateDDMMYYYY(date)}\nTime: ${timeLabel || time || "Flexible"}\nMessage: ${message || "N/A"}`
    );

    // Calculate appointment start date for Google Calendar
    const appointmentDate = new Date(date || Date.now());
    if (time) {
      const match = time.match(/(\d+):(\d+)\s*(AM|PM)?/i);
      if (match) {
        let hours = parseInt(match[1], 10);
        const minutes = parseInt(match[2], 10);
        const meridiem = match[3]?.toUpperCase();
        if (meridiem === "PM" && hours < 12) hours += 12;
        if (meridiem === "AM" && hours === 12) hours = 0;
        appointmentDate.setHours(hours, minutes, 0, 0);
      }
    }

    const gcalUrl = generateGoogleCalendarUrl({
      title: `${service} Consultation — Anima Space`,
      description: `Consultation with Prashanthi Simon for ${firstName} ${lastName}.\nService: ${service}\nMode: ${mode}\nPhone: ${phone}`,
      startDate: isNaN(appointmentDate.getTime()) ? new Date() : appointmentDate,
      durationMinutes: 60,
      attendeeEmail: email,
      attendeeName: `${firstName} ${lastName}`,
      isOnline: mode === "Online",
      location: mode === "Online" ? "Google Meet Video Call" : "Anima Space, Hyderabad (By Appointment)",
    });

    return (
      <div className="bg-white rounded-[2.5rem] border-4 border-[var(--color-brand-navy)] p-8 sm:p-12 shadow-[8px_8px_0px_0px_var(--color-brand-navy)] max-w-2xl mx-auto text-center animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border-2 border-emerald-600 flex items-center justify-center text-3xl mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
        </div>
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
          Consultation Request Confirmed
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-brand-navy)] mb-3">
          Thank you, {firstName}!
        </h3>
        <p className="text-base text-[var(--color-brand-espresso)] leading-relaxed mb-4">
          Your consultation for <strong className="text-[var(--color-brand-navy)]">{service}</strong> ({mode}) has been confirmed.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-300 text-xs sm:text-sm font-semibold text-emerald-800 mb-6">
          <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>A confirmation email with calendar invite has been sent to <strong>{email}</strong></span>
        </div>

        {/* Session Summary Card */}
        <div className="p-6 bg-[var(--color-brand-off-white)] rounded-2xl border-2 border-[var(--color-brand-navy)] text-left text-sm text-[var(--color-brand-navy)] mb-6 shadow-xs flex flex-col gap-3">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-mauve)]">
              Customer Booking Receipt
            </span>
            {confirmedBookingId && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-semibold">
                ID: {confirmedBookingId}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div>
              <span className="text-gray-500 block text-[11px] uppercase font-bold">Client Name</span>
              <span className="font-bold text-[var(--color-brand-navy)]">{firstName} {lastName}</span>
            </div>
            <div>
              <span className="text-gray-500 block text-[11px] uppercase font-bold">Contact</span>
              <span className="font-semibold text-[var(--color-brand-navy)]">{phone} &bull; {email}</span>
            </div>
            <div>
              <span className="text-gray-500 block text-[11px] uppercase font-bold">Service Booked</span>
              <span className="font-bold text-[var(--color-brand-navy)]">{service}</span>
            </div>
            <div>
              <span className="text-gray-500 block text-[11px] uppercase font-bold">Consultation Mode</span>
              <span className="font-semibold text-[var(--color-brand-navy)]">
                {mode === "Online" ? "🌐 Online (Google Meet Video Room)" : "📍 In-Person (Hyderabad Clinic)"}
              </span>
            </div>
            <div className="sm:col-span-2">
              <span className="text-gray-500 block text-[11px] uppercase font-bold">Appointment Schedule (IST)</span>
              <span className="font-bold text-base text-[var(--color-brand-navy)]">
                🗓️ {formatDateDDMMYYYY(date)} at 🕒 {timeLabel || time} (Indian Standard Time)
              </span>
            </div>
            {message && (
              <div className="sm:col-span-2 p-3 bg-white rounded-xl border border-gray-200 text-xs">
                <span className="text-gray-500 block text-[10px] uppercase font-bold mb-1">Client Notes / Concerns</span>
                <p className="text-gray-800 italic">&ldquo;{message}&rdquo;</p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons: Google Calendar & WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {/* Google Calendar Link */}
          <a
            href={gcalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-brand-navy)] text-white font-bold text-xs sm:text-sm hover:bg-[var(--color-brand-mauve)] transition-all shadow-xs"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Add to Google Calendar</span>
          </a>

          {/* WhatsApp Confirmation */}
          <a
            href={`https://wa.me/919866410936?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#60D66A] text-black font-bold text-xs sm:text-sm border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#52c45b] transition-all"
          >
            <span>💬 Confirm on WhatsApp</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setService("");
            setDate(todayIST());
            setTime("");
            setTimeLabel("");
            setMessage("");
            setErrorMessage("");
            setConfirmedBookingId("");
          }}
          className="text-xs font-bold text-[var(--color-brand-mauve)] underline hover:text-[var(--color-brand-navy)]"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[2.5rem] border-4 border-[var(--color-brand-navy)] p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_0px_var(--color-brand-navy)] flex flex-col gap-6"
    >
      {/* Mode Switcher */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]">
          Mode *
        </label>
        <div className="grid grid-cols-2 gap-3 p-1.5 rounded-2xl bg-[var(--color-brand-off-white)] border-2 border-[var(--color-brand-navy)]">
          <button
            type="button"
            onClick={() => setMode("Online")}
            className={`py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
              mode === "Online"
                ? "bg-[var(--color-brand-navy)] text-white shadow-xs"
                : "text-[var(--color-brand-navy)] hover:bg-white"
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Online (Google Meet)</span>
          </button>
          <button
            type="button"
            onClick={() => setMode("Offline")}
            className={`py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
              mode === "Offline"
                ? "bg-[var(--color-brand-navy)] text-white shadow-xs"
                : "text-[var(--color-brand-navy)] hover:bg-white"
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>In-Person (Hyderabad)</span>
          </button>
        </div>
      </div>

      {/* Service Selection */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="service">
          Service *
        </label>
        <select
          id="service"
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] bg-white text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
        >
          <option value="" disabled>Select a service...</option>
          {bookingServiceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Date & Time Selection */}
      <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
        <StepDateTime
          selectedDate={date}
          selectedTime={time}
          onSelect={(selectedDate, selectedTimeSlot, label) => {
            setDate(selectedDate);
            setTime(selectedTimeSlot);
            setTimeLabel(label);
            setErrorMessage("");
          }}
        />
      </div>

      {/* First Name & Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-gray-100">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="firstName">
            First Name *
          </label>
          <input
            id="firstName"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="phone">
            Phone / WhatsApp *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
          />
        </div>
      </div>

      {/* Your Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="message">
          Your Message (Optional)
        </label>
        <textarea
          id="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)] resize-none"
        />
      </div>

      {/* Error Message Display */}
      {errorMessage && (
        <div className="flex items-center gap-2 p-3.5 bg-rose-50 border-2 border-rose-300 rounded-xl text-rose-800 text-xs font-semibold animate-in fade-in duration-150">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting || !time}
        className="w-full justify-center py-4 text-base mt-2"
      >
        <Send className="w-5 h-5 mr-2" />
        {isSubmitting ? "Booking Session..." : "Confirm & Book Consultation"}
      </Button>
    </form>
  );
}
