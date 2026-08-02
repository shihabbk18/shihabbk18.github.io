"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";
import { easeOut, projectSpring } from "@/lib/animations";

export function ProjectDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();
  const activeProject = projects[activeIndex];

  useEffect(() => {
    const media = window.matchMedia("(max-width: 720px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  const previous = useCallback(() => {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % projects.length);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  };

  const getCardState = (index: number) => {
    const position = (index - activeIndex + projects.length) % projects.length;
    const desktop = [
      { x: 0, y: -5, rotate: 0, scale: 1, opacity: 1 },
      { x: 34, y: 38, rotate: 2.2, scale: 0.96, opacity: 0.82 },
      { x: -27, y: 75, rotate: -2.1, scale: 0.92, opacity: 0.62 },
    ];
    const mobile = [
      { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 },
      { x: 14, y: 27, rotate: 0.8, scale: 0.975, opacity: 0.8 },
      { x: -10, y: 53, rotate: -0.8, scale: 0.95, opacity: 0.58 },
    ];
    return {
      ...(isMobile ? mobile[position] : desktop[position]),
      zIndex: projects.length - position,
    };
  };

  return (
    <section className="work section-shell" id="work" aria-labelledby="work-heading">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Featured projects"
          title="Selected work, stacked by intent."
          description="Choose a card to bring it forward. The deck preserves context while the active project’s evidence comes into focus."
        />
        <h3 id="work-heading" className="sr-only">Featured project deck</h3>

        <div className="project-showcase">
          <div>
            <div
              className="project-deck"
              role="region"
              aria-label="Featured projects"
              tabIndex={0}
              onKeyDown={handleKeyDown}
            >
              {projects.map((project, index) => {
                const position = (index - activeIndex + projects.length) % projects.length;
                const active = position === 0;
                return (
                  <motion.div
                    className="project-deck__item"
                    key={project.id}
                    animate={getCardState(index)}
                    transition={reduceMotion ? { duration: 0 } : projectSpring}
                    aria-hidden={false}
                  >
                    <ProjectCard
                      project={project}
                      active={active}
                      onActivate={() => setActiveIndex(index)}
                    />
                  </motion.div>
                );
              })}
            </div>

            <div className="project-controls">
              <span aria-live="polite">
                {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <div>
                <button type="button" onClick={previous} aria-label="Show previous project">
                  <ArrowLeft aria-hidden="true" />
                </button>
                <button type="button" onClick={next} aria-label="Show next project">
                  <ArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div className="project-details" aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.id}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, ease: easeOut }}
              >
                <div className="project-details__title">
                  <span>Active study / {activeProject.number}</span>
                  <h3>{activeProject.title}</h3>
                </div>

                <dl>
                  <div>
                    <dt>Problem</dt>
                    <dd>{activeProject.problem}</dd>
                  </div>
                  <div>
                    <dt>Approach</dt>
                    <dd>{activeProject.approach}</dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>{activeProject.outcome}</dd>
                  </div>
                </dl>

                <div className="project-details__tech">
                  <span>Technologies</span>
                  <div>
                    {activeProject.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <ul className="project-details__facts" aria-label="Key features and facts">
                  {activeProject.keyFacts.map((fact) => <li key={fact}>{fact}</li>)}
                </ul>

                {activeProject.link ? (
                  <a
                    className="text-link"
                    href={activeProject.link.href}
                    target={activeProject.link.external ? "_blank" : undefined}
                    rel={activeProject.link.external ? "noreferrer" : undefined}
                  >
                    {activeProject.link.label}
                    <ArrowUpRight aria-hidden="true" size={17} />
                  </a>
                ) : (
                  <p className="project-details__unavailable">No public link is available for this project.</p>
                )}
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
