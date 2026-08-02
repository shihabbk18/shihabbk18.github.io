"use client";

import { ArrowDownRight } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { focusAreas } from "@/data/portfolio";

export function FocusAreas() {
  const [active, setActive] = useState(0);

  return (
    <section className="focus section-shell" aria-labelledby="focus-heading">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="Focus areas"
          title="Four directions, one purpose."
          description="A connected practice across perception, interpretation, context, and application."
        />
        <h3 id="focus-heading" className="sr-only">Research focus areas</h3>

        <div className="focus__list">
          {focusAreas.map((area, index) => (
            <button
              key={area.title}
              className={`focus-row ${active === index ? "focus-row--active" : ""}`}
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              aria-expanded={active === index}
            >
              <span className="focus-row__index">{area.index}</span>
              <span className="focus-row__verb">{area.short}</span>
              <strong>{area.title}</strong>
              <span className="focus-row__description">{area.description}</span>
              <ArrowDownRight aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
