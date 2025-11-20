"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { FileCode } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export function Research() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 14 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold flex items-center gap-2">
        <FileCode className="h-8 w-8" />
        Research
      </h2>
      <div className="space-y-4">
        {DATA.research.map((research, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <h3 className="text-xl font-bold leading-tight">
                  {research.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{research.description}</p>
                <div className="space-y-2">
                  <p className="font-medium text-sm">Key Highlights:</p>
                  <ul className="space-y-1">
                    {research.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
