import { SiteContent } from "@/lib/content";

type FooterProps = {
  zh: SiteContent["footer"];
  en: SiteContent["footer"];
};

export function Footer({ zh, en }: FooterProps) {
  return (
    <footer className="bg-ink px-5 py-8 text-white/62 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="block">{zh.left}</span>
          <span className="block text-xs text-white/42">{en.left}</span>
        </p>
        <p>
          <span className="block">{zh.right}</span>
          <span className="block text-xs text-white/42">{en.right}</span>
        </p>
      </div>
    </footer>
  );
}
