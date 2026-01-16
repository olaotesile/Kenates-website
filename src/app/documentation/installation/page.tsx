"use client";
import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InstallationPage() {
    const [copied, setCopied] = useState(false);
    const [packageManager, setPackageManager] = useState<"npm" | "yarn" | "pnpm">("npm");

    const commands = {
        npm: "npm install kenate-core react-three-fiber three",
        yarn: "yarn add kenate-core react-three-fiber three",
        pnpm: "pnpm add kenate-core react-three-fiber three",
    };

    const copyCommand = () => {
        navigator.clipboard.writeText(commands[packageManager]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div>
                <p className="text-emerald-500 font-mono text-xs mb-4">Getting Started</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Installation
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Adding Kenate to your project is easier than explaining to your family what "inverse kinematics" means.
                </p>
            </div>

            {/* Prerequisites */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Prerequisites</h2>
                <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4 marker:text-emerald-500">
                    <li>Node.js 18 or higher (we use features that didn't exist in 2022)</li>
                    <li>React 18+ (Concurrency is key for robotics)</li>
                    <li>A vague understanding of how servos work (optional, but helpful)</li>
                </ul>
            </div>

            {/* Installation Block */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Install Package</h2>

                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden">
                    {/* Tabs */}
                    <div className="flex border-b border-white/5">
                        {(["npm", "yarn", "pnpm"] as const).map((pm) => (
                            <button
                                key={pm}
                                onClick={() => setPackageManager(pm)}
                                className={cn(
                                    "px-6 py-3 text-sm font-medium transition-colors border-b-2",
                                    packageManager === pm
                                        ? "border-emerald-500 text-white bg-white/5"
                                        : "border-transparent text-neutral-500 hover:text-neutral-300 hover:bg-white/[0.02]"
                                )}
                            >
                                {pm}
                            </button>
                        ))}
                    </div>

                    {/* Command */}
                    <div className="p-6 flex items-center justify-between group">
                        <div className="font-mono text-sm text-neutral-300">
                            <span className="text-emerald-500 select-none">$ </span>
                            {commands[packageManager]}
                        </div>
                        <button
                            onClick={copyCommand}
                            className="p-2 rounded-md hover:bg-white/10 text-neutral-500 hover:text-white transition-colors relative"
                            title="Copy to clipboard"
                        >
                            {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                        </button>
                    </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <p className="text-yellow-200/80 text-sm">
                        <span className="font-bold text-yellow-500 block mb-1">Warning</span>
                        Do not install this on a toaster. Kenate is powerful, but it cannot (yet) make toast.
                    </p>
                </div>
            </div>

            {/* Configuration */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Setup Provider</h2>
                <p className="text-neutral-400">Wrap your application with the <code className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">KenateRoot</code> provider.</p>

                <div className="rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0A] p-6 overflow-x-auto">
                    <pre className="font-mono text-sm leading-relaxed">
                        <code className="text-neutral-300">
                            <span className="text-pink-500">import</span> {"{ KenateRoot }"} <span className="text-pink-500">from</span> <span className="text-green-400">'kenate-core'</span>;<br /><br />
                            <span className="text-pink-500">export default function</span> <span className="text-blue-400">App</span>() {"{"}<br />
                            &nbsp;&nbsp;<span className="text-pink-500">return</span> (<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-emerald-400">KenateRoot</span> <span className="text-purple-400">port</span>=<span className="text-green-400">"COM3"</span> <span className="text-purple-400">baudRate</span>={9600}&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{/* Your Robot Components Here */}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-emerald-400">KenateRoot</span>&gt;<br />
                            &nbsp;&nbsp;);<br />
                            {"}"}
                        </code>
                    </pre>
                </div>
            </div>


            {/* Navigation */}
            <div className="pt-10 border-t border-white/5">
                <div className="flex items-center justify-between">
                    <Link href="/documentation" className="group flex flex-col items-start gap-2 text-left">
                        <span className="text-neutral-500 text-xs font-mono">Previous</span>
                        <div className="flex items-center gap-2 text-neutral-300 font-medium group-hover:text-white transition-colors">
                            <ArrowRight size={18} className="rotate-180" />
                            Introduction
                        </div>
                    </Link>
                    <Link href="/documentation/structure" className="group flex flex-col items-end gap-2 text-right">
                        <span className="text-neutral-500 text-xs font-mono">Next</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                            Project Structure
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
