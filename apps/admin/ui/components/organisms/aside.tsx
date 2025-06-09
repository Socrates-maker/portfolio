import Link from "next/link";

const links: { label: string; to: string }[] = [
  { label: "Informations personelles", to: "/" },
  { label: "Projects", to: "/projects" },
];

export const Aside = () => {
  return (
    <div className="bg-blue-800 h-full px-5 py-2">
      <h1 className="text-3xl text-neutral-200 font-bold">Dashboard</h1>
      <div className="flex flex-col mt-5 g-2">
        {links.map((link, index) => (
          <Link href={link.to} key={index} className="dark:text-neutral-200">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
