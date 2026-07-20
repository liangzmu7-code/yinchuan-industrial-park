import { BadgeCheck, Building2, Landmark } from "lucide-react";
import { SiteContent } from "@/lib/content";

type TransactionOfferProps = {
  content: SiteContent["offer"];
};

export function TransactionOffer({ content }: TransactionOfferProps) {
  return (
    <section id="offer" className="bg-paper px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="border border-iron/10 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brick">{content.eyebrow}</p>
            <div className="mt-3 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <h2 className="text-2xl font-semibold leading-tight text-ink sm:text-3xl">{content.title}</h2>
              <p className="text-base leading-7 text-steel">{content.description}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {content.cards.map((card, index) => {
              const isPrimary = index === 0;
              const Icon = isPrimary ? Landmark : Building2;

              return (
                <article
                  key={card.label}
                  className="flex flex-col border border-iron/10 bg-paper p-5 transition hover:bg-white hover:shadow-soft sm:p-6"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brick">{card.label}</p>
                      <p className="mt-3 text-3xl font-semibold tracking-normal text-ink sm:text-4xl">{card.price}</p>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-brick/10 text-brick">
                      <Icon size={24} />
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold leading-snug text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-steel">{card.description}</p>

                  <div className="mt-5 grid gap-3 border-t border-iron/10 pt-5">
                    {card.items.map((item) => (
                      <div key={item} className="flex gap-3">
                        <BadgeCheck className="mt-0.5 shrink-0 text-copper" size={17} />
                        <p className="text-sm leading-6 text-steel">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-6 border-l-4 border-brick bg-mist px-5 py-4 text-sm leading-6 text-steel">
            {content.note}
          </div>
        </div>
      </div>
    </section>
  );
}
