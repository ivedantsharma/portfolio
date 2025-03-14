"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Mail, FileText, BookHeart, Instagram, ExternalLink } from "lucide-react";
import SectionHeading from "../sectionHeading";

const ParticleField = ({ children }: { children: React.ReactNode }) => {
  const particleCount = 100;
  const particles = Array.from({ length: particleCount });

  return (
    <div className="inset-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            transition: {
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
      ))}
      {children}
    </div>
  );
};

const CosmicInput = ({ name, type, placeholder, value, onChange }: { name: string; type: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void }) => {
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div className="relative mb-8" onMouseMove={handleMouseMove} onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg opacity-50"
        animate={{
          scale: isFocused ? 1.05 : 1,
          boxShadow: isFocused ? "0 0 20px rgba(66, 153, 225, 0.5)" : "none",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-700 rounded-lg opacity-30"
        style={{
          clipPath: `circle(20% at ${mousePosition.x}px ${mousePosition.y}px)`,
        }}
      />
      {type === "textarea" ? <textarea ref={inputRef as React.RefObject<HTMLTextAreaElement>} name={name} value={value} onChange={onChange} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholder={placeholder} className="w-full bg-transparent text-white p-4 rounded-lg focus:outline-none resize-none relative z-10" rows={4} /> : <input ref={inputRef as React.RefObject<HTMLInputElement>} type={type} name={name} value={value} onChange={onChange} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholder={placeholder} className="w-full bg-transparent text-white p-4 rounded-lg focus:outline-none relative z-10" />}
    </motion.div>
  );
};

const CosmicButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const variants = {
    default: { scale: 1 },
    hovered: { scale: 1.05 },
  };

  return (
    <motion.button ref={buttonRef} className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 font-bold text-lg" variants={variants} initial="default" animate={isHovered ? "hovered" : "default"} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={onClick}>
      <motion.div
        className="absolute inset-0 bg-white opacity-20"
        style={{
          clipPath: "circle(0% at 50% 50%)",
        }}
        animate={{
          clipPath: isHovered ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
      <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0" animate={{ opacity: isHovered ? 0.3 : 0 }} />
      {children}
    </motion.button>
  );
};

const SpaceshipTerminal = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, color: "#0077B5", link: "https://linkedin.com/in/aviral07" },
    { name: "GitHub", icon: Github, color: "#333", link: "https://github.com/aviralsharma07" },
    { name: "Email", icon: Mail, color: "#D44638", link: "mailto:thisisaviral200@gmail.com.com" },
    { name: "Resume", icon: FileText, color: "#4285F4", link: "/Aviral-Sharma.pdf" },
    { name: "Instagram", icon: Instagram, color: "#E1306C", link: "https://instagram.com/ameyaunscripted" },
    { name: "Hashnode", icon: BookHeart, color: "#2962FF", link: "https://aviralsharma.hashnode.dev/" },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (terminalRef.current) {
        const rect = terminalRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        terminalRef.current.style.setProperty("--mouse-x", `${x * 100}%`);
        terminalRef.current.style.setProperty("--mouse-y", `${y * 100}%`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div ref={terminalRef} className="w-full h-[370px] md:h-[500px] bg-gray-900 rounded-lg overflow-hidden relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(29,78,216,0.15)_0%,transparent_80%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-50" />
      <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-10" />
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <div className="md:text-xs text-[10px] text-blue-400 font-mono">SYSTEM STATUS: ONLINE</div>
          <div className="md:text-xs text-[10px] text-blue-400 font-mono">COMMS READY</div>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-4">
          {socialLinks.map((social) => (
            <motion.a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="relative group" whileHover={{ scale: 1.05 }} onHoverStart={() => setActiveButton(social.name)} onHoverEnd={() => setActiveButton(null)}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg border border-blue-500 overflow-hidden">
                <motion.div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20" initial={false} animate={activeButton === social.name ? { scale: [1, 1.5, 1], opacity: [0, 0.2, 0] } : {}} transition={{ duration: 0.5 }} />
                <social.icon className="md:w-8 md:h-8 w-5 h-5 text-blue-400 mb-2" />
                <span className="md:text-xs text-[10px] text-blue-300 font-mono">{social.name.toUpperCase()}</span>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div className="md:text-xs text-[10px] text-blue-400 font-mono">SIGNAL STRENGTH: 100%</div>
          <motion.div className="w-4 h-4 bg-blue-500 rounded-full" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        </div>
      </div>
    </motion.div>
  );
};

export const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);
    setShowNotification(false);

    // if form is empty then set showNotification to true and return
    if (!formState.name && !formState.email && !formState.message) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // clear the form data after successful submission
      setFormState({ name: "", email: "", message: "" });
      setIsSubmitted(true);
    } catch (error) {
      console.error("There was an error!", error);
    } finally {
      setIsSubmitting(false);
      // show the notification for 3 seconds
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  return (
    <motion.section ref={containerRef} id="contact" className="min-h-screen mx-auto max-w-screen-2xl pt-5 md:py-5 lg:py-10 relative overflow-hidden" style={{ opacity }}>
      <ParticleField>
        <SectionHeading number="04" heading="Let's Connect Voyager" />
        <div className="container mx-auto lg:px-4 relative z-10 -mt-10 md:-mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div style={{ y }} className="relative">
              <SpaceshipTerminal />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <CosmicInput name="name" type="text" placeholder="Your Name" value={formState.name} onChange={handleChange} />
                <CosmicInput name="email" type="email" placeholder="Your Email Address" value={formState.email} onChange={handleChange} />
                <CosmicInput name="message" type="textarea" placeholder="Your Message to Maverick" value={formState.message} onChange={handleChange} />
                <CosmicButton onClick={() => handleSubmit}>{isSubmitting ? "Transmitting..." : isSubmitted ? "Message Sent to the Cosmos!" : "Launch Message"}</CosmicButton>
              </form>

              {/* Notification to show on success or error of sending message */}
              <AnimatePresence>{showNotification && <Notification type={isSubmitted ? type.success : !formState.name && !formState.email && !formState.message ? type.empty : type.error} />}</AnimatePresence>
            </motion.div>
          </div>
        </div>
      </ParticleField>
    </motion.section>
  );
};

const Notification = ({ type }: { type: { color: string; message: string } }) => {
  return (
    <motion.div className={`bg-${type.color}-500 text-white p-4 rounded-lg text-center absolute right-1 lg:right-4 bottom-96 lg:bottom-[450px]`} initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 200 }}>
      {type.message}
    </motion.div>
  );
};

const type = {
  success: {
    color: "green",
    message: "Message sent successfully!",
  },
  error: {
    color: "red",
    message: "There was an error sending your message.",
  },
  empty: {
    color: "yellow",
    message: "Please fill in all the fields.",
  },
};
