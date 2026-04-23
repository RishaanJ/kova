type Service = {
  label: string;
  value: string;
};

export default function OfferStack() {
  const services: Service[] = [
    { label: "Custom Growth Strategy & Audit", value: "$2,500" },
    { label: "High-Converting Ad Creative Suite", value: "$4,000" },
    { label: "Landing Page Design & Optimization", value: "$3,000" },
    { label: "Advanced Audience Research & Targeting", value: "$1,500" },
    { label: "Full-Funnel Campaign Management", value: "$5,000" },
    { label: "Real-Time Analytics Dashboard", value: "$1,000" },
    { label: "Weekly Strategy Calls & Reporting", value: "$2,000" },
  ];

  const totalValue = services.reduce(
    (sum, s) => sum + parseInt(s.value.replace(/[^0-9]/g, "")),
    0
  );

  return (
    <section id="offer" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-gray-500">
            What You Get
          </span>

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            Everything you need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-sky-400">
              scale profitably
            </span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our comprehensive growth package includes everything below — no hidden fees, no surprises.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-sm">

          {/* List */}
          <div className="p-6 md:p-8 divide-y divide-gray-200">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-3"
              >
                {/* Check */}
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  ✓
                </div>

                {/* Label */}
                <span className="flex-1 text-sm md:text-base font-medium text-gray-800">
                  {service.label}
                </span>

                {/* Value */}
                <span className="hidden sm:block text-xs md:text-sm text-gray-400 font-medium whitespace-nowrap">
                  {service.value} value
                </span>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="bg-gray-50 border-t border-gray-200 p-6 md:p-8 text-center">

            {/* Total */}
            <div className="flex justify-center items-center gap-3 mb-2">
              <span className="text-gray-500 text-sm">Total Value:</span>
              <span className="text-gray-400 line-through font-semibold">
                ${totalValue.toLocaleString()}
              </span>
            </div>

            {/* Investment */}
            <div className="flex justify-center items-center gap-3 mb-5">
              <span className="text-gray-600 text-sm">Your Investment:</span>
              <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-sky-400">
                Custom Quote
              </span>
            </div>

            {/* Guarantee */}
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              💎 30-day performance guarantee — if we don't hit agreed-upon KPIs, we work for free until we do.
            </p>

            {/* CTA */}
            <a
              href="#cta-final"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-black text-white font-semibold hover:opacity-90 transition"
            >
              Get Your Custom Quote
              <span>→</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}