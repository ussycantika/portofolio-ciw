import React from "react";
import { ArrowDown } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export function HeroSection() {
  return (
    <section className="relative flex flex-col pt-24 pb-6 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto z-10 overflow-hidden select-none">
      
      {/* Top Editorial Metadata Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[var(--c-border)] pb-4 text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[var(--c-muted)]">
        {/* Left Role */}
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--c-accent)] animate-ping" />
          <span className="font-semibold text-[var(--c-ink)]">
            {PORTFOLIO_DATA.personal.title || "FULL-STACK DEVELOPER & AI EXPLORER"}
          </span>
        </div>

        {/* Right Categories */}
        <div className="hidden md:flex items-center gap-6 text-[10px] tracking-[0.2em] text-[var(--c-muted)]">
          <span>FULL-STACK</span>
          <span>•</span>
          <span>RAG AI</span>
          <span>•</span>
          <span>MOBILE</span>
          <span>•</span>
          <span>UI/UX DESIGN</span>
        </div>
      </div>

      {/* Main Hero Visual Area */}
      <div className="relative flex flex-col justify-end items-center mt-8 mb-4">

        {/* Massive Background Typography "PORTOFOLIO" */}
        <div className="w-full text-center leading-none pointer-events-none select-none z-0">
          <h1 className="font-bebas-hero text-[21vw] sm:text-[19vw] lg:text-[16vw] font-black uppercase tracking-normal text-[var(--c-accent)] opacity-90 drop-shadow-md leading-none transform scale-y-110">
            PORTOFOLIO
          </h1>
        </div>

      </div>

      {/* Bottom Footer Bar (Aligned Tight Immediately Below) */}
      <div className="flex items-center justify-between border-t border-[var(--c-border)] pt-4 text-[11px] font-mono-tech uppercase tracking-widest text-[var(--c-muted)] mt-2">
        <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
        <a
          href="#work"
          className="hover-accent flex items-center gap-1.5 transition-colors hover:text-[var(--c-accent)]"
        >
          <span>EXPLORE WORK</span>
          <ArrowDown className="h-3 w-3 animate-bounce" />
        </a>
      </div>

    </section>
  );
}
