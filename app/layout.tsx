
import type { Metadata } from "next";
import Link from 'next/link'
import "./globals.css";
import Nav from "./components/Nav";



export const metadata: Metadata = {
  title: "Josh Pigford",
  description: "Dabbler",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className="dark">
      <body className="dark:bg-black dark:text-white py-20 px-20">
        <Nav />
        <div>{children}</div>
      </body>
    </html>
  );
}
