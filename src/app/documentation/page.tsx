import Link from "next/link";
import { ArrowRight, Terminal, Cpu, Zap, Layers } from "lucide-react";

export default function DocumentationPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Introduction</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    What is Kenate?
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed">
                    Kenate is <span className="text-white font-medium">"React for Robots"</span> — a framework that helps you build complex robot behaviors by breaking them down into small, isolated <span className="text-emerald-400">States</span>, not one giant script.
                </p>
            </div>

            {/* Note Block */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 flex gap-4">
                <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        <Terminal size={16} className="text-blue-400" />
                    </div>
                </div>
                <div className="space-y-2">
                    <h4 className="text-sm font-medium text-blue-400">Engineering Note</h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                        If you're used to writing `while True:` loops in Python with everything jammed together, this might feel different at first.
                        But once you taste modularity, you won't go back.
                    </p>
                </div>
            </div>

            {/* The Problem / Solution */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">The Problem</h2>
                <p className="text-neutral-400 leading-relaxed">
                    Traditional robotics code is <span className="text-red-400">one giant script</span>. You write a massive <code className="text-red-400 bg-red-500/10 px-1 py-0.5 rounded">main.py</code> with a <code className="text-red-400 bg-red-500/10 px-1 py-0.5 rounded">while True:</code> loop that handles everything — sensor reading, motor control, state transitions, error handling. It gets messy fast.
                </p>
                <h2 className="text-2xl font-semibold text-white mt-6">The Solution</h2>
                <p className="text-neutral-400 leading-relaxed">
                    Kenate forces you to think in <span className="text-emerald-400 font-medium">States</span>. Each behavior is a separate Python class — <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">PatrolState</code>, <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">AlertState</code>, <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">IdleState</code>.
                    Each state only cares about itself. The Kenate Engine handles switching between them.
                </p>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Key Features</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <FeatureCard
                        icon={<Zap className="text-yellow-400" />}
                        title="Hybrid Power"
                        description="Write easy Python. A C++ Engine runs at 1000Hz under the hood for precise timing."
                    />
                    <FeatureCard
                        icon={<Cpu className="text-blue-400" />}
                        title="Deterministic"
                        description="Guaranteed, exact timing intervals. Critical for smooth robot motion."
                    />
                    <FeatureCard
                        icon={<Layers className="text-purple-400" />}
                        title="Modular"
                        description="If 'Attack' is broken, fix AttackState.py. You can't break 'Patrol' by accident."
                    />
                </div>
            </div>

            {/* Code Snippet */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">A Quick Taste</h2>
                <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0A]">
                    <div className="flex items-center px-4 py-2 border-b border-white/5 bg-[#0A0A0A]">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <span className="ml-4 text-xs text-neutral-500 font-mono">states/patrol.py</span>
                    </div>
                    <div className="p-6 overflow-x-auto">
                        <pre className="font-mono text-sm leading-relaxed text-neutral-300">
                            {`import kenate

class PatrolState(kenate.BaseState):
    def on_enter(self):
        self.log("Starting patrol...")
    
    def on_update(self):
        self.set_motor_speed(0, 50)
        self.set_motor_speed(1, 50)
        
        if self.get_distance(0) < 30:
            self.change_state("Alert")`}
                        </pre>
                    </div>
                </div>
            </div>

            {/* Next Steps */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <div>
                        {/* Empty left side */}
                    </div>
                    <Link href="/documentation/installation" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Installation
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
