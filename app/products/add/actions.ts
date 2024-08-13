"use server";

import db from "@/lib/db";

export async function uploadProduct(formData: FormData) {
	const data = {
		photo: formData.get("photo"),
		title: formData.get("title"),
		price: formData.get("price"),
		description: formData.get("description"),
	};
	console.log(data);
	/*  const product = await db.product.create({

  }) */
}
