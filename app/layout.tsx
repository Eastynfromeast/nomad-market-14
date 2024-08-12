import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%| Nomad Market 14",
		default: "Nomad Market 14",
	},
	description: "Sell and buy all the things",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-black text-white max-w-screen-sm mx-auto`}>{children}</body>
		</html>
	);
}
