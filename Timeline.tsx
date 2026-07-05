import { SiteContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

type TimelineProps = {
  zh: SiteContent["timeline"];
  en: SiteContent["timeline"];
};

export function Timeline({ zh, en }: TimelineProps) {
  return (
    <section id="history" className="bg-paper px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={zh.eyebrow}
          title={zh.title}
          englishTitle={en.title}
          description={zh.description}
          englishDescription={en.description}
        />
        <div className="mt-10 border-l-2 border-brick/35">
          {zh.events.map(([year, text], index) => (
            <div key={year} className="relative pb-9 pl-7 last:pb-0">
              <span className="absolute -left-[9px] top-1 h-4 w-4 bg-brick ring-4 ring-paper" />
              <p className="text-sm font-semibold tracking-[0.14em] text-brick">{year}</p>
              <p className="mt-2 text-xl font-semibold text-ink">{text}</p>
              <p className="mt-1 text-sm leading-6 text-steel/72">{en.events[index][1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
