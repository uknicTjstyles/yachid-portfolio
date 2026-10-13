import ProjectsPageClient from "@/components/ProjectsPageClient";
import { getProjects } from "@/lib/projects";

export const metadata = { title: "All Projects | Yachid" };

export default async function AllProjectsPage() {
  const projects = await getProjects();

  return <ProjectsPageClient projects={projects} />;
}
