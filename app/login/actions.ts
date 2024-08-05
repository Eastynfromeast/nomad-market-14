"use server";

import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants";
import { z } from "zod";

const formSchema = z.object({
	email: z.string().email().toLowerCase(),
	password: z
		.string({
			required_error: "Password is required",
		})
		.min(PASSWORD_MIN_LENGTH)
		.regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

export async function login(prevState: any, formData: FormData) {
	const data = {
		email: formData.get("email"),
		password: formData.get("password"),
	};
	// await new Promise(resolve => setTimeout(resolve, 5000));
	const result = formSchema.safeParse(data);
	if (!result.success) {
		return result.error.flatten();
	} else {
		console.log(result.data);
	}
}
