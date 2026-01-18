"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PhilosophyPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Core Concepts</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Philosophy
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Kenate is built on one core belief: <span className="text-white font-medium">robotics code should be modular, not monolithic.</span>
                </p>
            </div>

            {/* The Problem */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">The Problem with Traditional Robotics</h2>
                <p className="text-neutral-400 leading-relaxed">
                    Most robot code looks like this: one giant <code className="text-red-400 bg-red-500/10 px-1 py-0.5 rounded">main.py</code> file
                    with a massive <code className="text-red-400 bg-red-500/10 px-1 py-0.5 rounded">while True:</code> loop.
                    Everything is jammed together: sensor reading, motor control, state transitions, error handling. It's a mess.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                    When something breaks, you're debugging the entire robot. When you want to add a feature, you risk breaking everything else. Been there, debugged that.
                </p>
            </div>

            {/* The Solution */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">The Kenate Solution: States</h2>
                <p className="text-neutral-400 leading-relaxed">
                    Kenate forces you to think in <span className="text-emerald-400 font-medium">States</span>.
                    Each behavior your robot can perform is a separate, isolated Python class.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                        <h4 className="text-red-400 font-medium mb-2">Traditional</h4>
                        <p className="text-neutral-400 text-sm">
                            One file. One loop. Everything mixed together. Change one thing, break another.
                        </p>
                    </div>
                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                        <h4 className="text-emerald-400 font-medium mb-2">Kenate</h4>
                        <p className="text-neutral-400 text-sm">
                            Many small files. Each state is isolated. Fix <code className="bg-emerald-500/10 px-1 rounded">PatrolState</code> without touching <code className="bg-emerald-500/10 px-1 rounded">AlertState</code>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Core Principles */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Core Principles</h2>

                <div className="space-y-4">
                    <PrincipleCard
                        title="Modularity"
                        description="Each behavior is a self-contained State class. You can add, remove, or modify states without affecting others. It's like Lego, but for robot brains."
                    />
                    <PrincipleCard
                        title="Hybrid Performance"
                        description="You write easy Python. Under the hood, a C++ Engine runs at 1000Hz, ensuring precise timing for smooth robot motion. Best of both worlds."
                    />
                    <PrincipleCard
                        title="Determinism"
                        description="The Engine guarantees your on_update() runs at exact intervals. No more guessing about timing or missed sensor readings. Predictable is good."
                    />
                    <PrincipleCard
                        title="Separation of Concerns"
                        description="Your Python code handles 'what to do'. The C++ Engine handles 'when to do it'. You never write timing loops again. You're welcome."
                    />
                </div>
            </div>

            {/* The Sandwich */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">The Architecture Sandwich</h2>
                <p className="text-neutral-400 leading-relaxed">
                    Kenate is a three-layer system. Yes, we call it a sandwich. No, we will not apologize.
                </p>

                <div className="space-y-2 mt-4">
                    <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                        <div className="flex items-center gap-3">
                            <span className="text-emerald-400 font-mono text-sm w-24">Layer 3</span>
                            <span className="text-white font-medium">Your Python States</span>
                            <span className="text-neutral-500 text-sm ml-auto">You work here</span>
                        </div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                        <div className="flex items-center gap-3">
                            <span className="text-blue-400 font-mono text-sm w-24">Layer 2</span>
                            <span className="text-white font-medium">Pybind11 Bridge</span>
                            <span className="text-neutral-500 text-sm ml-auto">Translates Python to C++</span>
                        </div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                        <div className="flex items-center gap-3">
                            <span className="text-yellow-400 font-mono text-sm w-24">Layer 1</span>
                            <span className="text-white font-medium">C++ Engine</span>
                            <span className="text-neutral-500 text-sm ml-auto">The 1000Hz brain</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/structure" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Project Structure
                        </div>
                    </Link>
                    <Link href="/documentation/reactive" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            The Engine
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function PrincipleCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
            <h4 className="text-white font-medium mb-1">{title}</h4>
            <p className="text-neutral-400 text-sm">{description}</p>
        </div>
    );
}
