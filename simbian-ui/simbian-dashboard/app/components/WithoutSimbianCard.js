"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const dummyAlerts = [
  "Phishing Email",
  "Suspicious Login",
  "Brute Force Attempt",
  "Malicious Attachment",
  "Unauthorized Access",
  "Unusual Traffic",
];

export default function WithoutSimbianCard({ title, icon, initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = dummyAlerts[Math.floor(Math.random() * dummyAlerts.length)];
      setAlerts((prev) => [newAlert, ...prev.slice(0, 2)]);
      setCount((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg border border-red-300 p-4 w-full"
    >
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
            <span className="text-2xl">{icon}</span>
            <h3 className="text-md font-semibold text-gray-700">{title}</h3>
        </div>
        <motion.span
        key={count}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-2xl font-bold text-red-600"
    >
        {count}
        </motion.span>
      </div>
      <h3 className="text-md font-semibold text-gray-700 mb-3">{title}</h3>
      <div className="space-y-1 text-sm text-gray-500 h-16 overflow-hidden">
        {alerts.map((alert, idx) => (
          <motion.div
            key={idx}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-red-50 px-2 py-1 rounded"
          >
            {alert}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

