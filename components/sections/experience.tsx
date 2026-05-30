"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 6 }}
      id="experience"
      className="space-y-8"
    >
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Briefcase className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold">Work Experience</h2>
        </div>
        <p className="text-muted-foreground">
          My professional journey and career highlights
        </p>
      </div>
      
      <Separator />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6 relative"
      >
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block ml-4" />
        
        {DATA.work.map((job, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block ml-2.5 pulse-glow" />
            
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 glass-effect border-2 hover:border-primary/50 md:ml-12">
              <CardHeader>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      {job.badges?.map((badge) => (
                        <Badge key={badge} variant="outline" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-lg font-semibold">
                      <span className="gradient-text">{job.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground/80 tracking-tight">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        location: &quot;{job.location}&quot;
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {job.start} - {job.end}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-muted-foreground leading-relaxed space-y-1">
                  {job.description.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge variant="secondary" className="text-xs font-mono font-medium hover-lift cursor-default">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
