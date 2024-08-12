import Image from "next/image";
import Link from "next/link";

interface ListProductProps {
	title: string;
	price: number;
	created_at: Date;
	photo: string;
	id: number;
}

export default function ListProduct({ title, price, created_at, photo, id }: ListProductProps) {
	return (
		<Link href={`/products/${id}`} className="flex gap-5">
			<div className="relative size-32 rounded-md overflow-hidden">
				<Image fill src={photo} alt={title} quality={100} />
			</div>
			<ul className="flex flex-col gap-1 text-white">
				<li className="text-lg">{title}</li>
				<li className="text-sm text-neutral-400">{created_at.toString()}</li>
				<li className="text-lg font-semibold">{price}</li>
			</ul>
		</Link>
	);
}
