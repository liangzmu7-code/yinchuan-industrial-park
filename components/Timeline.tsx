import { SiteContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

type TimelineProps = {
  content: SiteContent["timeline"];
};

export function Timeline({ content }: TimelineProps) {
  return (
    <section id="history" className="bg-paper px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="mt-10 border-l-2 border-brick/35">
          {content.events.map(([year, text]) => (
            <div key={year} className="relative pb-9 pl-7 last:pb-0">
              <span className="absolute -left-[9px] top-1 h-4 w-4 bg-brick ring-4 ring-paper" />
              <p className="text-sm font-semibold tracking-[0.14em] text-brick">{year}</p>
              <p className="mt-2 text-xl font-semibold text-ink">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
