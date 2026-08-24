"use client";

import React, { useState } from "react";
import { bookingServiceOptions } from "@/app/data/content";
import { generateGoogleCalendarUrl } from "@/app/lib/google-calendar";
import { Button } from "@/app/components/ui/Button";
import { CheckCircle2, Calendar, Globe, MapPin, Send } from "lucide-react";

export function ConsultationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [mode, setMode] = useState<"Online" | "Offline">("Online");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email || !phone || !service || !date) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    const waText = encodeURIComponent(
      `Hi Prashanthi Simon, I have submitted a consultation request on Anima Space:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMode: ${mode}\nDate: ${date}\nTime: ${time || "Flexible"}\nMessage: ${message || "N/A"}`
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
      durationMinutes: 50,
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
          Consultation Request Received
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-brand-navy)] mb-4">
          Thank you, {firstName}!
        </h3>
        <p className="text-base text-[var(--color-brand-espresso)] leading-relaxed mb-6">
          Your consultation request for <strong className="text-[var(--color-brand-navy)]">{service}</strong> ({mode}) has been recorded. Prashanthi Simon will connect with you to confirm your session.
        </p>

        {/* Session Summary Card */}
        <div className="p-5 bg-[var(--color-brand-sky)]/30 rounded-2xl border-2 border-[var(--color-brand-navy)]/30 text-left text-sm text-[var(--color-brand-navy)] mb-6 flex flex-col gap-2">
          <p><strong>Name:</strong> {firstName} {lastName}</p>
          <p><strong>Service:</strong> {service}</p>
          <p><strong>Mode:</strong> {mode === "Online" ? "Online Consultation (Google Meet)" : "In-Person Consultation (Hyderabad)"}</p>
          <p><strong>Preferred Date:</strong> {date} {time ? `at ${time}` : ""}</p>
          <p><strong>Contact:</strong> {phone} &bull; {email}</p>
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
            setDate("");
            setTime("");
            setMessage("");
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
      <div className="border-b border-gray-100 pb-4">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-brand-navy)] mb-1">
          Book Your Consultation
        </h3>
        <p className="text-xs sm:text-sm text-[var(--color-brand-espresso)]/80">
          Fill the form below &bull; Talk to our experts
        </p>
      </div>

      {/* Mode Switcher */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]">
          8. Mode *
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

      {/* 1. First Name & 2. Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="firstName">
            1. First name *
          </label>
          <input
            id="firstName"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Jane"
            className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="lastName">
            2. Last name
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Smith"
            className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
          />
        </div>
      </div>

      {/* 3. Email & 4. Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="email">
            3. Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@example.com"
            className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="phone">
            4. Phone *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98664 10936"
            className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
          />
        </div>
      </div>

      {/* 5. Service */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="service">
          5. Service *
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

      {/* 6. Date & 7. Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="date">
            6. Date (mm/dd/yyyy) *
          </label>
          <div className="relative">
            <input
              id="date"
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="time">
            7. Time
          </label>
          <div className="relative">
            <input
              id="time"
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="e.g. 10:30 AM or Flexible"
              className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
            />
          </div>
        </div>
      </div>

      {/* 9. Your Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="message">
          9. Your message
        </label>
        <textarea
          id="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Briefly describe what you'd like to explore or any questions you have..."
          className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)] resize-none"
        />
      </div>

      {/* 10. Submit Button */}
      <Button type="submit" variant="primary" className="w-full justify-center py-4 text-base mt-2">
        <Send className="w-5 h-5 mr-2" />
        10. Submit Consultation Request
      </Button>
    </form>
  );
}
