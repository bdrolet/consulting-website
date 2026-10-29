import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production-Readiness Review for Healthcare AI Teams — drolet.ai",
  description:
    "A clinic or health system wants your AI feature, and their security review is coming. In one week, read-only and free, I'll tell you what it will find and what to fix first, in a report you can hand them.",
};

const MAILTO = "mailto:ben@drolet.ai?subject=Review";

const BUTTON_CLASS =
  "inline-flex items-center gap-1 text-sm text-neutral-100 border border-neutral-700 rounded px-4 py-2.5 hover:border-neutral-500 hover:bg-neutral-900 transition-colors";

const REPORT_SECTIONS = [
  "Where the data actually lives",
  "Your BAA chain: who is covered, who is not",
  "The fifteen questions, and what you can say today",
  "What happens when the AI is unsure",
  "What breaks when the model changes",
  "Will you find out from a user complaint?",
  "The fix list, in order",
  "What to say when you don’t have it",
];

const HOW_IT_WORKS = [
  "An intro from someone we both know, or an email.",
  "A 45-minute call with no access. You show me what you want to: an architecture sketch, a screenshare, your vendor list. You leave with your BAA-chain map.",
  "A mutual NDA.",
  "A named, read-only login you can revoke, scoped to the repo, infrastructure code and tracing, for the review week. Revoked on day five with a written note. A sanitized fork or staging account is fine, and the report will say where that limited the findings. I never ask you to connect your real repo to anything.",
  "The written report and a 60-minute readout within a week.",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-6">
      {children}
    </h2>
  );
}

function EmailButton() {
  return (
    <a href={MAILTO} className={BUTTON_CLASS}>
      Email ben@drolet.ai with &quot;Review&quot; in the subject →
    </a>
  );
}

export default function Review() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-100 mb-6">
        Find out what your first health system&apos;s security review will
        find, before they send the questionnaire.
      </h1>
      <p className="text-lg md:text-xl text-neutral-400 mb-4">
        A clinic or health system wants your AI feature, and their security
        review is coming. In one week, read-only and free, I&apos;ll tell you
        what it will find and what to fix first, in a report you can hand
        them.
      </p>
      <p className="text-sm text-neutral-500 mb-8">
        Not a compliance audit. No certificate. Nothing to buy.
      </p>
      <EmailButton />

      <hr className="border-neutral-800 my-16" />

      <section>
        <SectionLabel>Where this usually goes wrong</SectionLabel>
        <p className="text-neutral-300 leading-relaxed">
          You have an LLM feature in pilot and a group practice, health system
          or payer that wants it. Somewhere between the demo and the contract,
          their security team sends the 80-question questionnaire and asks for
          a BAA, and &quot;where does the data live and who has access&quot;
          has to be answered in writing, truthfully. For most teams under five
          engineers the honest answer includes a logging tool, a dev tool or a
          model provider setting that nobody put under a BAA, and finding that
          out during the review costs a quarter, or the deal.
        </p>
      </section>

      <hr className="border-neutral-800 my-16" />

      <section>
        <SectionLabel>What you get</SectionLabel>
        <p className="text-neutral-300 leading-relaxed">
          One week, read-only, in your repo, your cloud console and your vendor
          list. I never see a patient record. At the end, a written report
          that says plainly where PHI actually flows, logs, model provider and
          dev tools included; which hops have a BAA and which don&apos;t; which
          of the fifteen questions health systems now ask about AI you can
          truthfully answer today, and the compensating control and date that
          buyers accept where the answer is no; how the handoff to a human and
          the crisis path are built and whether they actually fire; what will
          silently break at the next prompt edit or model deprecation, and the
          small golden set that would catch it; and the fix list in order,
          each item marked weekend, sprint or rebuild. It&apos;s usually not
          the rebuild. The report is written to be handed to a buyer.
        </p>
        <p className="text-sm text-neutral-500 mt-8 mb-3">The report&apos;s sections</p>
        <ol className="list-decimal pl-5 space-y-2 text-neutral-400">
          {REPORT_SECTIONS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>

      <hr className="border-neutral-800 my-16" />

      <section>
        <SectionLabel>How it works</SectionLabel>
        <ol className="list-decimal pl-5 space-y-4 text-neutral-300 leading-relaxed">
          {HOW_IT_WORKS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>

      <hr className="border-neutral-800 my-16" />

      <section>
        <SectionLabel>Who&apos;s doing the review</SectionLabel>
        <div className="space-y-4 text-neutral-300 leading-relaxed">
          <p>
            I built Homeward Health&apos;s AI platform from the ground up,
            reporting to the CTO: the PHI access boundaries and audit trails,
            the guardrails and access control, prompt management and tracing,
            the eval loops, a model router, and the monitoring on every AI
            service. That infrastructure has been through health system
            security reviews, BAA negotiations and SOC 2.
          </p>
          <p>
            At Paradigm Health, clients handling a lot of PHI were risk-averse
            enough to require their own segregated environment. I built the
            Terraform that stands one up, database, services and deployment,
            from a single definition. Onboarding a new client went from a
            month of build-out to running a script.
          </p>
          <p>
            As an independent consultant I&apos;ve shipped for teams smaller
            than yours: a change-control system with e-signatures bound to
            file hashes and an append-only audit trail for a pre-clearance
            med-tech founder, and software for telehealth private practices.
          </p>
          <p>
            Sixteen years of backend and platform engineering around all of
            that, including Lyft and Eaze. M.S. Computer Science, University
            of Illinois Chicago.
          </p>
        </div>
      </section>

      <hr className="border-neutral-800 my-16" />

      <section>
        <SectionLabel>What I&apos;m not selling</SectionLabel>
        <p className="text-neutral-300 leading-relaxed">
          I don&apos;t sell a platform, a certificate or a remediation product.
          I make my living on paid engineering work. Some reviews lead to
          that, most don&apos;t, and the report is yours either way.
        </p>
      </section>

      <div className="mt-16 pt-10 border-t border-neutral-800">
        <p className="text-neutral-400 mb-6">
          I do these one at a time, one per week, so about five this fall.
        </p>
        <EmailButton />
      </div>
    </div>
  );
}
