"use client";

import { Badge } from "@/components/ui/badge";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";

const BLUR_FADE_DELAY = 0.04;

export function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 4 }}
      className="space-y-4"
    >
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {DATA.skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Badge variant="secondary" className="px-3 py-1 text-sm">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
