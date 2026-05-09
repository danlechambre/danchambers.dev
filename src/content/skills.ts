type Skill = {
  groupTitle: string;
  skills: Array<string>;
};

export const skills: Array<Skill> = [
  {
    groupTitle: "Focus",
    skills: [
      "frontend architecture",
      "design-engineering",
      "AI-augmented UI development",
      "accessibility",
    ],
  },
  {
    groupTitle: "Languages",
    skills: ["TypeScript", "modern CSS", "accessible HTML"],
  },
  {
    groupTitle: "Tools",
    skills: [
      "React & ecosystem tools e.g. Zod + tRPC, TanStack, styled-components",
      "testing tools e.g. Jest/Vitest",
      "build tools e.g. Webpack/Vite",
      "Astro",
      "Tailwind",
      "Node.js",
      "Cloudflare Workers",
      "Sanity",
      "Claude Platform",
    ],
  },
];
