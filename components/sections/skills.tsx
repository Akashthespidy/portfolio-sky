"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Terminal, Cpu, Database, Blocks } from "lucide-react";
import { IconCloud } from "@/components/ui/icon-cloud";

const BLUR_FADE_DELAY = 0.04;

// High-quality brand SVGs with explicit dimensions and colors
const BRAND_SVGS = {
  typescript: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect width="100" height="100" rx="10" fill="#3178c6"/>
      <text x="70" y="80" fill="white" fontFamily="sans-serif" fontWeight="bold" fontSize="38" textAnchor="end">TS</text>
    </svg>
  ),
  react: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="100" height="100">
      <rect x="-60" y="-60" width="120" height="120" fill="#20232a" rx="10"/>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  nextjs: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="48" fill="black" stroke="white" strokeWidth="2"/>
      <path d="M35 30 L65 70 M65 30 L65 70" stroke="white" strokeWidth="7" strokeLinecap="round"/>
    </svg>
  ),
  nodejs: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect width="100" height="100" rx="10" fill="#333333"/>
      <path d="M50 20 L75 35 L75 65 L50 80 L25 65 L25 35 Z" fill="none" stroke="#68a063" strokeWidth="6"/>
      <text x="50" y="55" fill="#68a063" fontFamily="monospace" fontWeight="bold" fontSize="24" textAnchor="middle">JS</text>
    </svg>
  ),
  python: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect width="100" height="100" rx="10" fill="#1e1e1e"/>
      <path d="M50 15 C35 15 30 25 30 35 L30 45 L50 45 L50 50 L35 50 C25 50 15 55 15 70 C15 85 25 90 40 90 L50 90 L50 75 L35 75 C30 75 30 70 30 65 L30 60 L50 60 L65 60 C75 60 85 55 85 40 C85 25 75 15 50 15 Z" fill="#3776ab"/>
      <path d="M50 85 C65 85 70 75 70 65 L70 55 L50 55 L50 50 L65 50 C75 50 85 45 85 30 C85 15 75 10 60 10 L50 10 L50 25 L65 25 C70 25 70 30 70 35 L70 40 L50 40 L35 40 C25 40 15 45 15 60 C15 75 25 85 50 85 Z" fill="#ffd343"/>
    </svg>
  ),
  postgresql: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect width="100" height="100" rx="10" fill="#336791"/>
      <text x="50" y="62" fill="white" fontFamily="sans-serif" fontWeight="bold" fontSize="40" textAnchor="middle">DB</text>
    </svg>
  ),
  tailwind: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect width="100" height="100" rx="10" fill="#0f172a"/>
      <path d="M50 30 C40 30 35 38 35 45 C35 55 45 60 50 60 C60 60 65 52 65 45 C65 35 55 30 50 30 Z" fill="#38bdf8"/>
    </svg>
  ),
  cpp: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect width="100" height="100" rx="10" fill="#00599c"/>
      <text x="50" y="60" fill="white" fontFamily="monospace" fontWeight="bold" fontSize="36" textAnchor="middle">C++</text>
    </svg>
  ),
  java: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect width="100" height="100" rx="10" fill="#5382a1"/>
      <text x="50" y="60" fill="white" fontFamily="sans-serif" fontWeight="bold" fontSize="36" textAnchor="middle">Java</text>
    </svg>
  ),
  solidity: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect width="100" height="100" rx="10" fill="#363636"/>
      <path d="M50 15 L80 50 L50 85 L20 50 Z" fill="none" stroke="white" strokeWidth="5"/>
    </svg>
  ),
  git: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect width="100" height="100" rx="10" fill="#f05032"/>
      <circle cx="35" cy="65" r="8" fill="white"/>
      <circle cx="65" cy="35" r="8" fill="white"/>
      <line x1="35" y1="65" x2="65" y2="35" stroke="white" strokeWidth="6"/>
    </svg>
  ),
  linux: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect width="100" height="100" rx="10" fill="#ffd200"/>
      <circle cx="50" cy="50" r="35" fill="black"/>
      <text x="50" y="58" fill="white" fontFamily="sans-serif" fontWeight="bold" fontSize="28" textAnchor="middle">Tux</text>
    </svg>
  )
};

// Skill groups
const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: Terminal,
    skills: ["C++", "Python", "Java", "TypeScript", "JavaScript", "Solidity"]
  },
  {
    title: "Frontend & UI",
    icon: Cpu,
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "Jotai", "Radix UI"]
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: ["Node.js", "PostgreSQL", "Neon", "Express", "REST APIs"]
  },
  {
    title: "AI & Tools & Utilities",
    icon: Blocks,
    skills: ["OpenAI API", "LLMs", "Vector Embeddings", "Git", "Linux", "Docker"]
  }
];

export function Skills() {
  const cloudIcons = Object.values(BRAND_SVGS);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 4 }}
      className="space-y-8 animate-fadeIn"
      id="skills"
    >
      <div className="flex items-center gap-3">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Sparkles className="h-8 w-8 text-primary" />
        </motion.div>
        <h2 className="text-3xl font-bold">Skills & Technologies</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 items-center">
        {/* Left Side: Categorized Skills */}
        <div className="lg:col-span-7 space-y-6">
          {SKILL_GROUPS.map((group, groupIdx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              >
                <Card className="glass-effect border hover:border-primary/40 transition-all duration-300">
                  <CardHeader className="py-4 px-5 flex flex-row items-center gap-3 border-b border-border/30">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <Icon className="h-4.5 w-4.5 text-primary" />
                    </div>
                    <h3 className="font-mono text-sm font-bold tracking-tight">{group.title}</h3>
                  </CardHeader>
                  <CardContent className="py-4 px-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-3 py-1.5 text-xs font-mono font-medium cursor-default hover-lift relative overflow-hidden group"
                        >
                          <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
                          <span className="relative z-10">{skill}</span>
                        </Badge>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Right Side: 3D Spinning Cloud */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-[380px] aspect-square flex items-center justify-center p-4 bg-primary/5 rounded-full border border-primary/10 shadow-inner pulse-glow"
          >
            <IconCloud icons={cloudIcons} />
          </motion.div>
          <p className="mt-4 font-mono text-[10px] text-muted-foreground/60 flex items-center gap-1.5 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Drag or scroll to rotate the stack
          </p>
        </div>
      </div>
    </motion.section>
  );
}
