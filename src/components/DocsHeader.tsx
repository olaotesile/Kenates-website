"use client";
import React from "react";
import Link from "next/link";
import { Search, Github, Sun, Menu, X, Command } from "lucide-react";

interface DocsHeaderProps {
    onOpenMobileMenu: () => void;
    isMobileMenuOpen: boolean;
}

export function DocsHeader({ onOpenMobileMenu, isMobileMenuOpen }: DocsHeaderProps) {
    return (
        <header className="fixed top-0 left-0 right-0 h-14 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5 z-50 flex items-center justify-between px-4 lg:px-6">
            {/* Left: Logo & Mobile Toggle */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onOpenMobileMenu}
                    className="p-1 -ml-1 text-neutral-400 hover:text-white lg:hidden"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    Kenate
                </Link>

                <div className="hidden md:flex items-center gap-2 pl-4 border-l border-white/10 ml-4">
                    <span className="text-sm font-medium text-white/50 px-2 py-0.5 rounded-full border border-white/5 bg-white/5">Docs</span>
                    <span className="text-xs text-emerald-500 font-mono">v1.0</span>
                </div>
            </div>

            {/* Center: Search (Desktop) */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8 justify-center">
                <div className="w-full max-w-sm bg-neutral-900/50 border border-white/10 hover:border-white/20 transition-colors rounded-full px-4 py-1.5 flex items-center gap-3 text-neutral-500 cursor-pointer group">
                    <Search size={14} className="group-hover:text-neutral-300 transition-colors" />
                    <span className="text-sm">Search documentation...</span>
                    <div className="ml-auto flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded border border-white/10 bg-white/5 font-mono text-neutral-500">
                        <Command size={10} />
                        K
                    </div>
                </div>
            </div>

            {/* Right: Icons */}
            <div className="flex items-center gap-4">
                {/* Search Icon (Mobile) */}
                <button className="lg:hidden text-neutral-400 hover:text-white">
                    <Search size={20} />
                </button>

                <div className="h-4 w-[1px] bg-white/10 hidden lg:block" />

                <a
                    href="https://github.com/olaotesile/Kenates-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors"
                >
                    <Github size={20} />
                </a>

                {/* Theme Toggle (Visual Only) */}
                <button className="text-neutral-400 hover:text-yellow-400 transition-colors">
                    <Sun size={20} />
                </button>
            </div>
        </header>
    );
}
