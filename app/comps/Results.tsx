"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

type CaseStudy = {
  client: string;
  industry: string;
  timeline: string;
  desc: string;
  data: {
    month: string;
    before: number;
    after: number;
  }[];
};

export default function Results() {
  const caseStudies: CaseStudy[] = [
    {
      client: "RISE Nutrition",
      industry: "E-commerce / DTC",
      timeline: "90 days",
      desc: "Scaled from inconsistent sales to predictable high revenue growth.",
      data: [
        { month: "M1", before: 28, after: 28 },
        { month: "M2", before: 26, after: 60 },
        { month: "M3", before: 30, after: 120 },
        { month: "M4", before: 27, after: 210 },
      ],
    },
    {
      client: "Ascend Buddy",
      industry: "E-commerce / DTC",
      timeline: "120 days",
      desc: "Built a consistent inbound system that scaled local demand.",
      data: [
        { month: "M1", before: 8, after: 8 },
        { month: "M2", before: 9, after: 25 },
        { month: "M3", before: 8.5, after: 60 },
        { month: "M4", before: 8, after: 95 },
      ],
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black">
            Revenue growth after working with us
          </h2>

          <p className="text-gray-500 mt-4">
            Values shown in monthly revenue ($K)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold">{study.client}</h3>
                <p className="text-xs text-gray-400">{study.industry}</p>
              </div>

              <div className="h-64 outline-none focus:outline-none">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={study.data}>

                    {/* X axis (clean) */}
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#9CA3AF" }}
                    />

                    {/* Y axis (NOW FIXED but minimal) */}
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#D1D5DB" }}
                      width={30}
                    />

                    {/* BEFORE */}
                    <Line
                      type="monotone"
                      dataKey="before"
                      stroke="#9CA3AF"
                      strokeWidth={2}
                      dot={false}
                    />

                    {/* AFTER */}
                    <Line
                      type="monotone"
                      dataKey="after"
                      stroke="#8B5CF6"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                {study.desc}
              </p>

              <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-violet-50 text-violet-600">
                {study.timeline}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}