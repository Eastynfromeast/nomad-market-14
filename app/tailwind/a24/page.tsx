export default function TailWindLast() {
	return (
		<main className="bg-teal-100 min-h-screen min-w-full w-fit p-5 flex flex-row flex-wrap justify-center items-center gap-10 ">
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
				<div className="flex h-full min-h-full w-full flex-col overflow-hidden rounded-[2rem] bg-sky-100 pt-14 pb-10  px-5">
					<header className="mb-5">
						<h1 className="text-4xl font-bold">Weather</h1>
					</header>
					<section>
						<ul className=" flex flex-col gap-5 *:overflow-hidden *:p-5 *:flex *:flex-row *:justify-between *:border-2 *:border-black *:rounded-xl *:border-b-[6px] *:transition ">
							<li className="bg-white hover:bg-green-400 hover:text-white hover:border-green-700 *:flex *:font-bold">
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
							className="overflow-hidden block bg-white text-black size-12 p-3 mx-auto border-black border-2 border-b-[5px] rounded-full transition hover:bg-black hover:text-white hover:border-neutral-400 "
						>
							<svg className="w-full fill-none stroke-[3px] stroke-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
							</svg>
						</a>
					</div>
				</div>
			</section>
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
				<div className="flex h-full min-h-full w-full flex-col overflow-hidden rounded-[2rem] bg-white pt-14 pb-10  px-5">
					<header>
						<a
							href="#"
							className="overflow-hidden block bg-white text-black size-10 p-1 border-black border-2 border-b-[5px] rounded-full transition hover:bg-black hover:text-white hover:border-neutral-400 "
						>
							<svg
								className="w-full fill-none stroke-2 stroke-current"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
							</svg>
						</a>
					</header>
					<section>
						<div className="text-center *:font-extrabold">
							<p className="uppercase text-sm text-zinc-600">simple tag</p>
							<h1 className="text-3xl py-5">Work with best designers </h1>
						</div>
						<ul className="grid grid-cols-2 gap-2 *:text-white *:min-h-40 *:w-full *:relative *:text-center *:p-5 *:rounded-xl *:border-black *:border-2 *:inline-flex *:items-center *:transition">
							<li className="bg-yellow-400 group hover:text-blue-600 hover:border-blue-600 hover:border-4 ">
								<svg className="fill-current mx-auto size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path d="M15,4.43c0,.2,.12,.39,.31,.47l2.66,1.12,1.07,2.66c.08,.19,.26,.31,.46,.31s.39-.12,.46-.31l1.06-2.66,2.66-1.06c.19-.08,.31-.26,.31-.46s-.12-.39-.31-.46l-2.66-1.06-1.06-2.66c-.15-.38-.78-.38-.93,0l-1.06,2.65-2.65,1c-.19,.07-.32,.25-.32,.46Zm3.53-.6c.13-.05,.23-.15,.29-.28l.68-1.7,.68,1.7c.05,.13,.15,.23,.28,.28l1.7,.68-1.7,.68c-.13,.05-.23,.15-.28,.28l-.68,1.7-.68-1.7c-.05-.12-.15-.22-.27-.28l-1.71-.72,1.69-.64Zm-4.02,5.66l-.53-2.11c-.06-.22-.26-.38-.48-.38s-.43,.16-.48,.38l-.53,2.1-2.1,.48c-.22,.05-.38,.25-.39,.48,0,.23,.15,.43,.37,.49l2.12,.57,.53,2.11c.06,.22,.26,.38,.48,.38s.43-.16,.48-.38l.53-2.11,2.11-.53c.22-.06,.38-.26,.38-.48s-.16-.43-.38-.48l-2.11-.53Zm-.53,1.13c-.18,.04-.32,.18-.36,.36l-.12,.46-.12-.46c-.04-.18-.18-.31-.35-.36l-.47-.13,.41-.09c.18-.04,.38-.23,.42-.42l.1-.42,.12,.46c.04,.18,.18,.32,.36,.36l.46,.12-.46,.12Zm9.52-2.62c-.28,0-.5,.22-.5,.5v11c0,.09,0,.19-.01,.28l-2.9-2.9c-1.15-1.15-3.02-1.15-4.17,0l-.58,.58c-.74,.74-1.94,.74-2.68,0l-5.58-5.58c-1.15-1.15-3.02-1.15-4.17,0l-1.92,1.92V4.5c0-1.93,1.57-3.5,3.5-3.5H15.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5H4.5C2.02,0,0,2.02,0,4.5v15c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5V8.5c0-.28-.22-.5-.5-.5Zm-4,15H4.5c-1.93,0-3.5-1.57-3.5-3.5v-4.29l2.62-2.62c.76-.76,2-.76,2.75,0l5.58,5.58c1.13,1.13,2.96,1.13,4.09,0l.58-.58c.76-.76,2-.76,2.75,0l3.33,3.33c-.54,1.23-1.77,2.09-3.2,2.09ZM7,5c.55,0,1,.45,1,1s-.45,1-1,1-1-.45-1-1,.45-1,1-1Z" />
								</svg>
								<span className="block absolute left-0 bottom-3 w-full text-xs opacity-0 translate-y-5 transition group-hover:opacity-100 group-hover:translate-y-0">
									designed by nulnu.
								</span>
							</li>
							<li className="bg-teal-500 group hover:text-blue-600 hover:border-blue-600 hover:border-4 ">
								<svg className="fill-current mx-auto size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path d="M15,4.43c0,.2,.12,.39,.31,.47l2.66,1.12,1.07,2.66c.08,.19,.26,.31,.46,.31s.39-.12,.46-.31l1.06-2.66,2.66-1.06c.19-.08,.31-.26,.31-.46s-.12-.39-.31-.46l-2.66-1.06-1.06-2.66c-.15-.38-.78-.38-.93,0l-1.06,2.65-2.65,1c-.19,.07-.32,.25-.32,.46Zm3.53-.6c.13-.05,.23-.15,.29-.28l.68-1.7,.68,1.7c.05,.13,.15,.23,.28,.28l1.7,.68-1.7,.68c-.13,.05-.23,.15-.28,.28l-.68,1.7-.68-1.7c-.05-.12-.15-.22-.27-.28l-1.71-.72,1.69-.64Zm-4.02,5.66l-.53-2.11c-.06-.22-.26-.38-.48-.38s-.43,.16-.48,.38l-.53,2.1-2.1,.48c-.22,.05-.38,.25-.39,.48,0,.23,.15,.43,.37,.49l2.12,.57,.53,2.11c.06,.22,.26,.38,.48,.38s.43-.16,.48-.38l.53-2.11,2.11-.53c.22-.06,.38-.26,.38-.48s-.16-.43-.38-.48l-2.11-.53Zm-.53,1.13c-.18,.04-.32,.18-.36,.36l-.12,.46-.12-.46c-.04-.18-.18-.31-.35-.36l-.47-.13,.41-.09c.18-.04,.38-.23,.42-.42l.1-.42,.12,.46c.04,.18,.18,.32,.36,.36l.46,.12-.46,.12Zm9.52-2.62c-.28,0-.5,.22-.5,.5v11c0,.09,0,.19-.01,.28l-2.9-2.9c-1.15-1.15-3.02-1.15-4.17,0l-.58,.58c-.74,.74-1.94,.74-2.68,0l-5.58-5.58c-1.15-1.15-3.02-1.15-4.17,0l-1.92,1.92V4.5c0-1.93,1.57-3.5,3.5-3.5H15.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5H4.5C2.02,0,0,2.02,0,4.5v15c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5V8.5c0-.28-.22-.5-.5-.5Zm-4,15H4.5c-1.93,0-3.5-1.57-3.5-3.5v-4.29l2.62-2.62c.76-.76,2-.76,2.75,0l5.58,5.58c1.13,1.13,2.96,1.13,4.09,0l.58-.58c.76-.76,2-.76,2.75,0l3.33,3.33c-.54,1.23-1.77,2.09-3.2,2.09ZM7,5c.55,0,1,.45,1,1s-.45,1-1,1-1-.45-1-1,.45-1,1-1Z" />
								</svg>
								<span className="block absolute left-0 bottom-3 w-full text-xs opacity-0 translate-y-5 transition group-hover:opacity-100 group-hover:translate-y-0">
									designed by nulnu.
								</span>
							</li>
							<li className="bg-pink-400 group hover:text-blue-600 hover:border-blue-600 hover:border-4">
								<svg className="fill-current mx-auto size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path d="M15,4.43c0,.2,.12,.39,.31,.47l2.66,1.12,1.07,2.66c.08,.19,.26,.31,.46,.31s.39-.12,.46-.31l1.06-2.66,2.66-1.06c.19-.08,.31-.26,.31-.46s-.12-.39-.31-.46l-2.66-1.06-1.06-2.66c-.15-.38-.78-.38-.93,0l-1.06,2.65-2.65,1c-.19,.07-.32,.25-.32,.46Zm3.53-.6c.13-.05,.23-.15,.29-.28l.68-1.7,.68,1.7c.05,.13,.15,.23,.28,.28l1.7,.68-1.7,.68c-.13,.05-.23,.15-.28,.28l-.68,1.7-.68-1.7c-.05-.12-.15-.22-.27-.28l-1.71-.72,1.69-.64Zm-4.02,5.66l-.53-2.11c-.06-.22-.26-.38-.48-.38s-.43,.16-.48,.38l-.53,2.1-2.1,.48c-.22,.05-.38,.25-.39,.48,0,.23,.15,.43,.37,.49l2.12,.57,.53,2.11c.06,.22,.26,.38,.48,.38s.43-.16,.48-.38l.53-2.11,2.11-.53c.22-.06,.38-.26,.38-.48s-.16-.43-.38-.48l-2.11-.53Zm-.53,1.13c-.18,.04-.32,.18-.36,.36l-.12,.46-.12-.46c-.04-.18-.18-.31-.35-.36l-.47-.13,.41-.09c.18-.04,.38-.23,.42-.42l.1-.42,.12,.46c.04,.18,.18,.32,.36,.36l.46,.12-.46,.12Zm9.52-2.62c-.28,0-.5,.22-.5,.5v11c0,.09,0,.19-.01,.28l-2.9-2.9c-1.15-1.15-3.02-1.15-4.17,0l-.58,.58c-.74,.74-1.94,.74-2.68,0l-5.58-5.58c-1.15-1.15-3.02-1.15-4.17,0l-1.92,1.92V4.5c0-1.93,1.57-3.5,3.5-3.5H15.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5H4.5C2.02,0,0,2.02,0,4.5v15c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5V8.5c0-.28-.22-.5-.5-.5Zm-4,15H4.5c-1.93,0-3.5-1.57-3.5-3.5v-4.29l2.62-2.62c.76-.76,2-.76,2.75,0l5.58,5.58c1.13,1.13,2.96,1.13,4.09,0l.58-.58c.76-.76,2-.76,2.75,0l3.33,3.33c-.54,1.23-1.77,2.09-3.2,2.09ZM7,5c.55,0,1,.45,1,1s-.45,1-1,1-1-.45-1-1,.45-1,1-1Z" />
								</svg>
								<span className="block absolute left-0 bottom-3 w-full text-xs opacity-0 translate-y-5 transition group-hover:opacity-100 group-hover:translate-y-0">
									designed by nulnu.
								</span>
							</li>
							<li className="bg-orange-600 group hover:text-blue-600 hover:border-blue-600 hover:border-4 ">
								<svg className="fill-current mx-auto size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path d="M15,4.43c0,.2,.12,.39,.31,.47l2.66,1.12,1.07,2.66c.08,.19,.26,.31,.46,.31s.39-.12,.46-.31l1.06-2.66,2.66-1.06c.19-.08,.31-.26,.31-.46s-.12-.39-.31-.46l-2.66-1.06-1.06-2.66c-.15-.38-.78-.38-.93,0l-1.06,2.65-2.65,1c-.19,.07-.32,.25-.32,.46Zm3.53-.6c.13-.05,.23-.15,.29-.28l.68-1.7,.68,1.7c.05,.13,.15,.23,.28,.28l1.7,.68-1.7,.68c-.13,.05-.23,.15-.28,.28l-.68,1.7-.68-1.7c-.05-.12-.15-.22-.27-.28l-1.71-.72,1.69-.64Zm-4.02,5.66l-.53-2.11c-.06-.22-.26-.38-.48-.38s-.43,.16-.48,.38l-.53,2.1-2.1,.48c-.22,.05-.38,.25-.39,.48,0,.23,.15,.43,.37,.49l2.12,.57,.53,2.11c.06,.22,.26,.38,.48,.38s.43-.16,.48-.38l.53-2.11,2.11-.53c.22-.06,.38-.26,.38-.48s-.16-.43-.38-.48l-2.11-.53Zm-.53,1.13c-.18,.04-.32,.18-.36,.36l-.12,.46-.12-.46c-.04-.18-.18-.31-.35-.36l-.47-.13,.41-.09c.18-.04,.38-.23,.42-.42l.1-.42,.12,.46c.04,.18,.18,.32,.36,.36l.46,.12-.46,.12Zm9.52-2.62c-.28,0-.5,.22-.5,.5v11c0,.09,0,.19-.01,.28l-2.9-2.9c-1.15-1.15-3.02-1.15-4.17,0l-.58,.58c-.74,.74-1.94,.74-2.68,0l-5.58-5.58c-1.15-1.15-3.02-1.15-4.17,0l-1.92,1.92V4.5c0-1.93,1.57-3.5,3.5-3.5H15.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5H4.5C2.02,0,0,2.02,0,4.5v15c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5V8.5c0-.28-.22-.5-.5-.5Zm-4,15H4.5c-1.93,0-3.5-1.57-3.5-3.5v-4.29l2.62-2.62c.76-.76,2-.76,2.75,0l5.58,5.58c1.13,1.13,2.96,1.13,4.09,0l.58-.58c.76-.76,2-.76,2.75,0l3.33,3.33c-.54,1.23-1.77,2.09-3.2,2.09ZM7,5c.55,0,1,.45,1,1s-.45,1-1,1-1-.45-1-1,.45-1,1-1Z" />
								</svg>
								<span className="block absolute left-0 bottom-3 w-full text-xs opacity-0 translate-y-5 transition group-hover:opacity-100 group-hover:translate-y-0">
									designed by nulnu.
								</span>
							</li>
						</ul>
					</section>
					<div className="mt-12">
						<a
							href="#"
							className="overflow-hidden block bg-blue-600 text-white border-transparent border-2 w-full p-3 mx-auto transition-color text-center rounded-xl hover:bg-white hover:text-blue-600 hover:border-blue-600"
						>
							<span className="text-lg font-bold">Let's get it done!</span>
						</a>
					</div>
				</div>
			</section>
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
				<div className="flex h-full min-h-full w-full flex-col overflow-hidden rounded-[2rem] bg-yellow-400 pt-14 pb-10  px-5">
					<header className="w-full relative">
						<a
							href="#"
							className="overflow-hidden block absolute left-0 top-0 bg-white text-black size-10 p-2 border-black border-2 border-b-[5px] rounded-full transition text-center hover:bg-black hover:text-white hover:border-neutral-400"
						>
							<svg
								className="w-full fill-none stroke-current stroke-2 transition-all -ml-[1px] group-hover:scale-75"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
							</svg>
						</a>
						<h2 className="w-full font-extrabold text-xl text-center py-1">Friends</h2>
					</header>
					<section className="mt-5">
						<div className="relative">
							<input
								className="border-black border-2 border-b-[6px] w-full rounded-2xl px-3 py-2 font-medium placeholder:text-black focus:border-blue-600 peer"
								type="text"
								placeholder="Search with love..."
							/>
							<button className="size-6 absolute right-2 top-[10px]  transition-transform hover:scale-90">
								<svg className="fill-none stroke-2 stroke-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
								</svg>
							</button>
							<span className="hidden pt-1 text-xs text-blue-600 font-bold peer-focus:block peer-valid:hidden">You can search with names!</span>
						</div>
						<ul className="flex w-full flex-col gap-4 py-4 pt-6 *:relative *:flex *:items-center *:justify-between *:rounded-xl *:border-2 *:border-black *:bg-white *:p-3 *:transition-all">
							<li className="*:flex hover:border-blue-700 hover:bg-blue-300 hover:text-white">
								<div className="space-x-3">
									<img
										className="size-12 rounded-full border-2 border-black"
										src="https://cdn.jsdelivr.net/gh/Eastynfromeast/react-challenge-study/src/images/img_nurinu_240405_0.jpg"
										alt="nurinu1"
									/>
									<div className="flex flex-col justify-center">
										<h4 className="text-xl font-bold">NuriNu A</h4>
										<p className="text-sm">Pro Promenader</p>
									</div>
								</div>
								<button className="rounded-lg border-2 border-b-4 border-black bg-yellow-400 px-3 py-1 text-xs font-bold text-black transition-all hover:bg-green-400 hover:shadow-inner">
									Invite
								</button>
							</li>
							<li className="*:flex hover:border-blue-700 hover:bg-blue-300 hover:text-white">
								<div className="space-x-3">
									<img
										className="size-12 rounded-full border-2 border-black"
										src="https://cdn.jsdelivr.net/gh/Eastynfromeast/react-challenge-study/src/images/img_nurinu_240405_1.jpg"
										alt="nurinu1"
									/>
									<div className="flex flex-col justify-center">
										<h4 className="text-xl font-bold">NuriNu B</h4>
										<p className="text-sm">Just showerd</p>
									</div>
								</div>
								<button className="rounded-lg border-2 border-b-4 border-black bg-yellow-400 px-3 py-1 text-xs font-bold text-black transition-all hover:bg-green-400 hover:shadow-inner">
									Invite
								</button>
							</li>
							<li className="*:flex hover:border-blue-700 hover:bg-blue-300 hover:text-white">
								<div className="space-x-3">
									<img
										className="size-12 rounded-full border-2 border-black"
										src="https://cdn.jsdelivr.net/gh/Eastynfromeast/react-challenge-study/src/images/img_nurinu_240405_2.jpg"
										alt="nurinu1"
									/>
									<div className="flex flex-col justify-center">
										<h4 className="text-xl font-bold">NuriNu C</h4>
										<p className="text-sm">Just woke up</p>
									</div>
								</div>
								<button className="rounded-lg border-2 border-b-4 border-black bg-black px-3 py-1 text-xs font-bold text-white transition-all">Invited</button>
							</li>
							<li className="*:flex hover:border-blue-700 hover:bg-blue-300 hover:text-white">
								<div className="space-x-3">
									<img
										className="size-12 rounded-full border-2 border-black"
										src="https://cdn.jsdelivr.net/gh/Eastynfromeast/react-challenge-study/src/images/img_nurinu_240405_4.jpg"
										alt="nurinu1"
									/>
									<div className="flex flex-col justify-center">
										<h4 className="text-xl font-bold">NuriNu D</h4>
										<p className="text-sm">Laughing Artirst</p>
									</div>
								</div>
								<button className="rounded-lg border-2 border-b-4 border-black bg-yellow-400 px-3 py-1 text-xs font-bold text-black transition-all hover:bg-green-400 hover:shadow-inner">
									Invite
								</button>
							</li>
							<li className="*:flex hover:border-blue-700 hover:bg-blue-300 hover:text-white">
								<div className="space-x-3">
									<img
										className="size-12 rounded-full border-2 border-black"
										src="https://cdn.jsdelivr.net/gh/Eastynfromeast/react-challenge-study/src/images/img_nurinu_240405_3.jpg"
										alt="nurinu1"
									/>
									<div className="flex flex-col justify-center">
										<h4 className="text-xl font-bold">NuriNu E</h4>
										<p className="text-sm">Coding Hater</p>
									</div>
								</div>
								<button
									disabled
									className="rounded-lg border-2 border-b-4 border-black bg-yellow-400 px-3 py-1 text-xs font-bold text-black transition-all hover:bg-green-400 hover:shadow-inner disabled:bg-gray-200 disabled:text-neutral-400"
								>
									Blocked
								</button>
							</li>
						</ul>
					</section>
				</div>
			</section>
		</main>
	);
}
