import type { WorkExperienceEntry } from "./work-experience";

export const vafoDigitalExperience: WorkExperienceEntry = {
  company: {
    name: "Vafo Digital",
    url: "https://www.vafo.com",
    description:
      "Vafo Digital is an internal digital agency working exclusively for pet brands owned by Vafo Group, Prague. Established at the beginning of 2025. Working with over 10 different brands, across 6 different countries, Vafo Digital provides resources for technology, data and growth.",
  },
  role: "Full-Stack Developer",
  techStack: [
    "TypeScript",
    "Astro",
    "web components",
    "Contentful",
    "commercetools",
  ],
  startDate: "2026-06",
  description: `
Vafo Digital is an internal digital agency working exclusively for pet brands owned by Vafo Group, Prague. As a Full-Stack Developer I worked across both the migration and support teams building new services and products to help drive growth for multiple pet brands across Europe.
      `,
  highlights: [
    {
      title: "Reuse-First Engineering",
      cvBullet:
        "Treated reuse as a first-class concern on a shared multi-brand platform, designing and porting functionality so it could be lifted between brands and into shared modules rather than re-solved in isolation, reducing duplication as the group's codebase scaled.",
    },
    {
      title: "Architectural Judgement in an Evolving Platform",
      cvBullet:
        "Exercised judgement about where work belonged in a platform mid-migration, knowing when to follow established patterns, when to generalise an abstraction for wider reuse, and when to leave well alone, balancing delivery pace against long-term maintainability.",
    },
    {
      title: "Fast, Transferable Onboarding",
      cvBullet:
        "Oriented across several unfamiliar brand codebases within weeks, becoming productive quickly by leaning on transferable platform patterns and contributing production features from early in the engagement.",
    },
  ],
};
