"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export function Certification() {
  const certifications = DATA.certifications;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 13 }} // Positioned after Awards
      id="certifications"
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold flex items-center gap-2">
        <Award className="h-8 w-8" />
        Certifications
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {DATA.certifications.map((cert, index) => {
          const certData = cert as any;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 glass-effect border hover:border-primary/40">
                <CardHeader>
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold">{certData.title}</h3>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-primary">{certData.issuer}</span>
                      <div className="flex items-center gap-1 font-mono text-xs text-muted-foreground/80 tracking-tight">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        <span>{certData.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certData.image && (
                     <div className="relative w-full h-48 overflow-hidden rounded-md bg-muted mb-4">
                        <Image
                          src={certData.image}
                          alt={certData.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                  )}
                  {certData.link && (
                    <Link
                      href={certData.link}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Verify Credential
                    </Link>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
