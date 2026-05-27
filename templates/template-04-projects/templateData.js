export const projectsTemplateData = {
  id: "projects",
  kicker: "Proof of work",
  eyebrow: "Featured project storytelling",
  title: "Projects that read like product launches, not gallery cards.",
  description:
    "Each project should show the problem, the architecture, the result, and the reason it matters. This section turns work history into product evidence.",
  featuredProject: {
    name: "Full-stack commerce platform",
    summary:
      "A MERN build with authentication, payments, realtime updates, and deploy-ready interface design.",
    metrics: [
      { value: "Stripe", label: "payments" },
      { value: "Socket.IO", label: "realtime layer" },
      { value: "Redux", label: "state model" },
    ],
    actions: [
      { label: "Live demo", href: "https://client-eight-coral.vercel.app/" },
      { label: "Source code", href: "https://github.com/im-Toqeer-506/Multivendor" },
    ],
    highlights: [
      "Authentication and authorization workflows",
      "Order and payment flow design",
      "Responsive commerce-first UI",
    ],
  },
  projects: [
    {
      name: "Realtime chat application",
      role: "Communication product",
      summary:
        "An authenticated chat experience focused on instant interaction and a clean, responsive interface.",
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      link: "https://github.com/im-Toqeer-506/Real_Estate",
    },
    {
      name: "Editorial case study flow",
      role: "Deep proof layer",
      summary:
        "A routed project page that explains architecture, database design, and engineering tradeoffs in a more premium format.",
      tags: ["Storytelling", "Architecture", "Diagrams", "Proof"],
      link: "#case-study",
    },
  ],
  results: [
    { value: "2", label: "featured launches" },
    { value: "100%", label: "responsive by default" },
    { value: "1", label: "clear CTA path" },
  ],
};
