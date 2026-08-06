"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../ui/animated-beam";
import { HiUser } from "react-icons/hi2";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/20 bg-slate-900 shadow-2xl shadow-blue-950/20",
        className
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

export function AboutAnimatedBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden p-6 md:p-10"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <HiUser className="text-cyan-400 text-xl" />
          </Circle>
          <Circle ref={div5Ref}>
            <HiUser className="text-cyan-400 text-xl" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <HiUser className="text-cyan-400 text-xl" />
          </Circle>
          <Circle ref={div4Ref} className="h-20 w-20 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 border-cyan-500/30 transition transform-all hover:scale-110 hover:shadow-xl shadow-cyan-300">
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"><img src="/hyphen-logo.png" alt="Hyphen Logo" className="w-16" /></span>
          </Circle>
          <Circle ref={div6Ref}>
            <HiUser className="text-cyan-400 text-xl" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <HiUser className="text-cyan-400 text-xl" />
          </Circle>
          <Circle ref={div7Ref}>
            <HiUser className="text-cyan-400 text-xl" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
