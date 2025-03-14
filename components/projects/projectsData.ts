import { MinorProject } from "./minorProjectCard";
import { Project } from "./projectCard";

export const projects: Project[] = [
  {
    id: 1,
    title: "Schedura",
    description: "A scheduling platform with Google Calendar integration, dynamic availability management, and Google Meet link generation using Next.js.",
    image: "/schedura.png",
    tech: ["NextJs", "React", "Prisma", "NeonDB", "Zod", "Clerk Auth"],
    links: {
      github: "https://github.com/aviralsharma07/schedura",
      live: "https://schedura.vercel.app/",
    },
    featured: true,
    color: "#4F46E5",
  },
  {
    id: 2,
    title: "Sketchlab",
    description: "A collaborative online whiteboard with real-time sketching, live updates, and responsive design powered by React.js and Socket.io.",
    image: "/sketchlab.png",
    tech: ["Next.js", "React", "Socket.io", "Context API"],
    links: {
      github: "https://github.com/aviralsharma07/sketchlab",
      live: "https://sketchlab.vercel.app/",
    },
    featured: true,
    color: "#06B6D4",
  },
];

export const minorProjects: MinorProject[] = [
  {
    id: 1,
    title: "VidTube",
    description: "VidTube is a dynamic video sharing platform that leverages the power of YouTube's API to engage users with their favorite videos.",
    tech: ["React", "Vite", "Bootstrap", "YouTube API"],
    link: "https://vidtube-avi.netlify.app/",
  },
  {
    id: 2,
    title: "Chatnest",
    description: "A real-time chat application with end-to-end encryption, user authentication, and message history using Firebase and React.",
    tech: ["React", "Firebase", "Zustand"],
    link: "https://github.com/aviralsharma07/react-chat-app",
  },
  {
    id: 3,
    title: "Cineboxd",
    description: "Cineboxd allows users to search for their favorite movies, create personal movie lists (both private and public), and explore public lists created by other users.",
    tech: ["React", "Vite", "Bootstrap"],
    link: "https://cineboxd-eight.vercel.app/",
  },
  {
    id: 4,
    title: "Color Matrix",
    description: "Generates a matrix of random colors based on the user-input and calculates and displays the maximum consecutive cells with the same color in both rows and columns.",
    tech: ["Javascript", "Tailwind"],
    link: "https://colormatrix.netlify.app/",
  },
  {
    id: 5,
    title: "Memeify",
    description: "Memeify is a meme generator application built using React and Vite.",
    tech: ["React", "Vite", "Bootstrap"],
    link: "https://memeify-avi.netlify.app/",
  },
  {
    id: 6,
    title: "Taskease",
    description: "Taskease is a task management application that allows users to create, update, and delete tasks.",
    tech: ["React", "Vite", "Bootstrap"],
    link: "https://task-ease-theta.vercel.app/",
  },
];
