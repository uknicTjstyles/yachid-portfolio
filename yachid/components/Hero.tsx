"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, GitBranch, Globe, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { EDUCATION, SOCIALS, STATS } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
} as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-slate transition hover:border-primary hover:text-fg"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl scroll-mt-28 px-5 pb-16 pt-32 md:pt-40">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="grid items-center gap-12 md:grid-cols-2 md:gap-14"
      >
        <div>
          <motion.p variants={item} className="text-sm font-medium text-slate">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 font-heading text-4xl font-bold leading-tight text-fg sm:text-5xl"
          >
            Jamgbadi Eneye
            <br />
            <span className="text-gradient">Tehillah</span>
          </motion.h1>

          <motion.p variants={item} className="mt-3 text-sm font-medium text-slate">
            Full Stack Developer <span className="px-1.5 text-primary">/</span>{" "}
            {EDUCATION.course}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-md text-slate">
            I build modern web applications, turn ideas into real solutions, and love
            solving complex problems with code. Currently a Computer Engineering
            student, passionate about creating impactful technology and growing in the
            world of software development.
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-purple px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              View My Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full border border-line bg-surface/60 px-6 py-3 text-sm font-semibold text-fg shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate">
            <span>{SOCIALS.email}</span>
            <span className="hidden sm:inline">•</span>
            <span>{SOCIALS.location}</span>
          </motion.div>

          <motion.div variants={item} className="mt-6 flex items-center gap-3">
            <SocialIcon href={SOCIALS.github} label="GitHub">
              <GitBranch className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={SOCIALS.x} label="X">
              <Globe className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={`mailto:${SOCIALS.email}`} label="Email">
              <Mail className="h-4 w-4" />
            </SocialIcon>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative">
          <div aria-hidden="true" className="absolute -inset-10 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface/70 p-5 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple/10" />

            <div className="relative">
              <div className="flex items-center justify-between rounded-2xl border border-line bg-surface/80 px-4 py-3">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate">
                  Available for work
                </span>
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-line bg-surface p-5 sm:p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-purple text-lg font-bold text-white">
                    JE
                  </div>
                  <div>
                    <p className="font-heading text-xl font-bold text-fg">Jamgbadi Eneye</p>
                    <p className="mt-1 text-sm text-slate">
                      {EDUCATION.course} student
                    </p>
                    <p className="mt-1 text-xs text-slate/80">
                      {EDUCATION.level} <span aria-hidden="true">·</span>{" "}
                      {EDUCATION.period}
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="flex min-h-28 flex-col justify-center rounded-2xl border border-line bg-surface-2 px-3 py-4 text-center sm:px-4">
                      <p className="font-heading text-3xl font-bold leading-none text-fg sm:text-4xl">{stat.value}</p>
                      <p className="mt-2 text-[10px] leading-relaxed uppercase tracking-[0.14em] text-slate sm:text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-line bg-surface-2 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate">Current focus</p>
                    <p className="mt-1 font-medium text-fg">Full stack product development</p>
                  </div>
                  <Image
                    src="/brand/logo-for-dark-backgrounds.png"
                    alt="Yachid logo"
                    width={120}
                    height={42}
                    className="h-8 w-auto self-start opacity-90 sm:self-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
