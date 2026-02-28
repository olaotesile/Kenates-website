"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

export default function MotorPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">API Reference</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Motor API
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    The <code className="text-white font-medium">MotorInterface</code> provides standard commands for all actuators, from simple DC motors to high-precision servos.
                </p>
            </div>

            {/* API Catalog */}
            <div className="space-y-12">
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white font-mono">kenate.BaseState()</h2>
                    <p className="text-neutral-400">The foundation for all custom behaviors. These methods are available within any state via <code className="text-emerald-400">self</code>.</p>

                    <div className="grid gap-4">
                        <APIMethod
                            method="get_height_sensor()"
                            description="Returns current altitude/height in millimeters."
                        />
                        <APIMethod
                            method="get_distance_sensor()"
                            description="Returns obstacle proximity (0-100 range)."
                        />
                        <APIMethod
                            method="get_battery_level()"
                            description="Returns battery percentage (0-100)."
                        />
                        <APIMethod
                            method="get_system_temperature()"
                            description="Returns core temperature in Celsius (Kernel-polled)."
                        />
                        <APIMethod
                            method="on_enter() / on_update() / on_exit()"
                            description="The core state lifecycle hooks (1ms heartbeat)."
                        />
                    </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/5">
                    <h2 className="text-2xl font-semibold text-white font-mono">kenate.Robot()</h2>
                    <p className="text-neutral-400">The high-level manager for mission execution.</p>
                    <div className="grid gap-4">
                        <APIMethod
                            method="create_state(name, class)"
                            description="Registers a behavior in the engine's state table."
                        />
                        <APIMethod
                            method="start()"
                            description="Commencing the mission heartbeat."
                        />
                        <APIMethod
                            method="stop()"
                            description="Terminates the mission safely (Actuator Lock)."
                        />
                    </div>
                </div>
            </div>

            {/* Mock Motor */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">The Mock Motor</h2>
                <p className="text-neutral-400 leading-relaxed">
                    For workstation development, use <code className="text-emerald-400 bg-emerald-500/10 px-1 rounded">kenate.MockMotor()</code>. It inherits all methods from the standard interface but simulates the hardware behavior entirely in software.
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`# Prototyping without a robot
motor = kenate.MockMotor()
motor.set_velocity(0.8)
print(motor.get_velocity()) # Returns 0.8 simulated`}
                    </pre>
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/hardware" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Robot Profiles
                        </div>
                    </Link>
                    <Link href="/documentation/sensors" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Sensor API
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
