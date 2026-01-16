import Link from "next/link";
import { ArrowRight, Activity, Radio, RefreshCcw } from "lucide-react";

export default function ReactivePage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Core Concepts</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Reactive Robotics
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Don't ask "is the button pressed?". Wait for the button to tell you.
                </p>
            </div>

            {/* Explanation */}
            <div className="space-y-6 text-neutral-300 leading-relaxed">
                <p>
                    In traditional robotics (like standard Arduino C++), you often write a super-loop:
                    <code className="bg-neutral-800 px-1 py-0.5 rounded text-sm mx-1 text-emerald-400">void loop() {"{"} checkSensors(); updateMotors(); delay(10); {"}"}</code>.
                </p>
                <p>
                    This is fine for blinking an LED. It is terrible for a hexapod robot balancing on uneven terrain
                    while tracking a face with a camera.
                </p>
                <p>
                    Kenate introduces a <strong>Push-based Architecture</strong>.
                </p>
            </div>

            {/* Diagramish thing */}
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 flex flex-col items-center text-center">
                    <Radio className="text-red-500 mb-4" size={32} />
                    <h4 className="text-white font-medium mb-2">Event Source</h4>
                    <p className="text-xs text-neutral-500">User presses button or Sensor detects wall.</p>
                </div>
                <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 flex flex-col items-center text-center">
                    <RefreshCcw className="text-yellow-500 mb-4 animate-[spin_3s_linear_infinite]" size={32} />
                    <h4 className="text-white font-medium mb-2">State Update</h4>
                    <p className="text-xs text-neutral-500">React State updates. Component re-renders.</p>
                </div>
                <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 flex flex-col items-center text-center">
                    <Activity className="text-green-500 mb-4" size={32} />
                    <h4 className="text-white font-medium mb-2">Actuation</h4>
                    <p className="text-xs text-neutral-500">Motor moves to new calculated position.</p>
                </div>
            </div>

            {/* Code Snippet */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">The `useSensor` Hook</h2>
                <div className="rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0A] p-6 overflow-x-auto">
                    <pre className="font-mono text-sm leading-relaxed">
                        <code className="text-neutral-300">
                            <span className="text-pink-500">const</span> <span className="text-blue-400">ObstacleAvoidance</span> = () =&gt; {"{"}<br />
                            &nbsp;&nbsp;<span className="text-gray-500">// This component ONLY re-renders when distance changes &gt; 5cm</span><br />
                            &nbsp;&nbsp;<span className="text-pink-500">const</span> distance = <span className="text-yellow-300">useSensor</span>(UltrasomicSensor, {"{"} threshold: 5 {"}"});<br />
                            <br />
                            &nbsp;&nbsp;<span className="text-pink-500">return</span> (<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-emerald-400">Motor</span> <span className="text-purple-400">speed</span>={"{"}distance &lt; 20 ? 0 : 100{"}"} /&gt;<br />
                            &nbsp;&nbsp;);<br />
                            {"}"}
                        </code>
                    </pre>
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/philosophy" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Philosophy
                        </div>
                    </Link>
                    <Link href="/documentation/hardware" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Hardware Hardware
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
