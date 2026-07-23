"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/Button";

interface CalendsoEmbedProps {
  initialLink?: string;
}

export function CalendsoEmbed({ initialLink = "" }: CalendsoEmbedProps) {
  const [customUrl, setCustomUrl] = useState(initialLink);
  const [activeUrl, setActiveUrl] = useState(initialLink);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveUrl(customUrl);
  };

  const loadDemo = (url: string) => {
    setCustomUrl(url);
    setActiveUrl(url);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-[2rem] border-3 border-[var(--color-brand-navy)] shadow-[8px_8px_0px_0px_var(--color-brand-navy)] overflow-hidden">
      {/* Top Banner */}
      <div className="bg-[var(--color-brand-navy)] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">
            External Integration
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-bold mt-1">
            Cal.com / Calendso Embed
          </h3>
        </div>

        <form onSubmit={handleUpdate} className="flex items-center gap-2 w-full sm:w-auto">
          <input
            type="url"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            placeholder="https://cal.com/your-live-username"
            className="px-3.5 py-2.5 rounded-xl text-xs text-[var(--color-brand-navy)] border-2 border-white font-medium bg-white focus:outline-none w-full sm:w-72"
          />
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-[var(--color-brand-mauve)] text-white text-xs font-bold border border-white hover:bg-[var(--color-brand-pink)] hover:text-[var(--color-brand-navy)] transition-colors whitespace-nowrap"
          >
            Load Link
          </button>
        </form>
      </div>

      {/* Embed Container */}
      <div className="p-4 sm:p-6 bg-[var(--color-brand-off-white)]">
        {activeUrl ? (
          <div className="w-full h-[650px] rounded-2xl border-2 border-[var(--color-brand-navy)] bg-white overflow-hidden relative shadow-[4px_4px_0px_0px_var(--color-brand-navy)]">
            <iframe
              src={activeUrl}
              title="Calendso Cal.com Scheduler"
              className="w-full h-full border-none"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-full min-h-[450px] rounded-2xl border-3 border-dashed border-[var(--color-brand-navy)]/30 bg-white p-8 flex flex-col items-center justify-center text-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[var(--color-brand-sky)]/40 border-2 border-[var(--color-brand-navy)] flex items-center justify-center text-3xl">
              🔗
            </div>

            <div className="max-w-md">
              <h4 className="font-heading text-xl font-bold text-[var(--color-brand-navy)] mb-2">
                Connect Your Live Cal.com Account
              </h4>
              <p className="text-xs sm:text-sm text-[var(--color-brand-espresso)] leading-relaxed">
                This tab embeds an external Cal.com or self-hosted Calendso instance. Enter your registered Cal.com scheduling link above to load your live calendar widget.
              </p>
            </div>

            {/* Quick Demo Previews */}
            <div className="w-full max-w-lg p-5 bg-[var(--color-brand-off-white)] rounded-2xl border-2 border-[var(--color-brand-navy)] text-left flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-mauve)]">
                Try a Live Cal.com Demo Link:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => loadDemo("https://cal.com/peer")}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[var(--color-brand-navy)] text-xs font-bold hover:bg-[var(--color-brand-sky)] transition-colors"
                >
                  🔗 cal.com/peer
                </button>
                <button
                  type="button"
                  onClick={() => loadDemo("https://cal.com/rick")}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[var(--color-brand-navy)] text-xs font-bold hover:bg-[var(--color-brand-sky)] transition-colors"
                >
                  🔗 cal.com/rick
                </button>
              </div>
            </div>

            <div className="text-xs text-[var(--color-brand-espresso)] opacity-80">
              💡 <strong>Note:</strong> You can also use our built-in <strong>&ldquo;Google &amp; Clinic Slot Scheduler&rdquo;</strong> tab (top left), which is fully active and ready without requiring external registration!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
