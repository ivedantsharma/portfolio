import type { Metadata } from "next";
import { Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";
import { SpaceBackground } from "@/components/SpaceBackground";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-space-grotesk", fallback: ["sans-serif"] });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-orbitron", fallback: ["sans-serif"] });

// Title and description of my Developer Portfolio
export const metadata: Metadata = {
  title: "Aviral Sharma | Software Engineer | Frontend Developer",
  description: "Portfolio of Aviral Sharma, Software Engineer specializing in frontend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${orbitron.variable}`}>
        <SpaceBackground />
        {children}
      </body>
    </html>
  );
}
