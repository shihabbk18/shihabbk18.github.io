import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="section-heading">
      <div className="section-heading__marker">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading__copy">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </Reveal>
  );
}
