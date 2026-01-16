import Link from "next/link";
import { ArrowRight, Brain, Zap, RefreshCw } from "lucide-react";

export default function PhilosophyPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Core Concepts</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    The Kenate Philosophy
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Why we decided to reinvent the wheel (literally, for robots).
                </p>
            </div>

            {/* Core Tenets */}
            <div className="grid gap-6">
                <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                            <Brain size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Declarative {">"} Imperative</h3>
                    </div>
                    <p className="text-neutral-400 leading-relaxed mb-4">
                        Old way: "Turn motor A to 90 degrees. Wait 500ms. Turn motor B to 45 degrees."
                        <br />
                        New way: "The robot should be Standing."
                    </p>
                    <p className="text-sm text-neutral-500 italic">
                        Let the state manager worry about the "how". You just worry about the "what".
                    </p>
                </div>

                <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                            <RefreshCw size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Reactivity is King</h3>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">
                        Sensors aren't just values you poll; they are streams of data. When a sensor changes, your component rerenders.
                        It's like `useEffect`, but for the physical world.
                    </p>
                </div>

                <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Hardware Agnostic</h3>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">
                        Write code for a Raspberry Pi. Run it on an Arduino (via Firmata).
                        Kenate abstracts the hardware layer so your logic remains pure.
                    </p>
                </div>
            </div>

            {/* Quote Block */}
            <div className="relative pl-6 border-l-2 border-emerald-500 font-serif text-xl italic text-neutral-300 py-2">
                "We wanted to make building a robot as fun as building a website. Except with fewer CSS alignment issues."
                <span className="block text-sm font-sans text-neutral-500 mt-2 not-italic">- Ola Otesile, probably.</span>
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
                            Reactive Robotics
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
