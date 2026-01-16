"use client";

import { motion } from "framer-motion";
import { Copy, Terminal, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { Compare } from "@/components/ui/compare";

export const CodeComparison = () => {
    return (
        <div className="w-full mt-20 max-w-3xl mx-auto">
            <div className="mb-8 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-white mb-2">Servo Motor Control</h3>
                <p className="text-neutral-400">
                    See how a simple servo movement is implemented. The standard approach requires manual loops and state management, while Kenate handles it declaratively.
                </p>
            </div>

            <div className="w-full h-[500px] border border-white/10 rounded-2xl bg-neutral-900/50 backdrop-blur-sm overflow-hidden">
                <Compare
                    firstContent={
                        <CodeBlock
                            title="Standard Robotics Code"
                            code={`// Initialize motor controller
const motor = new MotorController(12, 13);
motor.setMode('servo');
motor.setMaxSpeed(100);

// Main control loop
while (true) {
    if (sensor.read() > 200) {
        motor.moveTo(90);
    } else {
        motor.moveTo(0);
    }
    // Handle error states manually
    if (motor.getError()) {
        motor.reset();
        logger.log("Error reset");
    }
    await delay(10);
}`}
                            language="cpp"
                            lineNumbers
                            isBad
                            className="h-full w-full bg-neutral-900"
                        />
                    }
                    secondContent={
                        <CodeBlock
                            title="Kenate Component"
                            code={`// Declarative & Reactive
<Motor 
    pin={[12, 13]} 
    mode="servo"
    maxSpeed={100}
    position={sensorValue > 200 ? 90 : 0}
    onError={(err) => console.log(err)}
/>

// State handling is built-in.
// No manual loops.`}
                            language="jsx"
                            lineNumbers
                            isKenate
                            className="h-full w-full"
                        />
                    }
                    className="h-full w-full"
                    slideMode="drag"
                />
            </div>
            <div className="flex justify-between mt-4 text-xs md:text-sm text-neutral-500 font-mono px-4">
                <span>Standard (Old)</span>
                <span>Drag slider to compare</span>
                <span className="text-emerald-500">Kenate (New)</span>
            </div>
        </div>
    );
};

const CodeBlock = ({
    title,
    code,
    language,
    lineNumbers,
    isBad,
    isKenate,
    className,
}: {
    title: string;
    code: string;
    language: string;
    lineNumbers?: boolean;
    isBad?: boolean;
    isKenate?: boolean;
    className?: string;
}) => {
    const [copied, setCopied] = useState(false);

    const onCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className={cn(
                "relative h-full flex flex-col overflow-hidden group border-r border-white/5",
                isKenate
                    ? "bg-[#09090b]" // Solid dark background to prevent bleed-through
                    : "bg-neutral-900",
                className
            )}
        >
            {/* Header */}
            <div className={cn(
                "flex items-center justify-between px-4 py-3 border-b",
                isKenate ? "border-emerald-500/20 bg-emerald-900/10" : "border-white/5 bg-white/5"
            )}>
                <div className="flex items-center gap-2">
                    <div className={cn("p-1.5 rounded-md", isKenate ? "bg-emerald-500/20" : "bg-neutral-800")}>
                        <Terminal className={cn("w-3.5 h-3.5", isKenate ? "text-emerald-400" : "text-neutral-400")} />
                    </div>
                    <span className={cn("text-sm font-medium", isKenate ? "text-emerald-400" : "text-neutral-400")}>
                        {title}
                    </span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
            </div>

            {/* Code Content */}
            <div className="p-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <pre className="font-mono text-xs md:text-sm leading-relaxed">
                    <code className="block">
                        {code.split("\n").map((line, i) => (
                            <div key={i} className="table-row">
                                {lineNumbers && (
                                    <span className="table-cell select-none text-right pr-4 text-neutral-700 w-8">
                                        {i + 1}
                                    </span>
                                )}
                                <span className={cn(
                                    "table-cell",
                                    isKenate ? "text-emerald-100" : "text-neutral-300",
                                    line.trim().startsWith("//") && "text-neutral-500 italic"
                                )}>
                                    {line}
                                </span>
                            </div>
                        ))}
                    </code>
                </pre>
            </div>

            {/* Status Badge */}
            <div className="absolute bottom-4 right-4 z-10">
                {isKenate ? (
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-400">
                        <Check className="w-3 h-3" />
                        Reactive
                    </div>
                ) : (
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-neutral-800 border border-white/5 text-[10px] font-medium text-neutral-500">
                        Imperative
                    </div>
                )}
            </div>
        </div>
    );
};
