export default function ProjectCard(props: any) {
	return (
		<div className="relative flex gap-4 rounded-lg border border-border bg-gradient-to-r from-card to-zinc-800 p-4">
			<img
				className="aspect-square w-24 object-contain"
				src={props.image}
			></img>
			<div className="flex flex-col gap-4 xs:gap-0">
				<a
					target="_blank"
					rel="noreferrer noopener"
					href={props.link}
					className="cursor-pointer text-3xl font-bold hover:underline"
				>
					{props.title}
				</a>
				<p className="text-zinc-300">{props.description}</p>
				<div className="right-4 bottom-4 flex gap-2 xs:absolute">
					<a
						target="_blank"
						rel="noreferrer noopener"
						className="group flex cursor-pointer items-center justify-between gap-1 hover:underline"
						href={props.source}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 98 98"
							className="aspect-square w-4"
						>
							<path
								d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
								fill="#fff"
							/>
						</svg>
						<span>Source</span>
					</a>
					<a
						target="_blank"
						rel="noreferrer noopener"
						className="group flex cursor-pointer items-center justify-between gap-1 hover:underline"
						href={props.demo}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className="aspect-square w-4"
						>
							<path
								fillRule="evenodd"
								fill="#fff"
								d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
								clipRule="evenodd"
							/>
						</svg>

						<span>Demo</span>
					</a>
				</div>
			</div>
		</div>
	);
}
