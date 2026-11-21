import React, { useState } from "react";
import { ArrowUpRight, Eye } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { ProjectModal } from "./ProjectModal";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter(
          (p) => p.category === activeCategory
        );

  return (
    <section id="work" className="relative z-10 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[var(--c-border)]">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-mono-tech text-[var(--c-accent)] mb-2 block">
            // SELECTED WORK ({PORTFOLIO_DATA.projects.length})
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--c-ink)]">
            Featured <span className="font-serif-accent italic font-normal lowercase text-[var(--c-accent)]">projects</span>
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 font-mono-tech text-xs">
          {PORTFOLIO_DATA.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-md transition-all border ${
                activeCategory === cat.id
                  ? "border-[var(--c-accent)] bg-[var(--c-accent)] text-white font-bold shadow-md"
                  : "border-[var(--c-border)] bg-[var(--c-bg-sand)] text-[var(--c-muted)] hover:border-[var(--c-border-hover)] hover:text-[var(--c-ink)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid List */}
      <div className="flex flex-col gap-20">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border-b border-[var(--c-border)]/60 pb-16"
          >
            {/* Left Content Column */}
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-3 font-mono-tech text-xs text-[var(--c-muted)] mb-3">
                <span className="font-bold text-[var(--c-ink)]">{project.number}</span>
                <span>/</span>
                <span className="uppercase text-[var(--c-accent)] font-semibold">
                  {project.categoryLabel}
                </span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--c-ink)]">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="hover-accent text-left leading-tight group-hover:text-[var(--c-accent)] transition-colors"
                >
                  {project.title}
                </button>
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[var(--c-muted)] max-w-prose">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="mt-6 flex flex-wrap gap-2 font-mono-tech text-[11px] uppercase">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded border border-[var(--c-border)] text-[var(--c-muted)] bg-[var(--c-bg-sand)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="hover-accent mt-8 inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-widest text-[var(--c-ink)] font-bold hover:text-[var(--c-accent)] group/btn"
              >
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </button>
            </div>

            {/* Right Image Showcase Column */}
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <div
                onClick={() => setSelectedProject(project)}
                className="relative aspect-video lg:aspect-[4/3] overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-sand)] cursor-pointer group/img"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                />

                {/* Hover Glass Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--c-accent)] text-white shadow-lg mb-3 transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-300">
                    <Eye className="h-6 w-6" />
                  </div>
                  <span className="font-mono-tech text-xs uppercase tracking-widest font-bold">
                    View Interactive Case Study
                  </span>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {project.techIcons.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] font-mono-tech uppercase bg-white/20 backdrop-blur-md rounded border border-white/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
