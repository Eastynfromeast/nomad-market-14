"use client";

import { InitialProducts } from "@/app/(tabs)/products/page";
import ListProduct from "./list-product";
import { useState } from "react";
import { getMoreProducts } from "@/app/(tabs)/products/actions";

interface ProductsListProps {
	initialProducts: InitialProducts;
}

export default function ProductList({ initialProducts }: ProductsListProps) {
	const [products, setProducts] = useState(initialProducts);
	const [isLoading, setIsLoading] = useState(false);
	const onClickLoadMore = async () => {
		setIsLoading(true);
		const newProducts = await getMoreProducts(1);
		setProducts(prev => [...prev, ...newProducts]);
		setIsLoading(false);
	};
	return (
		<div className="p-5 flex flex-col gap-5">
			{products.map(product => (
				<ListProduct key={product.id} {...product} />
			))}
			<button
				onClick={onClickLoadMore}
				disabled={isLoading}
				className="text-sm font-semibold bg-orange-500 w-fit mx-auto px-3 py-2 rounded-md text-white transition hover:opacity-90 active:scale-95"
			>
				{isLoading ? "로딩 중" : "Load More"}
			</button>
		</div>
	);
}
