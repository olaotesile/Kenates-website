"use client";
import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InstallationPage() {
    const [copied, setCopied] = useState<number | null>(null);

    const copyCommand = (cmd: string, index: number) => {
        navigator.clipboard.writeText(cmd);
        setCopied(index);
        setTimeout(() => setCopied(null), 2000);
    };

    const steps = [
        { cmd: "git clone https://github.com/olaotesile/kenate.git", desc: "Download the source code" },
        { cmd: "cd kenate", desc: "Enter the project folder" },
        { cmd: "mkdir build && cd build", desc: "Create the build directory" },
        { cmd: 'cmake -G "Visual Studio 17 2022" ..', desc: "Configure the build" },
        { cmd: "cmake --build . --config Release", desc: "Compile the C++ Engine" },
    ];

    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Getting Started</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Installation
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Kenate requires compiling the C++ Engine once. After that, you write pure Python. Promise.
                </p>
            </div>

            {/* Prerequisites */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Prerequisites</h2>
                <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4 marker:text-emerald-500">
                    <li><span className="text-white font-medium">Windows:</span> Visual Studio 2022 (Community Edition is free)</li>
                    <li><span className="text-white font-medium">Python:</span> Version 3.8 or newer</li>
                    <li><span className="text-white font-medium">CMake:</span> A tool to build C++ projects</li>
                </ul>
            </div>

            {/* Installation Steps */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Step-by-Step Setup</h2>

                <div className="space-y-3">
                    {steps.map((step, i) => (
                        <div key={i} className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden">
                            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
                                <span className="text-xs text-neutral-500 font-mono">Step {i + 1}: {step.desc}</span>
                            </div>
                            <div className="p-4 flex items-center justify-between group">
                                <div className="font-mono text-sm text-neutral-300">
                                    <span className="text-emerald-500 select-none">$ </span>
                                    {step.cmd}
                                </div>
                                <button
                                    onClick={() => copyCommand(step.cmd, i)}
                                    className="p-2 rounded-md hover:bg-white/10 text-neutral-500 hover:text-white transition-colors"
                                    title="Copy to clipboard"
                                >
                                    {copied === i ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 mt-6">
                    <p className="text-emerald-200/80 text-sm">
                        <span className="font-bold text-emerald-400 block mb-1">Done!</span>
                        The C++ Engine is now compiled. You'll find <code className="bg-emerald-500/20 px-1 rounded">kenate_bindings.pyd</code> in your build folder.
                    </p>
                </div>
            </div>

            {/* Create Your First Project */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Create Your First Project</h2>
                <p className="text-neutral-400">Use the CLI to scaffold a new robot project:</p>

                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden">
                    <div className="p-4 flex items-center justify-between group">
                        <div className="font-mono text-sm text-neutral-300">
                            <span className="text-emerald-500 select-none">$ </span>
                            kenate init my_robot
                        </div>
                        <button
                            onClick={() => copyCommand("kenate init my_robot", 99)}
                            className="p-2 rounded-md hover:bg-white/10 text-neutral-500 hover:text-white transition-colors"
                            title="Copy to clipboard"
                        >
                            {copied === 99 ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                        </button>
                    </div>
                </div>

                <p className="text-neutral-500 text-sm">
                    This creates a project folder with <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">hardware.toml</code>,
                    <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded ml-1">main.py</code>, and a
                    <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded ml-1">states/</code> folder.
                </p>
            </div>

            {/* Note */}
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <p className="text-yellow-200/80 text-sm">
                    <span className="font-bold text-yellow-500 block mb-1">Note</span>
                    Kenate is still in active development. Some APIs may change in future releases.
                </p>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Introduction
                        </div>
                    </Link>
                    <Link href="/documentation/structure" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Project Structure
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
