"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="glass p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300"
        >
            <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
