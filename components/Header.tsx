import { Languages } from "lucide-react";
import { SiteContent } from "@/lib/content";

type HeaderProps = {
  content: SiteContent;
  onToggleLanguage: () => void;
};

export function Header({ content, onToggleLanguage }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/88 text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={content.header.ariaHome}>
          <span className="flex h-9 w-9 items-center justify-center border border-wheat/70 bg-wheat/10 text-sm font-semibold text-wheat">
            1963
          </span>
          <span className="leading-tight">
            <span className="block max-w-[176px] truncate text-sm font-semibold tracking-wide sm:max-w-none">
              {content.header.brand}
            </span>
            <span className="block text-xs text-white/62">{content.header.subtitle}</span>
          </span>
        </a>
        <nav className="hidden items-center gap-4 text-xs text-white/78 lg:flex xl:gap-6 xl:text-sm">
          {content.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-wheat">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleLanguage}
            className="inline-flex items-center gap-2 border border-white/24 px-3 py-2 text-sm font-semibold text-white/82 transition hover:border-wheat hover:text-wheat"
            aria-label="切换语言"
          >
            <Languages size={16} />
            {content.languageSwitch}
          </button>
          <a
            href="#contact"
            className="hidden border border-wheat/60 px-4 py-2 text-sm font-medium text-wheat transition hover:bg-wheat hover:text-ink sm:inline-flex"
          >
            {content.header.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
