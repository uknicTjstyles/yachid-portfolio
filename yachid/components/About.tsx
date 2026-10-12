import Image from "next/image";
import { GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import { ABOUT_TAGS, EDUCATION } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl min-w-0 scroll-mt-28 px-5 py-16"
    >
      <div className="grid min-w-0 items-center gap-10 md:grid-cols-2">
        <Reveal className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Get to know me
          </p>
          <h2 className="mt-1 font-heading text-2xl font-bold text-fg sm:text-3xl">
            About Me
          </h2>

          <p className="mt-5 text-slate">
            I&apos;m Jamgbadi Eneye Tehillah, a {EDUCATION.level.toLowerCase()}{" "}
            {EDUCATION.course} student at {EDUCATION.school}.
          </p>
          <p className="mt-4 text-slate">
            I&apos;m passionate about building responsive web applications,
            exploring new technologies, and constantly improving my skills. I
            enjoy turning ideas into real-world solutions and creating products
            that make a difference.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {ABOUT_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-slate"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 font-heading text-xl italic text-fg/80">
            Jamgbadi Eneye Tehillah
          </p>
        </Reveal>

        <Reveal
          delay={0.15}
          className="relative mx-auto aspect-[4/3] w-full min-w-0 max-w-md"
        >
          <div
            aria-hidden="true"
            className="absolute inset-2 rounded-3xl bg-purple/10 blur-2xl"
          />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface to-surface-2">
            <Image
              src="/brand/icon-transparent.png"
              alt=""
              width={434}
              height={399}
              className="h-24 w-auto opacity-30"
            />
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex min-w-0 items-center gap-3 rounded-xl border border-line bg-canvas/90 px-3 py-3 backdrop-blur sm:bottom-4 sm:left-4 sm:right-auto sm:px-4">
            <GraduationCap className="h-5 w-5 shrink-0 text-primary" />
            <div className="min-w-0">
              <p className="break-words text-sm font-semibold text-fg">
                {EDUCATION.course}
              </p>
              <p className="break-words text-xs text-slate">
                FUPRE <span aria-hidden="true">·</span> {EDUCATION.level}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
