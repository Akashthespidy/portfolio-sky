"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  Facebook,
  Code, 
  Trophy,
  ExternalLink,
  Award,
  Medal,
  Star,
  Briefcase,
  GraduationCap,
  FileCode
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TypeWriter } from "@/components/ui/type-writer";
import { FloatingNav } from "@/components/floating-nav";

const BLUR_FADE_DELAY = 0.04;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Facebook,
  Code,
  Trophy,
  Mail,
  award: Award,
  medal: Medal,
  star: Star,
  trophy: Trophy,
  code: Code,
};

export default function Home() {
  return (
    <>
      <FloatingNav />
      <main className="flex min-h-screen flex-col items-center px-4 py-12 md:px-8 lg:px-16">
      <div className="w-full max-w-5xl space-y-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left"
        >
          <Avatar className="h-32 w-32 border-4 border-primary/20">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/50">
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
                    "Competitive Programmer",
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

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 2 }}
          id="about"
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold">About</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {DATA.summary}
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 4 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
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

        {/* Education Section */}
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

        {/* Projects Section */}
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

        {/* Awards Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 12 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Trophy className="h-8 w-8" />
            Awards & Achievements
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {DATA.awards.map((award, index) => {
              const Icon = iconMap[award.icon];
              const awardData = award as { title: string; date: string; description: string; icon: string; team?: string; handle?: string };
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        {Icon && (
                          <div className="rounded-lg bg-primary/10 p-2">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        )}
                        <div className="flex-1 space-y-1">
                          <h3 className="font-bold leading-tight">{awardData.title}</h3>
                          <p className="text-sm text-muted-foreground">{awardData.date}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        {awardData.description}
                      </p>
                      {awardData.team && (
                        <p className="text-sm">
                          <span className="font-medium">Team:</span> {awardData.team}
                        </p>
                      )}
                      {awardData.handle && (
                        <p className="text-sm">
                          <span className="font-medium">Handle:</span> {awardData.handle}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          
          {/* Problem Solving Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/20 p-3">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">1300+ Problems Solved</h3>
                    <p className="text-muted-foreground">
                      Across various online judges including Codeforces, LeetCode, and more
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </motion.section>

        {/* Research Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 14 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <FileCode className="h-8 w-8" />
            Research
          </h2>
          <div className="space-y-4">
            {DATA.research.map((research, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <h3 className="text-xl font-bold leading-tight">
                      {research.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{research.description}</p>
                    <div className="space-y-2">
                      <p className="font-medium text-sm">Key Highlights:</p>
                      <ul className="space-y-1">
                        {research.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
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

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t pt-8 text-center text-sm text-muted-foreground"
        >
          <p>© 2024 {DATA.name}. Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </motion.footer>
      </div>
    </main>
    </>
  );
}