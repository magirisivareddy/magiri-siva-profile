"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/config/site";

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15 },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
} as const;

interface HeroProps {
  data?: {
    seo?: {
      metaTitle?: string;
      description?: string;
    };
    Blocks?: Array<{
      __typename?: string;
      id: string;
      name?: string;
      role?: string;
      tagline?: string;
      summary?: string;
      resume?: { alternativeText: string; url: string };
      profileImage?: { url: string; alternativeText: string };
      linkedInUrl?: Array<{ id: string; link: string }> | { id: string; link: string };
    }>;
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  console.log("data", data);
  // Get ComponentSectionsHero block from Strapi
  const strapiHero = data?.Blocks?.find((b) => b.__typename === "ComponentSectionsHero");
  console.log("strapiHero", strapiHero);

  // Use Strapi data if available, otherwise fall back to site config
  const name = strapiHero?.name || site.name;
  const role = strapiHero?.role || site.role;
  const tagline = strapiHero?.tagline || site.tagline;
  const summary = strapiHero?.summary || site.summary;
  const resumeUrl = strapiHero?.resume?.url || site.resumeUrl;

  // Handle profileImage with Strapi base URL
  const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL?.replace("/graphql", "") || "http://localhost:1337";
  const profileImageUrl = strapiHero?.profileImage?.url;
  const profileImage = profileImageUrl
    ? profileImageUrl.startsWith("http")
      ? profileImageUrl
      : `${strapiBaseUrl}${profileImageUrl}`
    : "/images/profile.jpg";
  const profileAlt = strapiHero?.profileImage?.alternativeText || "Profile photo";
console.log("profileImage",profileImage)
  // Handle linkedInUrl (can be array or object)
  let linkedInUrl: string = site.linkedInUrl;
  if (strapiHero?.linkedInUrl) {
    if (Array.isArray(strapiHero.linkedInUrl) && strapiHero.linkedInUrl.length > 0) {
      linkedInUrl = strapiHero.linkedInUrl[0].link;
    } else if (!Array.isArray(strapiHero.linkedInUrl)) {
      linkedInUrl = strapiHero.linkedInUrl.link;
    }
  }
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-brand-bg-dark via-brand-bg-mid to-brand-bg-light text-white overflow-hidden py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div
          className="text-center md:text-left"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.p className="text-sm tracking-wider text-brand-accent/80" variants={item}>
            {role}
          </motion.p>
          <motion.h1
            className="mt-2 text-5xl md:text-7xl font-extrabold tracking-tight"
            variants={item}
          >
            Hi, I&#39;m
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
              {name}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl md:max-w-xl mx-auto md:mx-0"
            variants={item}
          >
            {tagline}
          </motion.p>
          <motion.p
            className="mt-3 text-base md:text-lg text-white/80 max-w-2xl md:max-w-xl mx-auto md:mx-0"
            variants={item}
          >
            {summary}
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center md:justify-start gap-3 md:gap-4"
            variants={item}
          >
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 h-11 px-5 md:px-6 rounded-lg
              bg-gradient-to-r from-brand-primary to-brand-secondary text-white
              shadow-lg shadow-brand-primary/20 transition
              hover:brightness-105 active:brightness-95
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2"
            >
              View Resume
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 md:px-6 rounded-lg
              border border-white/40 bg-white/10 text-white backdrop-blur-sm
              hover:bg-white hover:text-black transition active:brightness-95
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute -z-10 size-72 md:size-96 rounded-full bg-brand-secondary/30 blur-3xl" />

          <motion.div
            className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={profileImage}
              alt={profileAlt}
              width={288}
              height={288}
              priority
              className="rounded-full ring-4 ring-white/20 shadow-2xl object-cover w-56 h-56 md:w-72 md:h-72"
              unoptimized={profileImage.includes("localhost")}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
