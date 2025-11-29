import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactCard } from "@/components/contact-card";
import { contacts, projects, works } from "@/lib/data";
import { SideProject } from "@/components/side-project";
import { Work } from "@/components/work";

export const StatusSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <Card className="flex-[2]">
        <CardHeader>
          <CardTitle className="text-muted-foreground">Projects</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {projects.map((project, index) => (
            <SideProject project={project} key={index} />
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
              <Work key={index} work={work} />
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
