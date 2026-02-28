"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StructurePage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Organization</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Project Structure
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Kenate projects are organized to separate mission logic from hardware configuration. This ensures consistency across all robotic platforms.
                </p>
            </div>

            {/* File Tree */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Standard Layout</h2>
                <p className="text-neutral-400">
                    When you run <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">kenate init</code>, the system scaffolds this structure:
                </p>

                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 font-mono text-sm">
                    <div className="space-y-1">
                        <TreeItem name="my_robot/" isFolder />
                        <TreeItem name="configs/" indent={1} isFolder desc="Robot Profiles (.json)" />
                        <TreeItem name="drone_v1.json" indent={2} />
                        <TreeItem name="src/" indent={1} isFolder desc="Mission Logic" />
                        <TreeItem name="patrol.py" indent={2} isCode />
                        <TreeItem name="main.py" indent={2} desc="Entry point" isCode />
                        <TreeItem name="examples/" indent={1} isFolder desc="Reference Templates" />
                        <TreeItem name="python/" indent={1} isFolder desc="Framework Libraries" />
                        <TreeItem name=".kenate_logs/" indent={1} isFolder isDim desc="Mission Telemetry" />
                        <TreeItem name="build/" indent={1} isFolder isDim desc="Hardware Bridge Binaries" />
                    </div>
                </div>
            </div>

            {/* Key Areas */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">The src/ Directory</h2>
                <p className="text-neutral-400">
                    The <code className="text-emerald-400 bg-emerald-500/10 px-1 rounded">src/</code> folder is where you live. Place all your autonomous state definitions and mission launcher scripts here. Engineers should never write mission logic in the framework folders.
                </p>

                <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white">
                        <code className="text-blue-400">configs/robot_profile.json</code>
                    </h3>
                    <p className="text-neutral-400">
                        The "blueprint" of your hardware. By separating the <span className="text-white">Brain Logic</span> from the <span className="text-white">Body Data</span>, you can run the same mission code on different robots just by swapping this file.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white">
                        <code className="text-yellow-400">.kenate_logs/</code>
                    </h3>
                    <p className="text-neutral-400">
                        The high-speed "Black Box." This directory stores high-frequency telemetry data for post-mission analysis. If a robot crashes, you can "rewind" this data to see exactly what happened.
                    </p>
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/installation" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Installation
                        </div>
                    </Link>
                    <Link href="/documentation/philosophy" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Philosophy
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function TreeItem({ name, indent = 0, isFolder, isCode, isDim, desc }: { name: string; indent?: number; isFolder?: boolean; isCode?: boolean; isDim?: boolean; desc?: string }) {
    const color = isDim ? "text-neutral-600" : isFolder ? "text-yellow-400" : isCode ? "text-emerald-400" : "text-neutral-300";
    return (
        <div className="flex items-center gap-2" style={{ paddingLeft: `${indent * 1.5}rem` }}>
            <span className={color}>{name}</span>
            {desc && <span className="text-neutral-600 text-xs ml-2">{desc}</span>}
        </div>
    );
}
