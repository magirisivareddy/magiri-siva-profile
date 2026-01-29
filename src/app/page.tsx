"use client";

import { useQuery } from "@apollo/client/react";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import FeaturedProjects from "@/sections/FeaturedProjects";
import { GET_HOME_DATA } from "@/lib/queries";
import type { HomeQueryResponse } from "@/types/graphql";

export default function Home() {
  const { loading, error, data } = useQuery<HomeQueryResponse>(GET_HOME_DATA);

  if (loading) return <div className="text-center py-24">Loading...</div>;
  if (error) {
    console.error("GraphQL Error:", error);
    return <div className="text-center py-24">Error loading data</div>;
  }

  const homeData = data?.home;
  const blocks = homeData?.Blocks || [];

  return (
    <main>
      <Hero data={homeData} />
      <About data={homeData} />
      <Skills data={blocks} />
      <FeaturedProjects />
    </main>
  );
}
