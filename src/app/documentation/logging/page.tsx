"use client";
import Link from "next/link";
import { ArrowRight, Database, History, HardDrive } from "lucide-react";

export default function LoggingPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Operations</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Logging & Black Box
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    When your robot inevitably crashes, you need to know why instead of just guessing. Our <span className="text-white font-medium">Black Box</span> system logs literally everything so you can actually fix it.
                </p>
            </div>

            {/* Black Box Engine */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white font-mono">The Black Box Engine</h2>
                <div className="space-y-4 text-neutral-400 leading-relaxed">
                    <p>
                        The C++ Kernel automatically logs all your binary data to disk. Even if you completely blow a fuse and drop power, I save your data in the <span className="text-emerald-400 font-mono">.kenate_logs</span> directory. I planned for your mistakes.
                    </p>
                    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4">
                        <p className="text-xs text-emerald-300 italic">
                            Captures every action, sensor reading, and state transition at 1000Hz.
                        </p>
                    </div>
                </div>
            </div>

            {/* Post-Mission Analytics */}
            <div className="space-y-6 pt-10 border-t border-white/5">
                <h2 className="text-2xl font-semibold text-white">Post-Mission Analytics</h2>
                <p className="text-neutral-400 leading-relaxed">
                    After every mission, Kenate allows you to <span className="text-white underline">"Rewind the Clock."</span> The analyze command parses binary logs to provide:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center">
                        <div className="text-emerald-500 font-bold mb-1">Timing</div>
                        <p className="text-[10px] text-neutral-500">Exact mission duration down to the millisecond.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center">
                        <div className="text-red-500 font-bold mb-1">Thermal</div>
                        <p className="text-[10px] text-neutral-500">Full heat maps of CPU and motor cores.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center">
                        <div className="text-yellow-500 font-bold mb-1">Energy</div>
                        <p className="text-[10px] text-neutral-500">Detailed battery drain percentages and voltage dips.</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/recovery" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Recovery Protocols
                        </div>
                    </Link>
                    <Link href="/documentation" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Back to</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Introduction
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
