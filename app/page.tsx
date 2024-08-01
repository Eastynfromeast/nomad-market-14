export default function Home() {
	return (
		<main className="bg-gray-100  h-screen flex items-center justify-center p-10 ">
			<div className="bg-white w-full max-w-screen-sm p-5 rounded-2xl shadow-lg flex flex-col gap-3">
				{["Nuri", "Me", "You", "Jane"].map((person, index) => (
					<div key={index} className="flex items-center gap-5 *:animate-pulse  ">
						<div className="size-10 rounded-full bg-blue-400" />
						<div className="w-40 h-3 rounded-full bg-gray-300 text-transparent" />
						<div className="w-20 h-3 rounded-full bg-gray-300 text-transparent" />
					</div>
				))}
			</div>
		</main>
	);
}
