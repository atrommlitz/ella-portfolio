"use client";

interface PdfEmbedProps {
	src: string;
}

export function PdfEmbed({ src }: PdfEmbedProps) {
	return (
		<div className="w-full my-6" style={{ height: "80vh" }}>
			<iframe
				src={src}
				className="w-full h-full rounded-lg border border-zinc-200"
				title="PDF Viewer"
			/>
		</div>
	);
}
