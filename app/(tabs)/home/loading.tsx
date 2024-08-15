export default function Loading() {
	return (
		<div className="p-5 flex flex-col gap-5 animate-pulse">
			{[...Array(10)].map((_, index) => (
				<div key={index} className="*:rounded-md flex gap-5 animate-pulse">
					<div className="bg-gray-600 size-28 " />
					<ul className="flex flex-col gap-2 *:rounded-md *:bg-gray-600 *:h-5">
						<li className="w-40" />
						<li className="w-20" />
						<li className="w-10" />
					</ul>
				</div>
			))}
		</div>
	);
}
