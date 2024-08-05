"use server";

export async function onSubmit(prevState: any, formData: FormData) {
	console.log(formData);
	await new Promise(resolve => setTimeout(resolve, 5000));
	if (formData.get("password") !== "12345") {
		return { errors: ["Wrong password", "Password is different!"] };
	} else {
		return { message: "Log In Successfully!" };
	}
}
