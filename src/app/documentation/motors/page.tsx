"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MotorsPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">API Reference</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Motor API
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Control motors and servos from your State classes using simple, intuitive methods. No arcane incantations required.
                </p>
            </div>

            {/* Available Methods */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Motion Methods</h2>
                <p className="text-neutral-400">
                    These methods are available on any class that inherits from <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">kenate.BaseState</code>.
                </p>

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
                                <td className="px-4 py-3 font-mono text-emerald-400">set_motor_speed(motor_id, speed)</td>
                                <td className="px-4 py-3 text-neutral-300">Set speed from -100.0 to 100.0</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">set_servo_angle(servo_id, angle)</td>
                                <td className="px-4 py-3 text-neutral-300">Set angle from 0 to 180 degrees</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">stop_all_motors()</td>
                                <td className="px-4 py-3 text-neutral-300">Set all motors to 0 immediately</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* set_motor_speed */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                    <code className="text-emerald-400">set_motor_speed(motor_id, speed)</code>
                </h2>
                <p className="text-neutral-400">
                    Controls the speed of a DC motor. Negative values go backward. It's not rocket science.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                        <h4 className="text-white font-medium mb-2">Parameters</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex gap-2">
                                <code className="text-emerald-400">motor_id</code>
                                <span className="text-neutral-400">Index from hardware.toml (0, 1, 2...)</span>
                            </li>
                            <li className="flex gap-2">
                                <code className="text-emerald-400">speed</code>
                                <span className="text-neutral-400">Float from -100.0 (full reverse) to 100.0 (full forward)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                        <h4 className="text-white font-medium mb-2">Example</h4>
                        <pre className="font-mono text-sm text-neutral-300">
                            {`def on_update(self):
    # Left wheel forward
    self.set_motor_speed(0, 75)
    
    # Right wheel backward
    self.set_motor_speed(1, -75)`}
                        </pre>
                    </div>
                </div>
            </div>

            {/* set_servo_angle */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                    <code className="text-purple-400">set_servo_angle(servo_id, angle)</code>
                </h2>
                <p className="text-neutral-400">
                    Moves a servo to a specific angle. Great for arms, grippers, and other pointy things.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                        <h4 className="text-white font-medium mb-2">Parameters</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex gap-2">
                                <code className="text-emerald-400">servo_id</code>
                                <span className="text-neutral-400">Index from hardware.toml</span>
                            </li>
                            <li className="flex gap-2">
                                <code className="text-emerald-400">angle</code>
                                <span className="text-neutral-400">Float from 0 to 180 degrees</span>
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                        <h4 className="text-white font-medium mb-2">Example</h4>
                        <pre className="font-mono text-sm text-neutral-300">
                            {`def on_enter(self):
    # Point arm at center
    self.set_servo_angle(0, 90)

def on_exit(self):
    # Lower arm
    self.set_servo_angle(0, 0)`}
                        </pre>
                    </div>
                </div>
            </div>

            {/* stop_all_motors */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                    <code className="text-red-400">stop_all_motors()</code>
                </h2>
                <p className="text-neutral-400">
                    Emergency stop. Immediately sets all registered motors to speed 0. For when things get interesting.
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                    <h4 className="text-white font-medium mb-2">Example</h4>
                    <pre className="font-mono text-sm text-neutral-300">
                        {`class AlertState(kenate.BaseState):
    def on_enter(self):
        # Stop everything immediately
        self.stop_all_motors()
        self.log("EMERGENCY STOP")`}
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
                            Hardware Plugins
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
