import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben Drolet — AI Infrastructure Engineering for Healthcare",
  description:
    "AI infrastructure engineering for healthcare teams building with LLMs. LLM platform engineering, internal AI developer platforms, and HIPAA-compliant AI infrastructure.",
  keywords: [
    "AI infrastructure engineering",
    "LLM platform engineering",
    "healthcare AI infrastructure",
    "internal AI developer platform",
    "production AI for healthcare",
    "HIPAA-compliant AI",
    "healthcare LLM deployment",
    "LLM observability",
    "behavioral health AI",
    "AI platform consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-200 font-[family-name:var(--font-geist-sans)]">
        <header className="border-b border-neutral-800">
          <nav className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link
              href="/"
              className="text-sm font-medium text-neutral-100 hover:text-white transition-colors"
            >
              Ben Drolet
            </Link>
            <div className="flex items-center gap-6 text-sm text-neutral-400">
              <Link href="/services" className="hover:text-neutral-100 transition-colors">
                Services
              </Link>
              <Link href="/about" className="hover:text-neutral-100 transition-colors">
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-neutral-100 transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-neutral-800">
          <div className="max-w-2xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-neutral-500">
            <span>© {new Date().getFullYear()} Ben Drolet</span>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/benjamindrolet/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-300 transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/bdrolet/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-300 transition-colors"
                aria-label="GitHub"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 6.599a11.52 11.52 0 0 1 3.006.404c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:ben@drolet.ai"
                className="hover:text-neutral-300 transition-colors"
              >
                ben@drolet.ai
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
