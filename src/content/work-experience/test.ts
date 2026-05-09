import type { WorkExperienceEntry } from "./work-experience";

export const raidlogWorkExperience: WorkExperienceEntry = {
  company: {
    name: "RAIDLOG.com",
    url: "https://raidlog.com",
    description:
      "B2B SaaS project management tool for tracking risks, assumptions, issues, and dependencies, used by project managers and PMOs across enterprise and SMB customers.",
  },
  role: "Frontend Developer (Contract)",
  techStack: [
    "TypeScript",
    "React",
    "React Query",
    "Zustand",
    "MUI",
    "Yup",
    "Firebase Auth",
    "Stripe",
    "Lexical",
    "OpenAI API",
  ],
  startDate: "2022-10",
  endDate: "2023-02",
  description: `
RAIDLOG.com is a B2B SaaS project management tool for tracking risks, assumptions, issues, and dependencies. I was brought in as sole frontend developer to rescue an at-risk product following the departure of the previous frontend hire, with a hard deadline to demo at PMI Global Summit in December 2022 and launch publicly in January 2023.

I inherited a skeletal Create React App, partially migrated to TypeScript, with a single useEffect fetch wired into the backend and a working Firebase auth integration. There was no architectural plan, no component conventions, and no state management strategy — just a PRD and a stack of static screen designs handed off to the product manager.

Working directly with the CTO and product manager, I owned all frontend architectural decisions end-to-end, taking the application from skeleton to production-ready within the deadline. The product successfully demoed at PMI Global Summit, securing the company's first paying subscribers and first enterprise customer. On exit, I delivered full handover documentation and a frontend scaling roadmap to the CTO.
      `,
  highlights: [
    {
      title: "Inheriting a Project Mid-Flight",
      description: `
My first job wasn't writing features, it was triage. I had to decide what was salvageable, what needed replacing now, and what could be deferred without blocking the demo deadline. I kept what was load-bearing and worth keeping — Firebase auth, the TypeScript trajectory — and made fast, opinionated decisions on everything else.

React Query for async state, Zustand for client state, both deliberately chosen over heavier options like Redux to keep the surface area small while the product was still finding its shape. For UI, MUI with a custom theme.

The MUI choice needed a real conversation with stakeholders. The static designs hadn't been drawn against any component library, so MUI components wouldn't match them pixel-for-pixel. I made the case directly: we could spend weeks hand-rolling components and lose the demo, or ship on a battle-tested library, accept some visual compromises in v1, and swap individual components out later if specific cases demanded it. The product made the trade-off even sharper — RAIDLOG centred on a heavily interactive data grid, exactly the kind of component that takes months to build well and minutes to drop in via MUI's Data Grid.

Stakeholders agreed. The trade-off paid off. We hit the demo, the product was stable enough to exhibit at PMI, and none of the components we shipped on needed replacing before I left.

The broader principle running through all of this: every decision was a deliberate trade between velocity now and flexibility later, and I made those trades explicit rather than implicit — to myself, and to the people relying on me to ship.
        `,
      cvBullet: `
Inherited a skeletal CRA codebase mid-project; established architectural foundations under deadline pressure and shipped a production-ready application in time for PMI Global Summit, leading directly to first paying subscribers and first enterprise customer.
          `,
    },
    {
      title: "Thin API Layer with Runtime Validation",
      description: `
One of the early architectural decisions that paid the largest dividends was how I structured the boundary between frontend and backend. Rather than scattering React Query calls across components or building a heavyweight client SDK, I kept it deliberately thin: a small fetch wrapper underneath, and a layer of domain-specific hooks on top — useProjects, useRisks, and so on — that each component consumed directly.

This gave components a clean, intention-revealing API and meant React Query's caching, retries, and invalidation logic lived in one place per resource rather than being recomposed everywhere. If we needed to change how projects were fetched, cached, or invalidated, it changed in one file.

The piece I'm proudest of is what I bolted onto this layer: runtime validation with Yup against every API response. At the time the choice was Yup or Zod, with no clear winner — I'd have probably picked Zod a year later, but Yup was the right call then. The reason for runtime validation wasn't user-facing error handling, it was team coordination. The backend was being built in parallel by other people, and contracts drift constantly during rapid development. Schema validation in the frontend turned silent drift into loud, immediate errors during development — a malformed field surfaced instantly instead of corrupting state silently and showing up as a weird bug three days later.

It became a force multiplier for working at speed. We caught contract mismatches in seconds, not in QA, and the frontend and backend teams didn't have to constantly check each other's work manually.
        `,
      cvBullet: `
Designed a thin API integration layer combining a fetch client, React Query, and Yup runtime validation — exposing clean domain hooks to components and catching frontend/backend contract drift instantly during rapid parallel development.
          `,
    },
    {
      title: "AI Risk Assistant — OpenAI Integration in 2022",
      description: `
In 2022, before ChatGPT had reframed everyone's intuitions about LLMs, I integrated the OpenAI API into RAIDLOG to build an AI Risk Assistant. The feature let users generate a starter set of project risks automatically from a project description — turning a blank-canvas problem into an editable starting point.

This was genuinely novel territory at the time. There were no established UX patterns for LLM features in B2B SaaS, no widely-known prompt engineering practices, no off-the-shelf libraries for streaming responses or handling failures gracefully. Everything was a judgement call. I had to think through how to frame the prompts to get reliably structured output, how to handle latency that was an order of magnitude slower than any other interaction in the app, what to do when the model returned malformed or unhelpful results, and how to communicate to users that this was an assistant — a starting point — not a finished product they should trust blindly.

The feature became one of the things RAIDLOG demoed most prominently at PMI Global Summit. For a project management audience, the value proposition was immediate: risk identification is one of the more cognitively expensive parts of project setup, and reducing it to "describe your project, edit the suggestions" was a clear win.

Looking back, the interesting thing isn't that we shipped an AI feature — it's that we shipped one before there was a playbook for shipping AI features, and the patterns I worked out by hand became standard practice across the industry six months later.
        `,
      cvBullet: `
Built and shipped an AI-powered Risk Assistant using the OpenAI API in 2022, before mainstream LLM tooling and UX patterns existed; designed prompt engineering, latency-tolerant UX, and error-handling strategies without an established playbook.
        `,
    },
  ],
};
