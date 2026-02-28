"use client";
import React, { useState } from "react";
import { Check, Copy, Terminal, Cpu } from "lucide-react";
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
                <p className="text-emerald-500 font-mono text-xs mb-4">Setup Guide</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Installation
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Kenate requires a one-time build step to install the <span className="text-white font-medium">high-speed Hardware Bridge</span>. This ensures zero-lag communication between Python and electronics.
                </p>
            </div>

            {/* Why Build? */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 flex gap-4">
                <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        <Cpu size={16} className="text-blue-400" />
                    </div>
                </div>
                <div className="space-y-2">
                    <h4 className="text-sm font-medium text-blue-400">Why is this step necessary?</h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                        Unlike simple scripting, Kenate installs a 1000Hz Kernel. Without this build step, your robot would suffer from "digital stutter," making smooth control impossible.
                    </p>
                </div>
            </div>

            {/* Step 1 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-mono">01</span>
                    Install Core Framework
                </h2>
                <p className="text-neutral-400 leading-relaxed">
                    Kenate is a globally distributed system available via the PyPI registry. Install the framework and the global CLI tool using pip.
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 text-sm font-mono text-neutral-300">
                    $ pip install kenate --no-cache-dir
                </div>
            </div>

            {/* The God Command */}
            <div className="space-y-6 pt-6 border-t border-white/5">
                <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                    The "God Command"
                </h2>
                <p className="text-neutral-400 leading-relaxed">
                    The <code className="text-emerald-400 bg-emerald-500/10 px-1 rounded font-mono">kenate</code> command is your entry point to the entire ecosystem. It handles everything from scaffolding to deep telemetry analysis.
                </p>
                <div className="grid gap-4">
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-start gap-4">
                        <div className="mt-1 font-mono text-xs text-emerald-500">init</div>
                        <div>
                            <h4 className="text-white font-medium text-sm">kenate init [ProjectName]</h4>
                            <p className="text-xs text-neutral-500 mt-1">Scaffolds a professional robotics workspace with the Euretix Standard structure.</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-start gap-4">
                        <div className="mt-1 font-mono text-xs text-blue-500">run</div>
                        <div>
                            <h4 className="text-white font-medium text-sm">kenate run [MissionPath]</h4>
                            <p className="text-xs text-neutral-500 mt-1">Executes an autonomous mission using the high-speed Hardware Bridge.</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-start gap-4">
                        <div className="mt-1 font-mono text-xs text-purple-500">analyze</div>
                        <div>
                            <h4 className="text-white font-medium text-sm">kenate analyze</h4>
                            <p className="text-xs text-neutral-500 mt-1">Parses Black Box logs to generate performance reports (Thermal, Energy, Timing).</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Prerequisites */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Prerequisites</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
                        <h4 className="text-white font-medium mb-1 text-sm">C++ Compiler</h4>
                        <p className="text-xs text-neutral-500">Visual Studio 2022 (Win) or GCC (Linux)</p>
                    </div>
                    <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
                        <h4 className="text-white font-medium mb-1 text-sm">Python 3.10+</h4>
                        <p className="text-xs text-neutral-500">Required for high-level logic</p>
                    </div>
                    <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
                        <h4 className="text-white font-medium mb-1 text-sm">CMake 3.20+</h4>
                        <p className="text-xs text-neutral-500">Industry standard build tool</p>
                    </div>
                </div>
            </div>

            {/* Installation Steps */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Standard Build Process</h2>

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
                                >
                                    {copied === i ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 mt-6">
                    <p className="text-emerald-200/80 text-sm">
                        <span className="font-bold text-emerald-400 block mb-1">Bridge Active</span>
                        The Hardware Bridge is now installed. You'll find <code className="bg-emerald-500/20 px-1 rounded">kenate_bindings.pyd</code> in your build folder.
                    </p>
                </div>
            </div>

            {/* Initialize Project */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Bootstrap Your Mission</h2>
                <p className="text-neutral-400">Initialize a professional project structure via the CLI:</p>

                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden">
                    <div className="p-4 flex items-center justify-between group">
                        <div className="font-mono text-sm text-neutral-300">
                            <span className="text-emerald-500 select-none">$ </span>
                            kenate init my_mission
                        </div>
                        <button
                            onClick={() => copyCommand("kenate init my_mission", 99)}
                            className="p-2 rounded-md hover:bg-white/10 text-neutral-500 hover:text-white transition-colors"
                        >
                            {copied === 99 ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                        </button>
                    </div>
                </div>
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
