import ProductList from "@/components/product-list";
import db from "@/lib/db";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Prisma } from "@prisma/client";
import { Metadata } from "next";
import { unstable_cache as homeCache, revalidatePath } from "next/cache";
import Link from "next/link";

const getCachedProducts = homeCache(getInitialProducts, ["home-products"]);

async function getInitialProducts() {
	console.log("hitted!!!!");
	const products = await db.product.findMany({
		select: {
			title: true,
			price: true,
			created_at: true,
			photo: true,
			id: true,
		},
		orderBy: {
			created_at: "desc",
		},
	});
	return products;
}

export type InitialProducts = Prisma.PromiseReturnType<typeof getInitialProducts>;

export const metadata: Metadata = {
	title: "Home",
};

export default async function Products() {
	const initialProducts = await getInitialProducts();
	const revalidate = async () => {
		"use server";
		revalidatePath("/home");
	};
	return (
		<div>
			<ProductList initialProducts={initialProducts} />
			<form action={revalidate}>
				<button>Revalidate</button>
			</form>
			<Link
				href="/products/add"
				className="bg-orange-500 flex items-center justify-center rounded-full size-14 fixed bottom-1/4 right-8 text-white transition hover:bg-orange-400"
			>
				<PlusIcon className="size-8 mx-auto" />
			</Link>
		</div>
	);
}
