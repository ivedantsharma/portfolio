"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "../sectionHeading";
import { MinorProjectCard } from "./minorProjectCard";
import { minorProjects, projects } from "./projectsData";
import { ProjectCard } from "./projectCard";

const Projects = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="projects" className="min-h-screen relative overflow-hidden">
      <motion.div className="container mx-auto px-4" style={{ y, opacity }}>
        <SectionHeading number="03" heading="Some Things I've Built" />

        <div className="space-y-32 mb-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="flex items-center gap-4 mb-12">
            <motion.span className="text-purple-400 font-mono text-lg" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              03.5
            </motion.span>
            <motion.h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              Other Projects
            </motion.h3>
            <motion.div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} />
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
            {minorProjects.map((project) => (
              <MinorProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
