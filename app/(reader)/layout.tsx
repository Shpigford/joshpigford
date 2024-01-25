import type { Metadata } from "next";
import Link from 'next/link'
import "@/app/globals.css";
import { RandomSymbol } from "@/app/lib/RandomSymbol";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    default: "Josh Pigford",
    template: "%s - Josh Pigford"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-black dark:text-white p-8 md:py-20">
        <div className="md:flex items-start gap-4">
          <Link href="/"
            className="text-gold-500 text-6xl font-semibold hover:text-gold-400 w-14 text-right">
            <RandomSymbol />
          </Link>
          <div>
            <header className="prose dark:prose-invert font-serif mb-10">
              <h1 className="text-6xl font-light tracking-tight mb-3">Josh Pigford</h1>

              <p className="text-xl">
                <Link
                  href="/articles"
                  className="thick-link"
                >Articles</Link> / <Link
                  href="/projects"
                  className="thick-link"
                >Projects</Link> / <Link
                  href="/investments"
                  className="thick-link"
                >Investments</Link> / <Link
                  href="/podcasts"
                  className="thick-link"
                >Podcasts</Link> / <Link
                  href="/reading"
                  className="thick-link"
                >Reading</Link> / <Link
                  href="/toys"
                  className="thick-link"
                >Toys</Link> / <Link
                  href="/keyboards"
                  className="thick-link"
                >Keyboards</Link>
              </p>
            </header>
            <div>{children}</div>
            <footer className="prose dark:prose-invert font-serif my-12 text-sm text-gray-400">
              <p>
                This thing is <a href="https://github.com/Shpigford/joshpigford">open source</a>, for better or worse.
              </p>
            </footer>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
