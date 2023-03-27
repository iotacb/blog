export default function TitleComponent(props: any) {
	return (
		<div className="relative">
			<span className="absolute -left-8 hidden text-3xl font-bold text-zinc-400 lg:block">
				#
			</span>
			<h1 className="text-3xl font-bold">{props.title}</h1>
		</div>
	);
}
