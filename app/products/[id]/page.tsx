import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { formatToWon } from "@/lib/utils";
import { unstable_cache as nextCache, revalidateTag } from "next/cache";

async function getIsOwner(userId: number) {
	const session = await getSession();
	if (session.id) {
		return session.id === userId;
	}
	return false;
}

async function getProduct(id: number) {
	console.log("get product!!!!");
	const product = await db.product.findUnique({
		where: {
			id,
		},
		include: {
			user: {
				select: {
					username: true,
					avatar: true,
				},
			},
		},
	});
	return product;
}

const getCachedProduct = nextCache(getProduct, ["product-detail"], {
	revalidate: 60,
	tags: ["product-detail", "xxxx"],
});

async function getProductTitle(id: number) {
	console.log("get product title!");
	const product = await db.product.findUnique({
		where: {
			id,
		},
		select: {
			title: true,
		},
	});
	return product;
}

const getCachedProductTitle = nextCache(getProductTitle, ["product-title"], {
	tags: ["product-title", "xxxx"],
});

export async function generateMetadata({ params }: { params: { id: string } }) {
	const product = await getCachedProductTitle(Number(params.id));
	return {
		title: product?.title,
	};
}

export default async function ProductDetail({ params }: { params: { id: string } }) {
	const id = Number(params.id);
	if (isNaN(id)) {
		return notFound();
	}
	const product = await getCachedProduct(id);
	if (!product) {
		return notFound();
	}

	const isOwner = await getIsOwner(product.userId);

	const deleteProduct = async () => {
		"use server";
		if (!isOwner) return;
		const product = await db.product.delete({
			where: {
				id,
			},
			select: {
				title: true,
			},
		});
		redirect("/products");
	};

	const revalidate = async () => {
		"use server";
		revalidateTag("xxxx");
	};

	return (
		<div className="relative overflow-hidden">
			<div className="relative aspect-square overflow-hidden rounded-md">
				<Image className="object-cover" fill src={`${product.photo}/public`} alt={product.title} />
			</div>
			<ul className="p-5 flex gap-3 items-center border-b border-neutral-500">
				<li className="size-10 rounded-full overflow-hidden">
					{product.user.avatar !== null ? <Image src={product.user.avatar} alt={product.user.username} width={40} height={40} /> : <UserIcon />}
				</li>
				<li>
					<h3>{product.user.username}</h3>
				</li>
			</ul>
			<div className="p-5 flex flex-col gap-2">
				<h1 className="text-2xl font-semibold">{product.title}</h1>
				<p>{product.description}</p>
			</div>
			<div className="fixed w-full max-w-screen-sm bottom-0 left-auto p-5 pb-7 bg-neutral-600 flex justify-between items-center *:font-semibold">
				<span className="text-lg">{formatToWon(product.price)}원</span>
				{isOwner && (
					<form action={revalidate}>
						{" "}
						<button className="bg-red-500 px-5 py-2.5 rounded-md">Revalidate title cache</button>
					</form>
				)}
				<Link className="bg-orange-500 px-5 py-2.5 rounded-md text-white " href={``}>
					채팅하기
				</Link>
			</div>
		</div>
	);
}
