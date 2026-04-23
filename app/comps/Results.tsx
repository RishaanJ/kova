type CaseStudy = {
  client: string;
  industry: string;
  before: string;
  after: string;
  metric: string;
  roas: string;
  timeline: string;
  desc: string;
};

export default function Results() {
  const caseStudies: CaseStudy[] = [
    {
      client: "LuxeBeauty Co.",
      industry: "E-commerce / DTC",
      before: "$28K/mo",
      after: "$210K/mo",
      metric: "Monthly Revenue",
      roas: "7.2x ROAS",
      timeline: "90 days",
      desc: "Scaled from a struggling Shopify store to a 7-figure run rate through Meta & Google Ads optimization.",
    },
    {
      client: "FitPro Academy",
      industry: "Online Education",
      before: "12 leads/mo",
      after: "340 leads/mo",
      metric: "Qualified Leads",
      roas: "$14 CPL",
      timeline: "60 days",
      desc: "Built a full-funnel lead generation system that 28x'd qualified applications for their coaching program.",
    },
    {
      client: "HomeServ Pro",
      industry: "Home Services",
      before: "$8K/mo",
      after: "$95K/mo",
      metric: "Monthly Revenue",
      roas: "11.4x ROAS",
      timeline: "120 days",
      desc: "Dominated local search and scaled to multiple service areas with a data-driven Google Ads strategy.",
    },
  ];

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-gray-500">
            Case Studies
          </span>

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            Real results from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-sky-400">
              real clients
            </span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We don't just talk about results — we deliver them. Here's what our clients achieve.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm"
            >

              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {study.client}
                  </h3>
                  <span className="text-xs text-gray-400 font-medium">
                    {study.industry}
                  </span>
                </div>

                <span className="text-xs font-semibold text-violet-500 bg-violet-50 border border-violet-100 px-3 py-1 rounded-full whitespace-nowrap">
                  {study.timeline}
                </span>
              </div>

              {/* Metrics */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">

                {/* Before */}
                <div className="flex-1 text-center">
                  <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                    Before
                  </span>
                  <span className="text-lg font-extrabold text-gray-400">
                    {study.before}
                  </span>
                </div>

                {/* Arrow */}
                <div className="text-violet-400 font-bold text-lg">
                  →
                </div>

                {/* After */}
                <div className="flex-1 text-center">
                  <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                    After
                  </span>
                  <span className="text-lg font-extrabold text-emerald-500">
                    {study.after}
                  </span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                  {study.roas}
                </span>

                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                  {study.metric}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {study.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}