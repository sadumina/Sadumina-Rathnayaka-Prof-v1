"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const APPRECIATION_STORAGE_KEY = "portfolio-appreciation";

export function PortfolioAppreciationButton() {
  const [appreciated, setAppreciated] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setAppreciated(window.localStorage.getItem(APPRECIATION_STORAGE_KEY) === "true");
    setReady(true);
  }, []);

  return (
    <div className="flex flex-col items-center gap-1.5">
      <button
        type="button"
        aria-pressed={appreciated}
        aria-label={
          appreciated
            ? "Remove your appreciation for this portfolio"
            : "Appreciate this portfolio"
        }
        title="Your appreciation is saved only in this browser"
        disabled={!ready}
        onClick={() => {
          const nextAppreciated = !appreciated;
          window.localStorage.setItem(
            APPRECIATION_STORAGE_KEY,
            String(nextAppreciated),
          );
          setAppreciated(nextAppreciated);
        }}
        className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#b5d1c5] bg-white/70 px-4 py-2 text-xs font-semibold text-[#24323a] transition hover:bg-[#c7ddd4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#527c69] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
      >
        <Star
          className={`size-4 ${
            appreciated ? "fill-[#527c69] text-[#527c69]" : "text-[#527c69]"
          }`}
          aria-hidden="true"
        />
        <span>{appreciated ? "Thank you!" : "Appreciate this portfolio"}</span>
        <span
          aria-live="polite"
          className="inline-flex min-w-7 items-center justify-center border-l border-[#b5d1c5] pl-2 font-mono text-[11px] tabular-nums text-[#527c69]"
        >
          {ready ? Number(appreciated) : "—"}
        </span>
      </button>
      <span className="text-[9px] text-[#8b9291]">
        Saved on this device · not a GitHub star
      </span>
    </div>
  );
}
