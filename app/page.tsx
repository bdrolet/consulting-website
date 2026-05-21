import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-100 mb-4">
          Ben Drolet
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 mb-6">
          AI infrastructure engineering for healthcare
        </p>
        <p className="text-base leading-relaxed text-neutral-300 mb-10 max-w-prose">
          I help healthcare companies build the LLM platforms and internal AI
          tooling their engineers need to ship production AI products safely.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 text-sm text-neutral-100 border border-neutral-700 rounded px-4 py-2.5 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
        >
          Get in touch →
        </Link>
      </section>

      <hr className="border-neutral-800" />

      {/* The Problem */}
      <section className="py-16 md:py-20">
        <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-6">
          The Problem
        </h2>
        <div className="space-y-4 text-neutral-300 leading-relaxed">
          <p>
            Most healthcare organizations trying to build with AI hit the same
            wall: the product vision is clear, but the infrastructure underneath
            isn&apos;t.
          </p>
          <p>
            LLM deployments break without the right abstractions. Engineers
            rebuild the same tooling on every project. Regulated environments
            add constraints that generic cloud architectures don&apos;t handle
            well.
          </p>
          <p>
            Getting this right early determines whether your AI program ships or
            stalls.
          </p>
        </div>
      </section>

      <hr className="border-neutral-800" />

      {/* What I Do */}
      <section className="py-16 md:py-20">
        <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-8">
          What I Do
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-base font-medium text-neutral-100 mb-2">
              LLM Platform Engineering
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Design and build the infrastructure for LLM-powered applications —
              model routing, prompt management, evaluation pipelines,
              observability, and deployment systems that survive model upgrades.
            </p>
          </div>
          <div>
            <h3 className="text-base font-medium text-neutral-100 mb-2">
              Internal AI Developer Platforms
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Build the tooling and abstractions that let product engineers use
              AI without becoming AI infra engineers — shared components,
              standardized access patterns, and the guardrails that matter in
              healthcare.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Link
            href="/services"
            className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            More about services →
          </Link>
        </div>
      </section>

      <hr className="border-neutral-800" />

      {/* About */}
      <section className="py-16 md:py-20">
        <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-6">
          About
        </h2>
        <div className="space-y-4 text-neutral-300 leading-relaxed">
          <p>
            16 years as a backend software engineer. Most of that time in
            healthcare. Recently focused on the infrastructure side of AI —
            building the platforms, pipelines, and internal tooling that
            production AI applications run on.
          </p>
          <p>
            I work with healthcare engineering teams that have serious AI
            ambitions and need the infrastructure layer built right.
          </p>
          <p className="text-neutral-500">Based in San Francisco.</p>
        </div>
        <div className="mt-6">
          <Link
            href="/about"
            className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            More about me →
          </Link>
        </div>
      </section>

      <hr className="border-neutral-800" />

      {/* Contact */}
      <section className="py-16 md:py-20">
        <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-6">
          Contact
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-6">
          If you&apos;re building AI infrastructure in healthcare, I&apos;d like
          to hear what you&apos;re working on.
        </p>
        <a
          href="mailto:ben@drolet.ai"
          className="text-neutral-100 hover:text-white transition-colors"
        >
          ben@drolet.ai
        </a>
      </section>
    </div>
  );
}
