import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row   justify-around gap-5 ">
      <div className="md:pt-2 px-2 flex-[2]   space-y-3 ">
        <div className="text-center md:text-left">
          <h2 className="text-[40px] md:text-5xl font-anek  font-bold tracking-tight ">
            Socrates Ekpaliguidime
          </h2>
          <h3 className=" text-2xl md:text-3xl text-muted-foreground">
            Software developer
          </h3>
        </div>

        <p className="text-justify text-muted-foreground">
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l&lsquo;imprimerie depuis les années 1500
        </p>
      </div>
      <div className="flex-[1] flex justify-center">
        <div className="relative size-[300px] rounded-[50%] bg-card">
          <Image
            src="/images/soc.jpeg"
            alt="socrates image"
            fill
            className="rounded-[50%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
