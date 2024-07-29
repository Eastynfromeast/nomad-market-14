export default function Home() {
	return (
		<main className="bg-gray-100 h-screen flex items-center justify-center p-10 dark:bg-gray-700">
			<div className="bg-white w-full max-w-screen-sm p-5 rounded-2xl shadow-lg dark:bg-gray-600 ">
				<div className="flex justify-between items-center">
					<div className="flex flex-col">
						<span className="text-gray-600 font-semibold -mb-1 dark:text-gray-300">In transit</span>
						<span className="text-4xl font-semibold dark:text-white">Coolblue</span>
					</div>
					<div className="size-12 bg-orange-400 rounded-full" />
				</div>
				<div className="my-2 flex items-center gap-2">
					<span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full hover:bg-green-500 hover:scale-125 transition">
						Today
					</span>
					<span className="dark:text-gray-100">9:30-10:30</span>
				</div>
				<div className="relative">
					<div className="bg-gray-200 w-full h-2 rounded-full absolute" />
					<div className="bg-green-400 w-2/3 h-2 rounded-full absolute" />
				</div>
				<div className="flex justify-between items-center mt-5 text-gray-600 dark:text-gray-300">
					<span>Expected</span>
					<span>Sorting center</span>
					<span>In transit</span>
					<span className="text-gray-400 dark:text-gray-500">Delivered</span>
				</div>
			</div>
		</main>
	);
}
