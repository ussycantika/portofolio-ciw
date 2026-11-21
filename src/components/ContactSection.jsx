import React, { useState } from "react";
import { Mail, Copy, Check, MessageSquare, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";
import { PORTFOLIO_DATA } from "../data/portfolioData";


export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative z-10 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Big Impact Call To Action Box */}
      <div className="glass-card p-8 sm:p-14 lg:p-20 rounded-3xl border border-[var(--c-border)] text-center relative overflow-hidden">
        <span className="text-xs uppercase tracking-[0.2em] font-mono-tech text-[var(--c-accent)] mb-4 block">
          // INITIATE COLLABORATION
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase leading-[0.95] tracking-tight text-[var(--c-ink)] font-sans">
          Let's build something <br />
          <span className="font-normal font-serif-accent italic lowercase text-[var(--c-accent)]">
            extraordinary
          </span>{" "}
          together.
        </h2>

        <p className="mt-6 text-sm sm:text-base text-[var(--c-muted)] max-w-xl mx-auto font-mono-tech">
          Have an idea, project, or full-time position? Reach out directly or copy my email address below.
        </p>

        {/* Copy Email Button & Direct Mail Link */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[var(--c-ink)] text-[var(--c-bg)] font-mono-tech text-xs uppercase tracking-widest font-bold hover:bg-[var(--c-accent)] transition-all shadow-lg group"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span>EMAIL COPIED TO CLIPBOARD!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-[var(--c-bg)] group-hover:rotate-12 transition-transform" />
                <span>COPY EMAIL ({PORTFOLIO_DATA.socials.email})</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${PORTFOLIO_DATA.socials.email}`}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-sand)] font-mono-tech text-xs uppercase tracking-widest font-bold text-[var(--c-ink)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition-all"
          >
            <Mail className="h-4 w-4" />
            <span>Open Email Client</span>
          </a>
        </div>

        {/* Social Icons Links Row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 pt-8 border-t border-[var(--c-border)] font-mono-tech text-xs">
          {[
            { label: "GitHub", href: PORTFOLIO_DATA.socials.github, icon: GithubIcon },
            { label: "LinkedIn", href: PORTFOLIO_DATA.socials.linkedin, icon: LinkedinIcon },
            { label: "Instagram", href: PORTFOLIO_DATA.socials.instagram, icon: InstagramIcon },
            { label: "WhatsApp", href: PORTFOLIO_DATA.socials.whatsapp, icon: MessageSquare },
          ].map((social) => {
            const IconComp = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-ink)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition-all"
              >
                <IconComp className="h-4 w-4" />
                <span>{social.label}</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer copyright */}
      <footer className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs uppercase tracking-widest text-[var(--c-muted)] pt-8 border-t border-[var(--c-border)]">
        <div>
          © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
        </div>
        <div>
          Crafted with care in {PORTFOLIO_DATA.personal.location}
        </div>
      </footer>
    </section>
  );
}
