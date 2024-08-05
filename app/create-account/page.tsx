"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function CreateAccount() {
	const [state, dispatch] = useFormState(createAccount, null);
	return (
		<div className="flex flex-col gap-10 py-8 px-6">
			<div className="flex flex-col gap-2 *:font-medium">
				<h1 className="text-2xl">안녕하세요!</h1>
				<h2 className="text-xl">Fill in the form below to join!</h2>
			</div>
			<form action={dispatch} className="flex flex-col gap-3">
				<Input name="username" type="text" placeholder="Username" required errors={state?.fieldErrors.username} />
				<Input name="email" type="email" placeholder="Email" required errors={state?.fieldErrors.email} />
				<Input name="password" type="password" placeholder="Password" required errors={state?.fieldErrors.password} minLength={PASSWORD_MIN_LENGTH} />
				<Input
					name="confirmPassword"
					type="password"
					placeholder="Confirm password"
					required
					errors={state?.fieldErrors.confirmPassword}
					minLength={PASSWORD_MIN_LENGTH}
				/>
				<Button text="Create Account" />
			</form>
			<SocialLogin />
		</div>
	);
}
