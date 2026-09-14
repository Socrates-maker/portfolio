import Link from "next/link";
import { getAllProjects, getExperiences, getSkillGroups } from "@/lib/db/queries";

export default async function AdminDashboard() {
  const [projects, experiences, skillGroups] = await Promise.all([
    getAllProjects(),
    getExperiences(),
    getSkillGroups(),
  ]);

  const cards = [
    { href: "/admin/projects", label: "Projects", count: projects.length },
    { href: "/admin/experience", label: "Experience", count: experiences.length },
    { href: "/admin/skills", label: "Skill groups", count: skillGroups.length },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((c) => (
        <Link
          key={c.href}
          href={c.href}
          className="bg-white border border-neutral-200 rounded-lg p-5 hover:border-neutral-400 transition-colors"
        >
          <div className="text-2xl font-semibold text-neutral-900">{c.count}</div>
          <div className="text-sm text-neutral-500 mt-1">{c.label}</div>
        </Link>
      ))}
    </div>
  );
}
