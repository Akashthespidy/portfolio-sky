"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left"
    >
      <Avatar className="h-48 w-48 border-4 border-primary/20 shadow-xl">
        <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
        <AvatarFallback className="text-5xl font-bold bg-gradient-to-br from-primary to-primary/50">
          {DATA.initials}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {DATA.name}
          </h1>
          <div className="text-xl text-muted-foreground">
            <TypeWriter
              words={[
                "Software Engineer",
                "Building Innovative Solutions",
                "Full Stack Developer",
                "Problem Solver"
              ]}
            />
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:justify-start">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{DATA.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${DATA.contact.email}`} className="hover:text-primary transition-colors">
              {DATA.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>{DATA.contact.tel}</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:justify-start">
          {Object.entries(DATA.contact.social)
            .filter(([_key, social]) => social.navbar)
            .map(([name, social]) => {
              const Icon = iconMap[social.icon];
              return (
                <Link
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2 text-sm font-medium transition-all hover:bg-accent hover:scale-105"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span>{social.name}</span>
                </Link>
              );
            })}
        </div>
      </div>
    </motion.section>
  );
}
