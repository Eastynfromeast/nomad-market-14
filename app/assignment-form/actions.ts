"use server";

import { z } from "zod";

const EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9+-\_.]+@zod.com$/);
const PW_MIN_LENGTH = 10;
const PW_REGEX = new RegExp(/^(?=.*[a-z])(?=.*\d).+$/);
const PW_REGEX_ERROR = "Password should contain at least one number";
const NAME_MIN_LENGTH = 5;

const formSchema = z.object({
	email: z
		.string({
			required_error: "Email is required",
		})
		.email()
		.trim()
		.regex(EMAIL_REGEX, "Email must be ended with @zod.com"),
	username: z
		.string({
			required_error: "Username is required",
		})
		.min(NAME_MIN_LENGTH, "Username should be at least 5 characters long")
		.trim()
		.toLowerCase(),
	password: z
		.string({
			required_error: "Password is required",
		})
		.min(PW_MIN_LENGTH, "Password should be more than 10 letters")
		.regex(PW_REGEX, PW_REGEX_ERROR),
});

export async function onSubmit(prevState: any, formData: FormData) {
	const data = {
		email: formData.get("email"),
		username: formData.get("username"),
		password: formData.get("password"),
	};
	const result = formSchema.safeParse(data);
	await new Promise(resolve => setTimeout(resolve, 3000));
	console.log(result);
	if (!result.success) {
		return result.error.flatten();
	} else {
		console.log(result.data);
	}
}
