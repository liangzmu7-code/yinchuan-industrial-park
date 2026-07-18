import { Handshake, Layers3, Share2, TrendingUp } from "lucide-react";
import { SiteContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const icons = [Share2, Layers3, TrendingUp, Handshake];

type OpportunityProps = {
  content: SiteContent["opportunity"];
};

export function Opportunity({ content }: OpportunityProps) {
  return (
    <section id="opportunity" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {content.models.map(([title, text], index) => {
            const Icon = icons[index];
            return (
              <div key={title} className="border border-iron/10 bg-paper p-6">
                <Icon className="text-copper" size={26} />
                <p className="mt-5 text-lg font-semibold text-ink">{title}</p>
                <p className="mt-3 text-base leading-7 text-steel">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
