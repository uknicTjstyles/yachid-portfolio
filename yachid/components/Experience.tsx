import {
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Quote as QuoteIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { EDUCATION, LEARNING, QUOTE, WORK_EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-6xl min-w-0 scroll-mt-28 px-5 py-16"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          My journey
        </p>
        <h2 className="mt-1 font-heading text-2xl font-bold text-fg sm:text-3xl">
          Experience &amp; Education
        </h2>
        <p className="mt-1 text-sm text-slate">
          Where I&apos;ve studied, worked, and what I&apos;m learning right now.
        </p>
      </Reveal>

      <div className="mt-8 grid min-w-0 gap-6 lg:grid-cols-2">
        <Reveal className="min-w-0 rounded-2xl border border-line bg-surface p-5 sm:p-6">
          <div className="flex items-center gap-2 text-fg">
            <GraduationCap className="h-5 w-5 shrink-0 text-primary" />
            <h3 className="font-heading text-lg font-semibold">Education</h3>
          </div>
          <div className="mt-4 min-w-0">
            <p className="break-words font-medium text-fg">{EDUCATION.school}</p>
            <p className="mt-1 break-words text-sm text-slate">
              {EDUCATION.course} &middot; {EDUCATION.level}
            </p>
            <p className="mt-1 text-xs text-slate">{EDUCATION.period}</p>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="min-w-0 rounded-2xl border border-line bg-surface p-5 sm:p-6"
        >
          <div className="flex items-center gap-2 text-fg">
            <Briefcase className="h-5 w-5 shrink-0 text-primary" />
            <h3 className="font-heading text-lg font-semibold">
              Work Experience
            </h3>
          </div>
          <ul className="mt-4 space-y-4">
            {WORK_EXPERIENCE.map((work) => (
              <li
                key={`${work.role}-${work.org}`}
                className="min-w-0 border-l-2 border-line pl-4"
              >
                <p className="break-words font-medium text-fg">
                  {work.role} &middot; {work.org}
                  {work.remote && (
                    <span className="ml-2 inline-block rounded-full bg-surface-2 px-2 py-0.5 text-[10px] font-normal text-slate">
                      Remote
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-xs text-slate">{work.period}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-6 grid min-w-0 gap-6 lg:grid-cols-2">
        <Reveal
          delay={0.15}
          className="min-w-0 rounded-2xl border border-line bg-surface p-5 sm:p-6"
        >
          <h3 className="font-heading text-lg font-semibold text-fg">
            What I&apos;m Learning
          </h3>
          <ul className="mt-4 space-y-2.5">
            {LEARNING.map((item) => (
              <li
                key={item}
                className="flex min-w-0 items-start gap-2.5 text-sm text-slate"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="break-words">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={0.2}
          className="flex min-w-0 flex-col justify-center rounded-2xl border border-line bg-gradient-to-br from-primary/10 to-purple/10 p-5 sm:p-6"
        >
          <QuoteIcon className="h-6 w-6 text-primary" aria-hidden="true" />
          <blockquote className="mt-3 break-words font-heading text-lg italic text-fg">
            &ldquo;{QUOTE.text}&rdquo;
          </blockquote>
          <p className="mt-2 text-sm text-slate">&mdash; {QUOTE.author}</p>
        </Reveal>
      </div>
    </section>
  );
}
