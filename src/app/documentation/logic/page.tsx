import Link from "next/link";
import { ArrowRight, Box, Repeat } from "lucide-react";

export default function LogicPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">API Reference</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Logic Blocks
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Higher order composition for smarter robots.
                </p>
            </div>

            {/* Components List */}
            <div className="space-y-12">

                {/* <InverseKinematics /> */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                            <Box size={20} />
                        </div>
                        <h2 className="text-2xl font-semibold text-white font-mono">&lt;InverseKinematics /&gt;</h2>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">
                        Calculates joint angles for a multi-joint limb to reach a target coordinate (x, y, z).
                    </p>

                    {/* Props Table */}
                    <div className="border border-white/5 rounded-lg overflow-hidden bg-[#0A0A0A]">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-white/5 text-neutral-300 font-medium">
                                <tr>
                                    <th className="p-4">Prop</th>
                                    <th className="p-4">Type</th>
                                    <th className="p-4">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-neutral-400">
                                <tr>
                                    <td className="p-4 font-mono text-purple-400">target</td>
                                    <td className="p-4 font-mono">[number, number, number]</td>
                                    <td className="p-4">The target point in 3D space relative to the base.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-purple-400">segments</td>
                                    <td className="p-4 font-mono">number[]</td>
                                    <td className="p-4">Lengths of each arm segment in mm.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-purple-400">children</td>
                                    <td className="p-4 font-mono">ReactNode</td>
                                    <td className="p-4">Must be valid &lt;Servo /&gt; components.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <PID /> */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                            <Repeat size={20} />
                        </div>
                        <h2 className="text-2xl font-semibold text-white font-mono">&lt;PIDController /&gt;</h2>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">
                        Wraps a motor or output to automatically correct error towards a setpoint using Proportional-Integral-Derivative logic.
                    </p>

                    {/* Props Table */}
                    <div className="border border-white/5 rounded-lg overflow-hidden bg-[#0A0A0A]">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-white/5 text-neutral-300 font-medium">
                                <tr>
                                    <th className="p-4">Prop</th>
                                    <th className="p-4">Type</th>
                                    <th className="p-4">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-neutral-400">
                                <tr>
                                    <td className="p-4 font-mono text-purple-400">setpoint</td>
                                    <td className="p-4 font-mono">number</td>
                                    <td className="p-4">Desired value.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-purple-400">input</td>
                                    <td className="p-4 font-mono">number</td>
                                    <td className="p-4">Current measured value (from sensor).</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-purple-400">kp, ki, kd</td>
                                    <td className="p-4 font-mono">number</td>
                                    <td className="p-4">Tuning constants.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>


            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/sensors" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Sensors
                        </div>
                    </Link>

                    <Link href="/" className="group flex flex-col items-end gap-2 text-right opacity-50 hover:opacity-100 transition-opacity">
                        <span className="text-neutral-500 text-xs font-mono">Finish</span>
                        <div className="flex items-center gap-2 text-white font-medium group-hover:text-emerald-400 transition-colors">
                            Back to Home
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
