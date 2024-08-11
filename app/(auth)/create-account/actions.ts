"use server";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants";
import db from "@/lib/db";
import { z } from "zod";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import getSession from "@/lib/session";

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
		password: z.string().min(PASSWORD_MIN_LENGTH),
		confirmPassword: z.string().min(PASSWORD_MIN_LENGTH),
	})
	.superRefine(async ({ username }, ctx) => {
		const user = await db.user.findUnique({
			where: {
				username,
			},
			select: {
				id: true,
			},
		});
		if (user) {
			ctx.addIssue({
				code: "custom",
				message: "This username is already taken",
				path: ["username"],
				fatal: true,
			});
			return z.NEVER;
		}
	})
	.superRefine(async ({ email }, ctx) => {
		const user = await db.user.findUnique({
			where: {
				email,
			},
			select: {
				id: true,
			},
		});
		if (user) {
			ctx.addIssue({
				code: "custom",
				message: "This email is already taken",
				path: ["email"],
				fatal: true,
			});
			return z.NEVER;
		}
	})
	.refine(checkPassword, { message: "Both passwords should be the same!", path: ["confirmPassword"] });

export async function createAccount(prevState: any, formData: FormData) {
	console.log(cookies());
	const data = {
		username: formData.get("username"),
		email: formData.get("email"),
		password: formData.get("password"),
		confirmPassword: formData.get("confirmPassword"),
	};
	const result = await formSchema.safeParseAsync(data);
	if (!result.success) {
		console.log(result.error.flatten());
		return result.error.flatten();
	} else {
		// hash password
		const hashedPassword = await bcrypt.hash(result.data.password, 12);
		// save the user to db
		const user = await db.user.create({
			data: {
				username: result.data.username,
				email: result.data.email,
				password: hashedPassword,
			},
			select: {
				id: true,
			},
		});
		console.log(user);
		// log the user in id를 쿠키로 줄 것!
		const session = await getSession();
		session.id = user.id;
		await session.save();
		// redirect "/home"
		redirect("/profile");
	}
}
