"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star, Code } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const iconMap: Record<string, any> = {
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
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold flex items-center gap-2">
        <Trophy className="h-8 w-8" />
        Awards & Achievements
      </h2>
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
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    {Icon && (
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    )}
                    <div className="flex-1 space-y-1">
                      <h3 className="font-bold leading-tight">
                        {awardData.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {awardData.date}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {awardData.description}
                  </p>
                  {awardData.team && (
                    <p className="text-sm">
                      <span className="font-medium">Team:</span>{" "}
                      {awardData.team}
                    </p>
                  )}
                  {awardData.handle && (
                    <p className="text-sm">
                      <span className="font-medium">Handle:</span>{" "}
                      {awardData.handle}
                    </p>
                  )}
                  {awardData.link && (
                    <div className="pt-2">
                      <a
                        href={awardData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        View Details
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Problem Solving Achievement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/20 p-3">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">1300+ Problems Solved</h3>
                <p className="text-muted-foreground">
                  Across various online judges including Codeforces, LeetCode,
                  and more
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
    </motion.section>
  );
}
