import {
  Search,
  Rocket,
  TrendingUp
} from "lucide-react";

import { Highlighter } from "@/components/ui/highlighter";
type Step = {
  number: string;
  title: string;
  desc: string;
  icon: React.ElementType;
};

export default function Process() {
  const steps: Step[] = [
    {
      number: "01",
      title: " Audit & Research",
      desc: "We break down your funnel, ad accounts, and positioning to uncover exactly what’s leaking revenue and where the fastest wins are.",
      icon: Search,
    },
    {
      number: "02",
      title: "Strategy & Launch",
      desc: "We engineer your full high converting creatives, targeting, funnels, and deploy it within 7 days.",
      icon: Rocket,
    },
    {
      number: "03",
      title: "Scale & Conquer",
      desc: "We continuously test, iterate, and scale winning campaigns while you focus on fulfillment and growing your team.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            Your path to{" "}
            <Highlighter action="underline" color="#bc9ac1">
              scalable growth
            </Highlighter>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our proven 3-step system that takes you from inconsistent results to profitable growth.
          </p>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col">

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;

            return (
              <div key={i} className="flex gap-6 relative">

                {/* indicator */}
                <div className="flex flex-col items-center flex-shrink-0">

                  <div className="w-14 h-14 rounded-full bg-white border-2 border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.25)] flex items-center justify-center z-10">
                    <Icon className="w-5 h-5 text-violet-600" />
                  </div>

                  {!isLast && (
                    <div className="w-[2px] flex-1 bg-gradient-to-b from-violet-500 to-transparent my-1" />
                  )}
                </div>

                {/* content */}
                <div className="mb-10 flex-1 border border-gray-200 rounded-2xl p-6 shadow-sm group hover:shadow-md transition">

                  <span className="text-xs font-bold tracking-widest text-violet-400">
                    {step.number}
                  </span>

                  <h3 className="text-lg font-bold mt-2 mb-2 text-gray-900">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}