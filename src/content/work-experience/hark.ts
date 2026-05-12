import type { WorkExperienceEntry } from "./work-experience";

export const harkWorkExperience: WorkExperienceEntry = {
  company: {
    name: "Hark by SolarEdge",
    url: "https://harksys.com",
    description:
      "Award winning cloud and edge energy software platform that allows commercial and industrial Facilities Managers, Energy Managers and Asset Operators to connect to, analyse and optimise their industrial assets, buildings and energy in real-time.",
  },
  role: "Full-Stack TypeScript Engineer",
  techStack: [
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "Zod",
    "tRPC",
    "Redux",
    "Highcharts",
    "styled-components",
  ],
  startDate: "2023-07",
  endDate: "2026-03",
  description: `
The Hark Platform is an award-winning SaaS platform allowing customers to connect to, analyse, and optimise, industrial and commercial IoT. I was brought on to build the Explorer module, a Project Haystack aligned product enabling customers to map and manage their estate's equipment.

Having been founded in 2016, much of my work centered on the technical design and delivery of features within the constraints of an established, mature system.

I led or contributed to well over a hundred technical design sessions across my two and a half years at Hark. The bulk of the work was designing new solutions within existing architecture and implementations, knowing when to follow prior work, when to incur technical debt, or when something genuinely new was needed. All whilst taking into consideration product roadmap, time to ship, future maintenance, and scalability of solutions for a growing customer base.

This judgement was possible because I was able to combine my knowledge of the tools, the patterns and the rich history of the existing codebase, with where the wider ecosystem was heading, to know when to continue down the trodden path and when to adjust or pivot.
      `,
  highlights: [
    {
      title: "Design-to-code Architecture",
      description: `
When I was assigned to work on a new product under the SolarEdge ONE for C&I umbrella, I was keen to avoid the same process issues I'd seen between design and engineering that slowed work on our main platform. Issues such as drift between design snapshots and live designs, and lack of synchronicity between our components in code and the corresponding ones in Figma. Our designer was already well underway with design work, but I proposed building the design system together, from the start, rather than trying to retrofit later.

We decided to follow the Design Token Community Group (DTCG) standards and implement a three-tier design token system (primitive/semantic/component), but decided to allow Figma's component model to carry the component layer implicitly. We also decided to be strict about only using semantic tokens in Figma components, and try to follow "Atomic Design" principles when designing components, so we could maintain the same levels of component abstraction between design and code.

In code, I mapped the primitive layer in JSON, then created a staged factory pipeline to generate the semantic layer and component "token contracts" at runtime. The "token contracts" concept provided a mapping back to the component model in Figma. And the whole abstraction mapped well onto \`styled-components\`' theme model, the styling technology chosen for the project. Using Figma Code Connect to link each component back to Figma meant drift and compliance could be monitored at the tooling layer.

Where design and engineering had been separate stages with handoffs and reconciliations between them, they were now operating as one process, integrated at the tooling layer, but more importantly at the communicative one.
`,
      cvBullet: `
Partnered with designer on a greenfield project to build a tiered design token system, integrated across Figma and code via Figma Code Connect.
          `,
    },
    {
      title: "AI-first Frontend Workflows",
      description: `
Working on a new product under the SolarEdge ONE for C&I umbrella, I was tasked with adopting an AI-first approach in engineering. The prevailing view in the wider industry (at the time), was that AI tooling could handle backend work but couldn't do UI. After a few days of watching Claude Code fumble on a few test cases, I could see why people thought that. But I didn't think this was an AI problem. I thought it was a system problem. I believed that for AI to be effective in the UI space, the gaps between design and code needed to be systematised.

I pitched to our CEO for time to establish this structure. Arguing that our current approach to UI engineering relied heavily on a shared undocumented knowledge built up across the team over time. A model with no access to that knowledge would almost certainly fail (in the same way a new starter with no onboarding would). So the first step in "adopting an AI-first approach to engineering" was to systematise every part of the design-to-code process.

With the foundations in place, I built a component-builder skill that read a component from Figma, scaffolded it from Radix primitives, referenced shad-cn for well-designed, accessible composition patterns, applied the correct tokens via styled-components, and produced the Storybook and Code Connect files alongside it. Component creation went from hours to minutes. A screen-builder skill extended this. Given a Figma frame, it audited the existing library, flagged gaps for component-builder to fill, and once those were addressed, produced the screen.

I deliberately stopped short of orchestrating these into a fully automated loop. PRs still needed to be human-sized to review. And the point of the work was to establish AI-first engineering workflows, not replace the engineer altogether.`,
      cvBullet: `
Built the design system tooling and Claude Code skills that made AI-generated UI viable in production, enabling generation of components and full screens directly from Figma.
        `,
    },
    {
      title: "LLM Driven Generative UI",
      description: `
Coming out of an "AI-Hackathon" day, the prevailing assumption was that our current platform was too old and too complex to support production AI features. Couple this with the assumption that any AI feature would be chat-bot shaped, and it felt like the takeaway was "All of this is fun and impressive, but not for us right now". I felt the opposite, that the enterprise architecture could be an asset, and that generative UI could be a much better product fit for a data-dense application. I spent some down time the following week to find out.

A production-ready generative UI feature needed to hit two marks. It needed to be treated as an unprivileged consumer, and any generated UI needed to look like it was signed off by our designer. The prototype I created broadly followed this pattern:

- The UI interaction called our tRPC API like any other.
- The tRPC procedure handled the input; defining the system prompt, combining it with parameters from the UI, and selecting which tools the LLM would have access to.
- It kicked off a server-side background job that ran the agent loop, with bounded retries on validation failure.
- The agent loop lived in a service sitting adjacent to our standard BFF services, acting as a thin, typed wrapper that exposed "tools" to the LLM as hooks into existing platform capabilities, with all permissions enforced by the underlying services.
- The LLM produced its final answer by calling a tool with a structured UI descriptor, validated by Zod.
- Another tool exposed a curated component registry, telling the LLM what UI it could compose.
- To avoid blocking the UI (LLMs take their sweet time), a web worker polled for completion and triggered a notification button state change when the result was ready 
- When the user opened the result, a dynamic renderer walked the descriptor tree, looking up each component in the same registry the LLM had access to, and rendering it via wrapped versions of design-system components with constrained prop surfaces.

What I wanted to put in front of the team was a demonstration that the very things assumed to be challenging to build around were exactly the pieces that enabled AI features in production.
        `,
      cvBullet: `Prototyped a generative-UI feature where an LLM composed dashboards from a typed component registry in the BFF, showing a viable path to shipping AI features into a mature platform.`,
    },
    {
      title: "Performance Oriented Data-dense Analytics Interfaces",
      description: `
The Explorer module (and several others I worked on) contained data-dense interfaces such as dashboards combining tables, charts and real-time readings, pulled from a set of generic platform services, processed and served via a backend-for-frontend (BFF) before being sent to the browser.

The recurring engineering problem within the existing architecture given data containing thousands of data points across hundreds of assets, was doing the work in the right place in the stack, preventing the backend from being hammered whilst also not grinding the browser to a halt.

This usually required me to collect together all data required by a specific UI across backend services into the BFF, iterating over it a single time, and shaping the UI response using lookup tables, sets and maps, with tRPC and Zod handling contracts at both boundaries. This meant that the BFF could serve data in the general shape the UI needed without having to do all of this work in the browser.

In the UI itself, maintaining a container/view split in most cases meant I could have the container orchestrate and make any further transformations it needed to feed multiple child views, for example processing a single large dataset for use in both chart and tabular format.

The devil being in the detail, the challenge was holding all of this in mind at once, deciding when to push work up or downstream, employing selective memoization, breaking out frequently updated components from long-lived ones, but not going so far as to over abstract and increase maintenance. The judgement was being able to take current work in context with future work, as well as considering the type of scale and use a feature was likely to see, to forecast where the next bottleneck was likely to arise.
        `,
      cvBullet: `
Built data-dense analytics dashboards rendering thousands of data points across hundreds of assets using a type-safe Node BFF and React UI, with concurrent fetching, single-pass processing, and caching to keep server and client responsive.
          `,
    },
    {
      title: "Complex Enterprise Delivery",
      cvBullet:
        "Scoped and delivered a key feature for a FTSE 250 client on a commercially critical timeline, protecting a strategically important relationship.",
    },
    {
      title: "Frontend Engineering Rigour",
      cvBullet: `Raised the level of frontend rigour within a full-stack team through code review (emphasising "why" over "what") and steering planning toward existing patterns over novel solutions, compounding consistency over time.`,
    },
  ],
};
