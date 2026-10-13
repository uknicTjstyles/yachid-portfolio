import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

function Placeholder({ name }: { name: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/30 to-purple/30">
      <span className="font-heading text-3xl font-bold text-fg/70">
        {name.charAt(0).toUpperCase()}
      </span>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.liveUrl ?? project.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full rounded-2xl border border-line bg-surface p-4 transition hover:border-primary"
    >
      <div className="relative aspect-video overflow-hidden rounded-xl bg-surface-2">
        {project.image ? (
          <Image src={project.image} alt={project.name} fill className="object-cover" />
        ) : (
          <Placeholder name={project.name} />
        )}
      </div>

      <h3 className="mt-4 flex items-center gap-1.5 font-heading text-lg font-semibold text-fg">
        {project.name}
        <ExternalLink className="h-4 w-4 text-slate transition group-hover:text-primary" />
      </h3>

      {project.description && (
        <p className="mt-1.5 line-clamp-2 text-sm text-slate">{project.description}</p>
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
  );
}
