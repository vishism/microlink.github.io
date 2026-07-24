"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { nav } from "@/data/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-slate-200/80 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-xl flex h-[4.75rem] items-center justify-between">
        <a href="#top" className="group">
          <Logo
            size={42}
            showWordmark
            priority
            wordmarkClassName="text-[1.08rem] transition group-hover:tracking-[-0.05em]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary !min-h-11 !px-5 !text-sm">
            Let&apos;s talk
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-[var(--ink)] shadow-sm lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "translate-y-[4px] rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-5 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-lg font-medium text-slate-800"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary mt-3"
              onClick={() => setOpen(false)}
            >
              Let&apos;s talk
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
