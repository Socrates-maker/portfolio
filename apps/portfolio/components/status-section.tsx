import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Folder } from "lucide-react";

export const StatusSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <Card className="flex-[2]">
        <CardHeader>
          <CardTitle className="text-muted-foreground">Projects</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <SideProject />
          <SideProject />
          <SideProject />
          <SideProject />
        </CardContent>
      </Card>
      <div className="flex-[1] flex flex-col gap-5">
        <Card>
          <CardHeader>Experience</CardHeader>
          <CardContent>Work</CardContent>
        </Card>
        <Card>
          <CardHeader>Contact</CardHeader>
          <CardContent>Contact me</CardContent>
        </Card>
      </div>
    </div>
  );
};

const SideProject = () => {
  return (
    <div className="flex gap-4 items-center hover:bg-accent/50 transition-colors p-1 rounded cursor-pointer">
      <div className="size-[40px] relative grid place-items-center bg-accent rounded">
        {/*<Image
          src="/images/soc.jpeg"
          alt="Project image"
          className="object-cover"
          fill
        />*/}

        <Folder size={16} />
      </div>
      <div className="flex flex-col ">
        <h3 className="text-lg font-semibold">Project name</h3>
        <p className="text-muted-foreground text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </p>
      </div>
    </div>
  );
};
