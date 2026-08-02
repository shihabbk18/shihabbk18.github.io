import { MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <section className="about section-shell" id="about" aria-labelledby="about-heading">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Research shaped by useful questions."
          description="I’m most interested in systems whose decisions can be understood, tested, and used in the world beyond a lab."
        />

        <div className="about__layout">
          <Reveal className="about__copy">
            <h3 id="about-heading" className="sr-only">About Shihab Bin Kader</h3>
            <p>{about.copy}</p>
          </Reveal>

          <Reveal className="about__signal" delay={0.08} aria-hidden="true">
            <div><span>01</span><i /></div>
            <div><span>02</span><i /></div>
            <div><span>03</span><i /></div>
            <strong>Observe / Interpret / Apply</strong>
          </Reveal>
        </div>

        <div className="about__facts">
          {about.facts.map((fact, index) => (
            <Reveal key={fact} className="about__fact" delay={index * 0.06}>
              <span>0{index + 1}</span>
              <p>{fact}</p>
              {index === 0 ? <MapPin aria-hidden="true" size={16} /> : <i aria-hidden="true" />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
