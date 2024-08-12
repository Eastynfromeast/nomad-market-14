import { PhotoIcon } from "@heroicons/react/24/solid";

export default function LoadingProductDetail() {
	return (
		<div className="animate-pulse p-5 flex flex-col gap-5">
			<div className="flex justify-center items-center text-neutral-400 aspect-square border-neutral-500 border-4 border-dashed rounded-lg">
				<PhotoIcon className="h-28" />
			</div>
			<div className="flex gap-2 items-center">
				<div className="size-14 rounded-full bg-neutral-500" />
				<ul className="flex flex-col gap-1">
					<li className="h-5 w-40 bg-neutral-500 rounded-md" />
					<li className="h-5 w-20 bg-neutral-500 rounded-md" />
				</ul>
			</div>
			<div className="h-5 w-4/5 bg-neutral-500 rounded-md" />
		</div>
	);
}
