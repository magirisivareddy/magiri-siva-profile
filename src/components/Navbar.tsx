import { site } from "@/config/site";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg-dark/60 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <div className="font-semibold text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
          {site.name}
        </div>

        <nav className="flex items-center gap-3 md:gap-4 text-sm">
          <a
            href={site.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-4 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
          >
            LinkedIn
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg shadow-brand-primary/20 hover:brightness-105 active:brightness-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
