"use client";
import { useState } from "react";
import ToggleThemeButton from "./ToggleThemeButton";
import Link from "next/link";
import { motion } from "framer-motion";
import HamburgerMenu from "./HamburgerIcon";
// favicon.ico
const navItems = [
  { number: "01", name: "about", href: "#about" },
  { number: "02", name: "experience", href: "#experience" },
  { number: "03", name: "projects", href: "#projects" },
  { number: "04", name: "blogs", href: "#blogs" },
  { number: "05", name: "contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative">
      <nav className="fixed flex justify-between py-5 md:py-7 top-0 left-0 w-full px-5 md:px-10 bg-opacity-50 backdrop-blur-md z-50">
        {/* ---------- LOGO ----------- */}
        <div className="font-orbitron">
          <span className="text-[33px] lg:text-4xl font-semibold text-accent mr-[2px]">Avi</span>
          <span className="text-[33px] lg:text-4xl font-semibold text-foreground mr-[2px]">.</span>
          <span className="text-[33px] lg:text-4xl font-semibold text-secondary-accent">_</span>
        </div>

        {/* ---------- DESKTOP NAVIGATION ----------- */}
        <ul className="hidden md:flex justify-center items-center space-x-8 lg:space-x-14">
          {navItems.map((item) => (
            <li key={item.number}>
              <Link href={item.href} className="text-lg lg:text-xl font-orbitron cursor-pointer relative">
                <span className="text-xs absolute top-0 text-accent left-0 -translate-x-5 -translate-y-2">{item.number}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* ----------------- Toggle Button for Dark Mode -------------- */}
        <div className="hidden md:block">
          <ToggleThemeButton />
        </div>

        {/* ------------------ Menu Button (Circle) ------------------ */}
        <motion.div
          className="bg-gradient-to-b from-black opacity-95 via-gray-800 shadow-xl md:hidden to-secondary-accent absolute rounded-full right-0 top-0"
          style={{
            width: isMenuOpen ? 280 : 47,
            height: isMenuOpen ? "100vh" : 47,
            marginRight: isMenuOpen ? 0 : 20,
            marginTop: isMenuOpen ? 0 : 20,
          }} // Toggle size based on isMenuOpen
          initial={false}
          animate={{
            width: isMenuOpen ? 280 : 47, // Full width or circle width
            height: isMenuOpen ? "100vh" : 47, // Full height or circle height
            borderRadius: isMenuOpen ? "0px" : "50%", // Toggle between circle and square corners
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30,
            },
            marginRight: isMenuOpen ? 0 : 20,
            marginTop: isMenuOpen ? 0 : 20,
          }}
        >
          {isMenuOpen && (
            <motion.ul
              className="flex flex-col gap-7 mt-20 items-end p-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2, // Delay each item by 0.1 seconds
                  duration: 0.5,
                },
              }}
              exit={{ opacity: 0, y: 50 }}
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                >
                  <Link href={item.href} className="text-xl font-orbitron cursor-pointer relative">
                    <span className="text-xs absolute top-0 text-accent left-0 -translate-x-5 -translate-y-2">{item.number}</span>
                    <span className="text-white">{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>

        {/* --------------------- Toggle Menu Button ------------------ */}
        <div className="right-7 top-[30px] z-100 absolute md:hidden" onClick={toggleMenu}>
          <HamburgerMenu isOpen={isMenuOpen} />
        </div>
        <div className="right-[74px] top-5 absolute md:hidden">
          <ToggleThemeButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
