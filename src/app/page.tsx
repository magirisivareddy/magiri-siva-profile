import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import FeaturedProjects from "@/sections/FeaturedProjects";
// import Experience from "@/sections/Experience";
// import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />   {/* ✅ HERE */}
      {/* <Experience />
      <Contact /> */}
    </main>
  );
}
