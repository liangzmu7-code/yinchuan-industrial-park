"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { SiteContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/liangzmu7@163.com";
const SITE_URL = "https://yinchuan-industrial-park.vercel.app/";

type ContactFormProps = {
  content: SiteContent["contact"];
};

export function ContactForm({ content }: ContactFormProps) {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = {
      _subject: "银川产业园官网新留言",
      _template: "table",
      _captcha: "false",
      _url: SITE_URL
    };

    content.fields.forEach(([name, label]) => {
      payload[label] = String(formData.get(name) || "");
    });
    payload[content.messageLabel] = String(formData.get("message") || "");
    payload._replyto = String(formData.get("email") || "");
    payload._honey = String(formData.get("_honey") || "");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setMessage(content.thanks);
      form.reset();
    } catch {
      setMessage(content.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-mist px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
          <div className="mt-8 border border-iron/10 bg-white p-6 text-steel">
            <p className="font-semibold text-ink">{content.focusTitle}</p>
            <p className="mt-3 leading-7">{content.focusText}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="border border-iron/10 bg-white p-6 shadow-soft sm:p-8">
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {content.fields.map(([name, label, type]) => (
              <label key={name} className="block">
                <span className="text-sm font-semibold text-iron">{label}</span>
                <input
                  required={["name", "phone"].includes(name)}
                  name={name}
                  type={type}
                  className="mt-2 h-12 w-full border border-iron/15 bg-paper px-4 text-ink outline-none transition focus:border-brick focus:bg-white"
                />
              </label>
            ))}
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-iron">{content.messageLabel}</span>
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full resize-none border border-iron/15 bg-paper px-4 py-3 text-ink outline-none transition focus:border-brick focus:bg-white"
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-3 font-semibold text-white transition hover:bg-brick disabled:cursor-not-allowed disabled:bg-iron/50 sm:w-auto"
          >
            {isSubmitting ? content.sending : content.submit}
            <Send size={18} />
          </button>
          {message ? <p className="mt-4 text-sm font-semibold leading-6 text-brick">{message}</p> : null}
        </form>
      </div>
    </section>
  );
}
