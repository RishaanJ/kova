type Benefit = {
  icon: string;
  title: string;
  desc: string;
};

export default function Solution() {
  const benefits: Benefit[] = [
    {
      icon: "🎯",
      title: "Precision Targeting",
      desc: "We find your ideal customers using data-driven audience research and AI-powered segmentation — no wasted impressions.",
    },
    {
      icon: "⚡",
      title: "High-Converting Creatives",
      desc: "Our in-house team produces scroll-stopping ad creatives and landing pages that convert cold traffic into paying customers.",
    },
    {
      icon: "📊",
      title: "Full-Funnel Attribution",
      desc: "Know exactly where every dollar goes with transparent reporting, real-time dashboards, and weekly strategy calls.",
    },
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-gray-500">
            The Solution
          </span>

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            We turn ad spend into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-sky-400">
              insane revenue
            </span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our proven marketing system combines creative excellence with data-driven optimization to deliver consistent, scalable growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">

          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="relative text-center p-10 rounded-2xl border border-gray-200 bg-white overflow-hidden group"
            >

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 to-sky-400 opacity-0 group-hover:opacity-100 transition" />

              {/* Number */}
              <span className="absolute top-4 right-5 text-xs font-bold text-gray-400 opacity-40">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-2xl">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-3 text-gray-900">
                {benefit.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {benefit.desc}
              </p>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#cta-final"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-semibold hover:opacity-90 transition"
          >
            Start Scaling Today
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}