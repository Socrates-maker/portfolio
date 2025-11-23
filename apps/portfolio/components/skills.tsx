import { Badge } from "@/components/ui/badge";
import { ReactSvgLogo } from "@/components/icons/react-svg-logo";
import { skills } from "@/lib/data";
import { ISkill } from "@/lib/interface";

export const Skills = () => {
  return (
    <section>
      <Badge variant="outline">Skills</Badge>
      <h2 className="scroll-m-20  pb-2 text-3xl text-muted-foreground font-semibold tracking-tight first:mt-0 my-4">
        I love working on ...
      </h2>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mt-8">
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

const Skill = ({ skill }: { skill: ISkill }) => {
  return (
    <div>
      <div className="flex justify-center  items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
        {skill.icon}
      </div>
      <h3 className="mb-2 text-xl text-muted-foreground font-semibold">
        {skill.name}
      </h3>
      <p className="text-muted-foreground">{skill.description}</p>
    </div>
  );
};
