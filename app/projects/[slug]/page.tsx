import { ProjectDetailPage } from "@/components/ProjectDetailPage";
import { getProjectBySlug, projects } from "@/lib/data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Sadumina Rathnayaka",
    };
  }

  return {
    title: `${project.title} | Sadumina Rathnayaka`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
