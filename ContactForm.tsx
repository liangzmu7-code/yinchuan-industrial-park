"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { SiteContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

type ContactFormProps = {
  zh: SiteContent["contact"];
  en: SiteContent["contact"];
};

export function ContactForm({ zh, en }: ContactFormProps) {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(`${zh.thanks} ${en.thanks}`);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-mist px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow={zh.eyebrow}
            title={zh.title}
            englishTitle={en.title}
            description={zh.description}
            englishDescription={en.description}
          />
          <div className="mt-8 border border-iron/10 bg-white p-6 text-steel">
            <p className="font-semibold text-ink">{zh.focusTitle}</p>
            <p className="mt-1 text-sm font-semibold text-ink/52">{en.focusTitle}</p>
            <p className="mt-3 leading-7">{zh.focusText}</p>
            <p className="mt-2 text-sm leading-6 text-steel/72">{en.focusText}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="border border-iron/10 bg-white p-6 shadow-soft sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {zh.fields.map(([name, label, type], index) => (
              <label key={name} className="block">
                <span className="text-sm font-semibold text-iron">{label}</span>
                <span className="ml-2 text-xs font-semibold text-steel/62">{en.fields[index][1]}</span>
                <input
                  required={["name", "phone"].includes(name)}
                  name={name}
                  type={type}
                  className="mt-2 h-12 w-full border border-iron/15 bg-paper px-4 text-ink outline-none transition focus:border-brick focus:bg-white"
                />
              </label>
            ))}
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-iron">{zh.messageLabel}</span>
              <span className="ml-2 text-xs font-semibold text-steel/62">{en.messageLabel}</span>
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full resize-none border border-iron/15 bg-paper px-4 py-3 text-ink outline-none transition focus:border-brick focus:bg-white"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-3 font-semibold text-white transition hover:bg-brick sm:w-auto"
          >
            <span className="leading-tight">
              <span className="block">{zh.submit}</span>
              <span className="block text-xs text-white/62">{en.submit}</span>
            </span>
            <Send size={18} />
          </button>
          {message ? <p className="mt-4 text-sm font-semibold leading-6 text-brick">{message}</p> : null}
        </form>
      </div>
    </section>
  );
}
