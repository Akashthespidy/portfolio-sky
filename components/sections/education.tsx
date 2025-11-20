"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 8 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold flex items-center gap-2">
        <GraduationCap className="h-8 w-8" />
        Education
      </h2>
      <div className="space-y-4">
        {DATA.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <div className="text-lg font-semibold text-primary">
                      {edu.school}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                    <div className="text-sm font-medium">
                      CGPA: {edu.cgpa}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap">
                    {edu.start} - {edu.end}
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
