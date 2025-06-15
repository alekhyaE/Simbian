"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ActiveThreatsIcon from "./ActiveThreatsIcon";
import CrossCircleIcon from "./CrossCircleIcon";
import IgnoredAlertsIcon from "./IgnoredAlertsIcon";
import RedMonitorIcon from "./RedMonitorIcon";
import WarningIcon from "./WarningIcon";
import WithoutSimbianCard from "./WithoutSimbianCard";
import WronglyClosedAlertIcon from "./WronglyClosedAlertIcon";

const painPoints = [
  {
     title: "Wasting valuable analyst time on false positives",
     Icon:CrossCircleIcon
  },
  {
      title:"Processing one alert at a time, missing the big picture",
      Icon:RedMonitorIcon
  },
  {
        title:"More time fixing SOAR automation, less time on real threats",
        Icon:WarningIcon
  }
];

const liveMessages = [
  {
    title: "Waiting for analyst",
    description: "Analyst is dealing with other problems, hold on...",
    icon:(<svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={1.5} d="M12 6v6l4 2M12 2a10 10 0 100 20 10 10 0 000-20z" />
  </svg>)
  },
  {
    title: "Writing query",
    description: "Querying across so many tools gets complex…",
    icon:(<svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={1.5} d="M5 5h14M5 12h9m-9 7h14" />
  </svg>)
  },
  {
    title: "Asking ChatGPT",
    description: "What does this PowerShell command even mean?",
    icon:(<svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
    <path strokeWidth="1.5" d="M9 12h3l-1.5 2M9 12l1.5-2M15 12a3 3 0 10-6 0 3 3 0 006 0z" />
  </svg>)
  },
];
export default function SectionWithoutSimbian() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % liveMessages.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);
  
    const currentMessage = liveMessages[currentIndex];
  
    return (
      <section className="bg-[#fff5f5] py-12 px-6 md:px-16 min-h-screen flex flex-col md:flex-row gap-12 items-start">
 
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-red-700">Without Simbian</h2>
  
        
          <AnimatePresence mode="wait">
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="bg-red-100 text-red-800 px-4 py-3 rounded-xl shadow"
            >
    
                <div className="flex items-center gap-2">
                    <div>{currentMessage.icon}</div>
                    <div className="font-semibold text-md">{currentMessage.title}</div>
                </div>


                <div className="text-sm mt-1 text-red-700">{currentMessage.description}</div>
                </motion.div>
          </AnimatePresence>
  
        
            <div className="space-y-4 mt-4">
                {painPoints.map(({ title, Icon }, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.3 }}
                    className="bg-white border-l-4 border-red-500 px-4 py-3 rounded-xl shadow"
                    >
                    <div className="flex items-center gap-3 text-gray-800 text-lg">
                        <Icon className="w-6 h-6 text-red-600 flex-shrink-0" />
                        <span>{title}</span>
                    </div>
                    </motion.div>
                ))}
            </div>

        </div>
  
       
        <div className="md:w-1/2 grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          <WithoutSimbianCard title="Ignored Alerts"  icon={<IgnoredAlertsIcon />} initialCount={200} />
          <WithoutSimbianCard title="Wrongly Closed Alerts" icon={<WronglyClosedAlertIcon/>} initialCount={35} />
          <WithoutSimbianCard title="Active Threats" icon={<ActiveThreatsIcon/>} initialCount={5} />
        </div>
      </section>
    );
  }
  
