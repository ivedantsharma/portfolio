import { useScroll, useTransform, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: {
    github: string;
    live: string;
  };
  featured: boolean;
  color: string;
}

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div ref={cardRef} style={{ y, rotate, scale }} className="relative mb-32 last:mb-0">
      <motion.div className="relative grid grid-cols-12 gap-4 items-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }}>
        <div className={`col-span-full left-0 w-full md:col-span-7 relative aspect-video rounded-lg overflow-hidden ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <motion.div
            className="absolute inset-0 z-10"
            style={{
              backgroundColor: project.color,
              opacity: isHovered ? 0 : 0.2,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="relative w-full h-full transform"
            animate={{
              scale: isHovered ? 1.05 : 1,
              rotateY: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.4 }}
          >
            <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-lg" />
          </motion.div>
          <motion.div className="absolute inset-0 z-20 flex items-center justify-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }}>
            <motion.a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/80 rounded-full text-white hover:bg-black" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a href={project.links.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/80 rounded-full text-white hover:bg-black" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ExternalLink className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div className={`col-span-full md:col-span-5 ${index % 2 === 0 ? "order-2 md:pl-8" : "order-1 md:pr-8"}`} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
          <motion.span className="text-sm font-mono text-accent" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true }}>
            Featured Project
          </motion.span>
          <motion.h3 className="text-3xl font-bold mt-2 mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} viewport={{ once: true }}>
            {project.title}
          </motion.h3>
          <motion.div className="bg-project-card backdrop-blur-sm p-6 rounded-lg mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }}>
            <p className="text-project-card-text">{project.description}</p>
          </motion.div>
          <motion.div className="flex flex-wrap gap-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} viewport={{ once: true }}>
            {project.tech.map((tech, i) => (
              <span key={tech} className="px-3 py-1 text-sm font-mono text-accent border border-tech-border rounded-full">
                {tech}
              </span>
            ))}
          </motion.div>
          <motion.div className="flex gap-5 mt-5">
            <motion.a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-3 border-accent border rounded-full hover:bg-accent hover:text-white text-accent" whileHover={{ scale: 1.25, rotateX: 360, transition: { duration: 0.25, ease: "easeInOut" } }} whileTap={{ scale: 0.9 }}>
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a href={project.links.live} target="_blank" rel="noopener noreferrer" className="p-3 border border-accent rounded-full hover:bg-accent hover:text-white text-accent" whileHover={{ scale: 1.1, rotateX: 180, transition: { duration: 0.25, ease: "easeInOut" } }} whileTap={{ scale: 0.9 }}>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
