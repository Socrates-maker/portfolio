import { prisma } from "@repo/database";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/ui/components/atoms/button/button";

export default async function ProjectsPage() {
  const projects = await prisma.projet.findMany();
  return (
    <div className="dark:text-neutral-300 p-4">
      <div className="font-bold text-2xl mb-10">My Projects</div>

      <Link href="/projects/create">
        <Button label="Add project" />
      </Link>

      <div className="grid md:grid-cols-3 gap-4 lg:grid-cols-4 mt-5 ">
        {projects.map((project) => (
          <div key={project.id} className="border-1 border-neutral-600 ">
            <div className="relative w-full h-[200px]">
              <Image
                src={project.coverImage}
                alt={"Cover image"}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 mt-1 px-2">
              <div className="text-2xl font-semibold ">{project.title}</div>

              <div>{project.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
