"use server";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants";
import { z } from "zod";

const checkUsername = (username: string) => !username.includes("potato");
const checkPassword = ({ password, confirmPassword }: { password: string; confirmPassword: string }) => password === confirmPassword;
const formSchema = z
	.object({
		username: z
			.string({
				invalid_type_error: "Username must be a string",
				required_error: "Where is my user name??",
			})
			.toLowerCase()
			.trim()
			.refine(checkUsername, "No potatoes allowed!"),
		email: z.string().email().toLowerCase(),
		password: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
		confirmPassword: z.string().min(PASSWORD_MIN_LENGTH),
	})
	.refine(checkPassword, { message: "Both passwords should be the same!", path: ["confirmPassword"] });

export async function createAccount(prevState: any, formData: FormData) {
	const data = {
		username: formData.get("username"),
		email: formData.get("email"),
		password: formData.get("password"),
		confirmPassword: formData.get("confirmPassword"),
	};
	const result = formSchema.safeParse(data);
	if (!result.success) {
		return result.error.flatten();
	} else {
		console.log(result.data);
	}
}
