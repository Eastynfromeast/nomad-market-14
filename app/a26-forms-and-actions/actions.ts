"use server";

export async function onSubmit(prevState: any, formData: FormData) {
	console.log(formData);
	await new Promise(resolve => setTimeout(resolve, 5000));
	if (formData.get("password") !== "12345") {
		return { errors: ["wrong password", "password is different"] };
	} else {
		return { errors: ["", ""] };
	}
}
