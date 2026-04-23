type Logo = {
  name: string;
  letter: string;
};

type Stat = {
  value: string;
  label: string;
};

export default function SocialProof() {
  const logos: Logo[] = [
    { name: "TechFlow", letter: "T" },
    { name: "Meridian", letter: "M" },
    { name: "Velocity", letter: "V" },
    { name: "Prism", letter: "P" },
    { name: "Quantum", letter: "Q" },
    { name: "NovaCo", letter: "N" },
  ];

  const stats: Stat[] = [
    { value: "$47M+", label: "Revenue Generated" },
    { value: "150+", label: "Brands Scaled" },
    { value: "8.4x", label: "Average ROAS" },
    { value: "94%", label: "Client Retention" },
  ];

  return (
    <section
      id="social-proof"
      className="py-20 bg-gray-50 border-y border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Logos */}
        <div className="text-center mb-14">
          <span className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">
            Trusted by industry leaders
          </span>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 opacity-40 hover:opacity-80 transition"
              >
                {/* Logo icon */}
                <div className="w-8 h-8 rounded-md bg-white border border-gray-200 flex items-center justify-center font-extrabold text-sm text-gray-900">
                  {logo.letter}
                </div>

                {/* Name */}
                <span className="font-bold text-gray-900 tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}