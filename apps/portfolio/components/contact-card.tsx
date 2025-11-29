import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { IContact } from "@/lib/interface";

export const ContactCard = ({ contact }: { contact: IContact }) => {
  return (
    <Card className="bg-accent/10 flex flex-row gap-3 items-center hover:bg-accent/50 transition-colors px-2 py-3 m-0  cursor-pointer">
      <div className="relative">
        <div className="size-[50px] relative  rounded-[50%]">
          <Image
            src="/images/soc.jpeg"
            alt="Project image"
            className="object-cover rounded-[50%]"
            fill
          />
        </div>
        <div className="size-[30px] absolute -right-2 -bottom-2  rounded-[50%]">
          <Image
            src={contact?.logo}
            alt={contact?.name}
            className="object-cover rounded-[50%]"
            fill
          />
        </div>
      </div>
      <div className="flex flex-col ">
        <h3 className="text-lg  font-anek font-semibold text-muted-foreground">
          {contact?.name}
        </h3>
        <p className="text-muted-foreground text-sm "></p>
      </div>
      <div className="ml-auto text-muted-foreground">
        <ArrowUpRight size={16} />
      </div>
    </Card>
  );
};
