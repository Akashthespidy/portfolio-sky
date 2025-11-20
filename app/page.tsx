"use client";

import { FloatingNav } from "@/components/floating-nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Awards } from "@/components/sections/awards";
import { Certification } from "@/components/sections/certification";
import { Research } from "@/components/sections/research";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <FloatingNav />
      <main className="flex min-h-screen flex-col items-center px-4 py-12 md:px-8 lg:px-16">
        <div className="w-full max-w-5xl space-y-16">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Awards />
          <Certification />
          <Research />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}