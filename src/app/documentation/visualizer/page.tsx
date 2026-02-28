"use client";
import Link from "next/link";
import { ArrowRight, Activity } from "lucide-react";

export default function VisualizerPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Diagnostics</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Visualizer & Telemetry
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    High-speed robotics requires high-speed debugging. The Kenate Visualizer streams full telemetry at <span className="text-white font-medium">1000Hz</span> for sub-millisecond inspection.
                </p>
            </div>

            {/* Black Box */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                <h4 className="text-blue-400 font-medium mb-2 flex items-center gap-2">
                    <Activity size={18} />
                    Black Box Logging
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                    By default, the Kenate Engine writes high-frequency data to the <code className="bg-blue-500/20 px-1 rounded text-blue-300">.kenate_logs/</code> directory. The Visualizer can replay these logs frame-by-frame to analyze precisely what happened before a crash.
                </p>
            </div>

            {/* How to Launch */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Live Dashboard</h2>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 font-mono text-sm text-neutral-300">
                    $ kenate visualize --live
                </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                    <h3 className="font-medium text-white mb-2">Atomic State Flow</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">Visualize the state machine transitions as a node graph. Instant visual feedback on logic loops.</p>
                </div>
                <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                    <h3 className="font-medium text-white mb-2">System Vitals</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">Live thermal monitoring and battery discharge curves to prevent hardware damage.</p>
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/logic" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Standard Library
                        </div>
                    </Link>
                    <Link href="/documentation/tutorials/hexapod" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Hexapod Walk
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
            <h3 className="font-medium text-white mb-1">{title}</h3>
            <p className="text-sm text-neutral-400">{description}</p>
        </div>
    );
}
