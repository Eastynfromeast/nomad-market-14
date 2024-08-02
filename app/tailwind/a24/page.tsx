export default function TailWindLast() {
	return (
		<main className="bg-rose-50 w-full min-h-screen p-5 flex flex-row justify-center items-center gap-10 ">
			<section className="relative min-w-iphone rounded-[2.5rem] bg-black p-4 ring-4 ring-zinc-800">
				<div>
					<span className="absolute left-1/2 top-1 h-10 w-[50%] -translate-x-1/2 rounded-2xl bg-black text-transparent">notch</span>
					<ul className="absolute -left-1.5 top-28 flex flex-col gap-3 *:w-2 *:rounded-sm *:bg-zinc-800 *:text-transparent">
						<li className="mb-4 h-8">소리</li>
						<li className="h-12">볼륨 업</li>
						<li className="h-12">볼륨 다운</li>
					</ul>
					<span className="absolute -right-1.5 top-44 h-20 w-2 bg-zinc-800 text-transparent">전원</span>
				</div>
				<div className="flex h-full min-h-full w-full flex-col overflow-hidden rounded-[2rem] bg-white  pt-11 pb-10  px-5">
					<header>
						<h1 className="text-4xl font-extrabold">Weather</h1>
					</header>
					<section>
						<ul>
							<li className="flex flex-row justify-between">
								<div>
									<h3>Casius</h3>
									<span>Mars, 12AM</span>
								</div>
								<div>
									<svg className="size-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path d="M14,24a1,1,0,0,1-1-1V18a1,1,0,0,1,2,0v5A1,1,0,0,1,14,24ZM6,24a1,1,0,0,1-1-1V18a1,1,0,0,1,2,0v5A1,1,0,0,1,6,24Zm12-2a1,1,0,0,1-1-1V16a1,1,0,0,1,2,0v5A1,1,0,0,1,18,22Zm-8,0a1,1,0,0,1-1-1V16a1,1,0,0,1,2,0v5A1,1,0,0,1,10,22ZM2,18.328a1,1,0,0,1-.777-.371A5.532,5.532,0,0,1,1.8,10.43a1,1,0,0,0,.345-.9,8.147,8.147,0,0,1-.033-2.889A7.945,7.945,0,0,1,8.5.138a8.052,8.052,0,0,1,8.734,4.438,1.039,1.039,0,0,0,.743.57A7.55,7.55,0,0,1,22.846,16.5a1,1,0,0,1-1.692-1.068,5.537,5.537,0,0,0-3.571-8.325,3.009,3.009,0,0,1-2.158-1.672A6,6,0,0,0,4.086,6.967a6.136,6.136,0,0,0,.024,2.18,3,3,0,0,1-.964,2.763A3.518,3.518,0,0,0,2.777,16.7,1,1,0,0,1,2,18.328Z" />
									</svg>
								</div>
							</li>
						</ul>
					</section>
				</div>
			</section>
			<div>2</div>
			<div>3</div>
		</main>
	);
}
