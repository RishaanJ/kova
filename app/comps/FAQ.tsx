"use client"

import { useState } from "react";
import { Highlighter } from "@/components/ui/highlighter";

type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: "How fast will I see results?",
    a: "You’ll usually start seeing early signals within the first couple of weeks — things like better CTRs, cheaper clicks, stronger creative performance. Meaningful revenue growth typically shows up within 60–90 days once we’ve tested, optimized, and doubled down on what’s working.",
  },
  {
    q: "Who is this for?",
    a: "This is for brands already getting real traction — usually $10K+/month — that are ready to scale with paid ads. We work across e-commerce, SaaS, coaching, and local services, as long as you already have a proven offer that converts.",
  },
  {
    q: "What's required to get started?",
    a: "Just two things: a product or service that’s already selling, and a minimum ad budget of around $5K/month so we have room to test and scale. We take care of everything else — strategy, creatives, landing pages, tracking, and optimization.",
  },
  {
    q: "Do you guarantee results?",
    a: "We back our work with a 30-day performance guarantee. If we don’t hit the agreed KPIs in that window, we keep working at no extra cost until we do. We only succeed when your campaigns do.",
  },
  {
    q: "How is Kova different from other agencies?",
    a: "Most agencies just run ads and send reports. We plug in like your actual growth team — full transparency, weekly strategy calls, live performance dashboards, and decisions driven by data, not guesswork.",
  },
  {
    q: "What platforms do you run ads on?",
    a: "We focus on Meta (Facebook & Instagram), Google, TikTok, and YouTube. The platform mix depends on where your audience is and what offer you’re pushing — we don’t force one channel for everyone.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Got{" "}
            <Highlighter action="underline" color="#BC9AC1" >
            questions?
            </Highlighter>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Here are the answers to the most common questions we hear. If yours isn't here, book a call and we'll chat.
          </p>
        </div>

        {/* List */}
        <div className="max-w-2xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={i} className="py-2">
                
                {/* Question */}
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center py-5 text-left font-semibold text-gray-900 hover:text-blue-500 transition-colors"
                >
                  <span>{faq.q}</span>

                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full border text-lg transition-all ${
                      isOpen
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-gray-500 border-gray-200"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.a}
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