"use client";

import React, { useState } from "react";
import { Button } from "@/app/components/ui/Button";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("counselling");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl border-2 border-[var(--color-brand-navy)] text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading text-xl font-bold text-[var(--color-brand-navy)] mb-2">
          Thank you, {name}!
        </h3>
        <p className="text-sm text-[var(--color-brand-espresso)] leading-relaxed mb-6">
          Your message has been sent to Prashanthi Simon. We will respond to you shortly via phone or email.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
          }}
          className="text-xs font-bold text-[var(--color-brand-mauve)] underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="contactName">
            Your Name *
          </label>
          <input
            id="contactName"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="contactPhone">
            Phone Number *
          </label>
          <input
            id="contactPhone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="contactEmail">
          Email Address *
        </label>
        <input
          id="contactEmail"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="contactSubject">
          Area of Interest
        </label>
        <select
          id="contactSubject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] bg-white text-sm focus:outline-none focus:border-[var(--color-brand-mauve)]"
        >
          <option value="counselling">Psychological Counselling</option>
          <option value="coaching">Coaching</option>
          <option value="healing">Healing</option>
          <option value="career">Career Counselling</option>
          <option value="training">Training Programmes</option>
          <option value="other">General Inquiry</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]" htmlFor="contactMsg">
          Your Message *
        </label>
        <textarea
          id="contactMsg"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-4 py-3 rounded-xl border-2 border-[var(--color-brand-navy)] text-sm focus:outline-none focus:border-[var(--color-brand-mauve)] resize-none"
        />
      </div>

      <Button type="submit" variant="primary" className="w-full justify-center py-3.5 mt-2">
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </Button>
    </form>
  );
}
