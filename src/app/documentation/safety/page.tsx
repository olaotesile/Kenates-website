"use client";
import Link from "next/link";
import { ArrowRight, Shield, Thermometer, Battery } from "lucide-react";

export default function SafetyPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Operations</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Safety & Thermal
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Robots are basically just really expensive ways to start a fire. Kenate introduced a kernel-level protection layer so your software loops don't melt your hardware. You're welcome.
                </p>
            </div>

            {/* Thermal Management */}
            <div className="space-y-6">
                <div className="flex items-center gap-3 text-red-400">
                    <h2 className="text-2xl font-semibold text-white">Thermal Management</h2>
                </div>
                <p className="text-neutral-400 leading-relaxed">
                    If the motor core exceeds the threshold in your profile (default <span className="text-white font-mono">85.0°C</span>), the Kernel steps in immediately. I don't ask Python if it's okay, I just shut it down to save your hardware.
                </p>
                <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-4">
                    <p className="text-xs text-red-300">
                        <span className="font-bold uppercase tracking-wider">Kernel Action:</span> Actuators are locked and the mission is terminated to prevent permanent hardware warping.
                    </p>
                </div>
            </div>

            {/* Signal Integrity */}
            <div className="space-y-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 text-blue-400">
                    <h2 className="text-2xl font-semibold text-white">Signal Integrity & RTH</h2>
                </div>
                <p className="text-neutral-400 leading-relaxed">
                    Autonomous missions rely on consistent signal strength for remote overrides. Kenate v1.0.6 recommends a safety threshold of <span className="text-white font-mono">20%</span>.
                </p>
                <ul className="list-disc list-inside text-sm text-neutral-500 space-y-2 ml-4 marker:text-blue-500">
                    <li><span className="text-white">Below 20%:</span> The robot automatically enters Return To Home (RTH) sequence.</li>
                    <li><span className="text-white">Signal Loss:</span> The C++ Kernel executes a "Safe Float" until connection is regained.</li>
                </ul>
            </div>

            {/* Kernel Halt */}
            <div className="space-y-6 pt-6 border-t border-white/5">
                <h2 className="text-2xl font-semibold text-white">Kernel Halt</h2>
                <p className="text-neutral-400 leading-relaxed font-mono italic text-sm">
                    "If your logic fails entirely because you wrote a bad loop, the C++ Kernel literally kills power to all motors to stop your robot from destroying your property. I planned for your mistakes."
                </p>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/tutorials/delivery" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Delivery Robot
                        </div>
                    </Link>
                    <Link href="/documentation/recovery" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Recovery Protocols
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
