import { Highlighter } from "@/components/ui/highlighter"
import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"
import { NumberTicker } from "@/components/ui/number-ticker"




export default function Hero() {
  return (
    <>
    <section
    id="hero"
    className="relative min-h-screen flex items-center pt-20 pb-16 bg-gray-50 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center">



        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-[-5%] text-gray-900 max-w-3xl mb-5">
            Outperform your competition,{" "}
            <Highlighter action="underline" color="#ff0000">
            <span className="text-black">without</span>
            </Highlighter>{" "}
            breaking your budget.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed mb-9">
          Kova helps ecommerce brands scale revenue through data-driven Meta advertising,
          competitor research, and conversion-focused creative strategy.
        </p>

        {/* CTA Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
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

        {/* Trust Stats */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 px-8 py-5 bg-white border border-gray-200 rounded-2xl shadow-sm">

          <div className="text-center">
            <NumberTicker value={12} className="block text-2xl font-extrabold text-gray-900 tracking-tight"/>
            <span className="text-xs text-gray-400 font-medium">
              Brands Scaled
            </span>
          </div>

          <div className="w-10 h-px md:w-px md:h-10 bg-gray-200" />

          <div className="text-center">
            <NumberTicker value={6.8} decimalPlaces={1} className="block text-2xl font-extrabold text-gray-900 tracking-tight"/>
            <span className="text-xs text-gray-400 font-medium">
              Avg. Return on Ad Spend (ROAS)
            </span>
          </div>

          <div className="w-10 h-px md:w-px md:h-10 bg-gray-200" />

          <div className="text-center">
            <NumberTicker value={150000} className="block text-2xl font-extrabold text-gray-900 tracking-tight"/>
            <span className="text-xs text-gray-400 font-medium">
              Revenue Generated
            </span>
          </div>

        </div>
      </div>

        <DotPattern
            className={cn("z-0",
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
            )}
        />
    </section>
    </>
  );
  
}