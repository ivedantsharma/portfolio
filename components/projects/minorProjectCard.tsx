// import { useState } from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, Rocket } from "lucide-react";

// export interface MinorProject {
//   id: number;
//   title: string;
//   description: string;
//   tech: string[];
//   link: string;
// }

// export const MinorProjectCard = ({ project }: { project: MinorProject }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
//       <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }} />
//       <div className="p-6 relative z-10">
//         <div className="flex justify-between items-start mb-4">
//           <Rocket className="w-8 h-8 text-blue-400" />
//           <motion.a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//             <ExternalLink className="w-5 h-5" />
//           </motion.a>
//         </div>
//         <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//         <p className="text-gray-400 mb-4">{project.description}</p>
//         <motion.div className="flex flex-wrap gap-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }} transition={{ duration: 0.3 }}>
//           {project.tech.map((tech) => (
//             <span key={tech} className="px-2 py-1 text-xs font-mono text-blue-300 border border-blue-400/20 rounded-full">
//               {tech}
//             </span>
//           ))}
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Rocket } from "lucide-react";

export interface MinorProject {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const MinorProjectCard = ({ project }: { project: MinorProject }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div className="relative bg-minor-project-card backdrop-blur-sm rounded-lg overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
      <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }} />
      <div className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <Rocket className="w-8 h-8 text-blue-400" />
          <motion.a href={project.link} target="_blank" rel="noopener noreferrer" className="text-minor-project-card-text hover:text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-minor-project-card-text mb-4">{project.description}</p>
        <motion.div className="flex flex-wrap gap-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }} transition={{ duration: 0.3 }}>
          {project.tech.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs font-mono text-minor-project-tech border border-minor-project-tech-border rounded-full">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
