"use client";

import { useState } from "react";
import { AssetHighlights } from "@/components/AssetHighlights";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Opportunity } from "@/components/Opportunity";
import { Overview } from "@/components/Overview";
import { Partners } from "@/components/Partners";
import { Timeline } from "@/components/Timeline";
import { Language, siteContent } from "@/lib/content";

export function SiteShell() {
  const [language, setLanguage] = useState<Language>("zh");
  const content = siteContent[language];

  function toggleLanguage() {
    setLanguage((current) => (current === "zh" ? "en" : "zh"));
  }

  return (
    <>
      <Header content={content} onToggleLanguage={toggleLanguage} />
      <main>
        <Hero content={content.hero} />
        <Overview content={content.overview} />
        <Timeline content={content.timeline} />
        <AssetHighlights content={content.assets} />
        <Opportunity content={content.opportunity} />
        <Partners content={content.partners} />
        <ContactForm content={content.contact} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}
