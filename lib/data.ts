export interface Award {
  title: string;
  date: string;
  description: string;
  icon: string;
  team?: string;
  handle?: string;
  link?: string;
}

export const DATA = {
  name: "Billal Ahmed Akash",
  initials: "BA",
  url: "https://akash-portfolio.vercel.app",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/dhaka",
  description:
    "Software Engineer passionate about building scalable web applications and solving complex algorithmic problems. ACM ICPC participant and competitive programmer.",
  summary:
    "Full Stack Engineer with 1+ year of experience building AI-enabled innovative web app products using Next.js, React.js, OpenAI, TypeScript, PostgreSQL, and LLM integrations. My strong algorithmic foundation—built through solving 1300+ problems across various online judges and competing in ACM ICPC—has sharpened my problem-solving abilities, enabling me to tackle complex technical challenges and optimize performance in real-world applications.",
  avatarUrl: "/images/profile.jpg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Tailwind CSS",
    "C++",
    "Java",
    "Machine Learning",
    "Blockchain",
    "Solidity",
    "Git",
    "Linux",
  ],
  navbar: [
    { href: "/", icon: "Home", label: "Home" },
    { href: "#about", icon: "User", label: "About" },
    { href: "#experience", icon: "Briefcase", label: "Experience" },
    { href: "#projects", icon: "Code", label: "Projects" },
    { href: "#contact", icon: "Mail", label: "Contact" },
  ],
  contact: {
    email: "akashjnu26@gmail.com",
    tel: "+8801998630384",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/akashthespidy",
        icon: "Github",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/billal-ahmed-akash-841609197/",
        icon: "Linkedin",
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/billal.ahmed.akash.2024",
        icon: "Facebook",
        navbar: true,
      },
      Codeforces: {
        name: "Codeforces",
        url: "https://codeforces.com/profile/sky_rush",
        icon: "Code",
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/sky_rush",
        icon: "Trophy",
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:akashjnu26@gmail.com",
        icon: "Mail",
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Geekly",
      href: "#",
      badges: ["Startup"],
      location: "Dhaka, Bangladesh",
      title: "Software Engineer",
      logoUrl: "/geekly.png",
      start: "November 2024",
      end: "Present",
      description:
        "• Built AI commerce assistant for Messenger/ social channels automating product discovery, ordering, and support.\n• Reduced manual customer support workload by 70–80% through intelligent automation.\n• Designed tool-calling LLM workflows for ordering, search, and contextual responses.\n• Implemented embeddings and vector search to improve recommendation relevance.\n• Built scalable Next.js backend systems with webhooks, sessions, and authentication.\n• Deployed production workloads on Railway with reliable low-latency performance.\n• Collaborated with product and design teams in a fast-paced startup environment.",
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "OpenAI",
        "LLM",
        "Embeddings",
        "PostgreSQL",
        "Neon",
        "Tailwind CSS",
      ],
    },
  ],
  education: [
    {
      school: "Jagannath University",
      href: "https://www.jnu.ac.bd",
      degree: "BSc in Computer Science and Engineering",
      logoUrl: "/jnu.png",
      start: "2020",
      end: "2024",
      location: "Dhaka, Bangladesh",
      cgpa: "3.45",
    },
  ],
  projects: [
    {
      title: "Foodies",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "A recipe book web app where users can share their favorite recipes and discover new ones from the community. Built with modern Next.js features and beautiful UI.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      links: [
        {
          type: "Website",
          href: "https://foodies-wine-tau.vercel.app/",
          icon: "Globe",
        },
      ],
      //image: "/foodies.png",
      video: "",
    },
    {
      title: "Competitive Programming Analytics Platform (CP Tracker)",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "Built an AI-powered analytics platform for competitive programmers with rating insights, AI coaching, and custom practice plans.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "OpenAI API",
        "Jotai",
        "Zod",
      ],
      links: [
        {
          type: "Website",
          href: "https://cp-tracker-black.vercel.app/",
          icon: "Globe",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "ZeroHero — AI-Powered Progress Tracker",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "Developed an AI productivity SaaS with goal tracking, streaks, dashboards, and personalized mentorship.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Drizzle ORM",
        "Neon PostgreSQL",
        "Clerk",
        "Jotai",
        "Zod",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://progress-tracker-tau-flame.vercel.app/",
          icon: "Globe",
        },
      ],
      image: "",
      video: "",
    },
  ],
  awards: [
    {
      title: "ACM ICPC Dhaka Regional Onsite",
      date: "2023",
      description:
        "Participated in ACM International Collegiate Programming Contest (ICPC), Dhaka Regional Onsite",
      team: "JnU_Lazy_Penguin",
      icon: "trophy",
      link: "https://icpc.global/regionals/finder/Dhaka-2024-2024/standings",
    },
    {
      title: "IEEEXtreme Programming Competition 17.0",
      date: "2023",
      description:
        "Ranked 6th in Bangladesh and 1162nd globally out of 7091 teams",
      team: "ARSfire",
      icon: "award",
      link: "https://ieeextreme.org/ieeextreme-17-0-ranking/",
    },
    {
      title: "JNU Intra University Programming Contest",
      date: "2023",
      description: "Ranked 5th out of 50 teams",
      handle: "Sky_rush",
      icon: "medal",
      link: "https://toph.co/contests/training/2cbypdx/standings",
    },
    {
      title: "UITS IUPC",
      date: "2023",
      description: "Ranked 26th",
      team: "JnU_Lazy_Penguin",
      icon: "star",
      link: "https://vjudge.net/contest/538028#%23rank",
    },
    {
      title: "JNU Intra University Programming Contest - Problem Setter",
      date: "2024",
      description: "Problem setter and lead team member in the arrangement",
      icon: "code",
      link: "https://www.facebook.com/events/1201951654114921?active_tab=about",
    },
  ],
  research: [
    {
      title:
        "A Blockchain-Based Electronic Voting System Using Sidechain and Smart Contracts",
      description:
        "Research focused on enhancing security in electronic voting systems, optimizing vote counting to O(1) time complexity, and reducing costs through blockchain sidechains.",
      highlights: [
        "Security Enhancement",
        "Vote Counting at time complexity O(1)",
        "Cost Optimization",
        "Mitigating Blockchain issues",
      ],
    },
  ],
  certifications: [
    {
      title: "Certified Next.js Developer",
      issuer: "Udemy",
      date: "2024",
      link: "https://www.coursera.org",
      //image: "/images/certification-placeholder.png",
    },
    {
      title: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      date: "2023",
      link: "https://www.hackerrank.com",
      //image: "",
    },
  ],
} as const;
