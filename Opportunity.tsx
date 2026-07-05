import { Handshake, Layers3, Share2, TrendingUp } from "lucide-react";
import { SiteContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const icons = [Share2, Layers3, TrendingUp, Handshake];

type OpportunityProps = {
  zh: SiteContent["opportunity"];
  en: SiteContent["opportunity"];
};

export function Opportunity({ zh, en }: OpportunityProps) {
  return (
    <section id="opportunity" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <SectionHeading
          eyebrow={zh.eyebrow}
          title={zh.title}
          englishTitle={en.title}
          description={zh.description}
          englishDescription={en.description}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {zh.models.map((model, index) => {
            const Icon = icons[index];
            return (
              <div key={model} className="border border-iron/10 bg-paper p-6">
                <Icon className="text-copper" size={26} />
                <p className="mt-5 text-lg font-semibold text-ink">{model}</p>
                <p className="mt-1 text-sm leading-6 text-steel/72">{en.models[index]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
