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
        {project.visual === "portal" ? (
          <>
            <div className="portal-ring"><i /><i /><i /></div>
            <div className="portal-object"><i /><i /><i /></div>
            <div className="portal-hand portal-hand--left"><i /><i /><i /><i /><i /></div>
            <div className="portal-hand portal-hand--right"><i /><i /><i /><i /><i /></div>
            <span className="portal-label">PINCH / PORTAL</span>
          </>
        ) : null}
        {project.visual === "planner" ? (
          <>
            <div className="planner-idea"><span>IDEA</span></div>
            <div className="planner-line" />
            <div className="planner-modules">
              <span>Market</span><span>Product</span><span>Architecture</span><span>Roadmap</span><span>Pitch</span>
            </div>
          </>
        ) : null}
        {project.visual === "model-dna" ? (
          <>
            <div className="model-source"><i /><i /><i /></div>
            <div className="model-layers">
              <i /><i /><i /><i />
            </div>
            <div className="model-heatmap"><i /><i /><i /></div>
            <span className="model-confidence">CONF / 0.92</span>
          </>
        ) : null}
        {project.visual === "sign" ? (
          <>
            <div className="sign-frame"><span>ASL / LIVE</span></div>
            <div className="sign-hand"><i /><i /><i /><i /><i /><b /><b /><b /></div>
            <div className="sign-label"><span>CLASS</span><strong>A</strong></div>
          </>
        ) : null}
        {project.visual === "medsafe" ? (
          <>
            <div className="medicine-list"><span>MED / 01</span><span>MED / 02</span><span>MED / 03</span></div>
            <div className="medicine-sources"><i>Rx</i><i>FDA</i></div>
            <div className="evidence-stack"><span>Source</span><span>Warning</span><span>Review</span></div>
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
        <span>{project.focus}</span>
        {active ? (
          <a
            href={project.links[0].href}
            target={project.links[0].external ? "_blank" : undefined}
            rel={project.links[0].external ? "noreferrer" : undefined}
            aria-label={`${project.links[0].label}: ${project.title}`}
          >
            {project.links[0].label}
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        ) : (
          <span>Select to open</span>
        )}
      </div>
    </article>
  );
}
