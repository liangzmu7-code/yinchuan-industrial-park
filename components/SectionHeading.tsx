type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, description, tone = "light" }: SectionHeadingProps) {
  const titleClass = tone === "dark" ? "text-white" : "text-ink";
  const descriptionClass = tone === "dark" ? "text-white/62" : "text-steel";

  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brick">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-semibold leading-tight sm:text-4xl ${titleClass}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-7 ${descriptionClass}`}>{description}</p> : null}
    </div>
  );
}
