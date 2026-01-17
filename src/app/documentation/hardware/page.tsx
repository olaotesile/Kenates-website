"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HardwarePage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">API Reference</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Hardware Plugins
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Switch hardware platforms by changing one line in your config file, not your Python code. That's the dream.
                </p>
            </div>

            {/* How Plugins Work */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">How Plugins Work</h2>
                <p className="text-neutral-400 leading-relaxed">
                    Your Python code calls methods like <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">self.set_motor_speed()</code>.
                    The plugin translates that into the correct hardware commands for your platform.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                    To switch from Raspberry Pi to Arduino? Change one line in <code className="text-blue-400 bg-blue-500/10 px-1 py-0.5 rounded">hardware.toml</code>.
                    Your Python states remain untouched. Magic? Nope, just good design.
                </p>
            </div>

            {/* Available Plugins */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Available Plugins</h2>

                <div className="grid gap-4">
                    <PluginCard
                        name="kenate-raspberry-pi"
                        type="raspberry_pi"
                        description="GPIO control for Raspberry Pi. Supports PWM motors, digital sensors, and I2C devices."
                    />
                    <PluginCard
                        name="kenate-serial"
                        type="serial"
                        description="For Arduino, Teensy, or any microcontroller connected via USB. Communicates over serial protocol."
                    />
                    <PluginCard
                        name="kenate-odrive"
                        type="odrive"
                        description="High-performance brushless motor control. For advanced robotics requiring precise torque control."
                    />
                    <PluginCard
                        name="kenate-mock"
                        type="mock"
                        description="Virtual hardware for testing. Simulates motors and sensors without real hardware. Perfect for unit tests."
                    />
                </div>
            </div>

            {/* Configuration */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Configuration</h2>
                <p className="text-neutral-400">
                    Set your driver type in <code className="text-blue-400 bg-blue-500/10 px-1 py-0.5 rounded">hardware.toml</code>:
                </p>

                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 overflow-x-auto">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`[driver]
type = "raspberry_pi"  # Change this line to switch platforms

[motors]
left_wheel = { pin = 18, type = "pwm" }
right_wheel = { pin = 19, type = "pwm" }
arm_servo = { pin = 12, type = "servo" }

[sensors]
front_sonar = { pin = 23, type = "hc-sr04" }
encoder_left = { pin = 5, type = "encoder" }
imu = { address = 0x68, type = "mpu6050" }`}
                    </pre>
                </div>
            </div>

            {/* Loading Config */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Loading Configuration</h2>
                <p className="text-neutral-400">
                    In your <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">main.py</code>,
                    load the config before registering states:
                </p>

                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 overflow-x-auto">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`import kenate

engine = kenate.Engine()
engine.load_config("hardware.toml")  # Load hardware mapping

# Now motor IDs in your states map to real pins
engine.register_state("Idle", IdleState())
engine.start("Idle")`}
                    </pre>
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/reactive" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            The Engine
                        </div>
                    </Link>
                    <Link href="/documentation/motors" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Motor API
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function PluginCard({ name, type, description }: { name: string; type: string; description: string }) {
    return (
        <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-5">
            <div className="flex items-center gap-3 mb-2">
                <h4 className="text-white font-medium">{name}</h4>
                <code className="text-xs bg-white/5 px-2 py-0.5 rounded text-neutral-400">type = "{type}"</code>
            </div>
            <p className="text-neutral-400 text-sm">{description}</p>
        </div>
    );
}
