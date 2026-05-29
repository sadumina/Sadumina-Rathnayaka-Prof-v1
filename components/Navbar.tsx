"use client";

import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-white/10 bg-black/[0.55] shadow-panel backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="container-pad flex h-20 items-center justify-between">
        <a href="#home" className="font-display text-sm font-semibold uppercase tracking-[0.32em] text-white">
          SR
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.22em] text-white/[0.62] transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-purple-300/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:border-purple-200 hover:bg-purple-400/10 lg:inline-flex"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] text-white lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        className={cn(
          "container-pad grid overflow-hidden transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <div className="glass-line flex flex-col gap-1 rounded-2xl p-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white/[0.72] transition hover:bg-white/[0.08] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
