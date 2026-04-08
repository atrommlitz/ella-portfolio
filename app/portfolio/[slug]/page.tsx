import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header project={project} />

      <article className="px-6 pt-4 pb-12 mx-auto prose prose-zinc prose-quoteless prose-p:my-2 prose-p:leading-snug max-w-5xl w-full">
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}
