import { Badge } from "@/components/ui/badge";
import { ReactSvgLogo } from "@/components/icons/react-svg-logo";

export const Skills = () => {
  return (
    <section>
      <Badge variant="outline">Skills</Badge>
      <h2 className="scroll-m-20  pb-2 text-3xl text-muted-foreground font-semibold tracking-tight first:mt-0 my-4">
        I love working on ...
      </h2>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mt-8">
        <Skill />
        <Skill />
        <Skill />
      </div>
    </section>
  );
};

const Skill = () => {
  return (
    <div>
      <div className="flex justify-center  items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
        <ReactSvgLogo fill="var(--muted-foreground)" />
      </div>
      <h3 className="mb-2 text-xl text-muted-foreground font-semibold">
        React js
      </h3>
      <p className="text-muted-foreground">
        Plan it, create it, launch it. Collaborate seamlessly with all the
        organization and hit your marketing goals every month with our marketing
        plan.
      </p>
    </div>
  );
};
