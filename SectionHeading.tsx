type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  englishTitle?: string;
  englishDescription?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  englishTitle,
  englishDescription
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brick">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">{title}</h2>
      {englishTitle ? (
        <p className="mt-2 text-xl font-semibold leading-snug text-ink/62 sm:text-2xl">{englishTitle}</p>
      ) : null}
      {description ? <p className="mt-4 text-base leading-7 text-steel">{description}</p> : null}
      {englishDescription ? <p className="mt-2 text-sm leading-6 text-steel/78">{englishDescription}</p> : null}
    </div>
  );
}
