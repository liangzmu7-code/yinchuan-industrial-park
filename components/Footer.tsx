import { SiteContent } from "@/lib/content";

type FooterProps = {
  content: SiteContent["footer"];
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-ink px-5 py-8 text-white/62 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>{content.left}</p>
        <p>{content.right}</p>
      </div>
    </footer>
  );
}
