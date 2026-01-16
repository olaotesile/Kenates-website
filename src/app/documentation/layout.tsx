"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Book, Code2, Cpu, Home, Menu, X } from "lucide-react";
import { useState } from "react";

const sidebarItems = [
    {
        title: "Getting Started",
        items: [
            { title: "Introduction", href: "/documentation" },
            { title: "Installation", href: "/documentation/installation" },
            { title: "Project Structure", href: "/documentation/structure" },
        ],
    },
    {
        title: "Core Concepts",
        items: [
            { title: "The Kenate Philosophy", href: "/documentation/philosophy" },
            { title: "Reactive Robotics", href: "/documentation/reactive" },
            { title: "Hardware Hardware", href: "/documentation/hardware" },
        ],
    },
    {
        title: "API Reference",
        items: [
            { title: "Motors & Actuators", href: "/documentation/motors" },
            { title: "Sensors", href: "/documentation/sensors" },
            { title: "Logic Blocks", href: "/documentation/logic" },
        ],
    },
    {
        title: "Tutorials",
        items: [
            { title: "Build a Hexapod", href: "/documentation/tutorials/hexapod" },
        ],
    },
];

import { DocsHeader } from "@/components/DocsHeader";

export default function DocumentationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-emerald-500/30">
            {/* Unified Header */}
            <DocsHeader
                onOpenMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                isMobileMenuOpen={isMobileMenuOpen}
            />

            <div className="pt-14 max-w-[1400px] mx-auto flex h-screen">
                {/* Sidebar */}
                <aside
                    className={cn(
                        "fixed top-14 left-0 bottom-0 w-64 bg-neutral-950 border-r border-white/5 pt-8 px-6 lg:static lg:block z-40 transition-transform duration-300 ease-in-out overflow-y-auto pb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
                        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    )}
                >
                    <div className="mb-8 hidden lg:flex items-center gap-2 font-bold text-xl px-2">
                        {/* Desktop Logo is now in Header, relying on sidebar nav only */}
                        {/* But we might want 'On this page' or just keep nav */}
                        {/* Actually, the mock shows sidebar starting with 'Getting Started'. */}
                        {/* So we can hide the Logo in sidebar on desktop too if header has it. */}
                        {/* Let's keep it visible for now or hide if header persists? */}
                        {/* User asked for header like the image. The image has logo in header. */}
                        {/* I will hide the sidebar logo on desktop since it's in the header. */}
                        {/* Keeping content, removing logo block. */}
                    </div>
                    {/* If I remove the logo block, I need to remove lines 77-82? */}
                    {/* Wait, the existing code has a logo block. I will replace it with empty or remove. */}
                    {/* Let's keep the code structure simple. */}

                    <div className="space-y-8">
                        {sidebarItems.map((section) => (
                            <div key={section.title}>
                                <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4 px-2">
                                    {section.title}
                                </h4>
                                <ul className="space-y-1">
                                    {section.items.map((item) => {
                                        const isActive = pathname === item.href;
                                        return (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className={cn(
                                                        "block px-2 py-1.5 text-sm rounded-md transition-colors",
                                                        isActive
                                                            ? "bg-emerald-500/10 text-emerald-400 font-medium"
                                                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                                                    )}
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5 space-y-2">
                        <Link href="/" className="flex items-center gap-3 px-2 py-2 text-sm text-neutral-400 hover:text-white transition-colors">
                            <Home size={16} />
                            Back to Home
                        </Link>
                        <a href="https://github.com/olaotesile/Kenates-website" target="_blank" rel="noopener" className="flex items-center gap-3 px-2 py-2 text-sm text-neutral-400 hover:text-white transition-colors">
                            <Code2 size={16} />
                            GitHub Repo
                        </a>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 min-w-0 py-12 px-6 lg:px-12 xl:px-16 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-950 [&::-webkit-scrollbar-thumb]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-neutral-600">
                    <div className="max-w-3xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>

            {/* Overlay for mobile sidebar */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 top-14 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </div>
    );
}
