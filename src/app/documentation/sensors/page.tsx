import Link from "next/link";
import { ArrowRight, Eye, Wifi } from "lucide-react";

export default function SensorsPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">API Reference</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Sensors
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Perceiving the world (or at least the wall 5cm in front of you).
                </p>
            </div>

            {/* Components List */}
            <div className="space-y-12">

                {/* useSensor Hook */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500">
                            <Wifi size={20} />
                        </div>
                        <h2 className="text-2xl font-semibold text-white font-mono">useSensor()</h2>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">
                        A generic hook to subscribe to any sensor datastream.
                    </p>

                    {/* Snippet */}
                    <div className="rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0A] p-4 font-mono text-sm leading-relaxed text-neutral-300">
                        const value = <span className="text-yellow-400">useSensor</span>(SensorClass, options);
                    </div>
                </div>

                {/* Ultrasonic */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                            <Eye size={20} />
                        </div>
                        <h2 className="text-2xl font-semibold text-white font-mono">Ultrasonic</h2>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">
                        Standard HC-SR04 ultrasonic distance sensor.
                    </p>

                    {/* Props Table */}
                    <div className="border border-white/5 rounded-lg overflow-hidden bg-[#0A0A0A]">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-white/5 text-neutral-300 font-medium">
                                <tr>
                                    <th className="p-4">Option</th>
                                    <th className="p-4">Type</th>
                                    <th className="p-4">Default</th>
                                    <th className="p-4">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-neutral-400">
                                <tr>
                                    <td className="p-4 font-mono text-purple-400">triggerPin</td>
                                    <td className="p-4 font-mono">number</td>
                                    <td className="p-4 font-mono text-neutral-600">-</td>
                                    <td className="p-4">Output pin to trigger pulse.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-purple-400">echoPin</td>
                                    <td className="p-4 font-mono">number</td>
                                    <td className="p-4 font-mono text-neutral-600">-</td>
                                    <td className="p-4">Input pin to read echo duration.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-mono text-purple-400">interval</td>
                                    <td className="p-4 font-mono">number</td>
                                    <td className="p-4 font-mono text-neutral-600">100</td>
                                    <td className="p-4">Polling interval in milliseconds.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>


            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/motors" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Motors
                        </div>
                    </Link>
                    <Link href="/documentation/logic" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Logic Blocks
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
