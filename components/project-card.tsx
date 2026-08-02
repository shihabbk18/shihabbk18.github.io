import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  active: boolean;
  onActivate: () => void;
};

export function ProjectCard({ project, active, onActivate }: ProjectCardProps) {
  return (
    <article className={`project-card project-card--${project.visual}`}>
      {!active ? (
        <button
          className="project-card__activate"
          type="button"
          onClick={onActivate}
          aria-label={`Bring ${project.title} to front`}
        />
      ) : null}

      <div className="project-card__topline">
        <span>{project.number} / Featured project</span>
        <span>{project.category}</span>
      </div>

      <div className="project-card__visual" aria-hidden="true">
        {project.visual === "gesture" ? (
          <>
            <div className="gesture-hand"><i /><i /><i /><i /><i /></div>
            <div className="vision-box"><span>LIVE</span></div>
          </>
        ) : null}
        {project.visual === "mango" ? (
          <>
            <div className="mango-shape" />
            <div className="heat-map"><i /><i /><i /></div>
            <span className="visual-coordinate">CAM / 06</span>
          </>
        ) : null}
        {project.visual === "flags" ? (
          <>
            <div className="flag-grid">
              <i /><i /><i /><i /><i /><i />
            </div>
            <span className="visual-score">08 / 10</span>
          </>
        ) : null}
      </div>

      <div className="project-card__body">
        <div>
          <p className="project-card__category">{project.category}</p>
          <h3>{project.title}</h3>
        </div>
        <div className="project-card__summary">
          <p className="project-card__description">{project.description}</p>
          <div className="project-card__tags" aria-label="Technologies">
            {project.technologies.slice(0, 3).map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
            {project.technologies.length > 3 ? <span>+{project.technologies.length - 3}</span> : null}
          </div>
          <p className="project-card__result"><span>Result</span>{project.keyResult}</p>
        </div>
      </div>

      <div className="project-card__footer">
        <span>{project.contribution}</span>
        {active && project.link ? (
          <a
            href={project.link.href}
            target={project.link.external ? "_blank" : undefined}
            rel={project.link.external ? "noreferrer" : undefined}
            aria-label={`${project.link.label}: ${project.title}`}
          >
            {project.link.label}
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        ) : (
          <span>{project.link ? "Select to open" : "No public link"}</span>
        )}
      </div>
    </article>
  );
}
