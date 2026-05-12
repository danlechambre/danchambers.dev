type Skill = {
  groupTitle: string;
  skills: Array<string>;
};

export const skills: Array<Skill> = [
  {
    groupTitle: "Focus",
    skills: [
      "design-engineering",
      "high quality interaction",
      "accessibility",
      "AI-augmented UI development",
    ],
  },
  {
    groupTitle: "Languages & Frameworks",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Astro",
      "modern CSS",
      "accessible HTML",
    ],
  },
  {
    groupTitle: "Tools & Platforms",
    skills: [
      "Tailwind",
      "Sanity",
      "Cloudflare Workers",
      "Claude Dev Platform",
      "TanStack Query",
      "Zod+tRPC",
      "Figma",
      // "styled-components",
      // "Vite",
      // "Node.js",
      // "ADO",
      // "GitHub",
    ],
  },
];
