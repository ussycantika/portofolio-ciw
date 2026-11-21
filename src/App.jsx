import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { FluidCanvas } from "./components/FluidCanvas";
import { GridBackground } from "./components/GridBackground";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";

export function App() {
  // Theme state: default to 'dark'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved ? saved : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative min-h-screen selection:bg-[var(--c-accent)] selection:text-white">
      {/* Dynamic Background Effects */}
      <FluidCanvas />
      <GridBackground />

      {/* Main Header Navigation */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Main Page Layout Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
