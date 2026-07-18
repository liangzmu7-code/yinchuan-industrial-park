import { ArrowRight, Building2 } from "lucide-react";
import { SiteContent } from "@/lib/content";

type HeroProps = {
  content: SiteContent["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <section id="top" className="hero-texture relative min-h-[92vh] overflow-hidden pt-16 text-white">
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-paper to-transparent" />
      <div className="relative mx-auto flex min-h-[calc(92vh-4rem)] max-w-7xl flex-col justify-center px-5 py-16 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 border border-white/18 bg-white/8 px-3 py-2 text-sm text-white/78 backdrop-blur">
            <Building2 size={16} />
            {content.eyebrow}
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78 sm:text-xl">{content.subtitle}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#overview"
              className="inline-flex items-center justify-center gap-2 bg-wheat px-6 py-3 font-semibold text-ink transition hover:bg-white"
            >
              {content.primary}
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-white/38 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              {content.secondary}
            </a>
          </div>
        </div>
        <div className="mt-14 grid max-w-4xl grid-cols-2 gap-px bg-white/18 sm:grid-cols-4">
          {content.stats.map(([value, label]) => (
            <div key={label} className="bg-ink/62 p-5 backdrop-blur">
              <p className="text-2xl font-semibold text-wheat">{value}</p>
              <p className="mt-1 text-sm text-white/64">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
