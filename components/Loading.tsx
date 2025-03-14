"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  const terminalLogs = ["INITIALIZING SYSTEMS...", "ESTABLISHING CONNECTION...", "LOADING PERSONAL DATABASE...", "SCANNING PORTFOLIO ENTRIES...", "CALIBRATING INTERFACE...", "PREPARING FOR LAUNCH..."];

  useEffect(() => {
    // Progress bar animation
    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 1;
        if (nextProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return nextProgress;
      });
    }, 20);

    // Log messages animation
    const logTimer = setInterval(() => {
      setCurrentLogIndex((prev) => {
        if (prev >= terminalLogs.length - 1) {
          clearInterval(logTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 370);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] flex items-center justify-center">
      <div className="w-full max-w-2xl p-8 relative">
        {/* Glowing Background Animation */}
        <motion.div className="absolute inset-0 bg-[#2196f3] opacity-10 rounded-full blur-lg" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} />

        <div className="border-2 border-[#2196f3] p-6 rounded-lg bg-[#0a0a0a]/90 backdrop-blur-sm">
          {/* Terminal Header with Pulse Animation */}
          <div className="flex items-center gap-2 mb-4">
            <motion.div className="h-3 w-3 rounded-full bg-red-500" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} />
            <motion.div className="h-3 w-3 rounded-full bg-yellow-500" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} />
            <motion.div className="h-3 w-3 rounded-full bg-green-500" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} />
            <span className="ml-4 text-sm font-mono text-[#2196f3]">PORTFOLIO.SYS</span>
          </div>

          {/* Terminal Content */}
          <div className="font-mono space-y-2">
            <AnimatePresence>
              {terminalLogs.slice(0, currentLogIndex + 1).map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }} // Add exit transition for smooth removal
                  className="flex items-center text-[#ededed]"
                >
                  <span className="text-[#8e24aa] mr-2">&gt;</span>
                  {log}
                  {index === currentLogIndex && <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="ml-1 inline-block w-3 h-5 bg-[#ededed]" />}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Loading Bar */}
            <div className="mt-6 border border-[#2196f3] p-1 rounded">
              <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} className="h-2 bg-[#2196f3] rounded" />
            </div>

            {/* Loading Percentage */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-right text-[#2196f3]">
              LOADING: {progress}%
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
