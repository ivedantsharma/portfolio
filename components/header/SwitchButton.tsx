"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Star } from "lucide-react";

interface SwitchButtonProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ toggleTheme, isDark }) => {
  return (
    <motion.button onClick={toggleTheme} className={`relative w-12 h-12 rounded-full p-1 overflow-hidden ${isDark ? "bg-white" : "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-inner"}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
      <motion.div
        className={`absolute inset-0 rounded-full ${isDark ? "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-inner" : "bg-white"}`}
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-center"
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
            y: isDark ? 20 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <Sun className="w-6 h-6 text-yellow-400" />
        </motion.div>
        <motion.div
          className="absolute"
          initial={false}
          animate={{
            opacity: isDark ? 1 : 0,
            y: isDark ? 0 : -20,
          }}
          transition={{ duration: 0.5 }}
        >
          <Moon className="w-6 h-6 text-blue-300" />
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 1.5 + Math.random(),
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 2,
            }}
          >
            <Star className="w-1 h-1 text-yellow-100" />
          </motion.div>
        ))}
      </motion.div>
    </motion.button>
  );
};

export default SwitchButton;
