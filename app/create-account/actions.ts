"use server";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants";
import db from "@/lib/db";
import { z } from "zod";

const checkUsername = (username: string) => !username.includes("potato");
const checkPassword = ({ password, confirmPassword }: { password: string; confirmPassword: string }) => password === confirmPassword;

const checkUniqueUsername = async (username: string) => {
	const user = await db.user.findUnique({
		where: {
			username,
		},
		select: {
			id: true,
		},
	});
	return !Boolean(user);
};

const checkUniqueEmail = async (email: string) => {
	const user = await db.user.findUnique({
		where: {
			email: email,
		},
		select: {
			id: true,
		},
	});
	return !Boolean(user);
};

const formSchema = z
	.object({
		username: z
			.string({
				invalid_type_error: "Username must be a string",
				required_error: "Where is my user name??",
			})
			.toLowerCase()
			.trim()
			.refine(checkUsername, "No potatoes allowed!")
			.refine(checkUniqueUsername, "This username is already taken"),
		email: z.string().email().toLowerCase().refine(checkUniqueEmail, "There is an account already registered with that email"),
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
	const result = await formSchema.safeParseAsync(data);
	if (!result.success) {
		return result.error.flatten();
	} else {
		// check if username is taken
		// check if the email is taken
		// hash password
		// save the user to db
		// log the user in
		// redirect "/home"
	}
}
