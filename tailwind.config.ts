import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        "secondary-accent": "var(--secondary-accent)",
        "project-card": "var(--project-card)",
        "project-card-text": "var(--project-card-text)",
        "minor-project-card": "var(--minor-project-card)",
        "minor-project-card-text": "var(--minor-project-card-text)",
        "tech-border": "var(--tech-border)",
        "minor-project-tech": "var(--minor-project-tech)",
        "minor-project-tech-border": "var(--minor-project-tech-border)",
      },
      fontFamily: {
        spaceGrotesk: `var(--font-space-grotesk)`,
        orbitron: `var(--font-orbitron)`,
      },
    },
  },
  plugins: [],
} satisfies Config;
