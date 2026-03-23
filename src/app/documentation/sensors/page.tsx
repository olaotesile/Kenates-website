"use client";
import Link from "next/link";
import { ArrowRight, Thermometer, Battery, Signal, Ruler } from "lucide-react";

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

export default function SensorPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">API Reference</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Sensor API
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Every State in Kenate has direct access to the robot's perception layer. Data is polled at <span className="text-white font-medium">1000Hz</span> by the C++ Kernel, because relying on Python for sensor timing is basically asking for a crash.
                </p>
            </div>

            {/* Vitals Sensors */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">System Vitals</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-3">
                        <code className="text-xs font-mono text-neutral-400">get_battery_level()</code>
                        <p className="text-xs text-neutral-500">Returns percentage (0-100).</p>
                    </div>
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-3">
                        <code className="text-xs font-mono text-neutral-400">get_system_temperature()</code>
                        <p className="text-xs text-neutral-500">Returns Celsius (float).</p>
                    </div>
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-3">
                        <code className="text-xs font-mono text-neutral-400">get_signal_strength()</code>
                        <p className="text-xs text-neutral-500">Returns dBm (int).</p>
                    </div>
                </div>
            </div>

            {/* Perception Methods */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Environment Perception</h2>
                <div className="grid gap-4">
                    <APIMethod
                        method="get_height_sensor()"
                        description="Returns distance to the ground. Critical for drones and hexapods."
                    />
                    <APIMethod
                        method="get_distance_sensor(id)"
                        description="Returns distance to nearest obstacle in meters. ID maps to the Robot Profile."
                    />
                </div>
            </div>

            {/* Example */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Example Usage</h2>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 overflow-x-auto">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`def on_update(self):
    if self.get_distance_sensor("front") < 0.5:
        self.engine.set_state("AVOID")
    
    if self.get_system_temperature() > 80.0:
        self.engine.set_state("THERMAL_SHUTDOWN")`}
                    </pre>
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/motors" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Motor API
                        </div>
                    </Link>
                    <Link href="/documentation/logic" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Standard Library
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
