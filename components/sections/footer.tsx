"use client";

import { DATA } from "@/lib/data";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t pt-8 text-center text-sm text-muted-foreground"
    >
      <p>© 2024 {DATA.name}. Built with Next.js, TypeScript, and Tailwind CSS.</p>
    </motion.footer>
  );
}
