"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    window.location.href = `mailto:ben@drolet.ai?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0A${encodeURIComponent(email)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-neutral-300">
        Thanks — your mail client should have opened. You can also reach me
        directly at{" "}
        <a
          href="mailto:ben@drolet.ai"
          className="text-neutral-100 hover:text-white underline underline-offset-4 transition-colors"
        >
          ben@drolet.ai
        </a>
        .
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-medium uppercase tracking-widest text-neutral-500 mb-2"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-medium uppercase tracking-widest text-neutral-500 mb-2"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium uppercase tracking-widest text-neutral-500 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
          placeholder="What are you working on?"
        />
      </div>

      <div className="flex items-center justify-between pt-2">
        <button
          type="submit"
          className="inline-flex items-center gap-1 text-sm text-neutral-100 border border-neutral-700 rounded px-4 py-2.5 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
        >
          Send →
        </button>
        <span className="text-xs text-neutral-600">
          Or email directly:{" "}
          <a
            href="mailto:ben@drolet.ai"
            className="text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            ben@drolet.ai
          </a>
        </span>
      </div>
    </form>
  );
}
