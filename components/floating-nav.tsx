"use client";

import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems
        .filter((item) => item.href !== "#") // Skip home link
        .map((item) => {
          try {
            const element = document.querySelector(item.href);
            if (element) {
              const rect = element.getBoundingClientRect();
              return {
                id: item.href,
                top: rect.top,
                bottom: rect.bottom,
              };
            }
          } catch {
            // Ignore invalid selectors
          }
          return null;
        })
        .filter(Boolean);

      const currentSection = sections.find(
        (section) => section && section.top <= 120 && section.bottom > 120
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else if (window.scrollY < 50) {
        // Set home as active when at the top
        setActiveSection("#");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        animate={{
          y: 0,
          width: isScrolled ? "auto" : "100%",
          maxWidth: isScrolled ? "500px" : "100%",
          borderRadius: isScrolled ? "9999px" : "0px",
          top: isScrolled ? "16px" : "0px",
          borderWidth: isScrolled ? "1px" : "0px",
          boxShadow: isScrolled ? "0 20px 25px -5px oklch(0 0 0 / 0.1)" : "none",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 transition-all duration-300 ${
          isScrolled 
            ? "bg-card/85 backdrop-blur-xl border-border" 
            : "bg-background/40 backdrop-blur-md border-border/30 w-full border-b"
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Left Side: Monospace branding */}
        {!isScrolled && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-foreground select-none"
          >
            <span className="text-primary animate-pulse">&gt;_</span>
            <span>sky_rush</span>
            <span className="text-muted-foreground font-normal">~/home</span>
          </motion.div>
        )}

        {/* Center: Nav links */}
        <div className={`flex items-center gap-1 ${isScrolled ? "mx-auto" : ""}`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-1.5 rounded-full transition-all duration-200 select-none ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <div className="relative flex items-center gap-1.5">
                  <Icon className="h-3.5 w-3.5" />
                  <span className={`text-xs font-medium ${isScrolled ? "hidden md:inline" : "hidden sm:inline"}`}>
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Right Side: Contact CTA */}
        {!isScrolled && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:flex items-center"
          >
            <motion.a
              href="mailto:akashjnu26@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground font-mono text-xs font-medium border border-primary/20 hover:border-primary transition-all duration-300"
            >
              <span>Hire Me</span>
              <ArrowRight className="h-3 w-3" />
            </motion.a>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
