"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import SectionHeading from "../sectionHeading";
import Link from "next/link";

const experiences = [
  {
    company: "Zappit.ai",
    position: "Frontend Developer Intern",
    date: "Jan 2025 -  Present",
    description: ["Working on AI based tools for Agentic SEO and Social Intelligence", "Using Framer Motion for pixel perfect animations and transitions"],
    tech: ["NextJs", "React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "RESTful APIs"],
    companyLink: "https://zappit.ai",
  },
  {
    company: "Digitise My Business",
    position: "Software Developer Intern",
    date: "Jun 2024 - Dec 2024",
    description: ["Contributed to the development of Resumemate, a dynamic resume builder platform", "Built responsive and user-friendly interfaces using React and Tailwind CSS", "Integrated RESTful APIs for seamless real-time functionality", "Optimized performance by reducing load times and ensuring cross-browser compatibility", "Collaborated with backend developers and designers to implement scalable solutions"],
    tech: ["NextJs", "React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "RESTful APIs"],
    companyLink: "https://digitisemybusiness.com",
  },
  {
    company: "PerfectKode Software Technologies",
    position: "Frontend Developer Intern",
    date: "Apr 2024 - May 2024",
    description: ["Developed a responsive food ordering and payment platform using React.js, improving load times by 25%", "Implemented secure user authentication and session management with Redux, ensuring a seamless user experience", "Collaborated with backend developers and designers to successfully deliver key project milestones"],
    tech: ["React", "JavaScript", "Redux", "CSS", "Bootstrap"],
    companyLink: "https://perfectkode.com",
  },
];

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="experience" ref={containerRef} className="overflow-hidden max-w-screen-2xl mx-auto min-h-screen relative">
      {/*  --------------- HEADING --------------- */}
      <SectionHeading number="02" heading="Where I've Worked" />

      {/* -------------- COMPANY LIST & SELECTED COMPANY ----------- */}
      <motion.div className="flex md:flex-row flex-col font-orbitron gap-8">
        {/* COMPANY LIST */}
        <motion.div className="flex flex-row overflow-x-auto md:flex-col" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          {experiences.map((experience, index) => (
            <button className={`${selectedCompany === index ? "text-accent" : "text-foreground hover:text-secondary-accent"} px-4 py-3 text-left whitespace-nowrap ${selectedCompany === index ? "md:border-l-2 max-md:border-b-2 border-accent" : ""}`} onClick={() => setSelectedCompany(index)} key={experience.company}>
              {experience.company}
            </button>
          ))}
        </motion.div>

        {/* SELECTED COMPANY */}
        <motion.div className="flex flex-col gap-3 flex-1" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <motion.div key={selectedCompany} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground font-spaceGrotesk">
              {experiences[selectedCompany].position}
              <Link className="text-accent" href={experiences[selectedCompany].companyLink} target="_blank">
                {" "}
                @ {experiences[selectedCompany].company}
              </Link>
            </h3>
            <p className="text-foreground font-orbitron">{experiences[selectedCompany].date}</p>
            <ul className="space-y-4 font-spaceGrotesk">
              {experiences[selectedCompany].description.map((desc, index) => (
                <motion.li key={index} className="flex items-center gap-3 text-foreground" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                  <span className="text-accent">▹</span>
                  {desc}
                </motion.li>
              ))}
            </ul>
            <motion.div className="flex font-orbitron flex-wrap gap-2 mt-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>
              {experiences[selectedCompany].tech.map((tech, index) => (
                <span key={tech} className="px-3 py-1 text-sm font-mono text-accent border border-accent rounded-full">
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
