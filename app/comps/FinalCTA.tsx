import Image from "next/image";

import { Highlighter } from "@/components/ui/highlighter";
import { Check, TriangleAlert } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="cta-final"
      className="relative overflow-hidden text-center py-24 mb-24"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">

        <h2 className="mt-4 text-3xl md:text-5xl font-black leading-tight tracking-tight max-w-2xl">
          Ready to scale your revenue with{" "}
          <span className="inline-flex items-center align-middle">
            <Image
              src="/logotransp.png"
              alt="Kova"
              width={140}
              height={40}
              className="h-10 w-auto ml-2"
            />
          </span>
        </h2>

        <p className="mt-5 text-gray-500 text-lg max-w-xl leading-relaxed">
          Book a free strategy call with our team. We&apos;ll audit your current setup,
          identify your biggest growth levers, and map out a custom plan — even if
          we don&apos;t end up working together.
        </p>

        <a
          href="https://form.typeform.com/to/Qyhu3zEJ" target="_blank"
          className="mt-8 inline-flex items-center gap-3 px-10 py-4 text-lg font-semibold rounded-xl bg-black text-white hover:opacity-90 transition"
        >
          Book Your Free Strategy Call
          <span>→</span>
        </a>

        <div className="mt-6 flex items-center gap-2 text-yellow-500 font-semibold text-sm">
          <TriangleAlert className="w-4 h-4 text-yellow-500 animate-pulse" />
          Limited spots available - we only take on 5 new clients per month
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Check className="text-green-500 font-bold" />
            No long-term contracts
          </div>

          <div className="flex items-center gap-2">
            <Check className="text-green-500 font-bold" />
            30-day performance guarantee
          </div>

          <div className="flex items-center gap-2">
            <Check className="text-green-500 font-bold" />
            Free audit included
          </div>
        </div>
        {/*
        <div className="mt-12 w-full max-w-2xl">
          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 flex flex-col items-center gap-2 bg-white/50">
            <span className="text-3xl">📅</span>
            <span className="font-semibold text-gray-600">
              Calendly Embed Area
            </span>
            <span className="text-xs text-gray-400 text-center">
              Replace this div with your Calendly inline widget
            </span>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}