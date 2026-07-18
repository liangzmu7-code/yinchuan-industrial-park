import { Handshake, Layers3, Share2, TrendingUp } from "lucide-react";
import { SiteContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const icons = [Share2, Layers3, TrendingUp, Handshake];

type OpportunityProps = {
  content: SiteContent["opportunity"];
};

export function Opportunity({ content }: OpportunityProps) {
  return (
    <section id="opportunity" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
          <div className="hidden h-px bg-iron/12 lg:block" />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {content.models.map(([title, text], index) => {
            const Icon = icons[index];
            return (
              <article key={title} className="border border-iron/10 bg-paper p-6 transition hover:bg-white hover:shadow-soft lg:p-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-copper">
                    <Icon size={24} />
                  </div>
                  <p className="text-lg font-semibold text-ink">{title}</p>
                </div>
                <p className="mt-5 border-t border-iron/10 pt-5 text-base leading-7 text-steel">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
