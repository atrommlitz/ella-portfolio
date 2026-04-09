"use client";
import { Instagram, Mail, Linkedin, FileText } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const cardClass = "p-4 relative flex flex-col items-center gap-3 duration-700 group md:gap-6 md:py-12 md:p-10";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/ella-r-hansen/",
		label: "LinkedIn",
		handle: "ella-r-hansen",
	},
	{
		icon: <Instagram size={20} />,
		href: "https://www.instagram.com/_ella.hansen/",
		label: "Instagram",
		handle: "Ella Hansen",
	},
];

const email = {
	icon: <Mail size={20} />,
	href: "mailto:gabriellarosehansen@gmail.com",
	label: "Email",
	handle: "gabriellarosehansen@gmail.com",
};

const resume = {
	icon: <FileText size={20} />,
	href: "/resume/1 page Ella Hansen Resume - Just Ingredients.pdf",
	label: "Resume",
	handle: "View Resume",
};

function ContactCard({ icon, href, label, handle }: { icon: React.ReactNode; href: string; label: string; handle: string }) {
	return (
		<Card>
			<Link
				href={href}
				target="_blank"
				className={cardClass}
			>
				<span
					className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-400 via-zinc-400/50 to-transparent"
					aria-hidden="true"
				/>
				<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-black group-hover:text-black group-hover:bg-zinc-100 border-zinc-400 bg-white group-hover:border-zinc-700">
					{icon}
				</span>
				<div className="z-10 flex flex-col items-center">
					<span className="text-lg font-medium duration-150 text-black group-hover:text-black font-display">
						{handle}
					</span>
					<span className="mt-2 text-sm text-center duration-1000 text-black group-hover:text-black">
						{label}
					</span>
				</div>
			</Link>
		</Card>
	);
}

export default function Example() {
	return (
		<div className="bg-transparent">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="flex flex-col w-full gap-6 mx-auto mt-32 sm:mt-0">
					<div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
						{socials.map((s) => (
							<ContactCard key={s.href} {...s} />
						))}
					</div>
					<div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
						<ContactCard {...email} />
						<ContactCard {...resume} />
					</div>
				</div>
			</div>
		</div>
	);
}
