import { site } from "@/config/site";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-brand-bg-mid to-brand-bg-light text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
          Skills & Technologies
        </h2>

        <p className="mt-4 text-white/80 max-w-2xl">
          Technologies I’ve worked with to build scalable, modern web applications.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {site.skills.map((skill) => (
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
