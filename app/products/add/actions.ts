"use server";

import db from "@/lib/db";
import fs from "fs/promises";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";
import { productSchema } from "./schema";

export async function uploadProduct(formData: FormData) {
	const data = {
		photo: formData.get("photo"),
		title: formData.get("title"),
		price: formData.get("price"),
		description: formData.get("description"),
	};
	if (data.photo instanceof File) {
		const photoData = await data.photo.arrayBuffer();
		await fs.appendFile(`./public/images/${data.photo.name}`, Buffer.from(photoData));
		data.photo = `/images/${data.photo.name}`;
	}
	const result = productSchema.safeParse(data);
	if (!result.success) {
		return result.error.flatten();
	} else {
		const session = await getSession();
		if (session.id) {
			const product = await db.product.create({
				data: {
					title: result.data.title,
					description: result.data.description,
					price: result.data.price,
					photo: result.data.photo,
					user: {
						connect: {
							id: session.id,
						},
					},
				},
				select: {
					id: true,
				},
			});
			redirect(`/products/${product.id}`);
		}
	}
	console.log(data);
}

export async function getUploadUrl() {
	const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUD_ACCOUNT_ID}/images/v2/direct_upload`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${process.env.CLOUD_API_KEY}`,
		},
	});
	const data = await response.json();
	return data;
}
