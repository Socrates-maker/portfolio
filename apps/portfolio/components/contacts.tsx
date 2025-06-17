import { Badge } from "@/components/ui/badge";
import { ContactCard } from "@/components/contact-card";

export const Contacts = () => {
  return (
    <section>
      <Badge variant="outline">Contacts</Badge>
      <h2 className="scroll-m-20  pb-2 text-3xl text-muted-foreground font-semibold tracking-tight first:mt-0 my-4">
        I will be happy to work with you
      </h2>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mt-8">
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </section>
  );
};
