"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CLIPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Tools</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    CLI Commands
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    The <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">kenate</code> command-line tool is your developer multitool. Learn it, love it.
                </p>
            </div>

            {/* Commands Overview */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Available Commands</h2>

                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="text-left px-4 py-3 text-neutral-400 font-medium">Command</th>
                                <th className="text-left px-4 py-3 text-neutral-400 font-medium">Purpose</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">kenate init</td>
                                <td className="px-4 py-3 text-neutral-300">Create a new project</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">kenate build</td>
                                <td className="px-4 py-3 text-neutral-300">Compile the C++ Engine</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">kenate run</td>
                                <td className="px-4 py-3 text-neutral-300">Build and run your robot</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">kenate test</td>
                                <td className="px-4 py-3 text-neutral-300">Run unit tests</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-mono text-emerald-400">kenate visualize</td>
                                <td className="px-4 py-3 text-neutral-300">Launch the dashboard</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* kenate init */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                    <code className="text-emerald-400">kenate init &lt;name&gt;</code>
                </h2>
                <p className="text-neutral-400">
                    Creates a new project folder with the standard structure. Gets you from zero to robot in seconds.
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`$ kenate init my_robot

Creating project: my_robot
  ✓ Created hardware.toml
  ✓ Created main.py
  ✓ Created states/
  ✓ Created tests/
  ✓ Created virtualenv

Done! cd my_robot to get started.`}
                    </pre>
                </div>
            </div>

            {/* kenate build */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                    <code className="text-blue-400">kenate build</code>
                </h2>
                <p className="text-neutral-400">
                    Runs CMake and compiles the C++ Engine. Links the Python bindings. You only need to do this once (usually).
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`$ kenate build

Configuring CMake...
Compiling C++ Engine...
Linking Python bindings...

✓ Build complete: kenate_bindings.pyd`}
                    </pre>
                </div>
            </div>

            {/* kenate run */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                    <code className="text-emerald-400">kenate run</code>
                </h2>
                <p className="text-neutral-400">
                    Builds (if needed) and executes your <code className="text-emerald-400 bg-emerald-500/10 px-1 rounded">main.py</code>. The main event.
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`$ kenate run

✓ Build up-to-date
Starting Engine...
[INFO] Entered state: Idle
[INFO] Starting patrol...`}
                    </pre>
                </div>
            </div>

            {/* kenate test */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                    <code className="text-purple-400">kenate test</code>
                </h2>
                <p className="text-neutral-400">
                    Runs your unit tests using a mock engine (no real hardware needed). Test early, test often.
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`$ kenate test

Running tests/test_patrol.py...
  ✓ test_enters_alert_on_obstacle
  ✓ test_moves_forward_when_clear

2 passed, 0 failed`}
                    </pre>
                </div>
            </div>

            {/* kenate visualize */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                    <code className="text-pink-400">kenate visualize</code>
                </h2>
                <p className="text-neutral-400">
                    Starts a WebSocket server and opens the real-time dashboard at <code className="text-emerald-400 bg-emerald-500/10 px-1 rounded">localhost:3000</code>. See what your robot sees.
                </p>
                <div className="rounded-lg border border-white/10 bg-[#0A0A0A] p-4">
                    <pre className="font-mono text-sm text-neutral-300">
                        {`$ kenate visualize

Starting WebSocket server on :8080
Opening dashboard at http://localhost:3000

Connected to robot!`}
                    </pre>
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/logic" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Standard Library
                        </div>
                    </Link>
                    <Link href="/documentation/visualizer" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Visualizer
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
