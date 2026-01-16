"use client";

import { Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/20 backdrop-blur-xl py-20 text-center">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Link
                        href="https://github.com/olaotesile/Kenates-website"
                        target="_blank"
                        className="group relative inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        <Github className="h-4 w-4 md:h-6 md:w-6 text-white group-hover:text-primary transition-colors" />
                        <span className="font-semibold text-sm md:text-lg text-white">Star on GitHub</span>
                    </Link>
                </motion.div>

                <div className="mt-12 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Kenate Framework.</p>
                </div>
            </div>
        </footer>
    );
}
