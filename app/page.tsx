"use client";

import { FloatingNav } from "@/components/floating-nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Leadership } from "@/components/sections/leadership";
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
      <ScrollProgress />
      <FloatingNav />
      <BackToTop />
      <main className="flex min-h-screen flex-col items-center px-4 py-12 md:px-8 lg:px-16">
        <div className="w-full max-w-5xl space-y-24">
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />

          <Projects />
          <Leadership />
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
