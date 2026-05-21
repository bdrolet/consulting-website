import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Ben Drolet",
  description: "Get in touch about AI infrastructure consulting for healthcare.",
};

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-3xl font-light tracking-tight text-neutral-100 mb-4">
        Contact
      </h1>
      <p className="text-neutral-400 leading-relaxed mb-12">
        If you&apos;re building AI infrastructure in healthcare, I&apos;d like
        to hear what you&apos;re working on.
      </p>
      <ContactForm />
    </div>
  );
}
