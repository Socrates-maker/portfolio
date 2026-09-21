/**
 * Facts that don't change between languages — proper nouns, URLs, handles.
 * Anything that genuinely needs translating lives in messages/*.json
 * (UI copy) or lib/content.ts (structured lists) instead.
 */
export const SITE = {
  nameFirst: "Socrates",
  nameLast: "Ekpaliguidime",
  brand: "Socrates Ekpaliguidime",
  brandShort: "S. Ekpaliguidime",
  contact: {
    email: "sekpaliguidime@gmail.com",
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
      {
        label: "Github",
        handle: "@ekpaliguidime",
        url: "https://github.com/Socrates-maker",
      },
      {
        label: "Gitlab",
        handle: "@ekpaliguidime",
        url: "https://gitlab.com/sekpaliguidime",
      },
    ],
  },
} as const;
