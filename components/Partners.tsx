import { SiteContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

type PartnersProps = {
  content: SiteContent["partners"];
};

export function Partners({ content }: PartnersProps) {
  return (
    <section id="partners" className="bg-ink px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            tone="dark"
          />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {content.list.map((partner) => (
              <div
                key={partner}
                className="border border-white/12 bg-white/[0.04] px-5 py-4 text-base font-semibold leading-6 text-white/88 transition hover:border-wheat/55 hover:bg-white/[0.08]"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
