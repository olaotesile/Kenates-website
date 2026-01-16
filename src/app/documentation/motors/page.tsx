import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";

export default function MotorsPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">API Reference</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Motors & Actuators
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Moving things around.
                </p>
            </div>

            {/* Components List */}
            <div className="space-y-12">

                {/* <Servo /> */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-pink-500/10 text-pink-500">
                            <Settings size={20} />
                        </div>
                        <h2 className="text-2xl font-semibold text-white font-mono">&lt;Servo /&gt;</h2>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">
                        Controls a standard hobby servo motor (0-180 degrees).
                    </p>

                    {/* Props Table */}
                    <div className="border border-white/5 rounded-lg overflow-hidden bg-[#0A0A0A]">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-white/5 text-neutral-300 font-medium">
                                <tr>
                                    <th className="p-4">Prop</th>
                                    <th className="p-4">Type</th>
                                    <th className="p-4">Default</th>
                                    <th className="p-4">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-neutral-400">
                                <tr>
                                    <td className="p-4 font-mono text-purple-400">pin</td>
                                    <td className="p-4 font-mono">number</td>
                                    <td className="p-4 font-mono text-neutral-600">-</td>
                                    <td className="p-4">Physical pin on the microcontroller.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-purple-400">angle</td>
                                    <td className="p-4 font-mono">number</td>
                                    <td className="p-4 font-mono text-neutral-600">90</td>
                                    <td className="p-4">Target angle in degrees (0-180).</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-purple-400">smooth</td>
                                    <td className="p-4 font-mono">boolean</td>
                                    <td className="p-4 font-mono text-neutral-600">false</td>
                                    <td className="p-4">If true, interpolates movement over time to avoid jerky motion.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <Motor /> */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                            <Settings size={20} />
                        </div>
                        <h2 className="text-2xl font-semibold text-white font-mono">&lt;Motor /&gt;</h2>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">
                        Controls a DC motor via an H-Bridge or similar driver.
                    </p>

                    {/* Props Table */}
                    <div className="border border-white/5 rounded-lg overflow-hidden bg-[#0A0A0A]">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-white/5 text-neutral-300 font-medium">
                                <tr>
                                    <th className="p-4">Prop</th>
                                    <th className="p-4">Type</th>
                                    <th className="p-4">Default</th>
                                    <th className="p-4">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-neutral-400">
                                <tr>
                                    <td className="p-4 font-mono text-purple-400">pins</td>
                                    <td className="p-4 font-mono">number[]</td>
                                    <td className="p-4 font-mono text-neutral-600">-</td>
                                    <td className="p-4">Array of pins (e.g. [PWM, DIR] or [IN1, IN2]).</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-purple-400">speed</td>
                                    <td className="p-4 font-mono">number</td>
                                    <td className="p-4 font-mono text-neutral-600">0</td>
                                    <td className="p-4">Speed from -100 to 100. Negative values reverse direction.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>


            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/hardware" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Hardware
                        </div>
                    </Link>
                    <Link href="/documentation/sensors" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Sensors
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
