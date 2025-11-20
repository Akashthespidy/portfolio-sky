"use client";

import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling 100px
      setIsVisible(window.scrollY > 100);

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
        (section) => section && section.top <= 100 && section.bottom > 100
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else if (window.scrollY < 100) {
        // Set home as active when at the top
        setActiveSection("#");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-card/80 backdrop-blur-lg border border-border shadow-lg"
    >
      <div className="flex items-center gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 rounded-full transition-all ${
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
              <div className="relative flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium hidden md:inline">
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
