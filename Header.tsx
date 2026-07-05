import { SiteContent } from "@/lib/content";

type HeaderProps = {
  zh: SiteContent;
  en: SiteContent;
};

export function Header({ zh, en }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/88 text-white backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={zh.header.ariaHome}>
          <span className="flex h-9 w-9 items-center justify-center border border-wheat/70 bg-wheat/10 text-sm font-semibold text-wheat">
            1963
          </span>
          <span className="leading-tight">
            <span className="block max-w-[176px] truncate text-sm font-semibold tracking-wide sm:max-w-none">
              {zh.header.brand}
            </span>
            <span className="block text-xs text-white/62">{en.header.brand}</span>
          </span>
        </a>
        <nav className="hidden items-center gap-5 text-sm text-white/78 lg:flex">
          {zh.nav.map((item, index) => (
            <a key={item.href} href={item.href} className="leading-tight transition hover:text-wheat">
              <span className="block">{item.label}</span>
              <span className="block text-[11px] text-white/48">{en.nav[index].label}</span>
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden flex-col border border-wheat/60 px-4 py-2 text-sm font-medium leading-tight text-wheat transition hover:bg-wheat hover:text-ink sm:inline-flex"
        >
          <span>{zh.header.cta}</span>
          <span className="text-[11px] opacity-75">{en.header.cta}</span>
        </a>
      </div>
    </header>
  );
}
