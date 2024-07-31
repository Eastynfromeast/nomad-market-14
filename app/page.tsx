export default function Home() {
	return (
		<main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-10 ">
			<div className="bg-white w-full max-w-screen-sm p-5 rounded-2xl shadow-lg flex flex-col gap-2 md:flex-row ">
				<input
					className="w-full rounded-full h-10 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
					type="text"
					placeholder="Search here..."
				/>
				<button className="bg-black  text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium outline-none md:px-10">
					Search
				</button>
			</div>
		</main>
	);
}
