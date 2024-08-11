"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { smsLogIn } from "./actions";

const initialState = {
	token: false,
	error: undefined,
};

export default function SMSLogIn() {
	const [state, dispatch] = useFormState(smsLogIn, initialState);
	return (
		<div className="flex flex-col gap-10 py-8 px-6">
			<div className="flex flex-col gap-2 *:font-medium">
				<h1 className="text-2xl">SMS Login</h1>
				<h2 className="text-xl">Verify your phone number.</h2>
			</div>
			<form action={dispatch} className="flex flex-col gap-3">
				{state?.token ? (
					<Input key="token" name="token" type="number" placeholder="Verification code" required min={100000} max={999999} errors={state?.error?.formErrors} />
				) : (
					<Input key="phone" name="phone" type="number" placeholder="+8201012345678" required errors={state?.error?.formErrors} />
				)}
				<Button text={state.token ? "Verify token" : "Send Verification SMS"} />
			</form>
		</div>
	);
}
