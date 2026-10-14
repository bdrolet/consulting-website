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
          I help healthcare startups take AI from pilot to production,
          compliantly.
        </p>
        <p className="text-base leading-relaxed text-neutral-300 mb-10 max-w-prose">
          I help healthcare startups get their AI out of pilot and into
          production, on HIPAA-ready infrastructure with real evals and
          observability, so their engineers can ship AI features safely and
          fast.
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
            Taking an AI pilot to production in healthcare is harder than it
            looks. LLM deployments break without the right abstractions.
            Engineers rebuild the same tooling on every project. HIPAA and
            regulatory constraints add requirements that generic AI architectures
            don&apos;t handle.
          </p>
          <p>
            Getting the infrastructure right early determines whether your AI
            program ships or stalls.
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
              model routing, prompt management, evaluation pipelines, LLM
              observability, hallucination detection, and deployment systems that
              survive model upgrades.
            </p>
          </div>
          <div>
            <h3 className="text-base font-medium text-neutral-100 mb-2">
              Internal AI Developer Platforms
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Build the tooling and abstractions that let product engineers use
              AI without becoming AI infra engineers — shared components,
              standardized access patterns, AI guardrails, and the
              HIPAA-compliance layer that healthcare requires.
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

      {/* Selected Work */}
      <section className="py-16 md:py-20">
        <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-8">
          Selected Work
        </h2>
        <h3 className="text-base font-medium text-neutral-100 mb-1">
          From duct tape to a production AI platform
        </h3>
        <p className="text-sm text-neutral-500 mb-6">
          Remote-care healthcare company
        </p>
        <div className="space-y-5 text-neutral-400 leading-relaxed">
          <p>
            The AI pilots worked, but nobody could trust them in production.
            Prompts were hard-coded into services, evals were done by hand, and
            there was no single place to enforce PHI handling or see what was
            failing.
          </p>
          <p>I led the platform build:</p>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-neutral-500">
          <li className="flex items-start gap-2">
            <span className="text-neutral-700 mt-0.5">—</span>
            A central prompt service with versioning and tracing
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-700 mt-0.5">—</span>
            An evaluation pipeline that catches regressions before a prompt or
            model change ships
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-700 mt-0.5">—</span>
            One path for every model call, so access control, PHI boundaries,
            audit logging, and model routing live in one place
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-700 mt-0.5">—</span>
            AWS infrastructure in Terraform, with dashboards and alerting on
            failure rates, fallbacks, and latency
          </li>
        </ul>
        <div className="mt-6 space-y-5 text-neutral-400 leading-relaxed">
          <p>
            A monitored pilot was running within two weeks. Changes that used
            to take days took hours: when a product manager asked one morning to
            add a patient&apos;s heart-failure risk to a prompt&apos;s output,
            it was live in production after lunch, through CI and approvals,
            with PHI flowing through it compliantly.
          </p>
          <p>
            The same platform went on to carry a per-patient snapshot, then a
            clinician chat agent that answers questions about a patient&apos;s
            history from charts, specialist-visit transcripts, and lab results.
          </p>
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
            16 years as a backend software engineer. For the past 4 years,
            focused on healthcare — behavioral health, digital health, and health
            tech — where the infrastructure problems are harder and the cost of
            getting it wrong is higher. Recently focused on the infrastructure
            side of AI — building the LLM platforms, evaluation pipelines, and
            internal developer tooling that production AI applications run on.
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
