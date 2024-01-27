import type { Metadata } from "next";
import Link from 'next/link'
import "@/app/globals.css";
import { RandomSymbol } from "@/app/lib/RandomSymbol";
import { Analytics } from '@vercel/analytics/react';
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: {
    default: "Josh Pigford",
    template: "%s - Josh Pigford"
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const user = await supabase.auth.getUser();

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
              <h1 className="text-6xl font-light tracking-tight mb-0">Josh Pigford</h1>
              <h2 className="text-3xl font-light tracking-tight my-3">Mission Control</h2>

              {user && user.data && user.data.user !== null && (
                <p className="text-xl">
                  <Link
                    href="/articles"
                    className="thick-link"
                  >Articles</Link> / <Link
                    href="/projects"
                    className="thick-link"
                  >Projects</Link>
                </p>
              )}
            </header>
            <div>{children}</div>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
