import fs from "node:fs";
import path from "node:path";

const GITHUB_USERNAME = "uknicTjstyles";
const PORTFOLIO_TOPIC = "portfolio";

export type Project = {
  name: string;
  description: string;
  tags: string[];
  repoUrl: string;
  liveUrl: string | null;
  image: string | null;
};

type GitHubRepo = {
  name: string;
  description: string | null;
  topics: string[];
  homepage: string | null;
  html_url: string;
  fork: boolean;
};

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function findScreenshot(slug: string): string | null {
  const directory = path.join(process.cwd(), "public", "projects");

  for (const extension of ["png", "jpg", "jpeg", "webp"]) {
    if (fs.existsSync(path.join(directory, `${slug}.${extension}`))) {
      return `/projects/${slug}.${extension}`;
    }
  }

  return null;
}

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error(
      `GitHub repositories request failed: ${response.status} ${response.statusText}`
    );
  }

  const repositories = (await response.json()) as GitHubRepo[];

  return repositories
    .filter((repository) => !repository.fork && repository.topics?.includes(PORTFOLIO_TOPIC))
    .map((repository) => ({
      name: repository.name,
      description: repository.description ?? "",
      tags: repository.topics.filter((topic) => topic !== PORTFOLIO_TOPIC),
      repoUrl: repository.html_url,
      liveUrl: repository.homepage || null,
      image: findScreenshot(slugify(repository.name)),
    }));
}
