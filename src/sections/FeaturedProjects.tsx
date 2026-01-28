const projects = [
  {
    title: "Sonesta Hotels Platform",
    description:
      "Hospitality platform built with Gatsby.js to deliver fast, SEO-optimized hotel experiences with reusable React components and dynamic content.",
    tech: ["Gatsby.js", "React", "REST APIs"],
    image: "/images/sonesta.jpeg",
  },
  {
    title: "Landus Digital Platforms",
    description:
      "Migrated enterprise portals and websites from OutSystems and Webflow to Next.js, delivering modern, scalable UI for farmers and employees.",
    tech: ["Next.js 15/16", "Tailwind CSS", "Redux Toolkit", "Strapi 5", ".NET"],
    image: "/images/landus.png",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-bg-mid to-brand-bg-light text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/75">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl bg-white/10 backdrop-blur-md shadow-lg overflow-hidden hover:bg-white/15 transition border border-white/15"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-white/80">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm rounded-full border border-white/20 bg-white/10 text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
