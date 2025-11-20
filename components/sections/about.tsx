"use client";

import { DATA } from "@/lib/data";
import { motion } from "framer-motion";

const BLUR_FADE_DELAY = 0.04;

export function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 2 }}
      id="about"
      className="space-y-4"
    >
      <h2 className="text-3xl font-bold">About</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        {DATA.summary}
      </p>
    </motion.section>
  );
}
