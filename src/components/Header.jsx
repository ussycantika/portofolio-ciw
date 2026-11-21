import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export function Header({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--c-bg)]/85 backdrop-blur-md border-b border-[var(--c-border)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12 font-mono-tech text-xs uppercase tracking-[0.15em] text-[var(--c-muted)]">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 font-bold text-[var(--c-ink)] hover-accent transition-colors"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-[var(--c-ink)] text-[var(--c-bg)] font-sans text-xs font-black tracking-tighter transition-transform group-hover:scale-105">
            AF
          </span>
          <span className="tracking-widest">
            {PORTFOLIO_DATA.personal.name.toUpperCase().replace(/\s+/g, "")}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover-accent transition-colors hover:text-[var(--c-accent)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PORTFOLIO_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover-accent text-[var(--c-ink)] font-semibold"
          >
            GitHub <ArrowUpRight className="h-3 w-3" />
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="relative flex h-9 w-9 items-center justify-center rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-ink)] hover:border-[var(--c-border-hover)] hover:text-[var(--c-accent)] transition-all duration-200"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="h-4 w-4 text-sky-600 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--c-border)] text-[var(--c-ink)] md:hidden"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[var(--c-border)] bg-[var(--c-bg)] px-6 py-6 font-mono-tech text-xs uppercase tracking-widest md:hidden animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-[var(--c-ink)] hover:text-[var(--c-accent)] transition-colors border-b border-[var(--c-border)]/50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 flex items-center justify-between text-[var(--c-accent)] font-semibold"
            >
              <span>GitHub Repository</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
