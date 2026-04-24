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
    a: "Most clients see measurable improvements within the first 14 days. Significant revenue scaling typically happens within 60–90 days as we optimize and iterate on winning campaigns.",
  },
  {
    q: "Who is this for?",
    a: "We work with established brands doing at least $10K/month in revenue who are ready to scale through paid advertising. Whether you're in e-commerce, SaaS, coaching, or local services — if you have a proven offer, we can scale it.",
  },
  {
    q: "What's required to get started?",
    a: "Just a proven product or service and a minimum monthly ad budget of $5K. We handle everything else — strategy, creative, landing pages, tracking, and ongoing optimization.",
  },
  {
    q: "Do you guarantee results?",
    a: "Yes. We offer a 30-day performance guarantee. If we don't hit the agreed-upon KPIs within the first 30 days, we'll work for free until we do. We only win when you win.",
  },
  {
    q: "How is Kova different from other agencies?",
    a: "Most agencies sell you a retainer and disappear. We operate as your fractional growth team — with full transparency, weekly strategy calls, real-time dashboards, and performance-based accountability.",
  },
  {
    q: "What platforms do you run ads on?",
    a: "We specialize in Meta (Facebook & Instagram), Google Ads, TikTok, and YouTube. We'll recommend the right platform mix based on your audience, offer, and goals.",
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
          <span className="text-sm uppercase tracking-widest text-gray-500">
            FAQ
          </span>

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