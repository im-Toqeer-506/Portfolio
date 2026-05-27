export const openSourceTemplateData = {
  id: "open-source",
  kicker: "Community footprint",
  eyebrow: "Open-source and ecosystem presence",
  title: "A section that turns GitHub activity into brand credibility.",
  description:
    "Open-source identity should show collaboration habits, documentation quality, and the ability to contribute back to the ecosystem.",
  stats: [
    { value: "GitHub", label: "primary platform" },
    { value: "Docs", label: "community signal" },
    { value: "PRs", label: "collaboration model" },
  ],
  contributions: [
    {
      title: "Reusable component patterns",
      summary:
        "A collection of utilities and UI primitives that can be published as internal or public packages.",
    },
    {
      title: "Documentation-first repos",
      summary:
        "README files, setup guides, and architecture notes that make repos easier to adopt and review.",
    },
    {
      title: "Small, valuable contributions",
      summary:
        "Focused pull requests, bug fixes, and issue responses that build a visible ecosystem footprint.",
    },
  ],
  repositories: [
    {
      name: "Portfolio system layer",
      language: "React + Tailwind",
      note: "Shared UI tokens, motion logic, and section primitives for scalable branding.",
    },
    {
      name: "MERN starter kits",
      language: "Node + Express",
      note: "Opinionated scaffolds for auth, data modeling, and deployment-ready APIs.",
    },
  ],
};
