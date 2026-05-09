import type { WorkExperienceEntry } from "./work-experience";

export const styleTechWorkExperience: WorkExperienceEntry = {
  company: {
    name: "StyleTech",
    url: "https://styletech.co.uk",
    description:
      "StyleTech provide bespoke software solutions to a variety of private and public sector organisation who range from small limited companies to large international businesses in the private sector, the NHS and local authorities.",
  },
  role: "Software Developer",
  startDate: "2020-12",
  endDate: "2023-04",
  description: `
StyleTech were a consultancy firm at heart, meaning that they would take on work for clients ranging new builds, legacy work, and subcontracting. 

Within my first year I delivered half a dozen applications for a variety of clients across a variety of technologies. The role required adaptability and a "just-in-time" approach to learning more than anything else. From one project to another I could be working in .NET and Blazor then straight on to React or Vue.

During the course of my last project with RAIDLOG.com I became increasingly focused on frontend engineering.
  `,
  highlights: [
    {
      title: "Patient Reported Outcome Measures (PROMs) Mobile App",
      description: `
Working on behalf of a client partnered with major UK cancer charities, I was assigned to deliver a mobile app enabling patients to keep track of their symptoms, quality of life, experience of care and costs. There were also plans to deliver a web app shortly after mobile release, but not necessarily the time or budget to deliver separate applications.

To solve this, the app was built as a React web application shipped inside a Xamarin WebView, enabling cross-platform release from a single codebase. The scope didn't warrant the overhead of a heavier setup, so I built it in plain JavaScript with React and Tailwind, no additional libraries. Consciously avoiding external dependencies and over engineering meant it was built and shipped in a matter of weeks and would require very minimal maintenance over time.

It went live in booth app stores on schedule and deployed to the web shortly after.
      `,
      cvBullet:
        "Built a Patient Reported Outcome Measures (PROMs) app for a client partnered with major UK cancer charities. Shipped as a single React codebase running natively via Xamarin WebView and on the web. Built in plain JavaScript with minimal dependencies for rapid delivery and low maintenance.",
    },
    {
      title: "WCAG 2.1 Level AA Compliance",
      description: `
Working for Health Education England, I delivered the frontend for an ePortfolio system used by healthcare professionals to record learning resources from across the internet. As a public sector organisation, the system was legally required to meet WCAG 2.1 level AA.

The work that mattered most here was learning the standards deeply enough to implement, and defend them when necessary. This often meant pushing back on client requests that would have failed the standard such as color palette changes that did not meet minimum contrast requirements or font size reductions aiming to fit more information on screen. It also meant having to make substantial changes to the design as the project progressed, both as I understood the standards better and as testing revealed gaps that hadn't been visible earlier.

The system passed its accessibility audit on go-live. The main thing I took from the project is that accessibility is not just a checklist at the end of the project. When done properly, it needs to be designed in from the beginning and defended throughout.
      `,
      cvBullet:
        "Delivered the frontend for a Health Education England ePortfolio system to WCAG 2.1 AA, learning the standard, iterating through testing, whilst defending against competing client requests, ensuring it passed audit on go-live.",
    },
    {
      title: "Desktop Payroll Automation Tool",
      description: `
My first professional development project was a desktop app for a small yacht management company, taking their payroll spreadsheet to produce and email PDF wage slips. The work involved Excel ingestion, pixel-perfect PDF construction, and email delivery.

Thankfully I was naive to the pain that each of these areas can hold and just battled through, one obstacle at a time, without any understanding of whether it was meant to be difficult. The app shipped, satisfied the immediate business need, and led to further work with the client.

I like to reflect back to this project whenever I find myself working on something that seems impossible. It's a handy reminder that we don't always know a solution up front, and that's ok, the important thing is to keep moving and eventually, we get to the end.
      `,
      cvBullet:
        "Built a desktop payroll automation tool for a yacht management company, taking Excel data through to emailed PDF wage slips. An early-career commercial project that established a relationship leading to follow-on work with the client.",
    },
    // {
    //   title: "Howdens",
    //   description: "",
    //   cvBullet: "",
    // },
    // {
    //   title: "Legacy Elite Performance",
    //   description: "",
    //   cvBullet: "",
    // },
  ],
  techStack: [
    "TypeScript",
    "React",
    "Vue",
    "Tailwind",
    "jQuery",
    "WPF",
    ".NET",
    "MS SQL",
  ],
};
