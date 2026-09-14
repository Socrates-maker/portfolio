/**
 * One-off seed: run via `pnpm tsx lib/db/seed.ts` after `drizzle-kit push`.
 * Populates the DB with the content that used to be hardcoded in
 * lib/content.ts, so nothing is lost in the move to the admin backoffice.
 */
import "dotenv/config";
import { db } from "./index";
import { experiences, projects, skillGroups } from "./schema";

async function seed() {
  await db.insert(projects).values([
    {
      sortOrder: 0,
      year: "2024",
      url: "https://secure-eticket.com/",
      stack: ["Next.js", "NestJS", "PostgreSQL", "Stripe"],
      title: { en: "ADDB Secure Ticket", fr: "ADDB Secure Ticket" },
      kind: { en: "Event ticketing platform", fr: "Plateforme événementielle" },
      blurb: {
        en: "Online ticket sales and validation platform with QR-scan check-in and an organiser back-office.",
        fr: "Plateforme en ligne de paiement et de validation de billets pour évènements, avec scan QR et back-office organisateur.",
      },
      detail: {
        en: "As lead full-stack, I owned this end to end — the NestJS API and PostgreSQL schema behind ticket sales, Stripe payment integration, the QR-scan check-in flow, and the Next.js frontend for both attendees and event organisers.",
        fr: "En tant que lead full-stack, j'ai porté ce projet de bout en bout : l'API NestJS et le schéma PostgreSQL derrière la vente de billets, l'intégration Stripe, le flux de check-in par QR code, et le frontend Next.js pour les participants comme pour les organisateurs.",
      },
      role: { en: "Lead full-stack", fr: "Lead full-stack" },
    },
    {
      sortOrder: 1,
      year: "2024",
      url: "https://www.favoris.app/",
      stack: ["React", "Node.js", "MongoDB"],
      title: { en: "Favori", fr: "Favori" },
      kind: { en: "Bookmark manager", fr: "App de gestion de favoris" },
      blurb: {
        en: "A web app that helps users organise, tag and retrieve their favourite links across devices.",
        fr: "Application web qui aide les utilisateurs à organiser, taguer et retrouver leurs liens favoris à travers leurs appareils.",
      },
      detail: {
        en: "Built as a full-stack solo effort: a React interface for tagging and browsing saved links, backed by a Node.js API and a MongoDB store designed to keep a user's favourites in sync across devices.",
        fr: "Un développement full-stack en solo : une interface React pour organiser et retrouver ses liens favoris, appuyée sur une API Node.js et une base MongoDB pensée pour garder les favoris synchronisés entre appareils.",
      },
      role: { en: "Full-stack", fr: "Full-stack" },
    },
    {
      sortOrder: 2,
      year: "2023",
      url: "https://eventchat.chat/home",
      stack: ["React", "WebSocket", "Redis", "NestJS"],
      title: { en: "Event Chat", fr: "Event Chat" },
      kind: { en: "Live event chat", fr: "Live chat évènementiel" },
      blurb: {
        en: "Live event management platform with real-time chat, moderation tools and audience analytics.",
        fr: "Plateforme de gestion d'évènements en direct avec chat temps-réel, modération et statistiques d'audience.",
      },
      detail: {
        en: "A full-stack build centered on real-time delivery — WebSocket messaging with Redis handling presence and pub/sub at scale, moderation tooling for event hosts, and an audience-analytics view built with React and NestJS.",
        fr: "Un projet full-stack centré sur le temps réel : messagerie WebSocket avec Redis pour la présence et le pub/sub à l'échelle, outils de modération pour les organisateurs, et un tableau de bord d'analyse d'audience construit avec React et NestJS.",
      },
      role: { en: "Full-stack", fr: "Full-stack" },
    },
    {
      sortOrder: 3,
      year: "2023",
      url: "https://assoukamagazine.com/",
      stack: ["Next.js", "Sanity", "Tailwind"],
      title: { en: "Assouka Magazine", fr: "Assouka Magazine" },
      kind: { en: "Online magazine", fr: "Magazine en ligne" },
      blurb: {
        en: "Editorial site for Assouka magazine — bespoke CMS, longform-friendly typography and tight performance.",
        fr: "Site éditorial pour le magazine Assouka — CMS sur-mesure, lecture longue et performance soignée.",
      },
      detail: {
        en: "A frontend-only role: a Next.js site pulling content from a bespoke Sanity CMS, with typography and layout tuned specifically for longform reading, and performance kept tight throughout.",
        fr: "Un rôle frontend uniquement : un site Next.js alimenté par un CMS Sanity sur-mesure, avec une typographie et une mise en page pensées pour la lecture longue, et une performance soignée de bout en bout.",
      },
      role: { en: "Frontend", fr: "Frontend" },
    },
  ]);

  await db.insert(experiences).values([
    {
      sortOrder: 0,
      company: "Digit Consults",
      tags: ["Next.js", "NestJS", "DevOps"],
      role: { en: "Full-stack developer", fr: "Développeur full-stack" },
      period: { en: "2022 — present", fr: "2022 — aujourd'hui" },
      location: { en: "Cotonou, Benin", fr: "Cotonou, Bénin" },
      summary: {
        en: "Designing and shipping web products for clients across West Africa. Modern stack, CI/CD, automated deployments.",
        fr: "Conception et livraison de produits web pour des clients en Afrique de l'Ouest. Stack moderne, CI/CD, déploiements automatisés.",
      },
    },
    {
      sortOrder: 1,
      company: "Le Baromètre",
      tags: ["Angular", "RxJS", "D3"],
      role: { en: "Angular frontend developer", fr: "Développeur frontend Angular" },
      period: { en: "2023", fr: "2023" },
      location: { en: "Contract", fr: "Mission" },
      summary: {
        en: "Built a data-visualisation interface and dashboards for a political-analysis platform.",
        fr: "Construction d'une interface de visualisation de données et de tableaux de bord pour une plateforme d'analyse politique.",
      },
    },
    {
      sortOrder: 2,
      company: "Agrosfer",
      tags: ["Angular", "TypeScript", "REST"],
      role: { en: "Angular frontend developer", fr: "Développeur frontend Angular" },
      period: { en: "2022 — 2023", fr: "2022 — 2023" },
      location: { en: "Contract", fr: "Mission" },
      summary: {
        en: "Developed the web interface for an agriculture platform — catalogue, orders, logistics tracking.",
        fr: "Développement de l'interface web d'une plateforme agricole — catalogue, commandes, suivi logistique.",
      },
    },
  ]);

  await db.insert(skillGroups).values([
    {
      sortOrder: 0,
      label: { en: "Frontend", fr: "Frontend" },
      items: ["React", "Next.js", "Angular", "Tailwind", "TypeScript"],
    },
    {
      sortOrder: 1,
      label: { en: "Backend", fr: "Backend" },
      items: ["NestJS", "Node.js", "PostgreSQL", "MongoDB", "REST"],
    },
    {
      sortOrder: 2,
      label: { en: "DevOps & tools", fr: "DevOps & outils" },
      items: ["Docker", "GitLab CI/CD", "Vercel", "Linux", "Aws", "Ansible"],
    },
  ]);

  console.log("Seed complete.");
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
