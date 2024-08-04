import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function LogIn() {
	async function onSubmit(formData: FormData) {
		"use server";
		console.log(formData.get("email"), formData.get("password"));
		console.log("I run in the server babe!");
	}
	return (
		<div className="flex flex-col gap-10 py-8 px-6">
			<div className="flex flex-col gap-2 *:font-medium">
				<h1 className="text-2xl">안녕하세요!</h1>
				<h2 className="text-xl">Log in with email and password.</h2>
			</div>
			<form action={onSubmit} className="flex flex-col gap-3">
				<FormInput name="email" type="email" placeholder="Email" required errors={[]} />
				<FormInput name="password" type="password" placeholder="Password" required errors={[]} />
				<FormButton loading={false} text="Log In" />
			</form>
			<SocialLogin />
		</div>
	);
}
