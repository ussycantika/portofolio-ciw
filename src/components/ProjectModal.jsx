import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";


export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content Box */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg)] shadow-2xl p-6 sm:p-8 lg:p-10">
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[var(--c-accent)] font-semibold">
              {project.categoryLabel} — CASE STUDY {project.number}
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-[var(--c-ink)] tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-mono-tech text-[var(--c-muted)] mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study Modal"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--c-border)] bg-[var(--c-bg-sand)] text-[var(--c-ink)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition-all"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-sand)] mb-8">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Problem vs Solution Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="glass-card p-6 rounded-xl border border-red-500/20 bg-red-500/5">
            <h3 className="text-xs uppercase font-mono-tech tracking-wider text-red-500 font-bold mb-2">
              // The Challenge / Problem
            </h3>
            <p className="text-sm leading-relaxed text-[var(--c-ink)]">
              {project.details.problem}
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
            <h3 className="text-xs uppercase font-mono-tech tracking-wider text-emerald-500 font-bold mb-2">
              // Engineered Solution
            </h3>
            <p className="text-sm leading-relaxed text-[var(--c-ink)]">
              {project.details.solution}
            </p>
          </div>
        </div>

        {/* Key Technical Highlights */}
        <div className="mb-8">
          <h3 className="text-xs uppercase font-mono-tech tracking-widest text-[var(--c-muted)] font-bold mb-4">
            Key Architectural Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.details.highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-sand)] text-xs text-[var(--c-ink)]"
              >
                <CheckCircle2 className="h-4 w-4 text-[var(--c-accent)] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-8">
          <h3 className="text-xs uppercase font-mono-tech tracking-widest text-[var(--c-muted)] font-bold mb-3">
            Technologies & Libraries Used
          </h3>
          <div className="flex flex-wrap gap-2 font-mono-tech text-xs">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md border border-[var(--c-border)] bg-[var(--c-bg-sand)] text-[var(--c-ink)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="flex flex-wrap items-center justify-end gap-4 pt-6 border-t border-[var(--c-border)] font-mono-tech text-xs">
          {project.details.githubUrl && (
            <a
              href={project.details.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--c-border)] text-[var(--c-ink)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition-all font-semibold"
            >
              <GithubIcon className="h-4 w-4" /> View Source Code
            </a>
          )}
          {project.details.liveUrl && (
            <a
              href={project.details.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--c-ink)] text-[var(--c-bg)] hover:bg-[var(--c-accent)] transition-all font-bold"
            >
              <span>Live Application</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
