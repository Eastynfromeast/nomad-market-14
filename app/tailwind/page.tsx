export default function Tailwind() {
	return (
		<div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-orange-500 py-6 font-sans sm:py-12">
			<div className="relative h-[844px] min-w-[398px] rounded-[2.5rem] bg-black p-4 ring-4 ring-zinc-800">
				<span className="absolute left-1/2 top-1 h-10 w-[50%] -translate-x-1/2 rounded-2xl bg-black text-transparent">notch</span>
				<ul className="absolute -left-1.5 top-28 flex flex-col gap-3 *:w-2 *:rounded-sm *:bg-zinc-800 *:text-transparent">
					<li className="mb-4 h-8">소리</li>
					<li className="h-12">볼륨 업</li>
					<li className="h-12">볼륨 다운</li>
				</ul>
				<span className="absolute -right-1.5 top-44 h-20 w-2 bg-zinc-800 text-transparent">전원</span>
				<div className="flex h-full min-h-full w-full flex-col overflow-hidden rounded-[2rem] bg-white px-2 pt-10 *:w-full">
					<header className="*:text-md border-b-2 border-b-gray-400 px-1 py-2 *:inline-block *:font-medium">
						<span className="mr-1">March</span>
						<span>2024</span>
						<span className="ml-1 inline-block w-7 px-1 align-middle text-gray-600">
							<svg className="w-full fill-none stroke-current stroke-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
							</svg>
						</span>
					</header>
					<section className="flex flex-col">
						<div>
							<p className="text-md py-7 text-center font-medium leading-tight">
								Hello, Nulnu! <br />
								Your medicines for today
							</p>
						</div>
						<div className="py-2">
							<ul className="grid grid-cols-6 flex-wrap items-center gap-2 px-1 *:flex *:flex-col *:items-center *:gap-3 *:rounded-2xl *:px-2 *:py-1 *:transition-all">
								<li className="*:inline-block *:font-medium hover:bg-blue-200">
									<span className="text-2xl">29</span>
									<span className="text-xs">Mon</span>
								</li>
								<li className="*:inline-block  *:font-medium hover:bg-blue-200">
									<span className="text-2xl">30</span>
									<span className="text-xs">Tue</span>
								</li>
								<li className="bg-blue-400 *:inline-bloc *:font-medium hover:bg-blue-200">
									<span className="text-2xl">31</span>
									<span className="text-xs">Wed</span>
								</li>
								<li className="*:inline-block *:font-medium hover:bg-blue-200">
									<span className="text-2xl">01</span>
									<span className="text-xs">Thu</span>
								</li>
								<li className="*:inline-block *:font-medium hover:bg-blue-200">
									<span className="text-2xl">02</span>
									<span className="text-xs">Fri</span>
								</li>
								<li className="*:inline-block *:font-medium hover:bg-blue-200">
									<span className="text-2xl">03</span>
									<span className="text-xs">Sat</span>
								</li>
							</ul>
						</div>
					</section>
					<section className="mt-24">
						<ul className="flex w-full flex-col gap-2 *:relative">
							<li className="group w-full *:flex *:h-48 *:w-full *:rounded-2xl *:p-4 *:transition-all">
								<div className="relative z-10 flex-col justify-between bg-yellow-300 *:font-medium hover:w-[85%] hover:text-neutral-50">
									<div>
										<h3 className="text-2xl font-medium">Nora - BE</h3>
										<p className="-mt-1 text-xs">Norenthindrone - 0.35mg</p>
									</div>
									<p className="text-sm">7h30AM</p>
								</div>
								<div className="absolute right-0 top-0 flex-row-reverse items-center bg-blue-400">
									<span className="block size-5 overflow-hidden">
										<svg
											className="fill-none stroke-black stroke-[3px] group-hover:stroke-white"
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
							<li className="group w-full *:flex *:h-48 *:w-full *:rounded-2xl *:p-4 *:transition-all">
								<div className="relative z-10 flex-col justify-between bg-green-400 *:font-medium hover:w-[85%] hover:text-neutral-50">
									<div>
										<h3 className="text-2xl font-medium">Feosol</h3>
										<p className="-mt-1 text-xs">Ferrous Sulfate</p>
									</div>
									<p className="text-sm">7h30AM</p>
								</div>
								<div className="absolute right-0 top-0 flex-row-reverse items-center bg-blue-400">
									<span className="block size-5 overflow-hidden">
										<svg
											className="fill-none stroke-black stroke-[3px] group-hover:stroke-white"
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
