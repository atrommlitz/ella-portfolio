import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export default async function ProjectsPage() {
  const slugOrder = [
    "romex",
    "just-ingredients",
    "stardust",
    "marketing-school",
  ];

  const projects = slugOrder
    .map((slug) => allProjects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof allProjects;

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Portfolio
          </h2>
          <p className="mt-4 text-black">
            These are some of the cool projects I've done for school and for
            work.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug}>
              <Article project={project} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
