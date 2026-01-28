const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Building <span className="text-blue-500">Modern</span>
          <br />
          Web Experiences
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          React • Next.js • Node.js • Strapi
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-lg font-medium">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-xl border border-gray-400 hover:bg-white hover:text-black transition text-lg font-medium">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
