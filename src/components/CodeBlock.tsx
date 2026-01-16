"use client";

import { motion } from "framer-motion";

interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
}

export function CodeBlock({ code, filename }: CodeBlockProps) {
    return (
        <div className="rounded-xl overflow-hidden glass border-white/10 bg-[#1e1e1e]">
            {filename && (
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono ml-2">{filename}</span>
                </div>
            )}
            <div className="p-4 overflow-x-auto">
                <pre className="font-mono text-sm text-gray-300">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
}
