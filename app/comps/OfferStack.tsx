import {
  CheckCircle2,
  LineChart,
  Sparkles,
  LayoutTemplate,
  Target,
  BarChart3,
  MessageSquare,
} from "lucide-react";

import { Highlighter } from "@/components/ui/highlighter";

type Service = {
  label: string;
  value: string;
  icon: any;
};

export default function OfferStack() {
  const services: Service[] = [
    { label: "Custom Growth Strategy & Audit", value: "$2,500", icon: Target },
    { label: "High-Converting Ad Creative Suite", value: "$4,000", icon: Sparkles },
    { label: "Landing Page Design & Optimization", value: "$3,000", icon: LayoutTemplate },
    { label: "Advanced Audience Research & Targeting", value: "$1,500", icon: Target },
    { label: "Full-Funnel Campaign Management", value: "$5,000", icon: LineChart },
    { label: "Real-Time Analytics Dashboard", value: "$1,000", icon: BarChart3 },
    { label: "Weekly Strategy Calls & Reporting", value: "$2,000", icon: MessageSquare },
  ];

  const totalValue = services.reduce(
    (sum, s) => sum + parseInt(s.value.replace(/[^0-9]/g, "")),
    0
  );

  return (
    <section id="offer" className="py-24 bg-white relative overflow-hidden">
      <div
  className="absolute inset-0 pointer-events-none opacity-60 bg-gradient-to-b from-[#BC9AC1]/20 via-white to-white"
/>

      <div className="max-w-5xl mx-auto px-4 relative">

        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-5xl font-black mt-4 leading-tight">
            Everything you need to{" "}
            <Highlighter action="underline" color="#FF0000">
              scale profitably
            </Highlighter>
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            A full-funnel growth system designed to turn attention into predictable revenue — no filler, no fluff.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-gray-200 bg-white shadow-xl overflow-hidden">

          {/* subtle top accent */}

          {/* list */}
          <div className="p-6 md:p-10 space-y-5">
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition"
                >
                  {/* icon bubble */}
                  <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition">
                    <Icon size={18} />
                  </div>

                  {/* label */}
                  <div className="flex-1">
                    <p className="text-sm md:text-base font-semibold text-gray-900">
                      {service.label}
                    </p>
                  </div>

                  {/* value */}
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-gray-900">
                      {service.value}
                    </p>
                    <p className="text-xs text-gray-400">value</p>
                  </div>

                  {/* check */}
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={18} />
                </div>
              );
            })}
          </div>

          {/* pricing */}
          <div className="bg-gray-50 border-t border-gray-200 p-8 text-center">

            <div className="flex justify-center items-center gap-3 mb-2">
              <span className="text-gray-500 text-sm">Total Value</span>
              <span className="text-gray-400 line-through font-semibold">
                ${totalValue.toLocaleString()}
              </span>
            </div>

            <div className="mb-5">
              <p className="text-gray-600 text-sm mb-1">Your Investment</p>
              <p className="text-3xl font-black text-[#BC9AC1]">
                <Highlighter action="circle" padding={25} color="#FF0000">
                  Custom Quote
                </Highlighter>
              </p>
            </div>

            <p className="text-sm text-gray-500 mb-6 mt-7">
              30-day performance guarantee, if KPIs aren’t met, we work free until they are.
            </p>

            <a
              href="#cta-final"
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-black text-white font-semibold hover:opacity-90 transition"
            >
              Get Your Custom Quote →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}