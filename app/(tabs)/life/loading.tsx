export default function LifeLoading() {
	return (
		<div className="p-5 flex flex-col gap-5 animate-pulse">
			{[...Array(10)].map((_, index) => (
				<div key={index} className="*:rounded-md flex gap-5 animate-pulse">
					<ul className="flex flex-col gap-2">
						<li className="w-20 rounded-md bg-gray-600 h-5" />
						<li className="w-40 rounded-md bg-gray-600 h-5" />
						<ul className="flex w-full bg-transparent gap-2 *:rounded-md *:bg-gray-600 ">
							<li className="w-5 h-5" />
							<li className="w-5 h-5" />
						</ul>
					</ul>
				</div>
			))}
		</div>
	);
}
