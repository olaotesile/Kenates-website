"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Search, X, FileText, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface SearchResult {
    title: string;
    description: string;
    href: string;
    category: string;
}

const SEARCH_DATA: SearchResult[] = [
    { title: "Introduction", description: "What is Kenate and why use it", href: "/documentation", category: "Getting Started" },
    { title: "Installation", description: "Set up Kenate with CMake and Visual Studio", href: "/documentation/installation", category: "Getting Started" },
    { title: "Project Structure", description: "Folder layout and file organization", href: "/documentation/structure", category: "Getting Started" },
    { title: "Philosophy", description: "State machines and modular design", href: "/documentation/philosophy", category: "Core Concepts" },
    { title: "The Engine", description: "The 1000Hz C++ Engine tick loop", href: "/documentation/reactive", category: "Core Concepts" },
    { title: "Hardware Plugins", description: "Raspberry Pi, Serial, ODrive, Mock", href: "/documentation/hardware", category: "API Reference" },
    { title: "Motor API", description: "set_motor_speed, set_servo_angle, stop_all_motors", href: "/documentation/motors", category: "API Reference" },
    { title: "Sensor API", description: "get_distance, get_encoder, get_battery_voltage", href: "/documentation/sensors", category: "API Reference" },
    { title: "Standard Library", description: "WaitState, SequenceState, ParallelState, StopState", href: "/documentation/logic", category: "API Reference" },
    { title: "CLI Commands", description: "kenate init, build, run, test, visualize", href: "/documentation/cli", category: "Tools" },
    { title: "Visualizer", description: "Real-time debugging dashboard", href: "/documentation/visualizer", category: "Tools" },
    { title: "Build a Hexapod", description: "Tutorial: six-legged walking robot", href: "/documentation/tutorials/hexapod", category: "Tutorials" },
];

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const filteredResults = query.trim()
        ? SEARCH_DATA.filter(
            (item) =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase())
        )
        : SEARCH_DATA;

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            setQuery("");
            setSelectedIndex(0);
        }
    }, [isOpen]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex((prev) => Math.min(prev + 1, filteredResults.length - 1));
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex((prev) => Math.max(prev - 1, 0));
            } else if (e.key === "Enter" && filteredResults[selectedIndex]) {
                e.preventDefault();
                router.push(filteredResults[selectedIndex].href);
                onClose();
            } else if (e.key === "Escape") {
                onClose();
            }
        },
        [filteredResults, selectedIndex, router, onClose]
    );

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-xl mx-4 bg-neutral-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                    <Search size={18} className="text-neutral-500" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search documentation..."
                        className="flex-1 bg-transparent text-white placeholder:text-neutral-500 outline-none text-sm"
                    />
                    <button
                        onClick={onClose}
                        className="text-neutral-500 hover:text-white transition-colors"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Results */}
                <div className="max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-800 [&::-webkit-scrollbar-thumb]:bg-neutral-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                    {filteredResults.length === 0 ? (
                        <div className="px-4 py-8 text-center text-neutral-500 text-sm">
                            No results found for "{query}"
                        </div>
                    ) : (
                        <div className="py-2">
                            {filteredResults.map((result, index) => (
                                <button
                                    key={result.href}
                                    onClick={() => {
                                        router.push(result.href);
                                        onClose();
                                    }}
                                    className={cn(
                                        "w-full px-4 py-3 flex items-center gap-3 text-left transition-colors",
                                        index === selectedIndex
                                            ? "bg-emerald-500/10 text-white"
                                            : "hover:bg-white/5 text-neutral-300"
                                    )}
                                >
                                    <FileText size={16} className="text-neutral-500 flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-medium truncate">{result.title}</div>
                                        <div className="text-xs text-neutral-500 truncate">{result.description}</div>
                                    </div>
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-neutral-500 flex-shrink-0">
                                        {result.category}
                                    </span>
                                    {index === selectedIndex && (
                                        <ArrowRight size={14} className="text-emerald-400 flex-shrink-0" />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="px-4 py-2 border-t border-white/10 flex items-center gap-4 text-[10px] text-neutral-500">
                    <span className="flex items-center gap-1">
                        <kbd className="px-1 py-0.5 rounded bg-white/10 font-mono">↑↓</kbd> navigate
                    </span>
                    <span className="flex items-center gap-1">
                        <kbd className="px-1 py-0.5 rounded bg-white/10 font-mono">↵</kbd> select
                    </span>
                    <span className="flex items-center gap-1">
                        <kbd className="px-1 py-0.5 rounded bg-white/10 font-mono">esc</kbd> close
                    </span>
                </div>
            </div>
        </div>
    );
}
