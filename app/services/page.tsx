import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Ben Drolet",
  description:
    "LLM platform engineering and internal AI developer platforms for healthcare teams.",
};

export default function Services() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-3xl font-light tracking-tight text-neutral-100 mb-12">
        Services
      </h1>

      <div className="space-y-16">
        <div>
          <h2 className="text-base font-medium text-neutral-100 mb-4">
            LLM Platform Engineering
          </h2>
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>
              Design and build the infrastructure for LLM-powered applications —
              model routing, prompt management, evaluation pipelines,
              observability, and deployment systems that survive model upgrades.
            </p>
            <p>
              Most teams underinvest in this layer early and pay for it later.
              The right abstractions here mean engineers can ship AI features
              without reinventing the wheel on every project, and without
              breaking things when models change.
            </p>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-neutral-500">
            <li className="flex items-start gap-2">
              <span className="text-neutral-700 mt-0.5">—</span>
              Model routing and fallback logic
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-700 mt-0.5">—</span>
              Prompt versioning and management systems
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-700 mt-0.5">—</span>
              LLM evaluation and regression pipelines
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-700 mt-0.5">—</span>
              Observability, tracing, and cost tracking
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-700 mt-0.5">—</span>
              Deployment architecture for regulated environments
            </li>
          </ul>
        </div>

        <hr className="border-neutral-800" />

        <div>
          <h2 className="text-base font-medium text-neutral-100 mb-4">
            Internal AI Developer Platforms
          </h2>
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>
              Build the tooling and abstractions that let product engineers use
              AI without becoming AI infra engineers — shared components,
              standardized access patterns, and the guardrails that matter in
              healthcare.
            </p>
            <p>
              This is the difference between every team wiring their own LLM
              connections and a coherent internal platform that enforces
              compliance requirements, reduces integration time, and gives you
              visibility into how AI is being used across the organization.
            </p>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-neutral-500">
            <li className="flex items-start gap-2">
              <span className="text-neutral-700 mt-0.5">—</span>
              Internal SDK and shared AI components
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-700 mt-0.5">—</span>
              Standardized access patterns and API gateways
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-700 mt-0.5">—</span>
              PHI handling and compliance guardrails
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-700 mt-0.5">—</span>
              Audit logging and policy enforcement
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-700 mt-0.5">—</span>
              Developer documentation and onboarding
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-10 border-t border-neutral-800">
        <p className="text-neutral-400 mb-4">
          Have a specific project in mind?
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
