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
        {DATA.certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02]">
              <CardHeader>
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold">{cert.title}</h3>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="font-medium text-primary">{cert.issuer}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {cert.image && (
                   <div className="relative w-full h-48 overflow-hidden rounded-md bg-muted mb-4">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                )}
                {cert.link && (
                  <Link
                    href={cert.link}
                    target="_blank"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Verify Credential
                  </Link>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
