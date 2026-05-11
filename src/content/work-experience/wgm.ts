import type { WorkExperienceEntry } from "./work-experience";

export const wgmWorkExperience: WorkExperienceEntry = {
  company: {
    name: "Why Grief Matters",
    // TODO - update once rolled out
    url: "https://dev.whygriefmatters.org",
    description:
      "Why Grief Matters is a non-profit project with the goal of providing support to those navigating grief by bringing together the best grief resources from around the Internet",
  },
  role: "Lead Developer",
  startDate: "2023-01",
  endDate: "2026-04",
  note: "part-time, freelance",
  description: `
I originally joined the Why Grief Matters project to help realise their goal of turning the project into a fully realised website. Initially working on a voluntary basis, working from preliminary designs, I built out the foundations of the platform for them to build upon further once further funding had been secured.
  
Following a strategic shift, in early 2026 I was engaged on a freelance basis to evolve the project from its foundations through to a finished product, that could be sustainably run well into the future, with little financial backing.
  `,
  techStack: [
    "Astro",
    "Cloudflare Workers",
    "Sanity",
    "TypeScript",
    "Tailwind",
    "Figma",
  ],
  highlights: [
    {
      title: "Technology Matched to Scope and Budget",
      description: `
One of the core goals of the project has always been long-term sustainability, and my choices of technology reflect that.

Astro was selected as the frontend framework to enable the site to be statically generated, ensuring it could be served from anywhere should the underlying content operations side of the project need to be wound down.

Sanity was selected as the content platform to provide an easy way for project members to manage the site whilst providing a generous plan for non-profit orgs.

The projects are deployed to Cloudflare Workers. Cloudflare was chosen because you can start with zero complexity and cost, and scale both only as you need to. Perfect for a burgeoning non-profit.

These technology choices have proven to be an incredibly powerful combination, each being able to be extended as the desire for more complex features arises. For example, our LLM-driven content auditing feature was made possible by Sanity's excellent extensibility and MCP tooling, and Cloudflare Workers serverless functions and KV storage.
      `,
      cvBullet:
        "Architected and built a modern, cost-efficient stack with Astro, Sanity CMS and Cloudflare Workers, prioritising performance, scalability, and low operational overhead.",
    },
    {
      title: "Technology and Design Leadership",
      description: `
My initial contributions to the project were purely delivery focused. There was already preliminary designs for the website, and my role was to put together a prototypal working version that could be taken forward.

Following initial user feedback, a subsequent UX consultation, and a number of strategic pivots, I was engaged to figure out what would be required to get the project to a finished state.

Working closely with the project owner I executed a full redesign of the website and was brought in to execute the final implementation.
      `,
      cvBullet:
        "Took ownership of product design following UX consultation, leading full site redesign, shifting role from pure delivery to broader technology and design leadership.",
    },
    {
      title: "LLM Driven Content Operations",
      description: `
One of the challenges non-profit projects face is financial. In a content heavy project such as this one, it is essential to dedicate enough resource to content editing. But full time content editors are not cheap.

In response to this challenge I implemented an LLM driven 'Content Editor'. Using Sanity's excellent MCP infrastructure, the Claude platform, and Cloudflare Workers, I was able to create a virtual content editor that audits content on a schedule, making changes as necessary, ready for human review.

This significantly reduced the workload associated with content operations and is now mostly the process of human review and approval of AI output.
      `,
      cvBullet:
        "Extended the platform with Cloudflare Workers-powered capabilities including LLM assisted content auditing and on-demand deployment, adding operational resilience and cost efficiency.",
    },
    {
      title: "Operational Sustainability",
      cvBullet:
        "Produced an operational plan covering future development, content ops, maintenance and costs, giving the project lead a concrete pitch for donors and partners.",
    },
  ],
};
