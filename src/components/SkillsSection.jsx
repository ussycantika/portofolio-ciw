import React from "react";
import {
  Code2,
  Globe,
  FileCode,
  Palette,
  Layout,
  Server,
  Terminal,
  Cpu,
  Network,
  Database,
  Cloud,
  Sparkles,
  HardDrive,
  Smartphone,
  GitBranch,
  Box,
} from "lucide-react";
import { FigmaIcon } from "./SocialIcons";
import { PORTFOLIO_DATA } from "../data/portfolioData";

// Icon mapping dictionary
const ICON_MAP = {
  Code2,
  Globe,
  FileCode,
  Palette,
  Layout,
  Server,
  Terminal,
  Cpu,
  Network,
  Database,
  Cloud,
  Sparkles,
  HardDrive,
  Smartphone,
  GitBranch,
  Box,
  Figma: FigmaIcon,
};


export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 pb-6 border-b border-[var(--c-border)]">
        <span className="text-xs uppercase tracking-[0.2em] font-mono-tech text-[var(--c-accent)] mb-2 block">
          // TECH STACK & CAPABILITIES
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--c-ink)]">
          Technical <span className="font-serif-accent italic font-normal lowercase text-[var(--c-accent)]">expertise</span>
        </h2>
      </div>

      {/* Grid Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PORTFOLIO_DATA.skills.map((categoryGroup, idx) => (
          <div
            key={idx}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-[var(--c-border)]"
          >
            <h3 className="text-sm uppercase font-mono-tech tracking-widest text-[var(--c-accent)] font-bold mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--c-accent)]" />
              {categoryGroup.category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categoryGroup.items.map((skill, itemIdx) => {
                const IconComponent = ICON_MAP[skill.icon] || Code2;
                return (
                  <div
                    key={itemIdx}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-[var(--c-border)]/60 bg-[var(--c-bg-sand)] hover:border-[var(--c-accent)] transition-all group"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--c-badge-bg)] text-[var(--c-accent)] group-hover:scale-110 transition-transform">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[var(--c-ink)]">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono-tech text-[var(--c-muted)] uppercase">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
