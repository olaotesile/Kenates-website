"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ReactivePage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Core Concepts</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    The Engine
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    The C++ Engine is Kenate's secret weapon. It runs 1000 times per second, calling your Python code with precision timing. Fast? Understatement.
                </p>
            </div>

            {/* How It Works */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">How It Works</h2>
                <p className="text-neutral-400 leading-relaxed">
                    When you call <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">engine.start()</code>,
                    the C++ Engine takes over. It runs an infinite loop at exactly 1000Hz (once per millisecond).
                </p>
                <p className="text-neutral-400 leading-relaxed">
                    On every tick, it:
                </p>
                <ol className="list-decimal list-inside text-neutral-400 space-y-2 ml-4">
                    <li>Reads all sensor values from hardware</li>
                    <li>Calls your active State's <code className="text-emerald-400 bg-emerald-500/10 px-1 rounded">on_update()</code> method</li>
                    <li>Writes motor commands to hardware</li>
                    <li>Handles any state transitions you requested</li>
                </ol>
            </div>

            {/* Why 1000Hz */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Why 1000Hz?</h2>
                <p className="text-neutral-400 leading-relaxed">
                    Smooth robot motion requires fast, consistent updates. If your loop runs at inconsistent speeds
                    (50ms one tick, 200ms the next), your robot's movements will be jerky and unpredictable.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                    The C++ Engine guarantees each tick is exactly 1ms. This is critical for:
                </p>
                <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4 marker:text-emerald-500">
                    <li>PID controllers (smooth motor ramping)</li>
                    <li>Sensor fusion (combining gyro + accelerometer data)</li>
                    <li>Precise timing for servos and stepper motors</li>
                </ul>
            </div>

            {/* The Engine API */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Engine API</h2>

                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="text-left px-4 py-3 text-neutral-400 font-medium">Method</th>
                                <th className="text-left px-4 py-3 text-neutral-400 font-medium">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">register_state(name, state)</td>
                                <td className="px-4 py-3 text-neutral-300">Add a state to the engine</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">start(initial_state)</td>
                                <td className="px-4 py-3 text-neutral-300">Start the loop (blocking)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">stop()</td>
                                <td className="px-4 py-3 text-neutral-300">Cleanly terminate the loop</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">pause()</td>
                                <td className="px-4 py-3 text-neutral-300">Freeze (motors hold position)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">resume()</td>
                                <td className="px-4 py-3 text-neutral-300">Resume from pause</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">get_current_state_name()</td>
                                <td className="px-4 py-3 text-neutral-300">Returns active state name</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">load_config(path)</td>
                                <td className="px-4 py-3 text-neutral-300">Load hardware.toml</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* State Transitions */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">State Transitions</h2>
                <p className="text-neutral-400 leading-relaxed">
                    To switch states, call <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">self.change_state("NewState")</code>
                    from inside your current state. The Engine handles the rest:
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 overflow-x-auto">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`# When you call self.change_state("Alert"):
# 1. Current state's on_exit() is called
# 2. New state's on_enter() is called
# 3. Next tick calls new state's on_update()`}
                    </pre>
                </div>
                <p className="text-neutral-500 text-sm">Clean transitions, every time.</p>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/philosophy" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Philosophy
                        </div>
                    </Link>
                    <Link href="/documentation/hardware" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Hardware Plugins
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
