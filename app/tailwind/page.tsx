export default function Tailwind() {
	return (
		<div className="relative flex min-h-screen flex-col justify-center items-center overflow-hidden bg-orange-500 py-6 sm:py-12 font-sans">
			<div className="bg-black w-[398px] h-[844px] p-4 rounded-[2.5rem] relative ring-gray-800 ring-4 ">
				<span className="bg-black text-transparent absolute top-1 left-1/2 -translate-x-1/2 w-[50%] h-10 rounded-2xl">notch</span>
				<ul className="absolute top-28 -left-1.5 flex flex-col gap-3  *:text-transparent *:bg-gray-900 *:w-2 *:rounded-sm">
					<li className="h-9 mb-4">소리</li>
					<li className="h-12">볼륨 업</li>
					<li className="h-12">볼륨 다운</li>
				</ul>
				<span className="bg-gray-800 text-transparent w-2 h-20 absolute top-44 -right-1.5">전원</span>
				<div className="bg-white flex flex-col w-full  min-h-full h-full px-2 pt-10 rounded-[2rem] overflow-hidden *:w-full">
					<header className="py-2 px-1 border-b-gray-400 border-b-2 *:text-md *:inline-block *:font-medium">
						<span className="mr-1">March</span>
						<span>2024</span>
						<span className="text-gray-600 inline-block align-middle w-7 px-1 ml-1">
							<svg className="stroke-1 stroke-current fill-none w-full" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
							</svg>
						</span>
					</header>
					<section className="flex flex-col">
						<div>
							<p className="py-7 text-center leading-tight font-medium text-md">
								Hello, Nulnu! <br />
								Your medicines for today
							</p>
						</div>
						<div className="py-2">
							<ul className="grid grid-cols-6 items-center flex-wrap px-1 gap-2 *:flex *:flex-col *:items-center *:rounded-2xl *:py-1 *:px-2 *:gap-3 *:transition-all">
								<li className="hover:bg-blue-200 *:inline-block">
									<span className="text-2xl font-semibold">29</span>
									<span className="text-xs">Mon</span>
								</li>
								<li className="hover:bg-blue-200 *:inline-block">
									<span className="text-2xl font-semibold">30</span>
									<span className="text-xs">Tue</span>
								</li>
								<li className="hover:bg-blue-200 *:inline-block bg-blue-400">
									<span className="text-2xl font-semibold">31</span>
									<span className="text-xs">Wed</span>
								</li>
								<li className="hover:bg-blue-200 *:inline-block">
									<span className="text-2xl font-semibold">01</span>
									<span className="text-xs">Thu</span>
								</li>
								<li className="hover:bg-blue-200 *:inline-block">
									<span className="text-2xl font-semibold">02</span>
									<span className="text-xs">Fri</span>
								</li>
								<li className="hover:bg-blue-200 *:inline-block">
									<span className="text-2xl font-semibold">03</span>
									<span className="text-xs">Sat</span>
								</li>
							</ul>
						</div>
					</section>
					<section className="mt-24">
						<ul className="w-full flex flex-col gap-2 *:relative">
							<li className="w-full group *:w-full *:h-48 *:transition-all *:rounded-2xl *:flex *:p-4">
								<div className="bg-yellow-300 flex-col justify-between  z-10 relative  hover:w-[85%] hover:text-gray-600 *:font-medium">
									<div>
										<h3 className="text-2xl font-medium">Nora - BE</h3>
										<p className="text-xs -mt-1">Norenthindrone - 0.35mg</p>
									</div>
									<p className="text-sm">7h30AM</p>
								</div>
								<div className="bg-blue-400 absolute top-0 right-0 flex-row-reverse items-center">
									<span className="block overflow-hidden size-5">
										<svg
											className="fill-none stroke-[3px] stroke-black group-hover:stroke-white"
											data-slot="icon"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
										>
											<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
										</svg>
									</span>
								</div>
							</li>
							<li className="w-full group *:w-full *:h-48 *:transition-all *:rounded-2xl *:flex *:p-4">
								<div className="bg-green-400 flex-col justify-between z-10 relative  hover:w-[85%] hover:text-gray-600 *:font-medium">
									<div>
										<h3 className="text-2xl font-medium">Feosol</h3>
										<p className="text-xs -mt-1">Ferrous Sulfate</p>
									</div>
									<p className="text-sm">7h30AM</p>
								</div>
								<div className="bg-blue-400 absolute top-0 right-0 flex-row-reverse items-center">
									<span className="block overflow-hidden size-5">
										<svg
											className="fill-none stroke-[3px] stroke-black group-hover:stroke-white"
											data-slot="icon"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
										>
											<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
										</svg>
									</span>
								</div>
							</li>
						</ul>
					</section>
				</div>
			</div>
		</div>
	);
}
