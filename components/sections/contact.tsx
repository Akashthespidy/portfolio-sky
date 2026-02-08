"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Facebook, Code, Trophy, Send } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

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
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 16 }}
      id="contact"
      className="space-y-8"
    >
      <div className="space-y-2 text-center">
        <div className="flex items-center justify-center gap-3">
          <motion.div
            animate={{
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Send className="h-8 w-8 text-primary" />
          </motion.div>
          <h2 className="text-3xl font-bold">Get In Touch</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions
        </p>
      </div>
      
      <Separator />
      
      <Card className="overflow-hidden glass-effect border-2 hover:border-primary/50 transition-all duration-300">
        <CardContent className="p-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={`mailto:${DATA.contact.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all pulse-glow"
              >
                <Mail className="h-5 w-5" />
                Send Email
              </motion.a>
              <motion.a
                href={`tel:${DATA.contact.tel}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-card border-2 border-border rounded-lg font-medium hover:bg-accent hover:border-primary/50 transition-all"
              >
                <Phone className="h-5 w-5" />
                Call Me
              </motion.a>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Separator />
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground text-center">
                Connect with me on social media
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {Object.entries(DATA.contact.social)
                  .filter(([_key, social]) => social.navbar)
                  .map(([name, social], index) => {
                    const Icon = iconMap[social.icon];
                    return (
                      <motion.a
                        key={name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2.5 bg-card border-2 border-border rounded-lg text-sm font-medium hover:bg-accent hover:border-primary/50 transition-all glass-effect"
                      >
                        {Icon && <Icon className="h-4 w-4" />}
                        <span>{social.name}</span>
                      </motion.a>
                    );
                  })}
              </div>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
