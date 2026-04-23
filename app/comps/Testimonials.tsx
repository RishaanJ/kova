import { Highlighter } from "@/components/ui/highlighter";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  gradient: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Kova completely transformed our ad strategy. We went from burning $15K/month with no results to generating $180K in revenue within 90 days.",
      name: "Jessica Torres",
      role: "CEO",
      company: "RYZE Co.",
      initials: "JT",
      gradient: "linear-gradient(135deg, #6c5ce7, #a29bfe)",
    },
    {
      quote:
        "The level of transparency and decision making is unlike anything I've seen. Weekly calls, real progress, and they actually care about our bottom line. Couldn't recommend them more.",
      name: "Michael Chen",
      role: "Founder",
      company: "Daily Dose",
      initials: "MC",
      gradient: "linear-gradient(135deg, #00cec9, #55efc4)",
    },
    {
      quote:
        "We tried 3 agencies before Kova. The difference? They actually deliver on their promises. Our cost per lead dropped 60% and our pipeline has never been fuller. Game changers.",
      name: "Ryan Anderson",
      role: "CMO",
      company: "HomeServer",
      initials: "RA",
      gradient: "linear-gradient(135deg, #fd79a8, #e84393)",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-gray-500">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl font-black mt-3">
            Hear from{" "}
            <Highlighter action="highlight" color="#c49bca">
              our clients
            </Highlighter>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Here’s what the people we work with have to say.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm"
            >

              {/* Stars */}
              <div className="text-yellow-400 tracking-widest text-sm">
                ★★★★★
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-gray-500 leading-relaxed italic flex-1">
                “{t.quote}”
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">


                {/* Info */}
                <div>
                  <div className="text-sm font-bold text-gray-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {t.role}, {t.company}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}