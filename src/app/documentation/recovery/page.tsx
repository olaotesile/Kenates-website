"use client";
import Link from "next/link";
import { ArrowRight, RefreshCcw, WifiOff, ZapOff } from "lucide-react";

export default function RecoveryPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Operations</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Recovery Protocols
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    What happens when your code inevitably breaks? Kenate ensures your minor software typo doesn't result in a flaming pile of expensive hardware.
                </p>
            </div>

            {/* Automatic Restart */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-semibold text-white">Kernel Watchdog</h2>
                </div>
                <p className="text-neutral-400 leading-relaxed">
                    If Python skips 3 consecutive ticks (3ms), the C++ Kernel assumes you wrote an infinite loop and your brain has hung. So it takes over:
                </p>
                <div className="grid gap-4">
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                        <h4 className="text-white font-medium text-sm">Step 1: Safe Stop</h4>
                        <p className="text-xs text-neutral-500 mt-1">Kill all PWM signals to the motors immediately.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                        <h4 className="text-white font-medium text-sm">Step 2: State Reset</h4>
                        <p className="text-xs text-neutral-500 mt-1">Reload the last known stable state defined in the Robot Profile.</p>
                    </div>
                </div>
            </div>

            {/* Offline Recovery */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-semibold text-white">Loss of Signal</h2>
                </div>
                <p className="text-neutral-400 leading-relaxed">
                    When the robot loses connection to the control station, it enters the <span className="text-white font-medium">Auto-Nav Recovery</span> pattern.
                </p>
                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 font-mono text-sm text-neutral-300">
                    {`# recovery.toml
[connection_loss]
action = "RETURN_TO_HOME"
timeout_ms = 500`}
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/safety" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Safety & Thermal
                        </div>
                    </Link>
                    <Link href="/documentation/logging" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Logging & Black Box
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
