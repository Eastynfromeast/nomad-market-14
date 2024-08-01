export default function Home() {
	return (
		<main className="bg-gray-100  h-screen flex items-center justify-center p-10 ">
			<div className="bg-white w-full max-w-screen-sm p-5 rounded-2xl shadow-lg flex flex-col gap-3">
				{["Nuri", "Me", "You", "Jane", ""].map((person, index) => (
					<div key={index} className="flex items-center gap-5 group">
						<div className="size-10 rounded-full bg-blue-400" />
						<span className="text-lg font-medium empty:w-24 empty:h-5 empty:rounded-full empty:animate-pulse empty:bg-gray-300 group-hover:text-red-500">
							{person}
						</span>
						<div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full relative">
							<span className="z-10">{index}</span>
							<div className="size-6 bg-red-500 rounded-full absolute" />
						</div>
					</div>
				))}
				<div className="group flex flex-col">
					<input className="bg-gray-200 w-full" type="email" placeholder="Write your email" />
					<span className="group-focus-within:block hidden">Make sure it is a valid email...</span>
					<button className="btn">Submit</button>
					<a href="#">link</a>
				</div>
			</div>
		</main>
	);
}
