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
                    So why did I make this? Well, isn't it obvious enough yet!? Programming robots is hell!!<br /><br />
                    On a more serious note, Kenate is built on one core belief: <span className="text-white font-medium">robotic code should be modular, not a monolithic disaster.</span> I replace your chaotic scripts with highly-specialized behaviors.
                </p>
            </div>

            {/* Atomic States */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">The Atomic State Paradigm</h2>
                <div className="space-y-4 text-neutral-400 leading-relaxed">
                    <p>
                        Let's be real: putting all your robot's logic into one giant file is a great way to guarantee a catastrophic failure. Kenate forces you to be better. I treat robotic behavior as a set of isolated, high-performance modules. By replacing "scripts" with <span className="text-emerald-400 font-mono">"Atomic States,"</span> you get an autonomous system that's modular by design and nearly impossible to break by accident. (Though I'm sure someone will try).
                    </p>
                    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-6">
                        <h4 className="text-emerald-400 font-medium mb-2">Definition: Atomic State</h4>
                        <p className="text-sm">
                            A behavioral module that performs <span className="text-white">exactly one task perfectly</span>. Stop building States that try to do everything. If your robot needs to move and grab an object, that's two states. Simple.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Kenate? */}
            <div className="space-y-6 pt-6 border-t border-white/5">
                <h2 className="text-2xl font-semibold text-white">Why Kenate?</h2>
                <p className="text-neutral-400 leading-relaxed">
                    Because traditional robotic software rapidly devolves into "Spaghetti Logic"—endless chains of if-else statements that make you want to rip your hair out when a sensor glitches in production. Kenate enforces a disciplined lifecycle: <span className="text-white font-medium">Init, Run, Analyze.</span> It's the grown-up way to build robots.
                </p>
            </div>

            {/* Principles */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Core Principles</h2>
                <div className="space-y-4">
                    <PrincipleCard
                        title="Modularity"
                        description="Each behavior is a self-contained State class. Add, remove, or modify states without breaking the others. It's like Lego, but for robot brains."
                    />
                    <PrincipleCard
                        title="Hybrid Performance"
                        description="Write in comfortable Python, execute in blazing-fast C++. The 1000Hz Kernel does the heavy lifting so your robot moves smoothly instead of violently jerking around."
                    />
                    <PrincipleCard
                        title="Determinism"
                        description="The Heartbeat guarantees your code runs exactly when it should. No more 'jitter' or randomly missed sensor readings. Predictable is professional."
                    />
                </div>
            </div>

            {/* Watchdog Pattern */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">The Watchdog Pattern</h2>
                <p className="text-neutral-400 leading-relaxed">
                    For systems that actually need to survive in the real world, you use the <span className="text-yellow-400">Watchdog</span> pattern. Don't build robots without this unless you enjoy watching them catch fire.
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
