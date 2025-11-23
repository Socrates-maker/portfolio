import { IWork } from "@/lib/interface";
import Image from "next/image";

export const Work = ({ work }: { work: IWork }) => {
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
          {work.enterprise}
        </h3>
        <div className="flex justify-between items-center w-full">
          <p className="text-muted-foreground text-sm ">{work.role}</p>
          <p className="text-muted-foreground text-xs ">
            {work.startDate}-{work.endDate}
          </p>
        </div>
      </div>
    </div>
  );
};