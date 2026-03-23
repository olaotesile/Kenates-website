"use client";
import Link from "next/link";
import { ArrowRight, Shield, Battery, Navigation, CheckCircle, Info } from "lucide-react";

export default function DeliveryTutorial() {
    return (
        <div className="space-y-12 pb-20">
            {/* Header */}
            <div className="space-y-4">
                <p className="text-emerald-500 font-mono text-xs mb-4 uppercase tracking-widest">Masterclass V1.0.6</p>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                    Autonomous Delivery
                </h1>
                <div className="flex items-center gap-4 text-neutral-400 text-sm">
                    <span className="flex items-center gap-1">Warehouse Suite</span>
                    <span className="flex items-center gap-1">Fail-Safe Architecture</span>
                </div>
            </div>

            {/* Introduction */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 space-y-4">
                <h2 className="text-xl font-semibold text-white">Introduction</h2>
                <p className="text-neutral-400 leading-relaxed italic">
                    "I'm going to build a delivery system that doesn't immediately crash into the nearest wall and explode. Let's actually engineer this properly."
                </p>
            </div>

            {/* Steps 1 & 2 */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span className="text-emerald-500">01.</span> Install Engine
                    </h3>
                    <div className="bg-black/40 rounded-xl p-3 font-mono text-xs text-emerald-400 border border-white/5 disabled select-none">
                        $ git clone [repo_link_coming_soon]<br />
                        $ cd kenate
                    </div>
                </div>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span className="text-emerald-500">02.</span> Scaffold Workspace
                    </h3>
                    <div className="bg-black/40 rounded-xl p-3 font-mono text-xs text-neutral-400 border border-white/5 leading-relaxed">
                        $ kenate init WarehouseBot<br />
                        $ cd WarehouseBot
                    </div>
                </div>
            </div>

            {/* The Code */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="text-emerald-500">03.</span> The Implementation
                </h3>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 overflow-x-auto shadow-2xl">
                        <pre className="font-mono text-sm leading-relaxed text-neutral-300">
                            {`from kenate import Robot, BaseState
from kenate.stdlib import WaitState, BlackBoxLogger
from kenate.diag import TerminalVisualizer

# PHASE 1: THE SAFETY LAYER (EMERGENCY LOCKDOWN)
class SafetyLockdown(BaseState):
    def on_enter(self):
        print("\\n[CRITICAL] EMERGENCY LOCKDOWN TRIGGERED.")
        # Kill power to actuators here
    
    def on_update(self):
        pass

# PHASE 2: THE STARTUP AUDIT (BATTERY CHECK)
class BatteryCheck(BaseState):
    def on_enter(self):
        self.logger = BlackBoxLogger()
        print("[SYSTEM] Pre-Flight Energy Audit...")

    def on_update(self):
        battery = self.get_battery_level()
        if battery > 20:
            self.transition_to("Navigation")
        else:
            self.transition_to("SafetyLockdown")

# PHASE 3: THE HEARTBEAT LOOP (NAVIGATION)
class Navigation(BaseState):
    def on_enter(self):
        self.viz = TerminalVisualizer(robot_id="MASTER-TRANS-01")
        self.traveled = 0.0

    def on_update(self):
        # 1. SENSE: Gather data
        dist = self.get_distance_sensor()
        temp = self.get_system_temperature()
        
        # 2. THINK: Logic transitions (Fail-safe)
        if temp > 80.0:
            self.transition_to("SafetyLockdown")
            return

        if dist < 30:
            print("\\n[ALERT] Obstacle! Braking...")
            self.transition_to("WaitState") 
            return

        # 3. ACT: Move and render
        self.traveled += 0.1 
        self.viz.render(self.name, {'distance': self.traveled})

def main():
    robot = Robot(port="SIMULATION")
    robot.create_state("StartUp", BatteryCheck)
    robot.create_state("Navigation", Navigation)
    robot.create_state("SafetyLockdown", SafetyLockdown)
    robot.start()`}
                        </pre>
                    </div>
                </div>
            </div>

            {/* To the Bone Breakdown */}
            <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                    Breakdown: To The Bone
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-blue-400 font-mono text-sm border-b border-blue-500/20 pb-2">
                            The Safety Layer
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            I need a <span className="text-white">"Safe Zone"</span> for when things inevitably catch on fire. The <code className="text-emerald-400">SafetyLockdown</code> state is completely isolated. If your navigation logic crashes hard, this state ensures the motors are immediately killed so your robot doesn't autonomously drive itself off a cliff.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm border-b border-emerald-500/20 pb-2">
                            Pre-Flight Audit
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            I don't want a robot dying halfway down a corridor because you forgot to charge it. The <code className="text-emerald-400">BatteryCheck</code> logs its findings to the Black Box so when the inevitable happens, I have the receipts.
                        </p>
                    </div>
                </div>
            </div>

            {/* Deployment */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white">04. Deploying to Hardware</h3>
                <p className="text-neutral-400 leading-relaxed text-sm font-mono">
                    Once the code is on the Raspberry Pi, run:
                </p>
                <div className="bg-black/60 border border-white/10 rounded-xl p-4 text-emerald-400 font-mono text-sm">
                    $ kenate run src/delivery_bot.py
                </div>
                <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-white/5 font-mono text-xs text-neutral-500 italic">
                    The Python script wakes up the C++ engine inside the robot's brain, and the navigation begins!
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/tutorials/hexapod" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Hexapod Walk
                        </div>
                    </Link>
                    <Link href="/documentation/safety" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Safety & Thermal
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
