"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function Hero() {
    return (
        <section className="relative min-h-[140vh] w-full flex flex-col pt-48 px-6 overflow-hidden bg-noise">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <StarsBackground />
            <ShootingStars />

            {/* Content Wrapper */}
            <div className="max-w-7xl mx-auto w-full z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mb-8">

                {/* Left Side: Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-neutral-400 mb-6 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        V1.0
                    </div>

                    <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 relative">
                        <span className="relative z-10 mix-blend-difference">React, but for</span><br />
                        <span className="text-neutral-500 relative z-10">robotics</span>
                    </h1>

                    <p className="text-neutral-400 text-sm md:text-base max-w-md mb-4 relative z-10">
                        Kenate is a framework built for the engineering nerds to make their life way easier. I swear.
                    </p>

                    <div className="flex items-end gap-6">
                        <p className="text-xs font-mono text-neutral-500 leading-relaxed">
                            /Kinayti/ /Kinayt/ anyone's fine,<br />
                            still haven't decided
                        </p>
                    </div>
                </motion.div>

                {/* Right Side: Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-shrink-0 md:mr-20"
                >
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/documentation" className="group inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-6 text-xs font-medium text-white transition-all hover:opacity-90 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:h-12 md:px-8 md:text-sm">
                            Read Documentation
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        {/* Button Removed */}
                    </div>
                </motion.div>
            </div>

            {/* Macbook Component (Moved Up) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full flex justify-center -mt-10"
            >
                <MacbookScroll
                    title=""
                />
            </motion.div>

            {/* Decorative gradient blob */}
            <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}
