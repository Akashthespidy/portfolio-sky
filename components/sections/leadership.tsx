"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Users,
  Code2,
  Trophy,
  Star,
  CheckCircle2,
  HandshakeIcon,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const ICON_MAP: Record<string, React.ElementType> = {
  users: Users,
  code: Code2,
  trophy: Trophy,
  star: Star,
  handshake: HandshakeIcon,
};

const PERIOD_COLORS: Record<string, string> = {
  "2022": "from-violet-500 to-purple-600",
  "2024": "from-sky-500 to-blue-600",
  "2024 – Present": "from-emerald-500 to-teal-600",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 14 },
  },
};

export function Leadership() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: BLUR_FADE_DELAY * 8 }}
      id="leadership"
      className="space-y-8"
    >
      {/* Heading */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <HandshakeIcon className="h-8 w-8 text-primary" />
          </motion.div>
          <h2 className="text-3xl font-bold">Mentorship &amp; Leadership</h2>
        </div>
        <p className="text-muted-foreground">
          Community contributions, mentoring, and event organization
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-1 lg:grid-cols-3"
      >
        {DATA.leadership.map((item, index) => {
          const Icon = ICON_MAP[item.icon] ?? Star;
          const gradientClass =
            PERIOD_COLORS[item.period] ?? "from-primary to-primary/60";

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="h-full"
            >
              <Card className="h-full glass-effect border-2 hover:border-primary/50 transition-all duration-300 overflow-hidden relative group">
                {/* Top gradient bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass} opacity-80 group-hover:opacity-100 transition-opacity`}
                />

                <CardHeader className="pb-3 pt-6">
                  {/* Icon + period badge */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div
                      className={`p-2.5 rounded-xl bg-gradient-to-br ${gradientClass} shadow-lg`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <Badge
                      variant="outline"
                      className="text-[10px] font-mono shrink-0 border-primary/30 text-primary"
                    >
                      {item.period}
                    </Badge>
                  </div>

                  {/* Role */}
                  <h3 className="text-lg font-bold leading-snug">{item.role}</h3>

                  {/* Organization */}
                  <p className="text-sm font-medium text-primary/80 leading-tight">
                    {item.organization}
                  </p>
                </CardHeader>

                <CardContent className="space-y-2 pt-0">
                  {item.highlights.map((hl, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      <span>{hl}</span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
