"use client";

import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const compactLinks = navLinks.filter((link) =>
    ["#about", "#projects", "#contact"].includes(link.href),
  );

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
        scrolled
          ? "border-b border-black/10 bg-[#fcfaf6]/95 shadow-[0_8px_24px_rgba(36,50,58,0.06)] backdrop-blur-md"
          : "bg-[#fcfaf6]/80 backdrop-blur-sm",
      )}
    >
      <nav className="container-pad flex h-[72px] items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="group flex items-center gap-3" aria-label="Sadumina Rathnayaka home">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#17212b] font-display text-[11px] font-bold tracking-[-0.08em] text-[#17212b] transition group-hover:bg-[#17212b] group-hover:text-white">
            SR
          </span>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65707a] sm:block">
            Sadumina Rathnayaka
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {compactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65707a] transition hover:text-[#17212b]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.lknexstudio.tech/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 border-l border-black/10 pl-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65707a] transition hover:text-[#17212b]"
          >
            LKNEX <ArrowUpRight size={12} />
          </a>
        </div>

        <a
          href="#contact"
          className="hidden bg-[#c7ddd4] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#24323a] transition hover:bg-[#b5d1c5] lg:inline-flex"
        >
          Contact
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center gap-2 border-b border-[#17212b]/40 pb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#17212b] lg:hidden"
        >
          {open ? "Close" : "Menu"}
          {open ? <X size={14} /> : null}
        </button>
      </nav>

      <div
        className={cn(
          "container-pad grid overflow-hidden transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <div className="border border-black/10 bg-[#fcfaf6] p-3 shadow-[0_12px_30px_rgba(36,50,58,0.08)]">
            {compactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/10 px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#65707a] transition hover:text-[#17212b]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.lknexstudio.tech/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#17212b]"
            >
              LKNEX Studio <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
