"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LogicPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">API Reference</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Standard Library
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Pre-built logic modules for the stuff you shouldn't have to write yourself. Import them from <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">kenate.lib</code> and save yourself a week of debugging.
                </p>
            </div>

            {/* Modules */}
            <div className="space-y-8">
                {/* Motion Lib */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">kenate.lib.Motion</h2>
                    <p className="text-neutral-400">High-level movement commands that handle ramp-up and ramp-down internally, because physics exists and instant acceleration destroys gearboxes.</p>
                    <div className="grid gap-3">
                        <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                            <code className="text-emerald-400 font-mono text-sm">move_smooth(distance, speed)</code>
                            <p className="text-xs text-neutral-500 mt-1">Moves a set distance with s-curve acceleration.</p>
                        </div>
                        <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                            <code className="text-emerald-400 font-mono text-sm">rotate_fixed(angle, speed)</code>
                            <p className="text-xs text-neutral-500 mt-1">Rotates the robot on its axis using IMU feedback.</p>
                        </div>
                    </div>
                </div>
                {/* Standard Library Catalog */}
                <div className="space-y-12">
                    <div className="grid gap-6">
                        <LibraryItem
                            title="WaitState"
                            signature="WaitState(duration)"
                            purpose="Provides precision timed pauses without blocking the control loop."
                        />
                        <LibraryItem
                            title="SequenceState"
                            signature="SequenceState([states])"
                            purpose="Chains multiple behaviors into a single autonomous flow."
                        />
                        <LibraryItem
                            title="PIDState"
                            signature="PIDState(p, i, d, t)"
                            purpose="Industry-standard math for smooth, precise motor positioning."
                        />
                        <LibraryItem
                            title="WatchdogState"
                            signature="WatchdogState(timeout)"
                            purpose="A background safety guardian that monitors system health."
                        />
                        <LibraryItem
                            title="BlackBoxLogger"
                            signature="BlackBoxLogger()"
                            purpose="Captures high-frequency (1000Hz) telemetry data for post-mission analysis."
                        />
                        <LibraryItem
                            title="TerminalVisualizer"
                            signature="TerminalVisualizer(id)"
                            purpose="A live-updating console dashboard for real-time mission monitoring."
                        />
                    </div>
                </div>

                {/* Patterns */}
                <div className="space-y-6 pt-10 border-t border-white/5">
                    <h2 className="text-2xl font-semibold text-white font-mono">Advanced Pattern: Observer Watchdog</h2>
                    <div className="space-y-4 text-neutral-400 leading-relaxed">
                        <p>
                            Don't write safety logic inside every single state; you'll forget one and melt a battery. Instantiate a <code className="text-emerald-400">WatchdogState</code> in the background. It perfectly separates your <span className="text-white underline">Mission Goal</span> from <span className="text-white underline">"Please don't explode."</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Example */}
            <div className="space-y-4 pt-6">
                <h2 className="text-2xl font-semibold text-white">The Pattern</h2>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 overflow-x-auto">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`from kenate.lib import Motion, Safety

class PatrolState(kenate.BaseState):
    def on_update(self):
        # Use lib instead of raw motor math
        Motion.move_smooth(1.0, 0.5)`}
                    </pre>
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/sensors" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Sensor API
                        </div>
                    </Link>
                    <Link href="/documentation/visualizer" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Visualizer
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function LibraryItem({ title, signature, purpose }: { title: string; signature: string; purpose: string }) {
    return (
        <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <code className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono">{signature}</code>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed font-mono italic">
                {purpose}
            </p>
        </div>
    );
}
