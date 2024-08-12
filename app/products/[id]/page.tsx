import db from "@/lib/db";

async function getProduct() {
	await new Promise(resolve => setTimeout(resolve, 60 * 1000));
	/* 	const product = await db.product.findUnique({
		where: {
			id: Number(id),
		},
	}); */
}

export default async function ProductDetail({ params: { id } }: { params: { id: string } }) {
	const product = await getProduct();
	return <span>Product Detail of the product {id}</span>;
}
