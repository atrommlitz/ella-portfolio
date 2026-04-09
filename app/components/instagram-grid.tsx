"use client";

import { useEffect } from "react";

interface InstagramGridProps {
	urls: string[];
}

export function InstagramGrid({ urls }: InstagramGridProps) {
	useEffect(() => {
		if ((window as any).instgrm) {
			(window as any).instgrm.Embeds.process();
		} else {
			const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
			if (!existing) {
				const script = document.createElement("script");
				script.src = "https://www.instagram.com/embed.js";
				script.async = true;
				document.body.appendChild(script);
			}
		}
	}, []);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
			{urls.map((url) => (
				<div key={url} className="flex justify-center">
					<blockquote
						className="instagram-media"
						data-instgrm-captioned
						data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
						data-instgrm-version="14"
						style={{
							background: "#FFF",
							border: 0,
							borderRadius: "3px",
							boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
							margin: "1px",
							maxWidth: "540px",
							minWidth: "326px",
							padding: 0,
							width: "100%",
						}}
					/>
				</div>
			))}
		</div>
	);
}
