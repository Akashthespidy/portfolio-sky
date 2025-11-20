"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 6 }}
      id="experience"
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold flex items-center gap-2">
        <Briefcase className="h-8 w-8" />
        Work Experience
      </h2>
      <div className="space-y-4">
        {DATA.work.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      {job.badges?.map((badge) => (
                        <Badge key={badge} variant="outline" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-lg font-semibold text-primary">
                      {job.company}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap">
                    {job.start} - {job.end}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
