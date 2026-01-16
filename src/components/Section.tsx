"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    wait?: number;
}

export function Section({ children, className, id, wait = 0 }: SectionProps) {
    return (
        <section id={id} className={cn("py-20 px-6 md:px-12 max-w-7xl mx-auto", className)}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: wait, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
}
