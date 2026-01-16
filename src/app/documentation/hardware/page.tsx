import Link from "next/link";
import { ArrowRight, Cpu, Usb, Layers } from "lucide-react";

export default function HardwarePage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Core Concepts</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Hardware
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Abstractions all the way down.
                </p>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <p className="text-neutral-300 leading-relaxed">
                        Kenate doesn't talk directly to voltage pins. It talks to a <strong>HAL (Hardware Abstraction Layer)</strong>.
                        This means you can swap your microcontroller without rewriting your robot's logic.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <Cpu size={16} />
                        <span>Supports AVR, ARM, ESP32, and RP2040</span>
                    </div>
                </div>
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Layers size={100} />
                    </div>
                    <div className="space-y-2 relative z-10">
                        <div className="bg-emerald-500/20 text-emerald-400 px-3 py-2 rounded-md font-mono text-sm border border-emerald-500/30 text-center">
                            High Level Logic (React)
                        </div>
                        <div className="flex justify-center text-neutral-600">↓</div>
                        <div className="bg-blue-500/20 text-blue-400 px-3 py-2 rounded-md font-mono text-sm border border-blue-500/30 text-center">
                            Kenate Reconciler
                        </div>
                        <div className="flex justify-center text-neutral-600">↓</div>
                        <div className="bg-purple-500/20 text-purple-400 px-3 py-2 rounded-md font-mono text-sm border border-purple-500/30 text-center">
                            Hardware Abstraction Layer
                        </div>
                        <div className="flex justify-center text-neutral-600">↓</div>
                        <div className="bg-neutral-800 text-neutral-400 px-3 py-2 rounded-md font-mono text-sm border border-neutral-700 text-center">
                            Physical Iron (The Chip)
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Supported Boards</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Arduino Uno", "Mega 2560", "ESP32", "Raspberry Pi Pico"].map(board => (
                        <div key={board} className="p-4 rounded-lg bg-neutral-900/50 border border-white/5 flex items-center gap-3">
                            <Usb className="text-neutral-500" size={20} />
                            <span className="text-sm text-neutral-300">{board}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/reactive" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Reactive Robotics
                        </div>
                    </Link>
                    <Link href="/documentation/motors" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Motors & Actuators
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
