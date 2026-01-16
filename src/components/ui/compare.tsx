"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CompareProps {
    firstContent: React.ReactNode;
    secondContent: React.ReactNode;
    className?: string;
    firstContentClassName?: string;
    secondContentClassName?: string;
    initialSliderPercentage?: number;
    slideMode?: "hover" | "drag";
    showHandlebar?: boolean;
}

export const Compare = ({
    firstContent,
    secondContent,
    className,
    firstContentClassName,
    secondContentClassName,
    initialSliderPercentage = 50,
    slideMode = "hover",
    showHandlebar = true,
}: CompareProps) => {
    const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
    const [isDragging, setIsDragging] = useState(false);

    const sliderRef = useRef<HTMLDivElement>(null);

    const onMouseMove = useCallback(
        (e: React.MouseEvent | MouseEvent) => {
            if (!sliderRef.current) return;
            if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
                const rect = sliderRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percent = (x / rect.width) * 100;
                setSliderXPercent(Math.max(0, Math.min(100, percent)));
            }
        },
        [slideMode, isDragging]
    );

    const onTouchMove = useCallback(
        (e: React.TouchEvent | TouchEvent) => {
            if (!sliderRef.current) return;
            if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
                const rect = sliderRef.current.getBoundingClientRect();
                const x = e.touches[0].clientX - rect.left;
                const percent = (x / rect.width) * 100;
                setSliderXPercent(Math.max(0, Math.min(100, percent)));
            }
        },
        [slideMode, isDragging]
    );

    const onMouseDown = useCallback(() => setIsDragging(true), []);
    const onMouseUp = useCallback(() => setIsDragging(false), []);
    const onTouchStart = useCallback(() => setIsDragging(true), []);
    const onTouchEnd = useCallback(() => setIsDragging(false), []);

    useEffect(() => {
        document.addEventListener("mouseup", onMouseUp);
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("touchend", onTouchEnd);
        document.addEventListener("touchmove", onTouchMove);
        return () => {
            document.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("touchend", onTouchEnd);
            document.removeEventListener("touchmove", onTouchMove);
        };
    }, [onMouseUp, onMouseMove, onTouchEnd, onTouchMove]);

    return (
        <div
            ref={sliderRef}
            className={cn("w-full h-[400px] overflow-hidden select-none relative rounded-2xl border border-white/10 bg-neutral-900", className)}
            style={{
                cursor: slideMode === "drag" ? "grab" : "col-resize",
                touchAction: "none",
            }}
            onMouseMove={(e) => slideMode === "hover" && onMouseMove(e)}
            onMouseDown={slideMode === "drag" ? onMouseDown : undefined}
            onTouchStart={slideMode === "drag" ? onTouchStart : undefined}
            onTouchMove={(e) => {
                if (slideMode === "drag") {
                    // touch-action: none handles scrolling, but we can prevent default if needed
                }
                onTouchMove(e);
            }}
        >
            <AnimatePresence initial={false}>
                <motion.div
                    className="h-full w-px absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent from-[5%] via-indigo-500 to-transparent to-[95%]"
                    style={{
                        left: `${sliderXPercent}%`,
                        top: "0",
                        zIndex: 40,
                    }}
                    transition={{ type: "tween", ease: "linear", duration: 0 }}
                >
                    <div className="w-36 h-full [mask-image:radial-gradient(100px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-indigo-400 via-transparent to-transparent z-20 opacity-50" />
                    <div className="w-10 h-1/2 [mask-image:radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-cyan-400 via-transparent to-transparent z-10 opacity-100" />
                    <div className="w-10 h-3/4 [mask-image:radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-teal-400 via-transparent to-transparent z-10 opacity-100" />
                    {showHandlebar && (
                        <div className="h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40]">
                            <Sparkles className="h-3 w-3 text-black" />
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
            <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
                <AnimatePresence initial={false}>
                    {firstContent ? (
                        <motion.div
                            className={cn(
                                "absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none overflow-hidden",
                                firstContentClassName
                            )}
                            style={{
                                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
                            }}
                            transition={{ type: "tween", ease: "linear", duration: 0 }}
                        >
                            {firstContent}
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
            <AnimatePresence initial={false}>
                {secondContent ? (
                    <motion.div
                        className={cn(
                            "absolute top-0 left-0 z-[19] rounded-2xl w-full h-full select-none overflow-hidden",
                            secondContentClassName
                        )}
                    >
                        {secondContent}
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
};
