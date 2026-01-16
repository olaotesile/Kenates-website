"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const MacbookScroll = ({
    title,
}: {
    title?: string | React.ReactNode;
}) => {
    return (
        <div className="flex flex-col items-center justify-center pt-20 pb-0 w-full perspective-[1200px] overflow-visible">
            {/* 
        DEVICE CONTAINER
      */}
            <div
                className="relative transform-style-3d origin-center scale-[0.4] sm:scale-[0.5] md:scale-75 lg:scale-90"
                style={{ transform: "rotateX(22deg)" }}
            >

                {/* --- LID (SCREEN) --- */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 top-0"
                    style={{
                        width: "44rem",
                        height: "28rem",
                        transform: "translateY(-27.5rem) rotateX(-22deg)",
                        transformOrigin: "bottom",
                        transformStyle: "preserve-3d",
                    }}
                >
                    {/* Frame */}
                    <div className="absolute inset-0 bg-[#0d0d0d] rounded-[20px] border-[2px] border-[#222] shadow-2xl overflow-hidden">

                        {/* Top Bezel / Camera */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-black rounded-b-md z-40 flex items-center justify-center border-b border-white/5">
                            <div className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full ring-1 ring-[#333] relative">
                                <div className="absolute top-[1px] right-[1px] w-0.5 h-0.5 bg-blue-900 rounded-full opacity-60"></div>
                            </div>
                        </div>

                        {/* Display Panel */}
                        <div className="absolute inset-[3px] top-[14px] bottom-[14px] left-[14px] right-[14px] bg-black overflow-hidden rounded-[4px] border border-white/5 relative">

                            {/* WALLPAPER / DESKTOP */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#050505] to-black z-0 opacity-50"></div>

                            {/* REFLECTIONS */}
                            <div className="absolute -top-[100%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-white/5 via-transparent to-transparent transform rotate-12 pointer-events-none z-50"></div>
                            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-10"></div>

                            {/* Content: Terminal Window */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-[#0c0c0c]/90 backdrop-blur-md rounded-lg shadow-2xl border border-white/10 flex flex-col z-20 overflow-hidden">
                                {/* Title Bar */}
                                <div className="h-8 bg-[#1a1a1a] flex items-center px-4 gap-2 border-b border-black">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                                    <div className="ml-4 text-[10px] text-neutral-500 font-sans">kenate — -zsh</div>
                                </div>
                                {/* Terminal Body */}
                                <div className="flex-1 p-4 font-mono text-xs md:text-sm text-neutral-300 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/50 z-[-1]"></div>
                                    <p><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-neutral-500">cd</span> kenate-core</p>
                                    <p><span className="text-green-400">➜</span> <span className="text-blue-400">kenate-core</span> <span className="text-yellow-500">git:(main)</span> ./build.sh --release</p>
                                    <div className="mt-2 text-neutral-500 opacity-80">
                                        [INFO] Compiling HAL drivers... <span className="text-green-500">OK</span><br />
                                        [INFO] Linking Real-Time Kernel... <span className="text-green-500">OK</span><br />
                                        [INFO] Optimizing for ARM64... <span className="text-green-500">OK</span>
                                    </div>
                                    <p className="mt-2"><span className="text-green-400">➜</span> <span className="text-blue-400">kenate-core</span> <span className="text-yellow-500">git:(main)</span> ./run_diagnostics</p>
                                    <p className="text-neutral-100">System Status: <span className="text-green-400 font-bold">ONLINE</span></p>
                                    <div className="w-2.5 h-4 bg-neutral-500 animate-pulse mt-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* --- BASE (KEYBOARD) --- */}
                <div
                    className="relative mx-auto rounded-[24px]"
                    style={{
                        width: "44rem",
                        height: "29rem",
                        background: "#1e1e1e",
                        boxShadow: "0 30px 60px -12px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 0 4px 2px rgba(0,0,0,0.3)"
                    }}
                >
                    {/* Top Hinge Area */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[34rem] h-6 bg-[#111] rounded-t-lg"></div>

                    {/* KEYBOARD WELL */}
                    <div className="absolute top-[3.5rem] left-1/2 -translate-x-1/2 w-[38rem] h-[15.5rem] bg-[#121212] rounded-[6px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.05)] p-2 box-border border-b border-white/5">

                        <div className="w-full h-full flex flex-col gap-1.5">
                            {/* Row 1: Function Keys */}
                            <div className="flex gap-1.5 h-[1.5rem]">
                                <Key width={1.6} text="esc" />
                                {Array.from({ length: 12 }).map((_, i) => <Key key={i} text={`F${i + 1}`} />)}
                                <Key width={1.4} text="⏏" />
                            </div>
                            {/* Row 2 */}
                            <div className="flex gap-1.5 h-[2.6rem]">
                                {["`", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "="].map((k) => <Key key={k} text={String(k)} />)}
                                <Key width={1.5} text="delete" align="right" />
                            </div>
                            {/* Row 3 */}
                            <div className="flex gap-1.5 h-[2.6rem]">
                                <Key width={1.5} text="tab" align="left" />
                                {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"].map((k) => <Key key={k} text={k} />)}
                            </div>
                            {/* Row 4 */}
                            <div className="flex gap-1.5 h-[2.6rem]">
                                <Key width={1.8} text="caps" align="left" />
                                {["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'"].map((k) => <Key key={k} text={k} />)}
                                <Key width={1.8} text="return" align="right" />
                            </div>
                            {/* Row 5 */}
                            <div className="flex gap-1.5 h-[2.6rem]">
                                <Key width={2.3} text="shift" align="left" />
                                {["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"].map((k) => <Key key={k} text={k} />)}
                                <Key width={2.3} text="shift" align="right" />
                            </div>
                            {/* Row 6 */}
                            <div className="flex gap-1.5 h-[2.8rem]">
                                <Key width={1.2} text="Fn" align="left" />
                                <Key width={1.2} text="^" />
                                <Key width={1.2} text="opt" />
                                <Key width={1.4} text="cmd" />
                                <div className="flex-1 bg-[#080808] rounded-[4px] shadow-[0_1px_0_rgba(0,0,0,1)] border-t border-white/5 relative group">
                                    <div className="absolute top-1 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                    {/* Light */}
                                    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 blur-[6px] transition-all duration-500"></div>
                                </div>
                                <Key width={1.4} text="cmd" />
                                <Key width={1.2} text="opt" />
                                {/* Arrows */}
                                <div className="w-[3.6rem] relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1.35rem] flex items-center justify-center">
                                        <Key width={1} height="100%" text="▲" />
                                    </div>
                                    <div className="absolute bottom-0 w-full h-[1.35rem] flex justify-between">
                                        <Key width={1} height="100%" text="◀" />
                                        <Key width={1} height="100%" text="▼" />
                                        <Key width={1} height="100%" text="▶" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trackpad */}
                    <div className="absolute bottom-[2rem] left-1/2 -translate-x-1/2 w-[16rem] h-[9rem] bg-[#181818] rounded-[8px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.05)] border border-black/20"></div>

                    {/* Front Lip */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-2 bg-[#121212] rounded-b-md opacity-40"></div>
                </div>

            </div>

        </div>
    );
};

const Key = ({ width = 1, height, text, align = "center" }: any) => {
    return (
        <div
            className="bg-[#0a0a0a] rounded-[4px] shadow-[0_1px_0_#000,0_2px_3px_rgba(0,0,0,0.8)] border-t border-white/10 relative overflow-hidden group flex items-center justify-center"
            style={{
                flex: width === 1 ? '1' : 'none',
                width: width !== 1 ? `${width * 2.4}rem` : undefined,
                height: height || '100%'
            }}
        >
            {/* Text Legend */}
            <span className={cn(
                "text-[9px] text-neutral-400 font-sans font-medium z-10 group-hover:text-white transition-colors absolute select-none",
                align === "left" && "left-1.5 bottom-1",
                align === "right" && "right-1.5 bottom-1",
                align === "center" && "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            )}>
                {text}
            </span>

            {/* Backlight Glow */}
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 blur-[5px] transition-all duration-300"></div>
            {/* Base Glow */}
            <div className="absolute w-full h-full bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
    )
}
