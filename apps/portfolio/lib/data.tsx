import { IContact, IProject, ISkill, IWork } from "@/lib/interface";
import { ReactSvgLogo } from "@/components/icons/react-svg-logo";
import { NextSvgLogo } from "@/components/icons/next-svg-logo";
import { NestSvgLogo } from "@/components/icons/nest-svg-logo";

export const projects: IProject[] = [
  {
    name: "ADDB secure ticket",
    description:
      "Plateform en ligne permettant de payer les ticket pour les evènenemts",
    url: "https://secure-eticket.com/",
  },
  {
    name: "Favori app",
    description: "Plateforme web de gestion de favoris",
    url: "https://www.favoris.app/",
  },
  {
    name: "Event chat",
    description: "Platform web de gestion des évènements en live ",
    url: "https://eventchat.chat/home",
  },
  {
    name: "Assouka magazine",
    description: "Plateforme web pour la magazine Assouka ",
    url: "https://assoukamagazine.com/",
  },
];

export const works: IWork[] = [
  {
    enterprise: "Digit consults",
    role: "full stack developer",
    startDate: "2022",
    endDate: "",
  },
  {
    enterprise: "Agrosfer",
    role: "Angular frontend developer(mission)",
    startDate: "2022",
    endDate: "2023",
  },
  {
    enterprise: "Le baromètre",
    role: "Angular frontend developer(mission)",
    startDate: "2023",
    endDate: "2023",
  },
];

export const contacts: IContact[] = [
  {
    name: "Linkedin",
    url: "",
    logo: "/images/linkedin-logo.webp",
    description: "",
  },
  {
    name: "X",
    url: "",
    logo: "/images/x-logo.jpg",
    description: "",
  },
];

export const skills: ISkill[] = [
  {
    name: "React js",
    description: "The library for web and native user interfaces",
    icon: <ReactSvgLogo fill="var(--muted-foreground)" />,
  },
  {
    name: "Next js",
    description: "The React Framework for the Web",
    icon: <NextSvgLogo fill="var(--muted-foreground)" />,
  },
  {
    name: "Nest",
    description:
      "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
    icon: <NestSvgLogo />,
  },
];
