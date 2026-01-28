import { site } from "@/config/site";
import Reveal from "../components/Reveal";

const About = () => {
    return (
        <section
            id="about"
            className="py-24 bg-gradient-to-b from-white to-brand-surface"
        >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <Reveal>
                        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-slate-600">About Me</h2>
                    </Reveal>

                    {/* Long form paragraphs */}
                    <div className="mt-6 space-y-5 text-gray-600 text-lg leading-relaxed">
                        {(site.about?.long ?? [site.summary]).map((para) => (
                            <p key={para.substring(0, 24)}>{para}</p>
                        ))}
                    </div>

                    {/* Focus areas */}
                    {site.about?.focusAreas && (
                        <div className="mt-7 flex flex-wrap gap-2">
                            {site.about.focusAreas.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1.5 text-sm text-gray-700"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="mt-8 flex gap-3 md:gap-4">
                        <a
                            href={site.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 h-11 px-5 md:px-6 rounded-lg
                            bg-gradient-to-r from-brand-primary to-brand-secondary text-white
                            shadow-lg shadow-brand-primary/20 transition
                            hover:brightness-105 active:brightness-95
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-2"
                        >
                            Download Resume
                        </a>
                        <a
                            href={`mailto:${site.email}`}
                            className="inline-flex items-center justify-center gap-2 h-11 px-5 md:px-6 rounded-lg
                            border border-black/10 bg-white/60 text-black backdrop-blur-sm
                            hover:bg-white hover:text-black transition active:brightness-95
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary/60 focus-visible:ring-offset-2"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* RIGHT CARD */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-brand-primary/10">
                    {/* Stats row (auto from config if present) */}
                    {site.about?.stats && (
                        <div className="grid grid-cols-3 gap-4 text-center">
                            {site.about.stats.map((s) => (
                                <div key={s.label} className="rounded-xl border border-black/5 py-4">
                                    <div className="text-xl font-semibold text-gray-900">{s.value}</div>
                                    <div className="text-sm text-gray-500">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    <ul className="mt-6 space-y-4 text-gray-700">
                        <li>✅ Strong in React & Next.js ecosystem</li>
                        <li>✅ Enterprise migrations & CMS platforms</li>
                        <li>✅ Performance, SEO & scalability focused</li>
                        <li>✅ Collaboration with product/design and backend teams</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
