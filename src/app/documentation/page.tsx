import Link from "next/link";
import { ArrowRight, Terminal, Cpu, Zap, Layers } from "lucide-react";

export default function DocumentationPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">VERSION 1.0.6 • "THE GLOBAL RELEASE"</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Kenate Robotics Framework
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl">
                    Architected by <span className="text-white font-medium">Euretix Labs</span>, Kenate represents a paradigm shift in robotics. It is the first framework to treat robotic behavior as a set of isolated, high-performance modules.
                </p>
            </div>

            {/* Unique Value Props */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                        <Zap size={20} className="text-emerald-400" />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-2">1000Hz Deterministic Heartbeat</h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Kenate uses a dedicated C++ Kernel that pulses exactly 1000 times per second. This 1-millisecond accuracy eliminates "jitter," providing the heartbeat required for professional-grade motion control.
                        </p>
                    </div>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        <Terminal size={20} className="text-blue-400" />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Hybrid Kernel Exclusivity</h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Write high-level logic in Python while maintaining the hardcore performance of C++. The Engine handles memory management, high-speed sensor polling, and motor timing automatically.
                        </p>
                    </div>
                </div>
            </div>

            {/* The Evolution */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">The Evolution of Robotic Programming</h2>
                <div className="space-y-4 text-neutral-400 leading-relaxed">
                    <p>
                        The Kenate framework was developed by Euretix Labs in 2025 as a direct response to the fragility of traditional robotic software. For decades, developers relied on monolithic control loops dominated by <span className="text-red-400">"Spaghetti Logic"</span>, endless chains of if-else statements that became impossible to debug as systems evolved.
                    </p>
                    <p>
                        Kenate represents a paradigm shift. It is the first framework to treat robotic behavior as a set of isolated, high-performance modules. By replacing "scripts" with <span className="text-emerald-400 font-mono">"states,"</span> Kenate allows for the creation of autonomous systems that are modular by design and impossible to break by accident.
                    </p>
                </div>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Features at a Glance</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <FeatureCard
                        icon={<Layers className="text-purple-400" />}
                        title="Atomic State Design"
                        description="Never build a State that does two major jobs. If a robot needs to move and clean, build two states."
                    />
                    <FeatureCard
                        icon={<Cpu className="text-yellow-400" />}
                        title="Hardware Abstraction"
                        description="Switch hardware platforms by changing one line in your config, not your Python code."
                    />
                    <FeatureCard
                        icon={<ArrowRight className="text-blue-400" />}
                        title="Enterprise Grade"
                        description="Optimized for mission-critical autonomy, with built-in safety and thermal watchdogs."
                    />
                </div>
            </div>

            {/* Code Snippet */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">The Atomic Pattern</h2>
                <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0A]">
                    <div className="flex items-center px-4 py-2 border-b border-white/5 bg-[#0A0A0A]">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <span className="ml-4 text-xs text-neutral-500 font-mono">src/patrol.py</span>
                    </div>
                    <div className="p-6 overflow-x-auto">
                        <pre className="font-mono text-sm leading-relaxed text-neutral-300">
                            {`class PatrolMode(kenate.BaseState):
    def on_update(self):
        self.set_velocity(0.5)
        if self.get_distance() < 25:
            # Atomic transition to EvadeMode
            self.engine.set_state("Evade")`}
                        </pre>
                    </div>
                </div>
            </div>

            {/* Next Steps */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <div></div>
                    <Link href="/documentation/installation" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next Step</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Installation Guide
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-3">
                {icon}
            </div>
            <h3 className="font-medium text-white mb-1">{title}</h3>
            <p className="text-sm text-neutral-400">{description}</p>
        </div>
    );
}
