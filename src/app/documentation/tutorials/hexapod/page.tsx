"use client";
import Link from "next/link";
import { ArrowRight, Cpu, Zap, Activity, Info } from "lucide-react";

export default function HexapodTutorial() {
    return (
        <div className="space-y-12 pb-20">
            {/* Header */}
            <div className="space-y-4">
                <p className="text-emerald-500 font-mono text-xs mb-4 uppercase tracking-widest">Masterclass V1.0.6</p>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                    Hexapod Walking Gait
                </h1>
                <div className="flex items-center gap-4 text-neutral-400 text-sm">
                    <span className="flex items-center gap-1">Tripod Pattern</span>
                    <span className="flex items-center gap-1">Biomimetic Logic</span>
                </div>
            </div>

            {/* Preface */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 space-y-4">
                <h2 className="text-xl font-semibold text-white">The Challenge</h2>
                <p className="text-neutral-400 leading-relaxed italic">
                    "Coordinating 6 legs at once is usually a nightmare. Most people write hundreds of <span className="font-mono text-emerald-400">if</span> statements and end up with a twitchy mess. I'm going to do it with math, because math actually works."
                </p>
            </div>

            {/* Installation */}
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="text-emerald-500">01.</span> Installation
                </h3>
                <p className="text-neutral-400">Before I do anything, let's get the engine installed on your machine. This gives me the high-speed "Heartbeat" I need for smooth walking.</p>
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-4 font-mono text-sm text-emerald-400">
                    $ git clone [repo_link_coming_soon]<br />
                    $ cd kenate
                </div>
            </div>

            {/* The Walking Plan */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="text-emerald-500">02.</span> The Walking Plan (Pseudo-Code)
                </h3>
                <div className="grid gap-4">
                    {[
                        "START: Center all 6 legs so the robot is standing tall.",
                        "TRIPOD A: Lift legs 1, 3, and 5 together.",
                        "TRIPOD B: While Group A is lifting, legs 2, 4, and 6 push the ground.",
                        "COORDINATION: Use a Sine wave to make the transition smooth instead of bouncy.",
                        "SYSTEM CHECK: Constantly check the height sensor. If the robot 'sags', adjust power.",
                        "DATA: Save every single leg position to the Black Box for later."
                    ].map((step, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                            <span className="text-emerald-500 font-mono text-xs mt-1">{i + 1}</span>
                            <p className="text-sm text-neutral-300">{step}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* The Code */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="text-emerald-500">03.</span> The Implementation
                </h3>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 overflow-x-auto shadow-2xl">
                        <pre className="font-mono text-sm leading-relaxed text-neutral-300">
                            {`from kenate import Robot, BaseState
from kenate.stdlib import WaitState, BlackBoxLogger
from kenate.diag import TerminalVisualizer
import math
import time

class HexapodWalking(BaseState):
    """
    RATIONALE: I don't use 'if' statements to walk. I use Sine waves. 
    It makes the robot move like a living creature instead of a stuttering toy.
    """
    def on_enter(self):
        print("\\n[GAIT] Initializing Biomimetic Tripod Sequence...")
        self.logger = BlackBoxLogger()
        self.viz = TerminalVisualizer(robot_id="HEXA-v1")
        
        # Our internal "Clock" for the walking wave
        self.cycle_time = 0.0 
        self.step_height = 5.0 
        self.walking_speed = 2.0 

    def on_update(self):
        # 1. TIME: Constant 1ms heartbeat
        self.cycle_time += 0.001 
        
        # 2. THE WAVE: Tripod pattern (Sine Wave transition)
        wave_a = math.sin(self.cycle_time * self.walking_speed * 2 * math.pi)

        # 3. LEG LIFT: Calculate lift heights
        leg_group_a_height = max(0, wave_a * self.step_height)
        leg_group_b_height = max(0, -wave_a * self.step_height)

        # 4. SENSORS: Monitor ground and thermals
        ground_distance = self.get_height_sensor()
        temp = self.get_system_temperature()

        # 5. DASHBOARD: Live Telemetry
        self.viz.render(self.name, {
            'height': ground_distance,
            'distance': leg_group_a_height,
            'battery': 95,
            'temp': temp,
            'signal': 100
        })

        # 6. BLACK BOX: High-frequency recording
        self.logger.log(self.name, {
            'height': ground_distance, 
            'distance': leg_group_a_height, 
            'temp': temp
        })

def main():
    robot = Robot(port="SIMULATION")
    robot.create_state("TripodGait", HexapodWalking)
    
    try:
        robot.start()
        for _ in range(100):
            time.sleep(0.1)
    finally:
        robot.stop()`}
                        </pre>
                    </div>
                </div>
            </div>

            {/* To the Bone Breakdown */}
            <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                    Breakdown: To The Bone
                </h3>

                <div className="space-y-6">
                    <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-emerald-400 font-mono underline decoration-emerald-500/30 underline-offset-4">Sine Wave Rationale</h4>
                        <p className="text-neutral-400 leading-relaxed text-sm">
                            I don't use boolean gates for motion. I use <code className="text-white font-mono">math.sin()</code> because physics exists. Jumping instantly from speed 0 to 100 will strip your cheap plastic servo gears in about three seconds. A Sine wave naturally ramps acceleration up and down. You're welcome.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-blue-400 font-mono underline decoration-blue-500/30 underline-offset-4">The Cycle Clock</h4>
                        <p className="text-neutral-400 leading-relaxed text-sm">
                            Because <code className="text-white font-mono">on_update()</code> is fired precisely every 1ms by the C++ Kernel, adding <span className="text-white">0.001</span> to our clock isn't a hope and a prayer—it's exactly one millisecond of real-world time. No jitter, no drift.
                        </p>
                    </div>
                </div>
            </div>

            {/* Deployment */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white">04. Moving to the Real Robot</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                    When you're ready to see the legs move for real, copy this file onto your robot (SSH/Git). Change the <code className="text-white">port</code> from <span className="text-emerald-400">"SIMULATION"</span> to <span className="text-blue-400">"GPIO"</span> or <span className="text-blue-400">"/dev/ttyUSB0"</span>.
                </p>
                <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-white/5 font-mono text-xs text-neutral-500">
                    Once you run the script, the C++ Heartbeat takes over and the hexapod stands up!
                </div>
            </div>

            {/* Navigation links */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/visualizer" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Visualizer
                        </div>
                    </Link>
                    <Link href="/documentation/tutorials/delivery" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Delivery Robot
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
