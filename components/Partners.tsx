import { SiteContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

type PartnersProps = {
  content: SiteContent["partners"];
};

export function Partners({ content }: PartnersProps) {
  return (
    <section id="partners" className="bg-ink px-5 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          tone="dark"
        />
        <div className="mt-10 grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {content.list.map((partner) => (
            <div key={partner} className="bg-ink p-6 text-lg font-semibold text-white/88">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
