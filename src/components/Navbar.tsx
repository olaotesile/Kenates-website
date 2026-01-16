"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github } from "lucide-react";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white">
                        K
                    </div>
                    <span className="font-bold text-lg tracking-tight">Kenate</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
                    <Link href="#architecture" className="hover:text-foreground transition-colors">Architecture</Link>
                    <Link href="#workflow" className="hover:text-foreground transition-colors">Workflow</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="https://github.com" target="_blank" className="p-2 hover:bg-white/5 rounded-full transition-colors">
                        <Github className="h-5 w-5" />
                    </Link>
                    <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors">
                        Get Started
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
