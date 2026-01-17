"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HexapodTutorialPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Tutorial</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Build a Hexapod
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    A six-legged walking robot is the ultimate test of state management. Let's build one with Kenate.
                </p>
            </div>

            {/* Image */}
            <div className="rounded-xl overflow-hidden border border-white/10">
                <img
                    src="https://blog.arduino.cc/wp-content/uploads/2023/04/Hexapod1.jpg"
                    alt="Hexapod robot"
                    className="w-full h-64 object-cover"
                />
            </div>

            {/* Overview */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">What We're Building</h2>
                <p className="text-neutral-400">
                    A hexapod that can:
                </p>
                <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4 marker:text-emerald-500">
                    <li><strong className="text-white">Idle</strong> - Stand still and wait</li>
                    <li><strong className="text-white">Walk</strong> - Move forward using a tripod gait</li>
                    <li><strong className="text-white">Turn</strong> - Rotate in place</li>
                    <li><strong className="text-white">Stop</strong> - Emergency halt (for when things get spicy)</li>
                </ul>
            </div>

            {/* Step 1: Project Setup */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Step 1: Create the Project</h2>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`$ kenate init hexapod
$ cd hexapod`}
                    </pre>
                </div>
            </div>

            {/* Step 2: Hardware Config */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Step 2: Configure Hardware</h2>
                <p className="text-neutral-400">
                    Edit <code className="text-blue-400 bg-blue-500/10 px-1 py-0.5 rounded">hardware.toml</code> for 18 servos (3 per leg x 6 legs). Yeah, that's a lot of legs.
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 overflow-x-auto">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`[driver]
type = "raspberry_pi"

[motors]
# Leg 1 (Front Left)
leg1_coxa = { pin = 0, type = "servo" }
leg1_femur = { pin = 1, type = "servo" }
leg1_tibia = { pin = 2, type = "servo" }

# Leg 2 (Front Right)
leg2_coxa = { pin = 3, type = "servo" }
leg2_femur = { pin = 4, type = "servo" }
leg2_tibia = { pin = 5, type = "servo" }

# ... continue for legs 3-6`}
                    </pre>
                </div>
            </div>

            {/* Step 3: Idle State */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Step 3: Create IdleState</h2>
                <p className="text-neutral-400">
                    Create <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">states/idle.py</code>:
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 overflow-x-auto">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`import kenate

class IdleState(kenate.BaseState):
    def on_enter(self):
        self.log("Hexapod idle. Waiting for command...")
        # Set all legs to neutral position
        for i in range(18):
            self.set_servo_angle(i, 90)`}
                    </pre>
                </div>
            </div>

            {/* Step 4: Walk State */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Step 4: Create WalkState</h2>
                <p className="text-neutral-400">
                    The tripod gait alternates two sets of 3 legs. It looks cooler than it sounds. Create <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">states/walk.py</code>:
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 overflow-x-auto">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`import kenate
import math

class WalkState(kenate.BaseState):
    def on_enter(self):
        self.phase = 0
        self.log("Walking!")
    
    def on_update(self):
        # Tripod gait: legs 1,4,5 move, then legs 2,3,6
        t = self.get_time()
        
        # Group A: legs 0, 3, 4 (indices for coxa servos)
        group_a = [0, 9, 12]
        # Group B: legs 1, 2, 5
        group_b = [3, 6, 15]
        
        # Sine wave for smooth motion
        wave = math.sin(t * 4) * 30  # ±30 degrees
        
        for idx in group_a:
            self.set_servo_angle(idx, 90 + wave)
        for idx in group_b:
            self.set_servo_angle(idx, 90 - wave)
        
        # Check for obstacle
        if self.get_distance(0) < 20:
            self.change_state("Stop")`}
                    </pre>
                </div>
            </div>

            {/* Step 5: Stop State */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Step 5: Create StopState</h2>
                <p className="text-neutral-400">
                    Emergency stop. For when things don't go according to plan. Create <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">states/stop.py</code>:
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 overflow-x-auto">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`import kenate

class StopState(kenate.BaseState):
    def on_enter(self):
        self.log("EMERGENCY STOP!")
        # Return all servos to neutral
        for i in range(18):
            self.set_servo_angle(i, 90)`}
                    </pre>
                </div>
            </div>

            {/* Step 6: Main */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Step 6: Wire It Up</h2>
                <p className="text-neutral-400">
                    Create <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">main.py</code>:
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 overflow-x-auto">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`import kenate
from states.idle import IdleState
from states.walk import WalkState
from states.stop import StopState

engine = kenate.Engine()
engine.load_config("hardware.toml")

engine.register_state("Idle", IdleState())
engine.register_state("Walk", WalkState())
engine.register_state("Stop", StopState())

engine.start("Idle")`}
                    </pre>
                </div>
            </div>

            {/* Step 7: Run */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Step 7: Run It!</h2>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`$ kenate run

✓ Build up-to-date
Starting Engine...
[INFO] Hexapod idle. Waiting for command...`}
                    </pre>
                </div>
                <p className="text-neutral-400 mt-4">
                    To switch to walking, you'd trigger <code className="text-emerald-400 bg-emerald-500/10 px-1 rounded">self.change_state("Walk")</code>
                    from IdleState. Maybe when a button is pressed or a command is received.
                </p>
            </div>

            {/* Next Steps */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Next Steps</h2>
                <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4 marker:text-emerald-500">
                    <li>Add a <strong className="text-white">TurnState</strong> for rotation</li>
                    <li>Use <strong className="text-white">SequenceState</strong> to chain movements</li>
                    <li>Launch the <strong className="text-white">Visualizer</strong> to debug leg movements</li>
                    <li>Add IMU input for balance correction</li>
                </ul>
            </div>

            {/* Closing */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 mt-8">
                <p className="text-neutral-400 italic">
                    "If it walks like a bug, it's probably your hexapod running Kenate. Ship it."
                </p>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/visualizer" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Visualizer
                        </div>
                    </Link>
                    <Link href="/documentation" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Back to</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Introduction
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
