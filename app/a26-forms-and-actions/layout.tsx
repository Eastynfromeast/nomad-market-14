import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
	title: "A26 Forms&Actions",
	description: "Build a form with tailwind css, Server Actions, useFormStatus and useFormState",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className=" bg-neutral-100 text-black max-w-screen-sm mx-auto">{children}</body>
		</html>
	);
}
