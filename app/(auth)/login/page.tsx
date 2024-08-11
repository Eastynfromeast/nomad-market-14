"use client";

import FormButton from "@/components/button";
import FormInput from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { login } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function LogIn() {
	const [state, dispatch] = useFormState(login, null);
	return (
		<div className="flex flex-col gap-10 py-8 px-6">
			<div className="flex flex-col gap-2 *:font-medium">
				<h1 className="text-2xl">안녕하세요!</h1>
				<h2 className="text-xl">Log in with email and password.</h2>
			</div>
			<form action={dispatch} className="flex flex-col gap-3">
				<FormInput name="email" type="email" placeholder="Email" required errors={state?.fieldErrors.email} />
				<FormInput name="password" type="password" placeholder="Password" required errors={state?.fieldErrors.password} minLength={PASSWORD_MIN_LENGTH} />
				<FormButton text="Log In" />
			</form>
			<SocialLogin />
		</div>
	);
}
