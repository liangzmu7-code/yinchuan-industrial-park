import { SiteContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

type OverviewProps = {
  content: SiteContent["overview"];
};

export function Overview({ content }: OverviewProps) {
  return (
    <section id="overview" className="bg-paper px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
          <div className="mt-8 hidden border-l-4 border-brick bg-white px-6 py-5 shadow-sm lg:block">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-steel">1963 - 2026</p>
            <p className="mt-2 text-3xl font-semibold text-ink">{String(content.points.length).padStart(2, "0")}</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-brick/25 sm:left-6" />
          <div className="space-y-4">
            {content.points.map((point, index) => (
              <article key={point} className="relative pl-14 sm:pl-16">
                <div className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center border border-brick/35 bg-paper text-sm font-semibold text-brick shadow-[0_0_0_6px_#f8f6f1] sm:h-12 sm:w-12">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="border border-iron/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft sm:p-6">
                  <p className="text-base leading-8 text-iron">{point}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
