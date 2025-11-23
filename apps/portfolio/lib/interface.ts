import { ReactNode } from "react";

export interface IProject {
  name: string;
  description: string;
  url?: string;
}

export interface IWork {
  enterprise: string;
  role: string;
  startDate: string;
  endDate: string;
}

export interface IContact {
  name: string;
  url: string;
  logo: string;
  description: string;
}

export interface ISkill {
  icon: ReactNode;
  name: string;
  description: string;
}
