type Step = {
  number: string;
  title: string;
  desc: string;
  icon: string;
};

export default function Process() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Discovery & Audit",
      desc: "We analyze your current funnel, ad accounts, and market positioning to identify the biggest revenue opportunities.",
      icon: "🔍",
    },
    {
      number: "02",
      title: "Strategy & Launch",
      desc: "We build your custom marketing system — creatives, audiences, funnels, and tracking — and launch within 7 days.",
      icon: "🚀",
    },
    {
      number: "03",
      title: "Scale & Optimize",
      desc: "We continuously test, iterate, and scale winning campaigns while you focus on fulfillment and growing your team.",
      icon: "📈",
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-gray-500">
            How It Works
          </span>

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            Your path to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-sky-400">
              scalable growth
            </span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A proven 3-step system that takes you from inconsistent results to predictable, profitable growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto flex flex-col">

          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;

            return (
              <div key={i} className="flex gap-6 relative">

                {/* Indicator */}
                <div className="flex flex-col items-center flex-shrink-0">

                  {/* Dot */}
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center text-xl z-10">
                    {step.icon}
                  </div>

                  {/* Line */}
                  {!isLast && (
                    <div className="w-[2px] flex-1 bg-gradient-to-b from-violet-500 to-transparent my-1" />
                  )}
                </div>

                {/* Content */}
                <div className="mb-10 flex-1 border border-gray-200 rounded-2xl p-6 shadow-sm">
                  
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