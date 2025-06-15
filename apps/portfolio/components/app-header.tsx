"use client";
import Link from "next/link";
import { AppNavMenu } from "@/components/app-nav-menu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const AppHeader = () => {
  const [float, setFloat] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setFloat(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={cn(
        "flex justify-between mx-2  my-5  px-5  py-3 items-center rounded-4xl sticky top-5 z-3 transition-all",
        { "border bg-card/50": float },
      )}
    >
      <Link href="/" className="font-mono font-medium">
        socratesekpaliguidime.com
      </Link>
      <AppNavMenu />
    </header>
  );
};
