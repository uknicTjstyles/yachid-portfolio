import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { getProjects } from "@/lib/projects";

const FEATURED_LIMIT = 6;

export default async function Projects() {
  const projects = await getProjects();
  const featured = projects.slice(0, FEATURED_LIMIT);

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Selected work
          </p>
          <h2 className="mt-1 font-heading text-2xl font-bold text-fg sm:text-3xl">
            Featured Projects
          </h2>
          <p className="mt-1 text-sm text-slate">
            A few projects I&apos;ve built to sharpen my skills and solve real problems.
          </p>
        </div>

        {projects.length > 0 && (
          <Link
            href="/projects"
            className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </Reveal>

      {projects.length === 0 ? (
        <p className="mt-8 text-sm text-slate">
          No projects tagged yet. Add the <code className="rounded bg-surface-2 px-1.5 py-0.5">portfolio</code> topic to a repo on GitHub to show it here.
        </p>
      ) : (
        <div className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal
              key={project.repoUrl}
              delay={index * 0.1}
              className="min-w-[85%] shrink-0 snap-start sm:min-w-0"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
