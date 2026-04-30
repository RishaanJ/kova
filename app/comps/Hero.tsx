"use client";

import { Highlighter } from "@/components/ui/highlighter";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const sparkData = [18, 22, 19, 35, 42, 55, 78];

function useCountUp(target: number, duration = 2000, decimals = 0, startDelay = 400) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(parseFloat((eased * target).toFixed(decimals)));
        if (progress < 1) requestAnimationFrame(tick);
        else setValue(target);
      };
      requestAnimationFrame(tick);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [target, duration, decimals, startDelay]);

  return value;
}

function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const w = 180, h = 48, pad = 4;

  const points = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / (max - min)) * (h - pad * 2);
    return `${x},${y}`;
  });

  const pathD = `M ${points.join(" L ")}`;
  const fillD = `${pathD} L ${w - pad},${h} L ${pad},${h} Z`;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BC9AC1" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#BC9AC1" stopOpacity="0" />
        </linearGradient>
      </defs>
<motion.path
        d={fillD}
        fill="url(#sparkFill)"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
      />
      <motion.path
        d={pathD}
        fill="none"
        stroke="#BC9AC1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.circle
        cx={parseFloat(points[points.length - 1].split(",")[0])}
        cy={parseFloat(points[points.length - 1].split(",")[1])}
        r="3.5"
        fill="#BC9AC1"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.3 }}
      />
    </svg>
  );
}

function DashboardPanel({ className }: { className?: string }) {
  const roas = useCountUp(4.7, 1800, 1, 500);
  const revenue = useCountUp(2.4, 2200, 1, 600);
  const cpa = useCountUp(18.4, 1600, 1, 700);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={cn(
        "relative transition-all duration-1000",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      <div className="absolute inset-0 rounded-2xl bg-[#BC9AC1]/20 blur-2xl scale-110 -z-10" />
      <div className="absolute inset-0 rounded-2xl bg-black/5 blur-xl scale-95 -z-10" />

      <div className="rounded-2xl border border-gray-200/80 bg-white/85 backdrop-blur-md shadow-2xl shadow-gray-300/50 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50/80">
          <div className="flex items-center gap-2">
          </div>
          <span className="text-[11px] text-gray-400 font-medium">↑ Last 30 days</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 divide-x divide-gray-100">
          <div className="flex flex-col items-center justify-center py-5 px-3 gap-0.5">
            <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">ROAS</span>
            <span className="text-2xl font-extrabold text-gray-900 tabular-nums">
              {roas.toFixed(1)}<span className="text-base font-bold text-gray-500">x</span>
            </span>
            <span className="text-[10px] text-[#BC9AC1] font-semibold">↑ +22%</span>
          </div>
          <div className="flex flex-col items-center justify-center py-5 px-3 gap-0.5">
            <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">Revenue</span>
            <span className="text-2xl font-extrabold text-gray-900 tabular-nums">
              <span className="text-base font-bold text-gray-500">$</span>{revenue.toFixed(1)}<span className="text-base font-bold text-gray-500">M</span>
            </span>
            <span className="text-[10px] text-[#BC9AC1] font-semibold">↑ +127%</span>
          </div>
          <div className="flex flex-col items-center justify-center py-5 px-3 gap-0.5">
            <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">CPA</span>
            <span className="text-2xl font-extrabold text-gray-900 tabular-nums">
              <span className="text-base font-bold text-gray-500">$</span>{cpa.toFixed(1)}
            </span>
            <span className="text-[10px] text-[#BC9AC1] font-semibold">↓ −38%</span>
          </div>
        </div>

        {/* Sparkline */}
        <div className="px-5 pb-4 pt-1 border-t border-gray-100 bg-gray-50/40">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">Revenue Trend</span>
            <span className="text-[10px] font-semibold text-[#BC9AC1]">+127% vs last month</span>
          </div>
          <Sparkline data={sparkData} />
        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 border-t border-gray-100 bg-gray-50/60 flex items-center justify-between">
          <span className="text-[10px] text-gray-400">Powered by</span>
          <Image src="/logotransp.png" alt="Logo" width={35} height={35} />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 bg-gray-50 overflow-hidden"
    >
      {/* Dot pattern — behind everything */}
      <DotPattern
        className={cn(
          "absolute inset-0 z-0",
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
        )}
      />

      <div
        className="absolute right-16 top-1/2 -translate-y-1/2 translate-x-[10%] rotate-[6deg] pointer-events-none z-10 hidden lg:block"
      >
        <DashboardPanel className="w-[500px] h-[270px]" />
      </div>

      {/* Foreground content — left-aligned on large screens */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-8 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-[-5%] text-gray-900 max-w-2xl mb-5">
          Outperform your competition,{" "}
          <Highlighter action="underline" color="#ff0000">
            <span className="text-black">without</span>
          </Highlighter>{" "}
          breaking your budget.
        </h1>

        <p className="text-gray-500 text-base md:text-lg max-w-lg leading-relaxed mb-9">
          Kova helps ecommerce brands scale revenue through data-driven Meta advertising,
          competitor research, and conversion-focused creative strategy.
        </p>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
          <a
            href="#cta-final"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-semibold hover:opacity-90 transition"
          >
            Book a Free Strategy Call
            <span>→</span>
          </a>
          <a
            href="#process"
            className="inline-flex items-center px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:border-gray-500 transition"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}