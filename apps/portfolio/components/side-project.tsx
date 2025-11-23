import { IProject } from "@/lib/interface";
import { Folder } from "lucide-react";

export const SideProject = ({ project }: { project: IProject }) => {
  return (
    <div className="flex gap-4 items-center hover:bg-accent/50 transition-colors p-1 rounded cursor-pointer">
      <div className="size-[40px] relative grid place-items-center bg-accent rounded text-muted-foreground">
        <Folder size={16} />
      </div>
      <div className="flex flex-col ">
        <h3 className="text-lg  font-anek font-semibold text-muted-foreground">
          {project.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-1">
          {project.description}
        </p>
      </div>
    </div>
  );
};
