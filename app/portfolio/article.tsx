import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";

type Props = {
	project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
	return (
		<Link href={`/portfolio/${project.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 text-black group-hover:text-black">
						{project.date ? (
							<time dateTime={new Date(project.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-black group-hover:text-black font-display">
					{project.title}
				</h2>
				<p className="z-20 mt-4 text-sm  duration-1000 text-black group-hover:text-black">
					{project.description}
				</p>
			</article>
		</Link>
	);
};
