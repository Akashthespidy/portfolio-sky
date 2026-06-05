"use client";

import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Zap, Code2, Cpu, Users, ArrowRight } from "lucide-react";
import { DeveloperTerminal } from "./developer-terminal";

const BLUR_FADE_DELAY = 0.04;

const STATS = [
  { label: "Problems Solved", value: "1300+", icon: Code2 },
  { label: "Years Building",   value: "3+",    icon: Cpu },
  { label: "Early Leads",      value: "10+",   icon: Briefcase },
  { label: "Students Mentored",value: "50+",   icon: Users },
];

const QUICK_FACTS = [
  { icon: MapPin,    text: "Dhaka, Bangladesh" },
  { icon: Briefcase, text: "Co-Founder @ Geekly" },
  { icon: Zap,       text: "Open to opportunities" },
];

const containerVariants = {
  hidden:   { opacity: 0 },
  visible:  { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:   { opacity: 0, y: 18 },
  visible:  { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 14 } },
};

export function About() {
  const paragraphs = DATA.summary.split("\n\n");

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 2 }}
      id="about"
      className="space-y-12"
    >
      {/* ── Heading ── */}
      <div className="space-y-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm font-mono text-primary/70 tracking-widest uppercase"
        >
          <span className="w-6 h-px bg-primary/50" />
          Introduction
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold"
        >
          About{" "}
          <span className="gradient-text">Me</span>
        </motion.h2>
      </div>

      {/* ── Body: bio left, sidebar right ── */}
      <div className="grid gap-10 lg:grid-cols-12 items-start">

        {/* Bio paragraphs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-5"
        >
          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              variants={itemVariants}
              className="text-base text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-4 hover:border-primary/60 hover:text-foreground/80 transition-all duration-300"
            >
              {para}
            </motion.p>
          ))}

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
            <a
              href={`mailto:${DATA.contact.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Say Hello <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-effect border hover:border-primary/50 text-sm font-semibold transition-all"
            >
              GitHub <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Sidebar: quick facts + stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Quick facts */}
          <motion.div variants={itemVariants} className="space-y-2">
            {QUICK_FACTS.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 px-4 py-3 rounded-xl glass-effect border hover:border-primary/40 transition-all text-sm group"
              >
                <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-muted-foreground">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="flex-1 h-px bg-border" />
            <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">Stats</span>
            <span className="flex-1 h-px bg-border" />
          </motion.div>

          {/* Stats grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
            {STATS.map(({ label, value, icon: Icon }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.04, y: -2 }}
                className="relative overflow-hidden rounded-2xl glass-effect border hover:border-primary/40 transition-all p-4 space-y-2 group cursor-default"
              >
                <Icon className="h-4 w-4 text-primary/60" />
                <p className="text-2xl font-bold font-mono gradient-text">{value}</p>
                <p className="text-[11px] text-muted-foreground leading-tight">{label}</p>
                <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-30 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Developer Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <DeveloperTerminal />
      </motion.div>
    </motion.section>
  );
}
