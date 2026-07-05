import { AssetHighlights } from "@/components/AssetHighlights";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Opportunity } from "@/components/Opportunity";
import { Overview } from "@/components/Overview";
import { Partners } from "@/components/Partners";
import { Timeline } from "@/components/Timeline";
import { siteContent } from "@/lib/content";

export function SiteShell() {
  return (
    <>
      <Header zh={siteContent.zh} en={siteContent.en} />
      <main>
        <Hero zh={siteContent.zh.hero} en={siteContent.en.hero} />
        <Overview zh={siteContent.zh.overview} en={siteContent.en.overview} />
        <AssetHighlights zh={siteContent.zh.assets} en={siteContent.en.assets} />
        <Opportunity zh={siteContent.zh.opportunity} en={siteContent.en.opportunity} />
        <Partners zh={siteContent.zh.partners} en={siteContent.en.partners} />
        <Timeline zh={siteContent.zh.timeline} en={siteContent.en.timeline} />
        <ContactForm zh={siteContent.zh.contact} en={siteContent.en.contact} />
      </main>
      <Footer zh={siteContent.zh.footer} en={siteContent.en.footer} />
    </>
  );
}
