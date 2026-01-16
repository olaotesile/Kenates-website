"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
    id: number;
    x: number;
    y: number;
    angle: number;
    scale: number;
    speed: number;
    distance: number;
}

interface ShootingStarsProps {
    minSpeed?: number;
    maxSpeed?: number;
    minDelay?: number;
    maxDelay?: number;
    starColor?: string;
    trailColor?: string;
    starWidth?: number;
    starHeight?: number;
    className?: string;
}

export const ShootingStars = ({
    minSpeed = 10,
    maxSpeed = 30,
    minDelay = 1200,
    maxDelay = 4200,
    starColor = "#9E00FF",
    trailColor = "#2EB9DF",
    starWidth = 10,
    starHeight = 1,
    className,
}: ShootingStarsProps) => {
    const [star, setStar] = useState<ShootingStar | null>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const createStar = () => {
            const { innerWidth, innerHeight } = window;
            const x = Math.random() * innerWidth;
            const y = Math.random() * innerHeight;
            const angle = Math.random() * 90 + 90; // Angle between 90 and 180 degrees (shooting down-left or down-right) - standard diagonal
            // actually let's standard diagonal: -45 degrees roughly.
            // Aceternity usually shoots from top-right to bottom-left or top-left to bottom-right.
            // Let's do random diagonal.
            const directon = Math.random() > 0.5 ? 1 : -1;
            // Fixed angle for consistency? User asked for "flowing shooting stars".
            // Let's do a consistent 45 degree angle for aesthetics.
            const fixedAngle = 215; // Shoot down-left

            const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
            const distance = Math.random() * (300 - 100) + 100;
            const scale = Math.random() * (1 - 0.5) + 0.5;

            const startX = Math.random() * innerWidth;
            const startY = 0; // Start from top always
            // Actually random start is better.

            const newStar: ShootingStar = {
                id: Date.now(),
                x: Math.random() * innerWidth,
                y: Math.random() * innerHeight,
                angle: Math.random() * 45 + 135, // 135 to 180 (moving right-down)
                scale: 1,
                speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
                distance: 0,
            };
            setStar(newStar);

            const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
            setTimeout(createStar, randomDelay);
        };

        createStar();
    }, [minSpeed, maxSpeed, minDelay, maxDelay]);

    useEffect(() => {
        const moveStar = () => {
            if (star) {
                setStar((prevStar) => {
                    if (!prevStar) return null;
                    const newX = prevStar.x + prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
                    const newY = prevStar.y + prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
                    const newDistance = prevStar.distance + prevStar.speed;
                    const scale = 1 + newDistance / 100;

                    if (
                        newX < -20 ||
                        newX > window.innerWidth + 20 ||
                        newY > window.innerHeight + 20
                    ) {
                        return null;
                    }

                    return {
                        ...prevStar,
                        x: newX,
                        y: newY,
                        distance: newDistance,
                        scale: scale,
                    };
                });
            }
        };

        const animationFrame = requestAnimationFrame(moveStar);
        return () => cancelAnimationFrame(animationFrame);
    }, [star]);

    return (
        <svg
            ref={svgRef}
            className={cn("w-full h-full absolute inset-0 z-0 pointer-events-none", className)}
        >
            {star && (
                <rect
                    key={star.id}
                    x={star.x}
                    y={star.y}
                    width={starWidth * star.scale}
                    height={starHeight}
                    fill="url(#gradient)"
                    transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
                />
            )}
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="100%" stopColor={starColor} />
                </linearGradient>
            </defs>
        </svg>
    );
};
