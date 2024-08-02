export default function TailWindLast() {
	return (
		<main className="bg-rose-50 w-full min-h-screen p-5 flex flex-row justify-center items-center gap-10 ">
			<section className="relative min-w-iphone rounded-[2.5rem] bg-black p-4 ring-4 ring-zinc-800">
				<div className="*:absolute *:text-transparent">
					<span className="left-1/2 top-1 h-10 w-[50%] -translate-x-1/2 rounded-2xl bg-black text-transparent">notch</span>
					<ul className="-left-1.5 top-28 flex flex-col gap-3 *:w-2 *:rounded-sm *:bg-zinc-800 *:text-transparent">
						<li className="mb-4 h-8">소리</li>
						<li className="h-12">볼륨 업</li>
						<li className="h-12">볼륨 다운</li>
					</ul>
					<span className="-right-1.5 top-44 h-20 w-2 bg-zinc-800 text-transparent">전원</span>
				</div>
				<div className="flex h-full min-h-full w-full flex-col overflow-hidden rounded-[2rem] bg-white  pt-14 pb-10  px-5">
					<header className="mb-5">
						<h1 className="text-4xl font-bold">Weather</h1>
					</header>
					<section>
						<ul className=" flex flex-col gap-5 *:overflow-hidden *:p-5 *:flex *:flex-row *:justify-between *:border-2 *:border-black *:rounded-xl *:border-b-[6px] *:transition ">
							<li className="hover:bg-green-400 hover:text-white hover:border-green-700 *:flex *:font-bold">
								<div className="flex-col">
									<h3 className="text-lg">Casius</h3>
									<span className="text-[12px]">Mars, 12AM</span>
								</div>
								<div className="felx-row items-center gap-4">
									<svg className="size-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path d="M14,24a1,1,0,0,1-1-1V18a1,1,0,0,1,2,0v5A1,1,0,0,1,14,24ZM6,24a1,1,0,0,1-1-1V18a1,1,0,0,1,2,0v5A1,1,0,0,1,6,24Zm12-2a1,1,0,0,1-1-1V16a1,1,0,0,1,2,0v5A1,1,0,0,1,18,22Zm-8,0a1,1,0,0,1-1-1V16a1,1,0,0,1,2,0v5A1,1,0,0,1,10,22ZM2,18.328a1,1,0,0,1-.777-.371A5.532,5.532,0,0,1,1.8,10.43a1,1,0,0,0,.345-.9,8.147,8.147,0,0,1-.033-2.889A7.945,7.945,0,0,1,8.5.138a8.052,8.052,0,0,1,8.734,4.438,1.039,1.039,0,0,0,.743.57A7.55,7.55,0,0,1,22.846,16.5a1,1,0,0,1-1.692-1.068,5.537,5.537,0,0,0-3.571-8.325,3.009,3.009,0,0,1-2.158-1.672A6,6,0,0,0,4.086,6.967a6.136,6.136,0,0,0,.024,2.18,3,3,0,0,1-.964,2.763A3.518,3.518,0,0,0,2.777,16.7,1,1,0,0,1,2,18.328Z" />
									</svg>
									<span className="text-4xl">85°</span>
								</div>
							</li>
							<li className="bg-yellow-400 hover:bg-green-400 hover:text-white hover:border-green-700 *:flex *:font-bold">
								<div className="flex-col">
									<h3 className="text-lg">Dlacria</h3>
									<span className="text-[12px]">Mars, 12AM</span>
								</div>
								<div className="felx-row items-center gap-4">
									<svg className="size-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path d="M14,24a1,1,0,0,1-1-1V18a1,1,0,0,1,2,0v5A1,1,0,0,1,14,24ZM6,24a1,1,0,0,1-1-1V18a1,1,0,0,1,2,0v5A1,1,0,0,1,6,24Zm12-2a1,1,0,0,1-1-1V16a1,1,0,0,1,2,0v5A1,1,0,0,1,18,22Zm-8,0a1,1,0,0,1-1-1V16a1,1,0,0,1,2,0v5A1,1,0,0,1,10,22ZM2,18.328a1,1,0,0,1-.777-.371A5.532,5.532,0,0,1,1.8,10.43a1,1,0,0,0,.345-.9,8.147,8.147,0,0,1-.033-2.889A7.945,7.945,0,0,1,8.5.138a8.052,8.052,0,0,1,8.734,4.438,1.039,1.039,0,0,0,.743.57A7.55,7.55,0,0,1,22.846,16.5a1,1,0,0,1-1.692-1.068,5.537,5.537,0,0,0-3.571-8.325,3.009,3.009,0,0,1-2.158-1.672A6,6,0,0,0,4.086,6.967a6.136,6.136,0,0,0,.024,2.18,3,3,0,0,1-.964,2.763A3.518,3.518,0,0,0,2.777,16.7,1,1,0,0,1,2,18.328Z" />
									</svg>
									<span className="text-4xl">85°</span>
								</div>
							</li>
							<li className="bg-teal-400 hover:bg-green-400 hover:text-white hover:border-green-700 *:flex *:font-bold">
								<div className="flex-col">
									<h3 className="text-lg">New York</h3>
									<span className="text-[12px]">USA, 12AM</span>
								</div>
								<div className="felx-row items-center gap-4">
									<svg className="size-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path d="M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z" />
									</svg>
									<span className="text-4xl">85°</span>
								</div>
							</li>
							<li className="bg-[#F85A2B] text-white hover:bg-green-400 hover:text-white hover:border-green-700 *:flex *:font-bold">
								<div className="flex-col">
									<h3 className="text-lg">Zomato</h3>
									<span className="text-[12px]">India, 12AM</span>
								</div>
								<div className="felx-row items-center gap-4">
									<svg className="size-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path d="M18,24a1,1,0,0,1-1-1V22a1,1,0,0,1,2,0v1A1,1,0,0,1,18,24Zm-6,0a1,1,0,0,1-1-1V22a1,1,0,0,1,2,0v1A1,1,0,0,1,12,24ZM6,24a1,1,0,0,1-1-1V22a1,1,0,0,1,2,0v1A1,1,0,0,1,6,24ZM5,19.973a1.032,1.032,0,0,1-.111-.006A5.526,5.526,0,0,1,1.8,10.43a1,1,0,0,0,.345-.9,8.147,8.147,0,0,1-.033-2.889A7.946,7.946,0,0,1,8.5.137a8.06,8.06,0,0,1,8.735,4.44,1.036,1.036,0,0,0,.742.569A7.5,7.5,0,0,1,19.4,19.39a1,1,0,0,1-.792-1.837A5.5,5.5,0,0,0,17.583,7.106a3.011,3.011,0,0,1-2.158-1.672A6,6,0,0,0,4.086,6.967,6.142,6.142,0,0,0,4.11,9.148a3.005,3.005,0,0,1-.964,2.762A3.522,3.522,0,0,0,5.11,17.979,1,1,0,0,1,5,19.973ZM15,18a1,1,0,0,1-1-1V16a1,1,0,0,1,2,0v1A1,1,0,0,1,15,18ZM9,18a1,1,0,0,1-1-1V16a1,1,0,0,1,2,0v1A1,1,0,0,1,9,18Z" />
									</svg>
									<span className="text-4xl">20°</span>
								</div>
							</li>
						</ul>
					</section>
					<div className="mt-12">
						<a
							href="#"
							className="overflow-hidden block text-black size-12 p-3 mx-auto border-black border-2 border-b-[5px] rounded-full transition hover:bg-black hover:text-white hover:border-neutral-400 "
						>
							<svg className="w-full fill-none stroke-[3px] stroke-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
							</svg>
						</a>
					</div>
				</div>
			</section>
			<div>2</div>
			<div>3</div>
		</main>
	);
}
