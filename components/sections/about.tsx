"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { User, Quote } from "lucide-react";
import { DeveloperTerminal } from "./developer-terminal";

const BLUR_FADE_DELAY = 0.04;

export function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 2 }}
      id="about"
      className="space-y-6"
    >
      <div className="flex items-center gap-3">
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <User className="h-8 w-8 text-primary" />
        </motion.div>
        <h2 className="text-3xl font-bold">About Me</h2>
      </div>
      
      <Card className="glass-effect border-2 hover:border-primary/50 transition-all duration-300">
        <CardContent className="pt-6">
          <div className="relative">
            <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
            <div className="pl-6 space-y-4">
              {DATA.summary.split("\n\n").map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Developer Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <DeveloperTerminal />
      </motion.div>
    </motion.section>
  );
}
