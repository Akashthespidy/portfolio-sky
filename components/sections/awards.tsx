"use client";

import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star, Code, Cpu, ExternalLink, Globe } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  award: Award,
  medal: Medal,
  star: Star,
  trophy: Trophy,
  code: Code,
};

export function Awards() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 12 }}
      className="space-y-8"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Trophy className="h-8 w-8 text-primary" />
          Awards & Achievements
        </h2>
        <p className="text-muted-foreground">
          National and international competitive programming milestones
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        {DATA.awards.map((award, index) => {
          const Icon = iconMap[award.icon];
          const awardData = award as {
            title: string;
            date: string;
            description: string;
            icon: string;
            team?: string;
            handle?: string;
            link?: string;
          };
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 glass-effect border hover:border-primary/40">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    {Icon && (
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    )}
                    <div className="flex-1 space-y-1">
                      <h3 className="font-bold leading-tight text-md">
                        {awardData.title}
                      </h3>
                      <p className="font-mono text-xs text-muted-foreground/80 tracking-tight">
                        date: &quot;{awardData.date}&quot;
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {awardData.description}
                  </p>
                  
                  {/* Metadata labels in monospace */}
                  <div className="space-y-1 font-mono text-xs text-muted-foreground/80 tracking-tight">
                    {awardData.team && (
                      <p>
                        team: <span className="text-primary font-semibold">&quot;{awardData.team}&quot;</span>
                      </p>
                    )}
                    {awardData.handle && (
                      <p>
                        handle: <span className="text-primary font-semibold">&quot;{awardData.handle}&quot;</span>
                      </p>
                    )}
                  </div>
                  
                  {awardData.link && (
                    <div className="pt-2">
                      <a
                        href={awardData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        View Details
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Problem Solving & Algorithmic Metrics Highlight Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-primary/10 via-primary/[0.02] to-transparent border-primary/20 hover:border-primary/40 transition-colors duration-300 overflow-hidden relative">
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/20 p-2.5 pulse-glow">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-mono tracking-tight flex items-center gap-2">
                  1300+ Problems Solved
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Deep algorithmic core forged through online judges and competitive contest platforms
                </p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="relative z-10 pt-0 space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              {/* Codeforces details block */}
              <div className="p-4 rounded-xl border bg-card/60 flex flex-col justify-between hover:border-primary/30 transition-all duration-300 select-none">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-muted-foreground/60 tracking-wider uppercase">codeforces</span>
                  <h4 className="font-bold text-violet-400 font-mono text-sm">@sky_rush</h4>
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <span>Rating Index</span>
                  <span className="font-bold text-foreground">1300+ problems</span>
                </div>
              </div>

              {/* Leetcode details block */}
              <div className="p-4 rounded-xl border bg-card/60 flex flex-col justify-between hover:border-primary/30 transition-all duration-300 select-none">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-muted-foreground/60 tracking-wider uppercase">leetcode</span>
                  <h4 className="font-bold text-amber-500 font-mono text-sm">@sky_rush</h4>
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <span>Problems Solved</span>
                  <span className="font-bold text-foreground">Multi-Topic core</span>
                </div>
              </div>

              {/* Other Judges details block */}
              <div className="p-4 rounded-xl border bg-card/60 flex flex-col justify-between hover:border-primary/30 transition-all duration-300 select-none">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-muted-foreground/60 tracking-wider uppercase">competitions</span>
                  <h4 className="font-bold text-primary font-mono text-sm">ACM ICPC & IEEEXtreme</h4>
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <span>Contest Team</span>
                  <span className="font-bold text-foreground">JnU_Lazy_Penguin</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 justify-between items-center text-xs font-mono text-muted-foreground/80">
              <div className="flex items-center gap-1.5">
                <Cpu className="h-4 w-4 text-primary" />
                <span>Languages: C++20, Python 3, Java, TypeScript</span>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://codeforces.com/profile/sky_rush" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  <Globe className="h-3.5 w-3.5" /> Codeforces
                </a>
                <a 
                  href="https://leetcode.com/sky_rush" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  <Globe className="h-3.5 w-3.5" /> LeetCode
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}
