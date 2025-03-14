"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Generate random positions for stars
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 2 + 2,
  }));

  return (
    <footer className="relative bg-transparent shadow-xl py-8 overflow-hidden border-t border-blue-500/20">
      {/* Background stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-blue-400 rounded-full"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <Link className="font-orbitron" href="/" passHref>
              <span className="text-[33px] font-semibold text-accent mr-[2px]">Avi</span>
              <span className="text-[33px] font-semibold text-foreground mr-[2px]">.</span>
              <span className="text-[33px] font-semibold text-secondary-accent">_</span>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center">
            <p className="text-[10px] md:text-xs lg:text-sm text-gray-400 font-spaceGrotesk tracking-widest">
              © {currentYear}{" "}
              <Link href="https://www.github.com/aviralsharma07" target="_blank" className="hover:underline underline-offset-4 hover:font-semibold">
                AVIRAL SHARMA
              </Link>{" "}
              | ALL RIGHTS RESERVED
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
