import { Highlighter } from "@/components/ui/highlighter";
import {
  DollarSign,
  TrendingDown,
  Brain,
  Hourglass
} from "lucide-react";

type PainPoint = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

export default function Problem() {
  const painPoints: PainPoint[] = [
    {
      icon: DollarSign,
      title: "Wasting Ad Spend",
      desc: "Pouring money into campaigns with no clear tracking, attribution, or measurable ROI.",
    },
    {
      icon: TrendingDown,
      title: "Inconsistent Revenue",
      desc: "Revenue swings wildly month to month with no predictable pipeline or forecasting.",
    },
    {
      icon: Brain,
      title: "Agency Runaround",
      desc: "Burned by agencies that over-promise, under-deliver, and lock you into long contracts.",
    },
    {
      icon: Hourglass,
      title: "No Time to Scale",
      desc: "You're stuck managing campaigns instead of growing your business and building your team.",
    },
  ];

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-gray-500">
            The Problem
          </span>

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            Your business is{" "}
            <Highlighter action="underline" color="#c49bca">
              leaving money on the table.
            </Highlighter>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Sound familiar? You're not alone. These are the exact challenges we solve every day for brands just like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {painPoints.map((point, i) => {
            const Icon = point.icon;

            return (
              <div
                key={i}
                className="relative group overflow-hidden border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 to-transparent opacity-0 group-hover:opacity-100 transition" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gray-700" />
                </div>

                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {point.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}