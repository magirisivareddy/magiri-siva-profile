import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Sivaprasad</h1>

        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
