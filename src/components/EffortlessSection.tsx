"use client";

import { motion } from "framer-motion";
import { CodeComparison } from "./CodeComparison";

export function EffortlessSection() {
    return (
        <section className="min-h-[60vh] flex items-center bg-noise border-y border-white/5 py-20">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-neutral-600 mb-6">
                        From overwhelming<br />
                        to <span className="text-white">effortless.</span>
                    </h2>
                    {/* Reduced font size as requested */}
                    <p className="text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed">
                        If you understand why react is more efficient than pure html and javasript,
                        you'll understand how kenate is better for robotics.
                    </p>
                </motion.div>

                {/* Comparison Component */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <CodeComparison />
                </motion.div>
            </div>
        </section>
    );
}
