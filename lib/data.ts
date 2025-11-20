export interface Award {
  title: string;
  date: string;
  description: string;
  icon: string;
  team?: string;
  handle?: string;
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
    "I'm a Software Engineer at Geekly, specializing in full-stack development with React, Next.js, and TypeScript. With 1300+ problems solved across various online judges and experience in competitive programming, I bring strong problem-solving skills to building efficient, scalable applications.",
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
        url: "https://github.com/akash",
        icon: "Github",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/akash",
        icon: "Linkedin",
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/billal.ahmed.akash.2024/",
        icon: "Facebook",
        navbar: true,
      },
      Codeforces: {
        name: "Codeforces",
        url: "https://codeforces.com/profile/akash",
        icon: "Code",
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/akash",
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
        "Building scalable web applications using React.js, Next.js, TypeScript, and PostgreSQL. Implementing modern UI/UX with Tailwind CSS and managing databases with ORM and Neon.",
      technologies: ["React.js", "Next.js", "TypeScript", "PostgreSQL", "Neon", "Tailwind CSS", "ORM"],
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
      dates: "2024",
      active: true,
      description:
        "A recipe book web app where users can share their favorite recipes and discover new ones from the community. Built with modern Next.js features and beautiful UI.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: "Globe",
        },
      ],
      image: "/foodies.png",
      video: "",
    },
    {
      title: "Spin Wheel App",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "An interactive web app where users can input names and spin a virtual wheel to select a random name. Features customizable spin duration and smooth animations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: "Globe",
        },
      ],
      image: "/spinwheel.png",
      video: "",
    },
    {
      title: "Online Super Shop",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "A user-friendly e-commerce platform named 'kinakata.com' with modern UI and essential shopping functionalities.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: "Globe",
        },
      ],
      image: "/supershop.png",
      video: "",
    },
  ],
  awards: [
    {
      title: "ACM ICPC Dhaka Regional Onsite",
      date: "2023",
      description: "Participated in ACM International Collegiate Programming Contest (ICPC), Dhaka Regional Onsite",
      team: "JnU_Lazy_Penguin",
      icon: "trophy",
    },
    {
      title: "IEEEXtreme Programming Competition 17.0",
      date: "2023",
      description: "Ranked 6th in Bangladesh and 1162nd globally out of 7091 teams",
      team: "ARSfire",
      icon: "award",
    },
    {
      title: "JNU Intra University Programming Contest",
      date: "2023",
      description: "Ranked 5th out of 50 teams",
      handle: "Sky_rush",
      icon: "medal",
    },
    {
      title: "UITS IUPC",
      date: "2023",
      description: "Ranked 26th",
      team: "JnU_Lazy_Penguin",
      icon: "star",
    },
    {
      title: "JNU Intra University Programming Contest - Problem Setter",
      date: "2024",
      description: "Problem setter and lead team member in the arrangement",
      icon: "code",
    },
  ],
  research: [
    {
      title: "A Blockchain-Based Electronic Voting System Using Sidechain and Smart Contracts",
      description: "Research focused on enhancing security in electronic voting systems, optimizing vote counting to O(1) time complexity, and reducing costs through blockchain sidechains.",
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
      title: "Certified React Developer",
      issuer: "Meta",
      date: "2024",
      link: "https://www.coursera.org",
      image: "/images/certification-placeholder.png"
    },
    {
      title: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      date: "2023",
      link: "https://www.hackerrank.com",
      image: ""
    }
  ],
} as const;
