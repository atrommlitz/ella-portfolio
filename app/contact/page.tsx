"use client";
import { Instagram, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

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

function SocialLink({ s }: { s: typeof socials[number] }) {
	return (
		<Card>
			<Link
				href={s.href}
				target="_blank"
				className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
			>
				<span
					className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
					aria-hidden="true"
				/>
				<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
					{s.icon}
				</span>{" "}
				<div className="z-10 flex flex-col items-center">
					<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
						{s.handle}
					</span>
					<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
						{s.label}
					</span>
				</div>
			</Link>
		</Card>
	);
}

export default function Example() {
	return (
		<div className=" bg-transparent">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="flex flex-col w-full gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16">
					<div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-16">
						{socials.map((s) => (
							<SocialLink key={s.href} s={s} />
						))}
					</div>
					<Card>
						<Link
							href={email.href}
							target="_blank"
							className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
						>
							<span
								className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
							/>
							<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
								{email.icon}
							</span>{" "}
							<div className="z-10 flex flex-col items-center">
								<span className="text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
									{email.handle}
								</span>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									{email.label}
								</span>
							</div>
						</Link>
					</Card>
				</div>
			</div>
		</div>
	);
}
