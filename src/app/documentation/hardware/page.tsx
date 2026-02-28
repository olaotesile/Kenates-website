"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HardwarePage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Body Data</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Robot Profiles
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Kenate is a universal framework. To ensure compatibility with any machine, we separate the <span className="text-white font-medium">Brain Logic</span> from the <span className="text-white font-medium">Body Data</span>.
                </p>
            </div>

            {/* What is a Profile? */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">What is a Robot Profile?</h2>
                <p className="text-neutral-400 leading-relaxed">
                    A Robot Profile (e.g., <code className="bg-white/5 px-1 rounded text-blue-400">drone_v1.json</code>) is a blueprint of your specific hardware. The Kenate Engine reads this blueprint at startup to understand its physical limits and safety thresholds.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
                        <h4 className="text-white font-medium text-sm">Portability</h4>
                        <p className="text-xs text-neutral-500 leading-relaxed">Run the same mission code on multiple robots just by swapping the profile JSON.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
                        <h4 className="text-white font-medium text-sm">Safety</h4>
                        <p className="text-xs text-neutral-500 leading-relaxed">Protect hardware by defining Thermal and Battery thresholds without hardcoding them.</p>
                    </div>
                </div>
            </div>

            {/* JSON Schema */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Standard Profile Schema</h2>
                <p className="text-neutral-400 leading-relaxed">
                    The Robot Profile requires these top-level keys for safe deployment. Missing keys will trigger a <span className="text-red-400 font-mono">Kernel Halt</span> on initialization.
                </p>

                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 overflow-x-auto">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`{
  "ROBOT_ID": "X-SERIES-001",
  "SAFETY": {
    "MAX_TEMP": 85.0,
    "MIN_BATTERY": 15
  },
  "PARAMETERS": {
    "MAX_WHEEL_SPEED": 1.25,
    "GAINS_P": 0.5
  }
}`}
                    </pre>
                </div>

                <div className="grid gap-4 mt-6">
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                        <h4 className="text-white font-medium text-sm mb-1">ROBOT_ID</h4>
                        <p className="text-xs text-neutral-500">Unique identifier used for network discovery and telemetry tagging.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                        <h4 className="text-white font-medium text-sm mb-1">SAFETY</h4>
                        <p className="text-xs text-neutral-500">Global thresholds for hardware protection (Auto-abort logic).</p>
                    </div>
                </div>
            </div>

            {/* Example JSON */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">The Blueprint (JSON)</h2>
                <p className="text-neutral-400">A typical rover profile looks like this:</p>
                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 overflow-x-auto">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`{
    "ROBOT_ID": "ROVER-01",
    "MAX_WHEEL_SPEED": 2.0,
    "SAFETY": {
        "MAX_TEMP": 75.0,
        "SIGNAL_MIN": 20
    }
}`}
                    </pre>
                </div>
            </div>

            {/* Usage in Code */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Loading the Profile</h2>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 overflow-x-auto">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`config = kenate.ConfigLoader()
config.load("your_custom_robot.json")`}
                    </pre>
                </div>
                <p className="text-sm text-neutral-500">
                    Users are encouraged to rename, modify, or replace the included templates to match their specific robotic hardware.
                </p>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/reactive" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            The Heartbeat
                        </div>
                    </Link>
                    <Link href="/documentation/motors" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Motor API
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function PluginCard({ name, type, description }: { name: string; type: string; description: string }) {
    return (
        <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-5">
            <div className="flex items-center gap-3 mb-2">
                <h4 className="text-white font-medium">{name}</h4>
                <code className="text-xs bg-white/5 px-2 py-0.5 rounded text-neutral-400">type = "{type}"</code>
            </div>
            <p className="text-neutral-400 text-sm">{description}</p>
        </div>
    );
}
