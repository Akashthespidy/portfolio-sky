"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { TypeWriter } from "@/components/ui/type-writer";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Facebook, Code, Trophy } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Facebook,
  Code,
  Trophy,
  Mail,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative flex flex-col items-center gap-8 text-center md:flex-row md:text-left py-12"
    >
      {/* Floating Avatar with Glow */}
      <motion.div
        variants={itemVariants}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Avatar className="h-48 w-48 border-4 border-primary/20 shadow-2xl ring-4 ring-primary/10 pulse-glow">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback className="text-5xl font-bold bg-gradient-to-br from-primary to-primary/50">
              {DATA.initials}
            </AvatarFallback>
          </Avatar>
        </motion.div>
      </motion.div>
      
      <div className="flex-1 space-y-6">
        {/* Name with Gradient */}
        <motion.div variants={itemVariants} className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="gradient-text">{DATA.name}</span>
          </h1>
          <div className="text-xl sm:text-2xl text-muted-foreground font-medium">
            <TypeWriter
              words={[
                "Software Engineer",
                "Building Innovative Solutions",
                "Full Stack Developer",
                "Problem Solver"
              ]}
            />
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Separator className="my-4" />
        </motion.div>
        
        {/* Contact Info with Stagger - Highlighted Badges */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono tracking-tight text-foreground md:justify-start"
        >
          <motion.div 
            className="flex items-center gap-2 hover-lift px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/40 shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>{DATA.location}</span>
          </motion.div>
          
          <motion.a 
            href={`mailto:${DATA.contact.email}`}
            className="flex items-center gap-2 hover-lift px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/40 hover:text-primary shadow-sm transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-3.5 w-3.5 text-primary" />
            <span>{DATA.contact.email}</span>
          </motion.a>
          
          <motion.div 
            className="flex items-center gap-2 hover-lift px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/40 shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="h-3.5 w-3.5 text-primary" />
            <span>{DATA.contact.tel}</span>
          </motion.div>
        </motion.div>

        {/* Social Links with Enhanced Animation */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 md:justify-start"
        >
          {Object.entries(DATA.contact.social)
            .filter(([_key, social]) => social.navbar)
            .map(([name, social], index) => {
              const Icon = iconMap[social.icon];
              return (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border bg-card px-3.5 py-2 text-xs font-mono font-medium transition-all hover:bg-accent hover:shadow-lg hover:border-primary/50 glass-effect"
                  >
                    {Icon && <Icon className="h-3.5 w-3.5 text-primary" />}
                    <span>{social.name}</span>
                  </Link>
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </motion.section>
  );
}
