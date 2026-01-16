import Link from "next/link";
import { ArrowRight, Bug, Cpu, Zap, Code, Settings, PenTool } from "lucide-react";

export default function HexapodTutorialPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Tutorials</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Build a Hexapod
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    I have chosen to build a hexapod (a six-legged robot) for this tutorial because it is the "Hello World" of serious robotics. It forces you to deal with Inverse Kinematics, gait coordination, and stability control—all at once.
                </p>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mt-4">
                    Plus, they look cool.
                </p>
            </div>

            {/* Prerequisites */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Cpu size={18} className="text-blue-400" />
                    Bill of Materials
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-400">
                    <li className="flex items-center gap-3 bg-white/5 p-2 rounded">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        18x SG90 Servos (3 per leg)
                    </li>
                    <li className="flex items-center gap-3 bg-white/5 p-2 rounded">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        ESP32 DevKit V1 (preferred for WiFi)
                    </li>
                    <li className="flex items-center gap-3 bg-white/5 p-2 rounded">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        PCA9685 Servo Controller (x2 for 18 channels)
                    </li>
                    <li className="flex items-center gap-3 bg-white/5 p-2 rounded">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        7.4V LiPo Battery (High discharge)
                    </li>
                </ul>
            </div>

            <hr className="border-white/5" />

            {/* Step 1 */}
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold font-mono">
                        01
                    </div>
                    <h2 className="text-2xl font-semibold text-white">Define the Leg</h2>
                </div>
                <div className="pl-14 space-y-4">
                    <p className="text-neutral-400 leading-relaxed">
                        A hexapod leg typically has 3 Degrees of Freedom (DoF):
                    </p>
                    <ul className="list-disc list-inside text-neutral-400 ml-4 space-y-1">
                        <li><strong>Coxa</strong>: Hip swing (forward/backward)</li>
                        <li><strong>Femur</strong>: Hip lift (up/down)</li>
                        <li><strong>Tibia</strong>: Knee flex (extension)</li>
                    </ul>
                    <p className="text-neutral-400 leading-relaxed">
                        Instead of manually calculating angles, we use Kenate's `InverseKinematics` block. You simply tell it the length of each limb segment (in mm), and it handles the trigonometry.
                    </p>

                    <div className="rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0A] p-6 overflow-x-auto">
                        <pre className="font-mono text-sm leading-relaxed">
                            <code className="text-neutral-300">
                                <span className="text-pink-500">export function</span> <span className="text-blue-400">HexapodLeg</span>({"{"} target, offset {"}"}) {"{"}<br />
                                {"  "}<span className="text-gray-500">// Segments: Coxa (50mm), Femur (80mm), Tibia (120mm)</span><br />
                                {"  "}<span className="text-pink-500">return</span> (<br />
                                {"    "}&lt;<span className="text-emerald-400">InverseKinematics</span> <span className="text-purple-400">target</span>={"{"}target{"}"} <span className="text-purple-400">segments</span>={"{"}[50, 80, 120]{"}"}&gt;<br />
                                {"      "}&lt;<span className="text-emerald-400">Servo</span> <span className="text-purple-400">pin</span>={"{"}offset + 0{"}"} /&gt; <span className="text-gray-500">// Coxa</span><br />
                                {"      "}&lt;<span className="text-emerald-400">Servo</span> <span className="text-purple-400">pin</span>={"{"}offset + 1{"}"} /&gt; <span className="text-gray-500">// Femur</span><br />
                                {"      "}&lt;<span className="text-emerald-400">Servo</span> <span className="text-purple-400">pin</span>={"{"}offset + 2{"}"} /&gt; <span className="text-gray-500">// Tibia</span><br />
                                {"    "}&lt;/<span className="text-emerald-400">InverseKinematics</span>&gt;<br />
                                {"  "});<br />
                                {"}"}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold font-mono">
                        02
                    </div>
                    <h2 className="text-2xl font-semibold text-white">The Walk Cycle</h2>
                </div>
                <div className="pl-14 space-y-4">
                    <p className="text-neutral-400 leading-relaxed">
                        Coordinating 18 motors is a nightmare if you use loops. With Kenate, we just push a "gait" state. The `useGait` hook outputs 6 target coordinates (x, y, z for each leg foot tip) based on the chosen pattern.
                    </p>
                    <p className="text-neutral-400 leading-relaxed">
                        We use a <strong>Tripod Gait</strong> here, where legs move in two groups of three (forming a stable triangle at all times).
                    </p>

                    <div className="rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0A] p-6 overflow-x-auto">
                        <pre className="font-mono text-sm leading-relaxed">
                            <code className="text-neutral-300">
                                <span className="text-pink-500">export default function</span> <span className="text-blue-400">Robot</span>() {"{"}<br />
                                {"  "}<span className="text-gray-500">// speed: 50mm/s step cycle</span><br />
                                {"  "}<span className="text-pink-500">const</span> targets = <span className="text-yellow-300">useGait</span>(<span className="text-green-400">"tripod"</span>, {"{"} speed: 50 {"}"});<br />
                                <br />
                                {"  "}<span className="text-pink-500">return</span> (<br />
                                {"    "}&lt;<span className="text-emerald-400">KenateRoot</span>&gt;<br />
                                {"      "}{/* Map over 6 legs, assigning unique pins (0-17) */}<br />
                                {"      "}{Array(6).fill(0).map((_, i) => (
                                    <span key={i}>
                                        <br />
                                        {"        "}{"<"}<span className="text-emerald-400">HexapodLeg</span><br />
                                        {"          "}<span className="text-purple-400">key</span>={"{"}i{"}"}<br />
                                        {"          "}<span className="text-purple-400">target</span>={"{"}targets[i]{"}"}<br />
                                        {"          "}<span className="text-purple-400">offset</span>={"{"}i * 3{"}"}<br />
                                        {"        "} /&gt;
                                    </span>
                                ))}<br />
                                {"    "}&lt;/<span className="text-emerald-400">KenateRoot</span>&gt;<br />
                                {"  "});<br />
                                {"}"}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold font-mono">
                        03
                    </div>
                    <h2 className="text-2xl font-semibold text-white">Wiring It Up</h2>
                </div>
                <div className="pl-14 space-y-4">
                    <p className="text-neutral-400 leading-relaxed">
                        Since our code assumes `offset = i * 3`, you must plug your servos into the PCA9685 in this exact order:
                    </p>
                    <div className="bg-neutral-900/50 p-4 rounded-lg border border-white/5">
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono text-neutral-400">
                            <li>Leg 0 (Front Right): Pins 0,1,2</li>
                            <li>Leg 1 (Mid Right): Pins 3,4,5</li>
                            <li>Leg 2 (Back Right): Pins 6,7,8</li>
                            <li>Leg 3 (Front Left): Pins 9,10,11</li>
                            <li>Leg 4 (Mid Left): Pins 12,13,14</li>
                            <li>Leg 5 (Back Left): Pins 15,16,17</li>
                        </ul>
                    </div>
                    <p className="text-sm text-neutral-500 italic">
                        *Note: You will need two PCA9685 boards chained together to get 18 channels. Address them as 0x40 and 0x41.
                    </p>
                </div>
            </div>

            {/* Conclusion */}
            <div className="mt-10 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-white/5 rounded-xl p-8 flex flex-col items-center text-center">
                <Bug size={48} className="text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Crawl?</h3>
                <p className="text-neutral-400 mb-6 max-w-md">
                    Connect your batteries, check your wiring (twice), and hit run.
                </p>
                <p className="text-neutral-400 mb-6 max-w-md italic">
                    And there you go! You just built a hexapod using Kenate when it would have taken you weeks normally. Or maybe you didn't even build it, but hopefully you eventually do after skimming.
                </p>
                <div className="flex gap-4">
                    <Link href="/documentation/motors" className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors">
                        Reference API
                    </Link>
                    <a href="#" className="px-6 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors shadow-lg shadow-emerald-500/20">
                        View Full Source
                    </a>
                </div>
            </div>

            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation/logic" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Logic Blocks
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
