import { site } from "@/config/site";

interface SkillsProps {
  data?: Array<{
    __typename?: string;
    id: string;
    Title?: string;
    Description?: string;
    skills?: Array<{ id: string; name: string; Text: string }>;
  }>;
}

const Skills = ({ data }: SkillsProps) => {
  // Get ComponentSectionsSkills block from Strapi
  const strapiSkills = data?.find((b) => b.__typename === "ComponentSectionsSkills");

  // Use Strapi skills if available, otherwise fall back to site config
  const skillsList = strapiSkills?.skills?.map((s) => s.name) || site.skills;
  const skillsTitle = strapiSkills?.Title || "Skills & Technologies";
  const skillsDescription = strapiSkills?.Description || "Technologies I've worked with to build scalable, modern web applications.";

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-brand-bg-mid to-brand-bg-light text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
          {skillsTitle}
        </h2>

        <p className="mt-4 text-white/80 max-w-2xl">
          {skillsDescription}
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skillsList.map((skill) => (
            <div
              key={skill}
              className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-center text-sm font-medium
              hover:bg-brand-primary hover:border-brand-primary transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
