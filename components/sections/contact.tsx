"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Facebook, Code, Trophy } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Facebook,
  Code,
  Trophy,
  Mail,
};

export function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 16 }}
      id="contact"
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold flex items-center gap-2">
        <Mail className="h-8 w-8" />
        Get In Touch
      </h2>
      <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-8">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${DATA.contact.email}`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                <Mail className="h-5 w-5" />
                Send Email
              </a>
              <a
                href={`tel:${DATA.contact.tel}`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border rounded-lg font-medium hover:bg-accent transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call Me
              </a>
            </div>
            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-3">Connect with me:</p>
              <div className="flex flex-wrap gap-3">
                {Object.entries(DATA.contact.social)
                  .filter(([_key, social]) => social.navbar)
                  .map(([name, social]) => {
                    const Icon = iconMap[social.icon];
                    return (
                      <a
                        key={name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:bg-accent hover:scale-105 transition-all"
                      >
                        {Icon && <Icon className="h-4 w-4" />}
                        <span>{social.name}</span>
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
