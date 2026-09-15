import Link from "next/link";
import { logout } from "./actions";

const NAV = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/experience", label: "Experience" },
  { href: "/admin/skills", label: "Skills" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <nav className="flex gap-5">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <form action={logout}>
            <button type="submit" className="text-sm text-neutral-500 hover:text-neutral-800">
              Log out
            </button>
          </form>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
