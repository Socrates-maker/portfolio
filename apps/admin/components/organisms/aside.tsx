"use client";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/molecules/toggle-mode/toggle-mode";
import { usePathname } from "next/navigation";
import { CirclePlus, FolderDot, Info, LucideIcon } from "lucide-react";
import React from "react";

const links: { label: string; to: string; icon?: LucideIcon }[] = [
  { label: "Projects", to: "/projects", icon: FolderDot },
  { label: "New project", to: "/projects/create", icon: CirclePlus },
  { label: "Personals information", to: "/", icon: Info },
];

export const Aside = () => {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>Socrates Portfolio</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {links.map((link, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton asChild isActive={pathname === link.to}>
                  <Link href={link.to}>
                    {link.icon && <link.icon />}
                    {link.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <div className=" p-2">
        <ModeToggle />
      </div>
    </Sidebar>
  );
};
