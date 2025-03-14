import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ number, heading }: { number: string; heading: string }) => {
  return (
    <div className="flex items-center gap-4 mb-12 font-orbitron">
      <motion.span className="text-blue-400 font-mono text-lg" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        {number}.
      </motion.span>
      <motion.h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
        {heading}
      </motion.h2>
      <motion.div className="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} />
    </div>
  );
};

export default SectionHeading;
