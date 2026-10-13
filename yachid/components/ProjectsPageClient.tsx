"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import type { Project } from "@/lib/projects";

const PER_PAGE = 6;

export default function ProjectsPageClient({ projects }: { projects: Project[] }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(projects.length / PER_PAGE));
  const start = (page - 1) * PER_PAGE;
  const current = projects.slice(start, start + PER_PAGE);

  function goTo(p: number) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="mx-auto max-w-6xl px-5 pb-20 pt-32 md:pt-40">
      <Link
        href="/#projects"
        className="flex items-center gap-1.5 text-sm font-medium text-slate transition hover:text-fg"
      >
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>

      <Reveal className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">All projects</p>
        <h1 className="mt-1 font-heading text-3xl font-bold text-fg">Everything I&apos;ve built</h1>
        <p className="mt-1 text-sm text-slate">Every project tagged on GitHub, newest first.</p>
      </Reveal>

      {projects.length === 0 ? (
        <p className="mt-10 text-sm text-slate">No projects tagged yet.</p>
      ) : (
        <>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {current.map((project, index) => (
              <Reveal key={project.repoUrl} delay={index * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              <button
                onClick={() => goTo(Math.max(1, page - 1))}
                disabled={page === 1}
                aria-label="Previous page"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-slate transition hover:border-primary hover:text-fg disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => goTo(pageNumber)}
                  aria-current={page === pageNumber ? "page" : undefined}
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition ${
                    page === pageNumber ? "bg-primary text-white" : "text-slate hover:bg-surface hover:text-fg"
                  }`}
                >
                  {pageNumber}
                </button>
              ))}

              <button
                onClick={() => goTo(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                aria-label="Next page"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-slate transition hover:border-primary hover:text-fg disabled:opacity-40"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}
