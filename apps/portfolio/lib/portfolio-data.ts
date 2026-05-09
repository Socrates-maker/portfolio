export type Lang = "fr" | "en";

export interface PortfolioProject {
  id: string;
  title: string;
  kind: string;
  year: string;
  blurb: string;
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
    workKicker: string;
    workTitle: string;
    workIntro: string;
    experienceKicker: string;
    experienceTitle: string;
    skillsKicker: string;
    skillsTitle: string;
    skillsIntro: string;
    contactKicker: string;
    contactTitle: string;
    contactBody: string;
  };
  projects: PortfolioProject[];
  experiences: PortfolioExperience[];
  skillGroups: PortfolioSkillGroup[];
  contact: { email: string; cta: string; socials: PortfolioSocial[] };
  footer: { copy: string; builtWith: string };
  ui: {
    lang: string;
    langSwitch: string;
    themeLight: string;
    themeDark: string;
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
      workKicker: "01 — Sélection",
      workTitle: "Projets récents",
      workIntro:
        "Quelques produits sur lesquels j'ai eu plaisir à travailler ces dernières années.",
      experienceKicker: "02 — Parcours",
      experienceTitle: "Là où j'ai construit",
      skillsKicker: "03 — Outils",
      skillsTitle: "Avec quoi je travaille",
      skillsIntro:
        "Pas une liste exhaustive — ce que j'utilise au quotidien, en confiance.",
      contactKicker: "04 — Contact",
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
      builtWith: "Conçu et développé à Cotonou.",
    },
    ui: {
      lang: "FR",
      langSwitch: "EN",
      themeLight: "Clair",
      themeDark: "Sombre",
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
      workKicker: "01 — Selected",
      workTitle: "Recent work",
      workIntro:
        "A few products I've been lucky to ship in the past few years.",
      experienceKicker: "02 — Experience",
      experienceTitle: "Where I've built",
      skillsKicker: "03 — Tools",
      skillsTitle: "What I work with",
      skillsIntro:
        "Not an exhaustive list — what I use day to day, with confidence.",
      contactKicker: "04 — Contact",
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
      builtWith: "Designed and built in Cotonou.",
    },
    ui: {
      lang: "EN",
      langSwitch: "FR",
      themeLight: "Light",
      themeDark: "Dark",
    },
  },
};
