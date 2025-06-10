import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/lib/interfaces";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="w-full pt-0 ">
      <CardHeader className="p-0">
        <div className="relative w-full h-[150px] ">
          <Image
            fill
            src={project.coverImage}
            alt={"Cover image"}
            className="object-cover rounded-t-2xl"
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
    </Card>
  );
};
