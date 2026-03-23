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
                    Okay so this is the part where i'm supposed to become all serious and get professional but know what..nahhh
                    <br/><br/>
                    So Kenate is a high-performance framework that saves you from yourself, treating robotic behavior as isolated modules so your code actually works.
            </div>

            {/* Unique Value Props */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-4">
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Runs on a 1000Hz C++ Engine</h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Because the real world doesn't wait for garbage collection. Our dedicated C++ Engine runs exactly 1000 times a second. It's completely flawless and so fast that even some Series Y robotics companies aren't this good yet.
                        </p>
                    </div>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 space-y-4">
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Write Python, Run C++</h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Since a lot of people like Python already, I made it so you just keep writing Python, but it remains incredibly fast and efficient because the underlying C++ engine handles the heavy lifting. You're welcome.
                        </p>
                    </div>
                </div>
            </div>

            {/* The Evolution */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Why Does This Exist?</h2>
                <div className="space-y-4 text-neutral-400 leading-relaxed">
                    <p>
                        Because traditional robotic software is fragile garbage. For decades, developers relied on monolithic control loops dominated by <span className="text-red-400">"Spaghetti Logic"</span>, endless chains of if-else statements that became impossible to debug the second the system actually did something complicated.
                    </p>
                    <p>
                        Kenate is the fix. By replacing messy "scripts" with self-contained <span className="text-emerald-400 font-mono">"States,"</span> you get the power to create autonomous systems that are modular by design—making it practically impossible to break your robot by accident.
                    </p>
                </div>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Features at a Glance</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <FeatureCard
                        title="Atomic State Design"
                        description="Don't build a State that does two major jobs. If a robot needs to move and clean, build two states. It's not that hard."
                    />
                    <FeatureCard
                        title="Hardware Abstraction"
                        description="Swap out a motor platform by changing one line in your config instead of rewriting your entire codebase. You're welcome."
                    />
                    <FeatureCard
                        title="Enterprise Grade"
                        description="Built-in thermal and safety watchdogs, because robots are expensive and melting them is bad."
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

function FeatureCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
            <h3 className="font-medium text-white mb-1">{title}</h3>
            <p className="text-sm text-neutral-400">{description}</p>
        </div>
    );
}
