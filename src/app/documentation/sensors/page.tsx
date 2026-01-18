"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SensorsPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">API Reference</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Sensor API
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Read sensor data from your State classes. The Engine handles polling at 1000Hz so you don't have to.
                </p>
            </div>

            {/* Available Methods */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Sensing Methods</h2>
                <p className="text-neutral-400">
                    These methods are available on any class that inherits from <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">kenate.BaseState</code>.
                </p>

                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="text-left px-4 py-3 text-neutral-400 font-medium">Method</th>
                                <th className="text-left px-4 py-3 text-neutral-400 font-medium">Returns</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">get_distance(sensor_id)</td>
                                <td className="px-4 py-3 text-neutral-300">Distance in centimeters (float)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">get_encoder(motor_id)</td>
                                <td className="px-4 py-3 text-neutral-300">Raw encoder ticks (int)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">get_battery_voltage()</td>
                                <td className="px-4 py-3 text-neutral-300">System voltage (float)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">get_imu_heading()</td>
                                <td className="px-4 py-3 text-neutral-300">Compass heading 0-360 (float)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* get_distance */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                    <code className="text-emerald-400">get_distance(sensor_id)</code>
                </h2>
                <p className="text-neutral-400">
                    Returns distance from an ultrasonic or IR sensor. Units are centimeters because we're civilized.
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`def on_update(self):
    front = self.get_distance(0)  # Front sensor
    
    if front < 30:
        self.change_state("Avoid")
    else:
        self.set_motor_speed(0, 50)`}
                    </pre>
                </div>
            </div>

            {/* get_encoder */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                    <code className="text-purple-400">get_encoder(motor_id)</code>
                </h2>
                <p className="text-neutral-400">
                    Returns raw encoder ticks. Use for odometry or PID control. The numbers go up when wheels spin.
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`def on_enter(self):
    self.start_ticks = self.get_encoder(0)

def on_update(self):
    # Move forward 1000 ticks
    current = self.get_encoder(0)
    if current - self.start_ticks >= 1000:
        self.change_state("Done")
    else:
        self.set_motor_speed(0, 50)`}
                    </pre>
                </div>
            </div>

            {/* get_battery_voltage */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                    <code className="text-yellow-400">get_battery_voltage()</code>
                </h2>
                <p className="text-neutral-400">
                    Returns system voltage. Useful for low-battery warnings. Nobody likes a dead robot.
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`def on_update(self):
    voltage = self.get_battery_voltage()
    
    if voltage < 11.0:
        self.log("LOW BATTERY!")
        self.change_state("ReturnToBase")`}
                    </pre>
                </div>
            </div>

            {/* get_imu_heading */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                    <code className="text-blue-400">get_imu_heading()</code>
                </h2>
                <p className="text-neutral-400">
                    Returns compass heading from IMU (0-360 degrees). North is 0. East is 90. You get the idea.
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`def on_update(self):
    heading = self.get_imu_heading()
    
    # Turn to face North (0 degrees)
    error = heading - 0
    self.set_motor_speed(0, error * 0.5)
    self.set_motor_speed(1, -error * 0.5)`}
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
