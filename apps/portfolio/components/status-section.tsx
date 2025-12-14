import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactCard } from "@/components/contact-card";
import { contacts, projects, works } from "@/lib/data";
import { SideProject } from "@/components/side-project";
import { Work } from "@/components/work";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IProject } from "@/lib/interface";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const StatusSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <Card className="flex-[2]">
        <CardHeader>
          <CardTitle className="text-muted-foreground">Projects</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <SideProject project={project} />
              </DialogTrigger>
              <ProjectDetailModal project={project} />
            </Dialog>
          ))}
        </CardContent>
      </Card>
      <div className="flex-[1] flex flex-col gap-5">
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">Experience</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-2">
            {works.map((work, index) => (
              <Work work={work} key={index} />
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">Contact</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {contacts.map((contact, index) => (
              <ContactCard key={index} contact={contact} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ProjectDetailModal = ({ project }: { project: IProject }) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{project.name}</DialogTitle>
        <DialogDescription>{project.description}</DialogDescription>
      </DialogHeader>

      {project.url && (
        <Button asChild size="icon">
          <Link href={project.url} target="_blank">
            <ExternalLink />
          </Link>
        </Button>
      )}
    </DialogContent>
  );
};
