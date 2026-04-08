import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";

const dateRanges: Record<string, string> = {
	"romex": "Feb 2025 – Present",
	"just-ingredients": "Jan 2026 – Present",
	"stardust": "Jan 2025 – Aug 2025",
	"marketing-school": "Aug 2025 – Dec 2025",
};

type Props = {
	project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
	return (
		<Link href={`/portfolio/${project.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 text-black group-hover:text-black">
						{dateRanges[project.slug] ?? ""}
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
