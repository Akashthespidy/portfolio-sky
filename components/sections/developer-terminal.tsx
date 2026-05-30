"use client";

import React, { useState, useEffect, useRef } from "react";
import { DATA } from "@/lib/data";
import { Terminal, Shield, RefreshCw } from "lucide-react";

// Themes definition
const THEMES = {
  dracula: {
    bg: "bg-[#282a36]",
    text: "text-[#f8f8f2]",
    prompt: "text-[#50fa7b]",
    accent: "text-[#ff79c6]",
    command: "text-[#8be9fd]",
    border: "border-[#44475a]",
  },
  matrix: {
    bg: "bg-[#000000]",
    text: "text-[#00ff00]",
    prompt: "text-[#00ff00] font-bold",
    accent: "text-[#39ff14]",
    command: "text-[#00ff00]",
    border: "border-[#00ff00]/40",
  },
  cyberpunk: {
    bg: "bg-[#00171f]",
    text: "text-[#00b4d8]",
    prompt: "text-[#ffd166]",
    accent: "text-[#ef476f]",
    command: "text-[#06d6a0]",
    border: "border-[#00b4d8]/40",
  },
  classic: {
    bg: "bg-[#121212]",
    text: "text-[#e0e0e0]",
    prompt: "text-primary",
    accent: "text-secondary-foreground",
    command: "text-[#ffffff]",
    border: "border-border",
  },
};

type ThemeName = keyof typeof THEMES;

interface LogLine {
  text: string;
  type: "system" | "input" | "output" | "error";
}

export function DeveloperTerminal() {
  const [theme, setTheme] = useState<ThemeName>("dracula");
  const [history, setHistory] = useState<LogLine[]>([]);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const colors = THEMES[theme];

  // Boot sequence
  useEffect(() => {
    const bootLines: LogLine[] = [
      { text: "System initialization...", type: "system" },
      { text: "Fetching sky_rush profile from Geekly secure database...", type: "system" },
      { text: `Profile fetched: ${DATA.name} (1.5+ Years Exp Full-Stack)`, type: "system" },
      { text: "Syncing competitive programming stats (1300+ Solved)", type: "system" },
      { text: "Connection established. Welcome to sky_rush shell! Type 'help' to begin.", type: "system" },
    ];

    let timer = 0;
    bootLines.forEach((line, index) => {
      timer += index === 0 ? 0 : 250;
      setTimeout(() => {
        setHistory((prev) => [...prev, line]);
      }, timer);
    });
  }, []);

  // Scroll to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const parts = trimmed.split(" ");
    const mainCommand = parts[0].toLowerCase();
    const args = parts.slice(1);

    const newHistory: LogLine[] = [
      ...history,
      { text: `sky_rush@portfolio ~ $ ${trimmed}`, type: "input" },
    ];

    switch (mainCommand) {
      case "help":
        newHistory.push({
          text: `Available commands:
  help      - Print this listing
  about     - Interactive professional summary
  skills    - Categorized tech stack & experience level
  projects  - Featured project listings with tech stack
  stats     - Competitive programming & academic metrics
  theme     - Toggle themes [dracula, matrix, cyberpunk, classic]
  clear     - Reset the terminal log`,
          type: "output",
        });
        break;

      case "about":
        newHistory.push({
          text: `Name:       ${DATA.name}
Role:       Software Engineer at Geekly (AI commerce, webhooks, Railway, LLM workflows)
Education:  BSc in Computer Science, Jagannath University (GPA: 3.45/4.0)
Focus:      Full Stack Engineering & High-Performance Problem Solving

Summary:
${DATA.summary}`,
          type: "output",
        });
        break;

      case "skills":
        newHistory.push({
          text: `Categorized Skills & Core Languages:
----------------------------------------
Languages:  C++, Python, Java, JavaScript, TypeScript, Solidity
Frontend:   React.js, Next.js, HTML5, Tailwind CSS, Jotai, Radix UI
Backend:    Node.js, PostgreSQL, NeonDB, Express, Webhooks, REST APIs
AI & Tools: OpenAI API, LLMs, Vector Embeddings, Git, Linux, Docker`,
          type: "output",
        });
        break;

      case "projects": {
        const projText = DATA.projects
          .map(
            (p) =>
              `• ${p.title} (${p.dates})
  Desc: ${p.description}
  Tech: ${p.technologies.join(", ")}
  Link: ${p.links[0]?.href || "N/A"}`
          )
          .join("\n\n");
        newHistory.push({
          text: `Featured Projects Listing:
----------------------------------------
${projText}`,
          type: "output",
        });
        break;
      }

      case "stats": {
        const awardsText = DATA.awards
          .map((a) => `• ${a.title} (${a.date})`)
          .join("\n");
        newHistory.push({
          text: `Competitive Programming & Academic Stats:
----------------------------------------
Solved Problems: 1300+ Problems Across Judges
Codeforces Profile: https://codeforces.com/profile/sky_rush
LeetCode Profile:   https://leetcode.com/sky_rush

Achievements Highlight:
${awardsText}`,
          type: "output",
        });
        break;
      }

      case "theme": {
        const targetTheme = args[0]?.toLowerCase();
        if (targetTheme && targetTheme in THEMES) {
          setTheme(targetTheme as ThemeName);
          newHistory.push({
            text: `Theme set to: ${targetTheme}`,
            type: "system",
          });
        } else {
          newHistory.push({
            text: `Invalid theme. Try 'theme dracula', 'theme matrix', 'theme cyberpunk', or 'theme classic'.`,
            type: "error",
          });
        }
        break;
      }

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        newHistory.push({
          text: `bash: command not found: ${mainCommand}. Type 'help' to see list of valid commands.`,
          type: "error",
        });
    }

    setHistory(newHistory);
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <div
      className={`w-full font-mono rounded-xl border overflow-hidden shadow-2xl transition-all duration-300 ${colors.bg} ${colors.border} terminal-glow`}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Top window panel header */}
      <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-inherit select-none">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold">
          <Terminal className="h-3.5 w-3.5 text-primary" />
          <span>terminal - sky_rush@geekly: ~/about</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setHistory([
                { text: "Terminal rebooted...", type: "system" },
                { text: "Connection established. Welcome to sky_rush shell! Type 'help' to begin.", type: "system" }
              ]);
            }}
            className="text-muted-foreground hover:text-foreground transition-colors p-0.5"
            title="Reboot Terminal"
          >
            <RefreshCw className="h-3.5 w-3.5" />
          </button>
          <Shield className="h-3.5 w-3.5 text-muted-foreground/60" />
        </div>
      </div>

      {/* Output Console Log Panel */}
      <div className="p-5 h-72 overflow-y-auto custom-scrollbar space-y-3.5 text-sm select-text">
        {history.map((line, i) => {
          let rowColor = colors.text;
          if (line.type === "system") rowColor = "text-[#6272a4]";
          if (line.type === "input") rowColor = colors.command;
          if (line.type === "error") rowColor = "text-[#ff5555]";

          return (
            <div key={i} className="whitespace-pre-wrap leading-relaxed">
              {line.type === "input" ? (
                <span className={colors.accent}>{line.text}</span>
              ) : (
                <span className={rowColor}>{line.text}</span>
              )}
            </div>
          );
        })}
        <div ref={terminalEndRef} />
      </div>

      {/* Input Prompter panel */}
      <div className="flex items-center gap-2 px-5 py-3 bg-black/20 border-t border-inherit/40 text-sm">
        <span className={`${colors.prompt} select-none`}>sky_rush@portfolio ~ $</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-1 bg-transparent border-none outline-none focus:ring-0 p-0 text-foreground"
          autoFocus
          placeholder="type 'help'..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />
      </div>
    </div>
  );
}
