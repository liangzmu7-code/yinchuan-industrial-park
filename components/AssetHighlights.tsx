import { Factory, LandPlot, MapPinned, PackageCheck, Route, WalletCards } from "lucide-react";
import { SiteContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const icons = [MapPinned, WalletCards, Factory, LandPlot, PackageCheck, Route];

type AssetHighlightsProps = {
  content: SiteContent["assets"];
};

export function AssetHighlights({ content }: AssetHighlightsProps) {
  return (
    <section id="assets" className="industrial-grid bg-mist px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.highlights.map(([title, text], index) => {
            const Icon = icons[index];
            return (
              <article key={title} className="border border-iron/10 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-brick/10 text-brick">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-base leading-7 text-steel">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
