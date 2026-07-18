import { BadgeCheck, Building2, Factory, PackageCheck, Route, TrendingUp } from "lucide-react";
import { SiteContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const icons = [BadgeCheck, Route, Building2, Factory, PackageCheck, TrendingUp];

type AssetHighlightsProps = {
  content: SiteContent["assets"];
};

export function AssetHighlights({ content }: AssetHighlightsProps) {
  return (
    <section id="assets" className="industrial-grid bg-mist px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.highlights.map(([title, text], index) => {
            const Icon = icons[index];
            return (
              <article key={title} className="group flex min-h-[250px] flex-col border border-iron/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-brick/10 text-brick transition group-hover:bg-brick group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-semibold text-iron/26">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-snug text-ink">{title}</h3>
                <p className="mt-4 text-base leading-7 text-steel">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
