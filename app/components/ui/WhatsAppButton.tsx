"use client";

import React from "react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919866410936?text=Hi%20Prashanthi%20Simon,%20I%20would%20like%20to%20inquire%20about%20a%20child%20psychology%20session."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Prashanthi Simon on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)] group cursor-pointer"
    >
      <img
        src="/whatsapp-icon.svg"
        alt="WhatsApp"
        className="w-full h-full object-contain group-hover:rotate-6 transition-transform"
      />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
};
