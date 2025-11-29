import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex flex-col-reverse items-center md:items-start md:flex-row   justify-around gap-5 ">
      <div className="md:pt-2 px-2 flex-[2]   space-y-3 ">
        <div className="text-center md:text-left">
          <h2 className="text-[40px] md:text-5xl font-anek  font-bold tracking-tight ">
            Socrates Ekpaliguidime
          </h2>
          <h3 className=" text-2xl md:text-3xl text-muted-foreground">
            Software developer
          </h3>
        </div>

        <p className="text-justify text-muted-foreground px-1">
          I’m a developer passionate about learning and building. With a strong
          foundation in physics and software engineering, I love designing
          efficient systems—from backend APIs to frontend interfaces. I
          currently work in a startup in Bénin, where I help turn ideas into
          real digital products.I build reliable web applications using
          React,Next, Nest, and modern DevOps tools. I enjoy designing clean
          architectures, automating workflows (CI/CD), and contributing to
          impactful products within fast-moving startups.
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
    </section>
  );
};
