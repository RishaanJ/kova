export default function FinalCTA() {
  return (
    <section
      id="cta-final"
      className="relative overflow-hidden text-center py-24"
    >
      {/* Background glows */}
      <div className="absolute inset-0 z-0">
        {/* Orb 1 */}
        <div className="absolute w-[500px] h-[500px] bg-violet-500/15 blur-3xl rounded-full top-[-200px] left-1/2 -translate-x-1/2" />

        {/* Orb 2 */}
        <div className="absolute w-[300px] h-[300px] bg-sky-400/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">

        <span className="text-sm uppercase tracking-widest text-gray-500">
          Let&apos;s Talk
        </span>

        <h2 className="mt-4 text-3xl md:text-5xl font-black leading-tight tracking-tight max-w-2xl">
          Ready to scale your revenue{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-sky-400">
            predictably?
          </span>
        </h2>

        <p className="mt-5 text-gray-500 text-lg max-w-xl leading-relaxed">
          Book a free strategy call with our team. We&apos;ll audit your current setup,
          identify your biggest growth levers, and map out a custom plan — even if
          we don&apos;t end up working together.
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-3 px-10 py-4 text-lg font-semibold rounded-xl bg-black text-white hover:opacity-90 transition"
        >
          Book Your Free Strategy Call
          <span>→</span>
        </a>

        {/* Scarcity */}
        <div className="mt-6 flex items-center gap-2 text-yellow-500 font-semibold text-sm">
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
          Limited spots available — we only take on 5 new clients per month
        </div>

        {/* Trust row */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span>
            No long-term contracts
          </div>

          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span>
            30-day performance guarantee
          </div>

          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold">✓</span>
            Free audit included
          </div>
        </div>

        {/* Calendly placeholder */}
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
      </div>
    </section>
  );
}