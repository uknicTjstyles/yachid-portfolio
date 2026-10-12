import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getProjects } from "@/lib/projects";

function Placeholder({ name }: { name: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/30 to-purple/30">
      <span className="font-heading text-3xl font-bold text-fg/70">
        {name.charAt(0).toUpperCase()}
      </span>
    </div>
  );
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Selected work
        </p>
        <h2 className="mt-1 font-heading text-2xl font-bold text-fg sm:text-3xl">
          Featured Projects
        </h2>
        <p className="mt-1 text-sm text-slate">
          A few projects I&apos;ve built to sharpen my skills and solve real
          problems.
        </p>
      </Reveal>

      {projects.length === 0 ? (
        <p className="mt-8 text-sm text-slate">
          No projects tagged yet. Add the{" "}
          <code className="rounded bg-surface-2 px-1.5 py-0.5">portfolio</code>{" "}
          topic to a repo on GitHub to show it here.
        </p>
      ) : (
        <div className="mt-8 grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.repoUrl}
              delay={index * 0.1}
              className="min-w-0"
            >
              <a
                href={project.liveUrl ?? project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-2xl border border-line bg-surface p-4 transition hover:border-primary"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl bg-surface-2">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Placeholder name={project.name} />
                  )}
                </div>

                <h3 className="mt-4 flex min-w-0 items-start gap-1.5 font-heading text-lg font-semibold text-fg">
                  <span className="min-w-0 break-words">{project.name}</span>
                  <ExternalLink className="h-4 w-4 text-slate transition group-hover:text-primary" />
                </h3>

                {project.description && (
                  <p className="mt-1.5 line-clamp-2 break-words text-sm text-slate">
                    {project.description}
                  </p>
                )}

                {project.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-surface-2 px-2.5 py-1 text-xs capitalize text-slate"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
