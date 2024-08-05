"use client";

import { useFormState } from "react-dom";
import A26FormInput from "./components/a26-form-input";
import A26FormBtn from "./components/a26-form-btn";
import { onSubmit } from "./actions";

export default function FormsAndActions() {
	const [state, dispatch] = useFormState(onSubmit, { errors: ["", ""] });

	return (
		<div className="flex flex-col pt-20 px-10">
			<header className="text-center mb-10">
				<h1 className="text-2xl font-bold">Forms & Actions</h1>
				<p className="text-orange-500 font-semibold">by. Nulnu</p>
			</header>
			<form action={dispatch} className="flex flex-col gap-3">
				<A26FormInput name="email" type="email" placeholder="Email" required errors={[]} />
				<A26FormInput name="username" type="text" placeholder="Username" required errors={[]} />
				<A26FormInput name="password" type="password" placeholder="Password" required errors={state?.errors ?? []} />
				<A26FormBtn text="Log In" />
			</form>
		</div>
	);
}
