"use client";

import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { EffortlessSection } from "@/components/EffortlessSection";
// Compare component removed
import { FloatingDock } from "@/components/ui/floating-dock";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
// MacbookScroll moved to Hero
import { Section } from "@/components/Section";
import { GlobeDemo } from "@/components/GlobeDemo";
import {
    IconHome,
    IconTerminal2,
    IconBrandGithub,
    IconBrandTwitter,
    IconBooks
} from "@tabler/icons-react";

export default function Home() {
    const dockItems = [
        { title: "Home", icon: <IconHome className="h-full w-full text-neutral-300" />, href: "#" },
        { title: "Docs", icon: <IconBooks className="h-full w-full text-neutral-300" />, href: "#documentation" },
        { title: "Product", icon: <IconTerminal2 className="h-full w-full text-neutral-300" />, href: "#product" },
        { title: "Twitter", icon: <IconBrandTwitter className="h-full w-full text-neutral-300" />, href: "#" },
        { title: "GitHub", icon: <IconBrandGithub className="h-full w-full text-neutral-300" />, href: "https://github.com" },
    ];

    /* Updated Content for Compare */
    // standardCode and kenateCode removed

    return (
        <main className="min-h-screen bg-background overflow-x-hidden selection:bg-white/20">

            {/* Floating Dock - Fixed at TOP */}
            <div className="fixed top-10 left-0 right-0 z-50 flex justify-center pointer-events-none">
                <div className="pointer-events-auto">
                    <FloatingDock items={dockItems} />
                </div>
            </div>

            <Hero />

            <EffortlessSection />

            <Section id="globe" className="py-0 md:py-20">
                <GlobeDemo />
            </Section>

            {/* Compare Section Removed */}

            {/* Macbook Scroll moved to Hero */}

            <Footer />
        </main>
    );
}
