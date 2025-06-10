import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectList } from "@/components/organisms/project-list";
import { Suspense } from "react";
import { SkeletonCardList } from "@/components/molecules/skeleton";

export default async function ProjectsPage() {
  return (
    <div className="dark:text-neutral-300  p-4">
      <div className="flex justify-between items-center">
        <div className="font-bold text-2xl ">My Projects</div>
        <Button>
          <Link href="/projects/create">New Project</Link>
        </Button>
      </div>
      <Suspense fallback={<SkeletonCardList />}>
        <ProjectList />
      </Suspense>
    </div>
  );
}
