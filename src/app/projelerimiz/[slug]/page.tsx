import { notFound } from "next/navigation";
import { siteContent } from "@/content/siteContent";

const projects = siteContent.projelerimiz.gallery.projects;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjeDetay({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen flex items-center justify-center px-5">
      <h1 className="text-3xl md:text-5xl font-black tracking-tight text-center">
        {project.title}
      </h1>
    </main>
  );
}
