"use client";

import { useFormState } from "react-dom";
import FormInput from "./components/a26-form-input";
import FormBtn from "./components/a26-form-btn";
import { onSubmit } from "./actions";

export default function FormsAndActions() {
	const [state, dispatch] = useFormState(onSubmit, null);
	console.log("state changes into", state);
	return (
		<div className="flex flex-col pt-20 px-10">
			<header className="text-center mb-10">
				<h1 className="text-2xl font-bold">Zexy Zod</h1>
				<p className="text-orange-500 font-semibold">by. Nulnu</p>
			</header>
			<form action={dispatch} className="flex flex-col gap-3">
				<FormInput name="email" type="email" placeholder="Email" required errors={state?.fieldErrors.email ?? []} />
				<FormInput name="username" type="text" placeholder="Username" required errors={state?.fieldErrors.username ?? []} />
				<FormInput name="password" type="password" placeholder="Password" required errors={state?.fieldErrors.password ?? []} />
				<FormBtn text="Log In" />
			</form>
			{state === undefined && (
				<div className="flex flex-row justify-center items-center gap-2 text-center mt-8 font-medium text-lg bg-green-600 text-white rounded-3xl py-4 px-5">
					<span className="inline-block size-6">
						<svg className="fill-none stroke-2 stroke-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
						</svg>
					</span>
					<p>Welcome Back!</p>
				</div>
			)}
		</div>
	);
}
