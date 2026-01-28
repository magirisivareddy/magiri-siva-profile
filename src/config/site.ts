export const site = {
  name: "Sivaprasad Reddy",
  role: "Full Stack Developer",
  tagline: "React • Next.js • Node.js • Strapi",
  summary:
    "Full stack developer specializing in building modern, scalable web applications with React, Next.js, Node.js and Strapi.",
  resumeUrl: "/resume.pdf", // Place your resume at public/resume.pdf or change to an external URL
  linkedInUrl: "https://www.linkedin.com/in/your-username/", // Update to your LinkedIn profile URL
  email: "your@email.com", // Update to your email
  about: {
    long: [
      "I’m a full‑stack developer who enjoys owning features end‑to‑end — from thoughtful UX and component design to API contracts, data models and deployments. I work closely with design and product to deliver accessible, high‑performance experiences that scale.",
      "On the front end I focus on modern React/Next.js architecture, sensible state management, and design systems that speed up teams. On the back end I’m comfortable shaping APIs with Node.js and headless CMS platforms like Strapi, keeping performance, security and maintainability in mind.",
      "Recently I’ve helped migrate enterprise portals to Next.js, built CMS‑powered platforms, and introduced CI/CD and testing practices that improved developer experience and release confidence.",
    ],
    focusAreas: [
      "Front‑end architecture",
      "Design systems & UI libraries",
      "API design (REST/GraphQL)",
      "Headless CMS (Strapi)",
      "Performance & SEO",
      "Testing & CI/CD",
    ],
    stats: [
      { label: "Years experience", value: "6+" },
      { label: "Projects shipped", value: "20+" },
      { label: "Teams supported", value: "Multiple cross‑functional" },
    ],
  },
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Strapi",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "GraphQL",
  ],
} as const;

export type SiteConfig = typeof site;
