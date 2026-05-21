import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Ben Drolet",
  description:
    "16 years as a backend engineer in healthcare, now focused on LLM infrastructure.",
};

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-3xl font-light tracking-tight text-neutral-100 mb-12">
        About
      </h1>

      <div className="space-y-6 text-neutral-300 leading-relaxed">
        <p>
          16 years as a backend software engineer. Most of that time in
          healthcare. Recently focused on the infrastructure side of AI —
          building the platforms, pipelines, and internal tooling that
          production AI applications run on.
        </p>
        <p>
          I&apos;ve seen what happens when teams try to ship AI products on
          infrastructure that wasn&apos;t designed for it. Observability gaps
          that only show up under load. Prompt pipelines that break when a model
          is updated. Engineering teams spending months rebuilding the same
          foundation across projects.
        </p>
        <p>
          Healthcare adds another layer of complexity. PHI handling,
          auditability requirements, and the compliance overhead that comes with
          any regulated environment — these aren&apos;t afterthoughts you can
          bolt on later.
        </p>
        <p>
          I work with healthcare engineering teams that have serious AI
          ambitions and need the infrastructure layer built right. The engagement
          model is flexible — I can work alongside your existing team, lead the
          infrastructure buildout, or help you think through an architecture
          decision before you commit to it.
        </p>
        <p className="text-neutral-500">Based in San Francisco.</p>
      </div>

      <div className="mt-16 pt-10 border-t border-neutral-800">
        <p className="text-neutral-400 mb-4">
          Want to talk about what you&apos;re building?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 text-sm text-neutral-100 border border-neutral-700 rounded px-4 py-2.5 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
        >
          Get in touch →
        </Link>
      </div>
    </div>
  );
}
