"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  { title: "Triaged & Reported", description: "SOC Agent handled investigation and reporting", icon: "📋" },
  { title: "Less noise", description: "90% of alerts resolved automatically", icon: "⚙️" },
  { title: "Holistic insight", description: "Correlate alerts and your environment into big picture", icon: "📊" },
  { title: "Adapts automatically", description: "Zero false positives", icon: "🎯" },
  { title: "24/7 Coverage", description: "No SOAR needed", icon: "🌙" },
];

const finalCards = [
  { title: "Ignored Alerts", icon: "✅", initial: 200 },
  { title: "Wrongly Closed", icon: "✅", initial: 35 },
  { title: "Active Threats", icon: "✅", initial: 5 },
];

export default function SectionWithSimbian() {
  const [counts, setCounts] = useState(finalCards.map((c) => c.initial));

  // Animate countdown to 0
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((value) => (value > 0 ? Math.max(0, value - Math.ceil(value / 10)) : 0))
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f0fff4] py-12 px-6 md:px-16 min-h-screen flex flex-col items-center gap-12">
      <h2 className="text-3xl font-bold text-green-700 mb-4">🟢 With Simbian</h2>

      <div className="w-full overflow-x-auto">
        <div className="flex gap-8 items-center justify-start min-w-[800px]">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              className="bg-white border border-green-300 rounded-xl shadow-md px-6 py-4 w-56 flex-shrink-0"
            >
              <div className="text-2xl mb-2">{step.icon}</div>
              <div className="font-bold text-green-700">{step.title}</div>
              <div className="text-sm text-gray-700 mt-1">{step.description}</div>
            </motion.div>
          ))}
        </div>
      </div>

  
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl">
        {finalCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + index * 0.3 }}
            className="bg-white border border-green-300 p-6 rounded-2xl shadow text-center"
          >
            <div className="text-3xl mb-2 text-green-600">{card.icon}</div>
            <div className="text-xl font-semibold text-gray-800">{card.title}</div>
            <div className="text-3xl font-bold text-green-700 mt-2 transition-all">
              {counts[index]}
            </div>
          </motion.div>
        ))}
      </div>

    
      <div className="mt-6 text-center space-y-2 text-green-800 font-medium">
        <p>✅ 90% of alerts resolved automatically, 24/7</p>
        <p>✅ Correlates alerts to your environment</p>
        <p>✅ Investigate every alert — no SOAR needed</p>
      </div>
    </section>
  );
}

