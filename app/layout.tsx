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
    "I help healthcare companies build the LLM platforms and internal AI tooling their engineers need to ship production AI products safely.",
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
            <a
              href="mailto:ben@drolet.ai"
              className="hover:text-neutral-300 transition-colors"
            >
              ben@drolet.ai
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
