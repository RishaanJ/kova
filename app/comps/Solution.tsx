import {
  Target,
  Zap,
  BarChart3
} from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

type Benefit = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

export default function Solution() {
  const benefits: Benefit[] = [
    {
      icon: Target,
      title: "Precision Targeting",
      desc: "We find your ideal customers using data-driven audience research and AI-powered segmentation — no wasted impressions.",
    },
    {
      icon: Zap,
      title: "High-Converting Creatives",
      desc: "Our in-house team produces scroll-stopping ad creatives and landing pages that convert cold traffic into paying customers.",
    },
    {
      icon: BarChart3,
      title: "Full-Funnel Attribution",
      desc: "Know exactly where every dollar goes with transparent reporting, real-time dashboards, and weekly strategy calls.",
    },
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            We turn ad spend into{" "}
            <span className="bg-clip-text ">
              <Highlighter action="box" color="#c49bca" padding={5}>
                insane revenue
              </Highlighter>
            </span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our proven marketing system combines creative excellence with data-driven optimization to deliver consistent, scalable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;

            return (
              <div
                key={i}
                className="relative text-center p-10 rounded-2xl border border-gray-200 bg-white overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c49bca] to-purple-500 opacity-0 transition" />

                <span className="absolute top-4 right-5 text-xs font-bold text-gray-400 opacity-40">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-violet-600 transition group-hover:scale-110" />
                </div>

                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  {benefit.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#cta-final"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-semibold hover:opacity-90 transition"
          >
            Start Scaling Today
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}