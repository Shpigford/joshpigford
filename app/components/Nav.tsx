"use client"
import Link from "next/link";
import { useState,useEffect } from "react";
import { usePathname } from 'next/navigation'
export default function Nav() {
    const symbols = ['⦂⦂', '⦿', '⊛', '⊚', '⊙', '⦚', '⟁', '⦂⦚'];
    function getRandomSymbol() {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        return symbols[randomIndex];
    }
    const pathname = usePathname()
        const [symbol, setSymbol] = useState("⦂⦂");
        useEffect(() => {
            setSymbol(getRandomSymbol());
        }, [pathname]);
    

    return (

            <div className="flex items-start gap-4">
            <Link href="/"
                className="text-gold-500 h-[50px] w-[50px] text-6xl font-semibold hover:text-gold-400">
                {symbol}
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
            </div>
            </div>

    );
}