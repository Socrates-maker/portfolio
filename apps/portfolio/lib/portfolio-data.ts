export type Lang = "fr" | "en";

export interface PortfolioProject {
  id: string;
  title: string;
  kind: string;
  year: string;
  blurb: string;
  /** Longer case-study narrative shown when the row is expanded. */
  detail: string;
  /** Reserved for a future case-study screenshot; unset until one exists. */
  screenshot?: string;
  stack: string[];
  role: string;
  url: string;
}

export interface PortfolioExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  tags: string[];
}

export interface PortfolioSkillGroup {
  label: string;
  items: string[];
}

export interface PortfolioSocial {
  label: string;
  handle: string;
  url: string;
}

export interface PortfolioContent {
  locale: Lang;
  nav: { work: string; experience: string; skills: string; contact: string };
  header: { brand: string; brandShort: string; availability: string };
  hero: {
    eyebrow: string;
    nameFirst: string;
    nameLast: string;
    role: string;
    roleAccent: string;
    bio: string;
    footnote: string;
    ctaPrimary: string;
    ctaSecondary: string;
    photoCaption: string;
  };
  sections: {
    workTitle: string;
    workIntro: string;
    experienceTitle: string;
    skillsTitle: string;
    skillsIntro: string;
    contactTitle: string;
    contactBody: string;
  };
  projects: PortfolioProject[];
  experiences: PortfolioExperience[];
  skillGroups: PortfolioSkillGroup[];
  contact: { email: string; cta: string; socials: PortfolioSocial[] };
  footer: { copy: string };
  ui: {
    lang: string;
    langSwitch: string;
    themeLight: string;
    themeDark: string;
    visitSite: string;
    fieldName: string;
    fieldProfession: string;
    fieldLocation: string;
    fieldRemarks: string;
    fieldPriorField: string;
    entryLabel: string;
  };
}

export const PORTFOLIO_DATA: Record<Lang, PortfolioContent> = {
  fr: {
    locale: "fr",
    nav: {
      work: "Projets",
      experience: "Parcours",
      skills: "Outils",
      contact: "Contact",
    },
    header: {
      brand: "Socrates Ekpaliguidime",
      brandShort: "S. Ekpaliguidime",
      availability: "Ouvert aux missions · 2026",
    },
    hero: {
      eyebrow: "Cotonou, Bénin",
      nameFirst: "Socrates",
      nameLast: "Ekpaliguidime",
      role: "Développeur logiciel",
      roleAccent: "full-stack",
      bio: "Je conçois des applications web fiables avec React, Next.js et NestJS. J'aide des startups à transformer des idées en produits concrets — du design d'API aux interfaces, en passant par l'automatisation des déploiements.",
      footnote: "Physique appliquée → ingénierie logicielle.",
      ctaPrimary: "Me contacter",
      ctaSecondary: "Voir les projets",
      photoCaption: "Photo · 2025",
    },
    sections: {
      workTitle: "Projets récents",
      workIntro:
        "Quelques produits sur lesquels j'ai eu plaisir à travailler ces dernières années.",
      experienceTitle: "Là où j'ai construit",
      skillsTitle: "Avec quoi je travaille",
      skillsIntro:
        "Pas une liste exhaustive — ce que j'utilise au quotidien, en confiance.",
      contactTitle: "On construit quelque chose ensemble ?",
      contactBody:
        "Disponible pour des missions full-stack, du conseil technique ou simplement une discussion autour d'un produit. Je réponds en moins de 24h.",
    },
    projects: [
      {
        id: "addb",
        title: "ADDB Secure Ticket",
        kind: "Plateforme événementielle",
        year: "2024",
        blurb:
          "Plateforme en ligne de paiement et de validation de billets pour évènements, avec scan QR et back-office organisateur.",
        detail:
          "En tant que lead full-stack, j'ai porté ce projet de bout en bout : l'API NestJS et le schéma PostgreSQL derrière la vente de billets, l'intégration Stripe, le flux de check-in par QR code, et le frontend Next.js pour les participants comme pour les organisateurs.",
        stack: ["Next.js", "NestJS", "PostgreSQL", "Stripe"],
        role: "Lead full-stack",
        url: "https://secure-eticket.com/",
      },
      {
        id: "favori",
        title: "Favori",
        kind: "App de gestion de favoris",
        year: "2024",
        blurb:
          "Application web qui aide les utilisateurs à organiser, taguer et retrouver leurs liens favoris à travers leurs appareils.",
        detail:
          "Un développement full-stack en solo : une interface React pour organiser et retrouver ses liens favoris, appuyée sur une API Node.js et une base MongoDB pensée pour garder les favoris synchronisés entre appareils.",
        stack: ["React", "Node.js", "MongoDB"],
        role: "Full-stack",
        url: "https://www.favoris.app/",
      },
      {
        id: "eventchat",
        title: "Event Chat",
        kind: "Live chat évènementiel",
        year: "2023",
        blurb:
          "Plateforme de gestion d'évènements en direct avec chat temps-réel, modération et statistiques d'audience.",
        detail:
          "Un projet full-stack centré sur le temps réel : messagerie WebSocket avec Redis pour la présence et le pub/sub à l'échelle, outils de modération pour les organisateurs, et un tableau de bord d'analyse d'audience construit avec React et NestJS.",
        stack: ["React", "WebSocket", "Redis", "NestJS"],
        role: "Full-stack",
        url: "https://eventchat.chat/home",
      },
      {
        id: "assouka",
        title: "Assouka Magazine",
        kind: "Magazine en ligne",
        year: "2023",
        blurb:
          "Site éditorial pour le magazine Assouka — CMS sur-mesure, lecture longue et performance soignée.",
        detail:
          "Un rôle frontend uniquement : un site Next.js alimenté par un CMS Sanity sur-mesure, avec une typographie et une mise en page pensées pour la lecture longue, et une performance soignée de bout en bout.",
        stack: ["Next.js", "Sanity", "Tailwind"],
        role: "Frontend",
        url: "https://assoukamagazine.com/",
      },
    ],
    experiences: [
      {
        company: "Digit Consults",
        role: "Développeur full-stack",
        period: "2022 — aujourd'hui",
        location: "Cotonou, Bénin",
        summary:
          "Conception et livraison de produits web pour des clients en Afrique de l'Ouest. Stack moderne, CI/CD, déploiements automatisés.",
        tags: ["Next.js", "NestJS", "DevOps"],
      },
      {
        company: "Le Baromètre",
        role: "Développeur frontend Angular",
        period: "2023",
        location: "Mission",
        summary:
          "Construction d'une interface de visualisation de données et de tableaux de bord pour une plateforme d'analyse politique.",
        tags: ["Angular", "RxJS", "D3"],
      },
      {
        company: "Agrosfer",
        role: "Développeur frontend Angular",
        period: "2022 — 2023",
        location: "Mission",
        summary:
          "Développement de l'interface web d'une plateforme agricole — catalogue, commandes, suivi logistique.",
        tags: ["Angular", "TypeScript", "REST"],
      },
    ],
    skillGroups: [
      {
        label: "Frontend",
        items: ["React", "Next.js", "Angular", "Tailwind", "TypeScript"],
      },
      {
        label: "Backend",
        items: ["NestJS", "Node.js", "PostgreSQL", "MongoDB", "REST"],
      },
      {
        label: "DevOps & outils",
        items: ["Docker", "GitLab CI/CD", "Vercel", "Linux"],
      },
    ],
    contact: {
      email: "sekpaliguidime@gmail.com",
      cta: "Écrire un email",
      socials: [
        {
          label: "LinkedIn",
          handle: "in/socrates-ekpaliguidime",
          url: "https://www.linkedin.com/in/socrates-ekpaliguidime-4b728119a",
        },
        {
          label: "X / Twitter",
          handle: "@ekpaliguidime",
          url: "https://x.com/ekpaliguidime",
        },
      ],
    },
    footer: {
      copy: "© 2026 Socrates Ekpaliguidime. Conçu avec soin.",
    },
    ui: {
      lang: "FR",
      langSwitch: "EN",
      themeLight: "Clair",
      themeDark: "Sombre",
      visitSite: "Voir le site",
      fieldName: "Nom",
      fieldProfession: "Profession",
      fieldLocation: "Lieu",
      fieldRemarks: "Remarques",
      fieldPriorField: "Domaine antérieur",
      entryLabel: "Entrée",
    },
  },

  en: {
    locale: "en",
    nav: {
      work: "Work",
      experience: "Experience",
      skills: "Stack",
      contact: "Contact",
    },
    header: {
      brand: "Socrates Ekpaliguidime",
      brandShort: "S. Ekpaliguidime",
      availability: "Available for work · 2026",
    },
    hero: {
      eyebrow: "Cotonou, Benin",
      nameFirst: "Socrates",
      nameLast: "Ekpaliguidime",
      role: "Software developer",
      roleAccent: "full-stack",
      bio: "I build reliable web applications with React, Next.js and NestJS. I help startups turn ideas into real digital products — from API design to interfaces, with automated deployments along the way.",
      footnote: "Applied physics → software engineering.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "See projects",
      photoCaption: "Photo · 2025",
    },
    sections: {
      workTitle: "Recent work",
      workIntro:
        "A few products I've been lucky to ship in the past few years.",
      experienceTitle: "Where I've built",
      skillsTitle: "What I work with",
      skillsIntro:
        "Not an exhaustive list — what I use day to day, with confidence.",
      contactTitle: "Want to build something together?",
      contactBody:
        "Open to full-stack contracts, technical consulting, or just a chat about a product idea. I usually reply within 24h.",
    },
    projects: [
      {
        id: "addb",
        title: "ADDB Secure Ticket",
        kind: "Event ticketing platform",
        year: "2024",
        blurb:
          "Online ticket sales and validation platform with QR-scan check-in and an organiser back-office.",
        detail:
          "As lead full-stack, I owned this end to end — the NestJS API and PostgreSQL schema behind ticket sales, Stripe payment integration, the QR-scan check-in flow, and the Next.js frontend for both attendees and event organisers.",
        stack: ["Next.js", "NestJS", "PostgreSQL", "Stripe"],
        role: "Lead full-stack",
        url: "https://secure-eticket.com/",
      },
      {
        id: "favori",
        title: "Favori",
        kind: "Bookmark manager",
        year: "2024",
        blurb:
          "A web app that helps users organise, tag and retrieve their favourite links across devices.",
        detail:
          "Built as a full-stack solo effort: a React interface for tagging and browsing saved links, backed by a Node.js API and a MongoDB store designed to keep a user's favourites in sync across devices.",
        stack: ["React", "Node.js", "MongoDB"],
        role: "Full-stack",
        url: "https://www.favoris.app/",
      },
      {
        id: "eventchat",
        title: "Event Chat",
        kind: "Live event chat",
        year: "2023",
        blurb:
          "Live event management platform with real-time chat, moderation tools and audience analytics.",
        detail:
          "A full-stack build centered on real-time delivery — WebSocket messaging with Redis handling presence and pub/sub at scale, moderation tooling for event hosts, and an audience-analytics view built with React and NestJS.",
        stack: ["React", "WebSocket", "Redis", "NestJS"],
        role: "Full-stack",
        url: "https://eventchat.chat/home",
      },
      {
        id: "assouka",
        title: "Assouka Magazine",
        kind: "Online magazine",
        year: "2023",
        blurb:
          "Editorial site for Assouka magazine — bespoke CMS, longform-friendly typography and tight performance.",
        detail:
          "A frontend-only role: a Next.js site pulling content from a bespoke Sanity CMS, with typography and layout tuned specifically for longform reading, and performance kept tight throughout.",
        stack: ["Next.js", "Sanity", "Tailwind"],
        role: "Frontend",
        url: "https://assoukamagazine.com/",
      },
    ],
    experiences: [
      {
        company: "Digit Consults",
        role: "Full-stack developer",
        period: "2022 — present",
        location: "Cotonou, Benin",
        summary:
          "Designing and shipping web products for clients across West Africa. Modern stack, CI/CD, automated deployments.",
        tags: ["Next.js", "NestJS", "DevOps"],
      },
      {
        company: "Le Baromètre",
        role: "Angular frontend developer",
        period: "2023",
        location: "Contract",
        summary:
          "Built a data-visualisation interface and dashboards for a political-analysis platform.",
        tags: ["Angular", "RxJS", "D3"],
      },
      {
        company: "Agrosfer",
        role: "Angular frontend developer",
        period: "2022 — 2023",
        location: "Contract",
        summary:
          "Developed the web interface for an agriculture platform — catalogue, orders, logistics tracking.",
        tags: ["Angular", "TypeScript", "REST"],
      },
    ],
    skillGroups: [
      {
        label: "Frontend",
        items: ["React", "Next.js", "Angular", "Tailwind", "TypeScript"],
      },
      {
        label: "Backend",
        items: ["NestJS", "Node.js", "PostgreSQL", "MongoDB", "REST"],
      },
      {
        label: "DevOps & tools",
        items: ["Docker", "GitLab CI/CD", "Vercel", "Linux"],
      },
    ],
    contact: {
      email: "sekpaliguidime@gmail.com",
      cta: "Send an email",
      socials: [
        {
          label: "LinkedIn",
          handle: "in/socrates-ekpaliguidime",
          url: "https://www.linkedin.com/in/socrates-ekpaliguidime-4b728119a",
        },
        {
          label: "X / Twitter",
          handle: "@ekpaliguidime",
          url: "https://x.com/ekpaliguidime",
        },
      ],
    },
    footer: {
      copy: "© 2026 Socrates Ekpaliguidime",
    },
    ui: {
      lang: "EN",
      langSwitch: "FR",
      themeLight: "Light",
      themeDark: "Dark",
      visitSite: "Visit live site",
      fieldName: "Name",
      fieldProfession: "Profession",
      fieldLocation: "Location",
      fieldRemarks: "Remarks",
      fieldPriorField: "Prior field",
      entryLabel: "Entry",
    },
  },
};
