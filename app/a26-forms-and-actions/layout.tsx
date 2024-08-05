import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "A26 Forms&Actions",
	description: "Build a form with tailwind css, Server Actions, useFormStatus and useFormState",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="w-full h-screen bg-neutral-100 text-black mx-auto">{children}</div>;
}
