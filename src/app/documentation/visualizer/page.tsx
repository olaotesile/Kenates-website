"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function VisualizerPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Tools</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Visualizer
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    A real-time dashboard that connects to your running robot and shows you exactly what's happening under the hood. It's like x-ray vision for robots.
                </p>
            </div>

            {/* How to Launch */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">How to Launch</h2>
                <p className="text-neutral-400">
                    Run this command while your robot is connected:
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`$ kenate visualize

Starting WebSocket server on :8080
Opening dashboard at http://localhost:3000`}
                    </pre>
                </div>
                <p className="text-neutral-500 text-sm">
                    Your browser will open automatically to the dashboard. Fancy, right?
                </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Features</h2>

                <div className="grid md:grid-cols-2 gap-4">
                    <FeatureCard
                        title="State Viewer"
                        description="See exactly which State is active right now. Watch transitions happen in real-time."
                    />
                    <FeatureCard
                        title="Sensor Graphs"
                        description="Real-time graphs of distance sensors, encoders, IMU heading, and battery voltage."
                    />
                    <FeatureCard
                        title="Motor Monitor"
                        description="See the current speed of all motors. Instantly spot if something is stuck or not responding."
                    />
                    <FeatureCard
                        title="Transition Debugger"
                        description="Visualize state transitions as a graph. Debug why your robot switched states unexpectedly."
                    />
                </div>
            </div>

            {/* How It Works */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">How It Works</h2>
                <p className="text-neutral-400 leading-relaxed">
                    The visualizer connects to your running Engine via WebSocket. Every tick, the Engine sends:
                </p>
                <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4 marker:text-emerald-500">
                    <li>Current state name</li>
                    <li>All sensor readings</li>
                    <li>All motor speeds</li>
                    <li>Log messages</li>
                    <li>State transition history</li>
                </ul>
                <p className="text-neutral-400 leading-relaxed mt-4">
                    The dashboard renders this data in real-time. No polling. It's push-based and instant.
                </p>
            </div>

            {/* Best Practices */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Tips</h2>
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                    <ul className="space-y-2 text-sm text-emerald-200/80">
                        <li>Run <code className="bg-emerald-500/20 px-1 rounded">kenate visualize</code> on a separate machine if your robot's CPU is limited.</li>
                        <li>Use the "Pause" button to freeze the graph and inspect a specific moment.</li>
                        <li>Click on any state in the transition graph to see when and why it was entered.</li>
                    </ul>
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/cli" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            CLI Commands
                        </div>
                    </Link>
                    <Link href="/documentation/tutorials/hexapod" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Tutorials
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
