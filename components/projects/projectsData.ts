import { MinorProject } from "./minorProjectCard";
import { Project } from "./projectCard";

export const projects: Project[] = [
  {
    id: 1,
    title: "Agentic Knowledge Engine",
    description:
      "Unified flat, hierarchical, and claim-graph knowledge representations with multi-hop search planning, Qwen2.5-0.5B LoRA fine-tuning, and tabular REINFORCE retrieval policies.",
    image: "/agentic-knowledge.png",
    tech: ["Python", "PyTorch", "LoRA/PEFT", "BM25", "MiniLM", "Hybrid RRF"],
    links: {
      github:
        "https://github.com/ivedantsharma/agentic-knowledge-lab/tree/main/knowledge_engine",
      live: "https://github.com/ivedantsharma/agentic-knowledge-lab",
    },
    featured: true,
    color: "#6366F1",
  },
  {
    id: 2,
    title: "KnowledgeBench",
    description:
      "Typed adversarial evaluation suite and trace-grading harness exposing multi-hop, stale, contradictory, and distractor failure modes across 487 passing CI tests.",
    image: "/knowledgebench.png",
    tech: ["Python", "Pydantic", "pytest", "BM25", "MiniLM", "RRF"],
    links: {
      github:
        "https://github.com/ivedantsharma/agentic-knowledge-lab/tree/main/knowledgebench",
      live: "https://github.com/ivedantsharma/agentic-knowledge-lab",
    },
    featured: true,
    color: "#10B981",
  },
  {
    id: 3,
    title: "Schedura",
    description:
      "A scheduling platform with Google Calendar integration, dynamic availability management, and Google Meet link generation using Next.js.",
    image: "/schedura.png",
    tech: ["NextJs", "React", "Prisma", "NeonDB", "Zod", "Clerk Auth"],
    links: {
      github: "https://github.com/ivedantsharma/schedura",
      live: "https://schedura.vercel.app/",
    },
    featured: false,
    color: "#4F46E5",
  },
];

export const minorProjects: MinorProject[] = [
  {
    id: 1,
    title: "High-Performance Thread Pool",
    description:
      "Header-only C++17 thread pool featuring CPU affinity, priority scheduling, and zero-copy perfect-forwarded task submission for concurrent workloads.",
    tech: ["C++17", "Concurrency", "Linux API"],
    link: "https://github.com/ivedantsharma/threadPool",
  },
  {
    id: 2,
    title: "Low-Latency mini Trading Engine",
    description:
      "Price-Time Priority limit order book engine in C++17 with SQLite historical market-data replay and real-time Boost.Beast WebSocket latency telemetry.",
    tech: ["C++17", "Boost.Beast", "SQLite"],
    link: "https://github.com/ivedantsharma/mini-trading-engine",
  },
  {
    id: 3,
    title: "Sketchlab",
    description:
      "A collaborative online whiteboard with real-time sketching, live updates, and responsive design powered by React.js and Socket.io.",
    tech: ["Next.js", "React", "Socket.io", "Context API"],
    link: "https://sketchlab.vercel.app/",
  },
  {
    id: 4,
    title: "VidTube",
    description:
      "VidTube is a dynamic video sharing platform that leverages the power of YouTube's API to engage users with their favorite videos.",
    tech: ["React", "Vite", "Bootstrap", "YouTube API"],
    link: "https://vidtube-avi.netlify.app/",
  },
  {
    id: 5,
    title: "SpendWise",
    description:
      "A real-time expense tracking application, user authentication, and income-expense history using Firebase and React.",
    tech: ["React", "Firebase", "Zustand"],
    link: "https://github.com/ivedantsharma/SpendWise",
  },
  {
    id: 6,
    title: "Cineboxd",
    description:
      "Cineboxd allows users to search for their favorite movies, create personal movie lists (both private and public), and explore public lists created by other users.",
    tech: ["React", "Vite", "Bootstrap"],
    link: "https://cineboxd-eight.vercel.app/",
  },
];