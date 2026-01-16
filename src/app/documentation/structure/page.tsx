import Link from "next/link";
import { ArrowRight, Folder, FileCode, FileJson } from "lucide-react";

export default function StructurePage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Core Concepts</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Project Structure
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Organizing your robot's brain. It's like organizing your own brain, but fewer distractions.
                </p>
            </div>

            {/* Tree View */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 font-mono text-sm leading-relaxed">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-neutral-400">
                        <Folder size={16} className="text-blue-400" />
                        <span>/src</span>
                    </div>
                    <div className="pl-6 space-y-2">
                        <div className="flex items-center gap-2 text-neutral-400">
                            <Folder size={16} className="text-blue-400" />
                            <span>/components</span>
                            <span className="text-neutral-600 ml-4">// Reusable hardware blocks (Legs, Wheels)</span>
                        </div>
                        <div className="pl-6 space-y-2">
                            <div className="flex items-center gap-2 text-neutral-400">
                                <FileCode size={16} className="text-yellow-400" />
                                <span>ServoJoint.tsx</span>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-400">
                                <FileCode size={16} className="text-yellow-400" />
                                <span>LidarSensor.tsx</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-neutral-400 pt-2">
                            <Folder size={16} className="text-blue-400" />
                            <span>/behaviors</span>
                            <span className="text-neutral-600 ml-4">// Hooks for logic (useWalk, useSLAM)</span>
                        </div>
                        <div className="pl-6 space-y-2">
                            <div className="flex items-center gap-2 text-neutral-400">
                                <FileCode size={16} className="text-purple-400" />
                                <span>usePID.ts</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-neutral-400 pt-2">
                            <FileCode size={16} className="text-yellow-400" />
                            <span>MainRobot.tsx</span>
                            <span className="text-neutral-600 ml-4">// The entry point (App.tsx for robots)</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-neutral-400 pt-4">
                        <FileJson size={16} className="text-red-400" />
                        <span>kenate.config.json</span>
                        <span className="text-neutral-600 ml-4">// Pin mappings and baud rates</span>
                    </div>
                </div>
            </div>

            {/* Explanations */}
            <div className="space-y-8">
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                        <Folder className="text-blue-400" size={20} />
                        <span>/components</span>
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                        This is where your physical abstractions live. If you have a Hexapod, you create a `Leg` component here
                        and render it 6 times. Don't repeat yourself (DRY), and definitely don't repeat your soldering mistakes.
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                        <Folder className="text-blue-400" size={20} />
                        <span>/behaviors</span>
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                        Logic lives here. Creating a custom hook like `useBalance()` allows you to separate the *thinking*
                        from the *moving*. It makes testing easier and makes you feel smarter.
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                        <FileJson className="text-red-400" size={20} />
                        <span>kenate.config.json</span>
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                        The boring but necessary part. Define which pin connects to which motor here so you don't
                        render `LeftLeg` to `Pin 1` when it's physically soldered to `Pin 9`.
                    </p>
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/installation" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Installation
                        </div>
                    </Link>
                    <Link href="/documentation/philosophy" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Philosophy
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
