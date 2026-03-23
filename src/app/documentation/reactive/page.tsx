"use client";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

function APIMethod({ method, description }: { method: string; description: string }) {
    return (
        <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] space-y-3">
            <div className="flex items-center justify-between">
                <code className="text-emerald-400 font-mono text-sm">{method}</code>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}

export default function HeartbeatPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">The Kernel</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    The Heartbeat
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    At the core of every Kenate robot is a deterministic <span className="text-white font-medium">C++ Kernel</span> that pulses exactly 1000 times per second, guaranteeing your robot doesn't take a nap while walking downstairs.
                </p>
            </div>

            {/* Value Prop */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
                <h4 className="text-emerald-400 font-medium mb-2 flex items-center gap-2">
                    Millisecond Precision
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed text-emerald-200/70">
                    Python suffers from "jitter"—unpredictable timing delays caused by garbage collection. In the real world, a 50ms delay means your drone just hit a tree. I fixed that. Kenate guarantees your <code className="bg-emerald-500/20 px-1 rounded text-emerald-300">on_update()</code> fires exactly every 1ms. Stop worrying about timing.
                </p>
            </div>

            {/* Engine API */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Engine API Reference</h2>
                <p className="text-neutral-400">The <code className="text-blue-400 bg-blue-500/10 px-1 rounded">kenate.Engine</code> class is the central manager of the robot brain.</p>

                <div className="grid gap-4">
                    <APIMethod
                        method="add_state(state)"
                        description="Registers a state object with the engine. The state becomes available for transitions."
                    />
                    <APIMethod
                        method="set_state(name)"
                        description="Forces the robot to switch to the named state immediately. Triggers on_exit() of current and on_enter() of new."
                    />
                    <APIMethod
                        method="start(initial_state)"
                        description="Commences the 1000Hz control loop thread. This call blocks the main thread."
                    />
                    <APIMethod
                        method="stop()"
                        description="Terminates the control loop safely, stopping all motors."
                    />
                    <APIMethod
                        method="set_frequency(hz)"
                        description="Adjusts the heartbeat speed (default 1000Hz). Advanced use only."
                    />
                </div>
            </div>

            {/* The Heartbeat */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">The 1ms Heartbeat</h2>
                <p className="text-neutral-400 leading-relaxed">
                    Most programming languages suffer from <span className="text-red-400">"jitter"</span>—unpredictable delays in code execution. For a robot moving at high speeds, a 50ms delay can be catastrophic. Kenate's dedicated C++ Kernel pulses exactly 1000 times per second to eliminate this.
                </p>

                <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                        <h4 className="text-white font-medium text-sm mb-1">The Heartbeat</h4>
                        <p className="text-xs text-neutral-500">The 1000Hz internal clock that drives the engine.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                        <h4 className="text-white font-medium text-sm mb-1">The Bridge</h4>
                        <p className="text-xs text-neutral-500">The high-speed connection between Python logic and C++ hardware.</p>
                    </div>
                </div>
            </div>

            {/* Catch-Up Protocol */}
            <div className="space-y-6 pt-6 border-t border-white/5">
                <h2 className="text-2xl font-semibold text-white">Tick Overruns & The Catch-Up Protocol</h2>
                <p className="text-neutral-400 leading-relaxed">
                    If your Python <code className="font-mono text-emerald-400">on_update()</code> logic takes longer than 1ms, the engine detects that the next wake time has already passed. The C++ Kernel then follows the <span className="text-white font-medium">Catch-Up Protocol:</span>
                </p>
                <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4 marker:text-emerald-500">
                    <li>The engine skips the <code className="font-mono">sleep</code> command entirely.</li>
                    <li>It executes the next tick <span className="text-white underline">immediately</span>.</li>
                    <li>The system runs at maximum CPU speed until it regains its 1ms schedule.</li>
                </ul>
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    <p className="text-xs text-red-300">
                        <span className="font-bold">CRITICAL:</span> If you use <code className="font-mono">time.sleep()</code> or blocking I/O inside <code className="font-mono">on_update()</code>, the Kernel will actively fight you. Don't do it. You are writing an atomic state, not a bash script.
                    </p>
                </div>
            </div>
            {/* Custom States */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">The BaseState Lifecycle</h2>
                <p className="text-neutral-400 leading-relaxed">
                    All custom behaviors inherit from <code className="text-emerald-400 bg-emerald-500/10 px-1 rounded">kenate.BaseState</code>.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] space-y-2">
                        <code className="text-emerald-400 font-mono text-sm">on_enter()</code>
                        <p className="text-xs text-neutral-500">Executes once when the state becomes active. Good for setup.</p>
                    </div>
                    <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] space-y-2">
                        <code className="text-yellow-400 font-mono text-sm">on_update()</code>
                        <p className="text-xs text-neutral-500">The Heartbeat. Executes every 1ms. Put your control logic here.</p>
                    </div>
                    <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] space-y-2">
                        <code className="text-red-400 font-mono text-sm">on_exit()</code>
                        <p className="text-xs text-neutral-500">Executes once when moving to a new state. Clean up here.</p>
                    </div>
                </div>
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
                            Robot Profiles
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
