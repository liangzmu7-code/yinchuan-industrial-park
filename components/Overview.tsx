import { CheckCircle2 } from "lucide-react";
import { SiteContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

type OverviewProps = {
  zh: SiteContent["overview"];
  en: SiteContent["overview"];
};

export function Overview({ zh, en }: OverviewProps) {
  return (
    <section id="overview" className="bg-paper px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeading
          eyebrow={zh.eyebrow}
          title={zh.title}
          englishTitle={en.title}
          description={zh.description}
          englishDescription={en.description}
        />
        <div className="border border-iron/10 bg-white shadow-soft">
          {zh.points.map((point, index) => (
            <div key={point} className="flex gap-4 border-b border-iron/8 p-5 last:border-b-0 sm:p-6">
              <CheckCircle2 className="mt-1 shrink-0 text-brick" size={21} />
              <div>
                <p className="text-base leading-7 text-iron">{point}</p>
                <p className="mt-1 text-sm leading-6 text-steel/72">{en.points[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
