import type { WorkExperienceEntry } from "./work-experience";
export const raidlogWorkExperience: WorkExperienceEntry = {
  company: {
    name: "RAIDLOG.com",
    url: "https://raidlog.com",
    description:
      "RAIDLOG is a modernized, SaaS based version of an old-school project management tool, the RAID log. Providing project managers and PMOs across enterprise and SMBs a tool to track risks, issues, actions and decisions across their projects without resorting to unwieldy spreadsheets.",
  },
  role: "Frontend Developer",
  note: "subcontracted via StyleTech",
  startDate: "2022-06",
  endDate: "2023-04",
  techStack: [
    "TypeScript",
    "React",
    "React Query",
    "Zustand",
    "MUI",
    "Yup",
    "Lexical",
    "Firebase Auth",
    "Stripe",
    "OpenAI API",
  ],
  description: `
RAIDLOG.com is a B2B/B2C SaaS project management tool for tracking risks, issues, actions, and decisions across projects. I was brought in as sole frontend developer following the unexpected departure of their first hire, with a hard deadline to demo at PMI Global Summit in December 2022 with broader public availability and monetization planned for the start of 2023.

I inherited a skeletal Create React App partially migrated to TypeScript, with working Firebase auth and a few \`useEffect\` fetches wired into the backend. Virtually all technology decisions for the frontend still needed to be made. There was a PRD and a set of static designs, but no clear plan for how it was going to be built.

My role was to establish the foundations of the product, deciding *how* the product should be built, and creating the conditions for it to be built well, setting a strong and clear direction for the codebase well into its future.

The product was ready in time for the PMI Global Summit, and the January launch that followed, securing their first enterprise customer shortly after alongside a growing number of paid subscribers.
  `,
  highlights: [
    {
      title: "Establishing Architecture and Direction",
      description: `
Every decision I made on the project had to satisfy two opposing constraints; the product had to ship fast enough to be ready for the trade show in December, and it had to be scalable and maintainable enough for a future team to keep building. Anything novel or experimental risked stability; anything too heavyweight risked velocity. I settled into picking battle-tested but modern tooling for the foundations, reserving any appetite for risk for novel product features.

This approach can be demonstrated with the choice of React Query (now TanStack) for server state and Zustand picking up the small amount of genuinely client-side state that remained. This was at a time when Redux was still the go-to choice for "production apps" but I was keen to avoid a lot of the complexity that Redux would bring. These slightly off-piste tool choices proved worthwhile in how quickly I was able to ship, and how light I was able to keep the codebase.

At this time, Redux was still the default choice for production apps, but I was keen to avoid the complexity and heavy boilerplate it would introduce. As such I opted for tools like React Query (now TanStack) for server state, and Zustand for managing the genuinely client-side state that was left. These tools allowed me to build a thin API for the UI, exposing per-resource hooks like \`useProjects\`, \`useRisks\`, etc. Yup handled validation at the API boundary, both as runtime safety and to catch backend contract drift during a time of rapid development (in hindsight I wish I'd have bet on Zod too).

The biggest stakeholder conversation was about MUI. The CEO had high expectations for design fidelity, but building accessible, edge-case-resilient components from scratch (particularly the data grid the product was built around) would have burned valuable runway. I made the case that they were paying me to build a product, not a component library, and that MUI with a custom theme gave us most of what we needed (we could always build custom later if/when we needed to). They agreed, and we never had to revisit it.

The Lexical integration for our timeline feature was the one place I deliberately took a risk on a less established tool. The CEO wanted a Slack-like rich text experience for comments. Draft.js was on the way out, there were a few other options, but Lexical's plugin style architecture felt like we wouldn't hit a ceiling with it, and as it was already being used in Meta products, it felt like an educated gamble.

The thread across all of these decisions was making the choices that served the product's stage and the client's goals. The job was to ship something that worked quickly, that could be built upon well into the future.
      `,
      cvBullet:
        "Took a greenfield React app from zero to launch on a tight timeline, choosing a deliberately light stack (thin API, React Query + Yup, Zustand, MUI) to ship fast with an eye on future scalability. Demo at PMI Global Summit 2022 led to our first enterprise customer.",
    },
    {
      title: "AI Risk Assistant",
      description: `
In late 2022, shortly after ChatGPT 3.5 launched, the CEO wanted to know whether we could use the OpenAI APIs to populate user's projects with "starter risks", generated from a project description, so they didn't have to waste time on inputting the "obvious common risks" (but risks that still needed to be tracked). The patterns and tools we now take for granted (structured output, function calling, mature JS SDKs) didn't really exist yet. There wasn't even a common set of terms for talking about LLM driven features like there is now.

The hardest engineering problem wasn't getting the model to produce reasonable suggestions; it was getting it to produce **parseable, schema-conformant data** reliably enough to render a UI from. I'd already been experimenting with "prompt engineering" and had techniques for coaxing JSON output against a given schema. I worked with the backend engineer on how to construct a prompt with injected user content (there wasn't even a separate 'system' and 'user' message at this point), and we worked through the end-to-end integration. 

These early models were unpredictable so we created a defensive layering pattern. The backend (being weakly typed), tested for compliant JSON in the response and simply mapped the output to the correct properties. In the frontend, leveraging the Yup schemas I already had modelling the domain, I used Yup transformations to normalize what I could, drop what I couldn't use, and discarded the whole result if not enough survived, which felt like the best approach deal with the probabilistic output of the model.

The feature shipped and to my knowledge remains in production as part of the Enterprise tier. At the time it felt like magic, a user could write a few sentences about their project and the system would populate itself saving them hours of work. The patterns I used here, particularly schema validation as the trust boundary between an LLM and UI, are ones I've used in similar work since (thankfully we now have the tooling that makes this *much* easier). The key thing at the time, as it is today, was to design the system to fail gracefully rather tha catastrophically when the models misbehave.
      `,
      cvBullet:
        "Built an AI-powered Risk Generator using the OpenAI API in 2022, before mainstream LLM tooling and patterns existed, using Yup schema validation at the LLM/UI boundary to gracefully degrade structured output. Still in production today in the product's Enterprise tier",
    },
    {
      title: "Establishing Engineering Process",
      description: `
When I joined RAIDLOG, there was no real engineering process. Whilst there was a well developed PRD, work was primarily delivered as long-lived branches to main with no clear scope or priority. As more of us came on to the project (myself on the frontend, a new backend engineer), that pattern started causing actual harm (merge conflicts, overwritten work, and no clear understanding of what everyone was working on or what features would be next to ship). This created contention in early meetings, for example "When will X be ready?", when we weren't sure as engineers what "X" was defined as.

The existing team were receptive to resolving this tension, most never having worked on a software project of this nature. As me and the backend engineer were subcontracted from the same firm, we framed the conversation as **"help us help you"**. Using the Github platform that was already hosting our code, we surfaced to the Product Manager (new to this kind of role) the tools available for managing delivery. We started by defining features as Issues, supporting the PM with intent, scoping and acceptance criteria, and breaking that down into specific tasks (using GitHub's markdown task lists to make progress visible on a ticket). Once we were settled into that, we started using Github's Milestones and Kanban board features which made it possible to forecast where we'd be by a given date, but more importantly, made scoping discussions possible.

Our goal was always to provide just enough structure to make decisions, and to facilitate conversations about scope and delivery. As the PM grew in confidence they took ownership of the processes and made them their own, in the meantime it made our jobs of delivering on the project in line with expectations much easier.
      `,
      cvBullet: `
Established lightweight engineering process with the PM (GitHub Issues, Milestones, Kanban), turning tense "when will it ship?" conversations into structured sprint planning, supporting cross-timezone delivery.
      `,
    },
    {
      title: "Operational Sustainability",
      cvBullet:
        "Authored an architecture recommendations document for CTO ahead of contract end, advising on framework migration and strategies for scaling the frontend beyond the startup phase.",
    },
  ],
};
