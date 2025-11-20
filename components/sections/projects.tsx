"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 10 }}
      id="projects"
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold flex items-center gap-2">
        <Code className="h-8 w-8" />
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {DATA.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02]">
              {project.image && (
                <div className="relative w-full h-48 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.active && (
                      <Badge variant="default" className="text-xs">
                        Active
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.dates}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.links.length > 0 && (
                  <div className="flex gap-2">
                    {project.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        className="flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {link.type}
                      </Link>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
