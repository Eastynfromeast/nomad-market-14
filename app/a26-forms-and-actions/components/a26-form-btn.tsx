"use client";

import { useFormStatus } from "react-dom";

interface FormBtnProps {
	text: string;
}

export default function A26FormBtn({ text }: FormBtnProps) {
	const { pending } = useFormStatus();
	return (
		<button
			disabled={pending}
			className="w-full p-3 rounded-3xl mt-3 bg-gray-800 text-white font-medium hover:bg-orange-500 transition disabled:bg-neutral-400 disabled:text-neutral-100"
		>
			{pending ? "loading..." : text}
		</button>
	);
}
