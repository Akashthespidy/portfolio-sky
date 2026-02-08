"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DATA } from "@/lib/data";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Code, ExternalLink, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 10 }}
      id="projects"
      className="space-y-8"
    >
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Code className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold">Featured Projects</h2>
        </div>
        <p className="text-muted-foreground">
          A collection of my recent work and side projects
        </p>
      </div>
      
      <Separator />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-6 md:grid-cols-2"
      >
        {DATA.projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>
    </motion.section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 glass-effect border-2 hover:border-primary/50">
        {project.image && (
          <div className="relative w-full h-48 overflow-hidden bg-muted">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Active badge floating */}
            {project.active && (
              <motion.div
                className="absolute top-4 right-4"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Badge variant="default" className="text-xs shadow-lg pulse-glow flex items-center gap-1">
                  <Rocket className="h-3 w-3" />
                  Active
                </Badge>
              </motion.div>
            )}
          </div>
        )}
        
        <CardHeader>
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              {project.dates}
            </p>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs hover-lift cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          {project.links.length > 0 && (
            <div className="flex gap-3 pt-2">
              {project.links.map((link: any, linkIndex: number) => (
                <motion.div
                  key={linkIndex}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:underline px-3 py-1.5 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {link.type}
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
