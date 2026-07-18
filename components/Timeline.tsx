import { SiteContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

type TimelineProps = {
  content: SiteContent["timeline"];
};

export function Timeline({ content }: TimelineProps) {
  return (
    <section id="history" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="mt-10 grid gap-px bg-iron/10 sm:grid-cols-2 lg:grid-cols-3">
          {content.events.map(([year, text], index) => (
            <article key={year} className="group bg-paper p-6 transition hover:bg-white hover:shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brick">{year}</p>
                <span className="text-xs font-semibold text-iron/28">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-5 text-base font-semibold leading-7 text-ink">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
