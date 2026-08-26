"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "blog_newsletter" }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Could not subscribe. Please try again.");
      } else {
        setStatus("success");
        setEmail("");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-2 p-4 bg-emerald-50 border-2 border-emerald-500 rounded-2xl text-emerald-900 animate-in fade-in zoom-in-95 duration-200">
        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
        <p className="text-xs sm:text-sm font-bold">
          Thank you for subscribing! Your email has been saved.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          placeholder="Your email address"
          className="flex-grow px-4 py-3 rounded-full border-2 border-[var(--color-brand-navy)] bg-[var(--color-brand-off-white)] focus:outline-none focus:border-[var(--color-brand-mauve)] text-sm font-medium text-[var(--color-brand-navy)] placeholder-[var(--color-brand-espresso)]/60 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 rounded-full bg-[var(--color-brand-navy)] text-white font-bold hover:bg-[var(--color-brand-mauve)] transition-colors text-sm shadow-sm flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer disabled:opacity-50"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Saving...</span>
            </>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              <span>Notify me</span>
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-rose-600 font-semibold mt-1 text-center">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
