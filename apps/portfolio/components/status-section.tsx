import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Folder } from "lucide-react";
import { ContactCard } from "@/components/contact-card";

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
          <SideProject />
          <SideProject />
          <SideProject />
          <SideProject />
        </CardContent>
      </Card>
      <div className="flex-[1] flex flex-col gap-5">
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">Experience</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Work />
            <Work />
            <Work />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">Contact</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <ContactCard />
            <ContactCard />
            <ContactCard />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const SideProject = () => {
  return (
    <div className="flex gap-4 items-center hover:bg-accent/50 transition-colors p-1 rounded cursor-pointer">
      <div className="size-[40px] relative grid place-items-center bg-accent rounded text-muted-foreground">
        <Folder size={16} />
      </div>
      <div className="flex flex-col ">
        <h3 className="text-lg  font-anek font-semibold text-muted-foreground">
          Project name
        </h3>
        <p className="text-muted-foreground text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </p>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="flex gap-4 items-center hover:bg-accent/50 transition-colors p-1 rounded cursor-pointer">
      <div className="size-[50px] relative  rounded-[50%]">
        <Image
          src="/images/soc.jpeg"
          alt="Project image"
          className="object-cover rounded-[50%]"
          fill
        />
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-anek font-semibold text-muted-foreground">
          Enterprise
        </h3>
        <div className="flex justify-between items-center w-full">
          <p className="text-muted-foreground text-sm ">role</p>
          <p className="text-muted-foreground text-xs ">2021-2022</p>
        </div>
      </div>
    </div>
  );
};
