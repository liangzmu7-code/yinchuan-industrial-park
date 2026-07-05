import { SiteContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

type PartnersProps = {
  zh: SiteContent["partners"];
  en: SiteContent["partners"];
};

export function Partners({ zh, en }: PartnersProps) {
  return (
    <section className="bg-ink px-5 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={zh.eyebrow}
          title={zh.title}
          englishTitle={en.title}
          description={zh.description}
          englishDescription={en.description}
        />
        <div className="mt-10 grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {zh.list.map((partner, index) => (
            <div key={partner} className="bg-ink p-6 text-lg font-semibold text-white/88">
              <p>{partner}</p>
              <p className="mt-1 text-sm font-normal leading-6 text-white/48">{en.list[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
