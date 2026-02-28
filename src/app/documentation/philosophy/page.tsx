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
                    Kenate is built on one core belief: <span className="text-white font-medium">robotics code should be modular, not monolithic.</span> We replace scripts with specialist behaviors.
                </p>
            </div>

            {/* Atomic States */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">The Atomic State Paradigm</h2>
                <div className="space-y-4 text-neutral-400 leading-relaxed">
                    <p>
                        Kenate represents a paradigm shift. It is the first framework to treat robotic behavior as a set of isolated, high-performance modules. By replacing "scripts" with <span className="text-emerald-400 font-mono">"Atomic States,"</span> Kenate allows for the creation of autonomous systems that are modular by design and impossible to break by accident.
                    </p>
                    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-6">
                        <h4 className="text-emerald-400 font-medium mb-2">Definition: Atomic State</h4>
                        <p className="text-sm">
                            A behavioral module that performs <span className="text-white">exactly one task perfectly</span>. Never build a State that does two major jobs. If a robot needs to move and clean, build two states.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Kenate? */}
            <div className="space-y-6 pt-6 border-t border-white/5">
                <h2 className="text-2xl font-semibold text-white">Why Kenate?</h2>
                <p className="text-neutral-400 leading-relaxed">
                    Traditional robotic software relies on monolithic control loops. As systems evolve, these become "Spaghetti Logic"—endless chains of if-else statements. Kenate enforces a disciplined lifecycle: <span className="text-white font-medium">Init, Run, Analyze.</span>
                </p>
            </div>

            {/* Principles */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Core Principles</h2>
                <div className="space-y-4">
                    <PrincipleCard
                        title="Modularity"
                        description="Each behavior is a self-contained State class. You can add, remove, or modify states without affecting others. It's like Lego, but for robot brains."
                    />
                    <PrincipleCard
                        title="Hybrid Performance"
                        description="Write in easy Python; execute in high-speed C++. The 1000Hz Kernel ensures precise timing for smooth robot motion."
                    />
                    <PrincipleCard
                        title="Determinism"
                        description="The Heartbeat guarantees your code runs at exact intervals. No more 'jitter' or missed sensor readings. Predictable is professional."
                    />
                </div>
            </div>

            {/* Watchdog Pattern */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">The Watchdog Pattern</h2>
                <p className="text-neutral-400 leading-relaxed">
                    For production-grade autonomy, Euretix Labs recommends the <span className="text-yellow-400">Watchdog</span> pattern.
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`# The Watchdog constantly monitors system health
class ThermalWatchdog(kenate.ThresholdState):
    def on_update(self):
        if self.get_system_temperature() > 85.0:
            # Overrides ANY active mission state
            self.engine.set_state("Safety")`}
                    </pre>
                </div>
                <p className="text-neutral-500 text-sm italic">
                    Always include a background state that monitors system vitals (heat, battery, signal).
                </p>
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
                            The Heartbeat
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
