"use client";

import { motion } from "framer-motion";
import {
  SiCss,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";
import Reveal from "@/components/Reveal";

const skills: {
  icon: IconType;
  label: string;
  color: string;
}[] = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#FFFFFF" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiNodedotjs, label: "Node.js", color: "#5FA04E" },
  { icon: SiExpress, label: "Express.js", color: "#FFFFFF" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { icon: SiHtml5, label: "HTML", color: "#E34F26" },
  { icon: SiCss, label: "CSS", color: "#1572B6" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl min-w-0 scroll-mt-28 px-5 py-16"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          What I work with
        </p>
        <h2 className="mt-1 font-heading text-2xl font-bold text-fg sm:text-3xl">
          Skills
        </h2>
        <p className="mt-1 text-sm text-slate">
          Technologies and tools I use to bring ideas to life.
        </p>
      </Reveal>

      <div className="mt-8 grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
        {skills.map(({ icon: SkillIcon, label, color }, index) => (
          <Reveal
            key={label}
            delay={index * 0.05}
            className="min-w-0"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="flex h-full min-w-0 flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-surface px-2 py-5 text-center transition hover:border-primary sm:px-4 sm:py-6"
            >
              <SkillIcon
                aria-hidden="true"
                className="h-8 w-8 shrink-0"
                style={{
                  color: color === "#FFFFFF" ? "var(--color-fg)" : color,
                }}
              />
              <span className="break-words text-sm font-medium text-slate">
                {label}
              </span>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
