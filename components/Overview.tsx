import { CheckCircle2 } from "lucide-react";
import { SiteContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

type OverviewProps = {
  content: SiteContent["overview"];
};

export function Overview({ content }: OverviewProps) {
  return (
    <section id="overview" className="bg-paper px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="border border-iron/10 bg-white shadow-soft">
          {content.points.map((point) => (
            <div key={point} className="flex gap-4 border-b border-iron/8 p-5 last:border-b-0 sm:p-6">
              <CheckCircle2 className="mt-1 shrink-0 text-brick" size={21} />
              <p className="text-base leading-7 text-iron">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
