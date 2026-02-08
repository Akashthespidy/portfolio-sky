"use client";

import { Badge } from "@/components/ui/badge";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
    },
  },
};

export function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 4 }}
      className="space-y-6"
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
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {DATA.skills.map((skill, index) => (
          <motion.div
            key={skill}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              rotate: [0, -2, 2, -2, 0],
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium cursor-pointer hover-lift glass-effect relative overflow-hidden group"
            >
              {/* Shimmer effect on hover */}
              <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
              <span className="relative z-10">{skill}</span>
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
