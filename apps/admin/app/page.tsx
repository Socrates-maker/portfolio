import { prisma } from "@repo/database";

export default async function Home() {
  const projects = await prisma.projet.findMany();
  console.log(projects);
  return <div className="text-neutral-800">Portfolio admin</div>;
}
