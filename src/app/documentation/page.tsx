import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

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
                    Kenate is a declarative, reactive framework designed specifically for robotics.
                    Think of it as React, but instead of rendering HTML divs, you're rendering
                    <span className="text-white font-medium"> servos, sensors, and actuators.</span>
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
                        If you are used to writing `while(true)` loops in C++, this might feel weird at first.
                        It's okay. We promise you won't miss the segmentation faults. (Okay, maybe you will miss them a little).
                    </p>
                </div>
            </div>

            {/* Core Philosophy Section */}
            <div className="space-y-8">
                <h2 className="text-2xl font-semibold text-white">Why Kenate?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                        <h3 className="font-medium text-white mb-2">Declarative Hardware</h3>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Describe the state your robot *should* be in, and let Kenate handle the control loops to get there.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                        <h3 className="font-medium text-white mb-2">Component Based</h3>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Build complex robots from small, reusable logic blocks. A `Leg` component can be reused for a Hexapod or a Dog.
                        </p>
                    </div>
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
                        <span className="ml-4 text-xs text-neutral-500 font-mono">robot_arm.tsx</span>
                    </div>
                    <div className="p-6 overflow-x-auto">
                        <pre className="font-mono text-sm leading-relaxed">
                            <code className="text-neutral-300">
                                <span className="text-pink-500">export</span> <span className="text-pink-500">function</span> <span className="text-blue-400">RobotArm</span>() {"{"}<br />
                                &nbsp;&nbsp;<span className="text-pink-500">const</span> [position, setPosition] = <span className="text-yellow-300">useServoState</span>(0);<br />
                                <br />
                                &nbsp;&nbsp;<span className="text-pink-500">return</span> (<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-emerald-400">Servo</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">pin</span>={13}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">angle</span>={"{"}position{"}"}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">smooth</span>={true}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br />
                                &nbsp;&nbsp;);<br />
                                {"}"}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>

            {/* Next Steps */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <div>
                        {/* Empty left side/placeholder */}
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
