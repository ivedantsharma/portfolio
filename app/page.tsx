"use client";
import { motion } from "framer-motion";
import Header from "@/components/header/header";
import { Hero } from "@/components/hero/hero";
import Experience from "@/components/experience/experience";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";
import LoadingScreen from "@/components/Loading";
import { useEffect, useState } from "react";
import { Contact } from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Blogs from "@/components/blogs/blogs";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Set the loading state to complete after the loading duration
    const loadingDuration = 3000; // 5 seconds for the loading animation
    const timer = setTimeout(() => {
      setLoadingComplete(true); // Mark the loading screen as complete after the duration
    }, loadingDuration);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loadingComplete ? (
        <LoadingScreen />
      ) : (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="min-h-screen overflow-hidden max-w-screen px-5 md:px-10">
          <Header />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Blogs />
          <Contact />
          <Footer />
        </motion.main>
      )}
    </>
  );
}
