"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StructurePage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Getting Started</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Project Structure
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    A Kenate project is organized to separate your behaviors from your configuration. Clean code, happy life.
                </p>
            </div>

            {/* File Tree */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Standard Layout</h2>
                <p className="text-neutral-400">
                    When you run <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">kenate init my_robot</code>, this is what you get:
                </p>

                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 font-mono text-sm">
                    <div className="space-y-1">
                        <TreeItem name="my_robot/" isFolder />
                        <TreeItem name="hardware.toml" indent={1} desc="Hardware configuration" />
                        <TreeItem name="main.py" indent={1} desc="Entry point" isCode />
                        <TreeItem name="states/" indent={1} isFolder />
                        <TreeItem name="__init__.py" indent={2} />
                        <TreeItem name="patrol.py" indent={2} desc="Your state files" isCode />
                        <TreeItem name="alert.py" indent={2} isCode />
                        <TreeItem name="idle.py" indent={2} isCode />
                        <TreeItem name="tests/" indent={1} isFolder />
                        <TreeItem name="test_patrol.py" indent={2} desc="Unit tests" isCode />
                        <TreeItem name="build/" indent={1} isFolder isDim desc="(Generated) C++ artifacts" />
                        <TreeItem name=".kenate/" indent={1} isFolder isDim desc="(Hidden) Cache" />
                    </div>
                </div>
            </div>

            {/* Key Files */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Key Files Explained</h2>

                {/* hardware.toml */}
                <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white">
                        <code className="text-blue-400">hardware.toml</code>
                    </h3>
                    <p className="text-neutral-400">
                        Defines your hardware configuration. Change this file to switch platforms without touching your Python code. It's like magic, but with TOML.
                    </p>
                    <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 overflow-x-auto">
                        <pre className="font-mono text-sm text-neutral-300">
                            {`[driver]
type = "raspberry_pi"  # or "odrive", "serial", "mock"

[motors]
left_wheel = { pin = 18, type = "pwm" }
right_wheel = { pin = 19, type = "pwm" }

[sensors]
front_sonar = { pin = 23, type = "hc-sr04" }`}
                        </pre>
                    </div>
                </div>

                {/* main.py */}
                <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white">
                        <code className="text-emerald-400">main.py</code>
                    </h3>
                    <p className="text-neutral-400">
                        The entry point. You register your states and start the Engine here. Nice and simple.
                    </p>
                    <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 overflow-x-auto">
                        <pre className="font-mono text-sm text-neutral-300">
                            {`import kenate
from states.patrol import PatrolState
from states.alert import AlertState
from states.idle import IdleState

engine = kenate.Engine()
engine.load_config("hardware.toml")

engine.register_state("Idle", IdleState())
engine.register_state("Patrol", PatrolState())
engine.register_state("Alert", AlertState())

engine.start("Idle")  # Blocking call`}
                        </pre>
                    </div>
                </div>

                {/* states/ */}
                <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white">
                        <code className="text-yellow-400">states/</code>
                    </h3>
                    <p className="text-neutral-400">
                        Each behavior lives in its own file. One state per file keeps things clean and testable. Your future self will thank you.
                    </p>
                    <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4 overflow-x-auto">
                        <pre className="font-mono text-sm text-neutral-300">
                            {`# states/patrol.py
import kenate

class PatrolState(kenate.BaseState):
    def on_enter(self):
        self.log("Starting patrol...")
    
    def on_update(self):
        self.set_motor_speed(0, 50)  # Left motor
        self.set_motor_speed(1, 50)  # Right motor
        
        if self.get_distance(0) < 30:
            self.change_state("Alert")`}
                        </pre>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/installation" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Installation
                        </div>
                    </Link>
                    <Link href="/documentation/philosophy" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Philosophy
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function TreeItem({ name, indent = 0, isFolder, isCode, isDim, desc }: { name: string; indent?: number; isFolder?: boolean; isCode?: boolean; isDim?: boolean; desc?: string }) {
    const color = isDim ? "text-neutral-600" : isFolder ? "text-yellow-400" : isCode ? "text-emerald-400" : "text-neutral-300";
    return (
        <div className="flex items-center gap-2" style={{ paddingLeft: `${indent * 1.5}rem` }}>
            <span className={color}>{name}</span>
            {desc && <span className="text-neutral-600 text-xs ml-2">{desc}</span>}
        </div>
    );
}
