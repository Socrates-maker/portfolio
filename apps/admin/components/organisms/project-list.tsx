import { ProjectCard } from "@/components/organisms/project-card";
import { prisma } from "@repo/database";

export const ProjectList = async () => {
  const projects = await prisma.projet.findMany();

  return (
    <div className="grid px-5 lg:px-1 md:grid-cols-2 gap-4 lg:grid-cols-3 mt-5 max-w-[1500px] mx-auto">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};
