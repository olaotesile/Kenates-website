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
                <h3 className="text-2xl font-semibold text-white mb-2">When Your Robot Grows Up</h3>
                <p className="text-neutral-400">
                    Every robot starts simple. But what happens when you need 5 behaviors instead of 2? Traditional scripts become unreadable. Kenate stays clean.
                </p>
            </div>

            <div className="w-full h-[520px] border border-white/10 rounded-2xl bg-neutral-900/50 backdrop-blur-sm overflow-hidden">
                <Compare
                    firstContent={
                        <CodeBlock
                            title="main.py (The Monster)"
                            code={`# "I'll just add one more elif..."
state = "idle"
timer = 0

while True:
    if state == "idle":
        stop_motors()
        if button_pressed():
            state = "patrol"
    elif state == "patrol":
        set_speed(50)
        if get_distance() < 30:
            state = "avoid"
            timer = time.time()
        if battery() < 20:
            state = "return"
    elif state == "avoid":
        set_speed(-30)
        turn(45)
        if time.time() - timer > 2:
            state = "patrol"
    elif state == "return":
        # TODO: implement this
        pass
    elif state == "charge":
        # copy-pasted from avoid...
        stop_motors()
    
    time.sleep(0.01)  # hope this works`}
                            language="python"
                            lineNumbers
                            isBad
                            className="h-full w-full bg-neutral-900"
                        />
                    }
                    secondContent={
                        <CodeBlock
                            title="states/ (One File Per Behavior)"
                            code={`# Each state is its own file.
# Test them independently.
# Break nothing when adding new ones.

# states/patrol.py
class PatrolState(kenate.BaseState):
    def on_update(self):
        self.set_motor_speed(0, 50)
        if self.get_distance(0) < 30:
            self.change_state("Avoid")

# states/avoid.py  
class AvoidState(kenate.BaseState):
    def on_enter(self):
        self.start_time = self.get_time()
    
    def on_update(self):
        self.set_motor_speed(0, -30)
        if self.get_time() - self.start_time > 2:
            self.change_state("Patrol")`}
                            language="python"
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
                <span className="text-red-400">Spaghetti (5 states = nightmare)</span>
                <span>Drag to compare</span>
                <span className="text-emerald-500">Kenate (5 states = 5 files)</span>
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
                    ? "bg-[#09090b]"
                    : "bg-neutral-900",
                className
            )}
        >
            {/* Header */}
            <div className={cn(
                "flex items-center justify-between px-4 py-3 border-b",
                isKenate ? "border-emerald-500/20 bg-emerald-900/10" : "border-red-500/20 bg-red-900/10"
            )}>
                <div className="flex items-center gap-2">
                    <div className={cn("p-1.5 rounded-md", isKenate ? "bg-emerald-500/20" : "bg-red-500/20")}>
                        <Terminal className={cn("w-3.5 h-3.5", isKenate ? "text-emerald-400" : "text-red-400")} />
                    </div>
                    <span className={cn("text-sm font-medium", isKenate ? "text-emerald-400" : "text-red-400")}>
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
            <div className="p-4 flex-1 overflow-auto">
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
                                    line.trim().startsWith("#") && (isKenate ? "text-emerald-600 italic" : "text-red-400/60 italic"),
                                    line.includes("TODO") && "text-yellow-500",
                                    line.includes("hope") && "text-yellow-500"
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
                        Modular
                    </div>
                ) : (
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-[10px] font-medium text-red-400">
                        Coupled
                    </div>
                )}
            </div>
        </div>
    );
};
