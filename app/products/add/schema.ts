import { z } from "zod";

export const productSchema = z.object({
	photo: z.string({
		required_error: "Photo is required",
	}),
	title: z
		.string({
			required_error: "Title is required",
		})
		.max(50),
	price: z.coerce.number({
		required_error: "Price is required",
	}),
	description: z.string({
		required_error: "Description is required",
	}),
});

export type ProductFormType = z.infer<typeof productSchema>;
