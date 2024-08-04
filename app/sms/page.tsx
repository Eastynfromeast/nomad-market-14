import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";

export default function SMSLogIn() {
	return (
		<div className="flex flex-col gap-10 py-8 px-6">
			<div className="flex flex-col gap-2 *:font-medium">
				<h1 className="text-2xl">SMS Login</h1>
				<h2 className="text-xl">Verify your phone number.</h2>
			</div>
			<form className="flex flex-col gap-3">
				<FormInput name="phoneNumber" type="number" placeholder="Phone number" required errors={[]} />
				<FormInput name="verificationCode" type="number" placeholder="Verification code" required errors={[]} />
				<FormButton loading={false} text="Verify" />
			</form>
		</div>
	);
}
