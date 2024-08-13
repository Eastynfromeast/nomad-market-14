import { InputHTMLAttributes } from "react";

interface InputProps {
	name: string;
	errors?: string[];
}

export default function Input({ name, errors = [], ...rest }: InputProps & InputHTMLAttributes<HTMLInputElement>) {
	return (
		<div className="flex flex-col gap-3">
			<input
				name={name}
				className="bg-transparent rounded-md w-full h-10 px-2 focus:outline-none ring-1 ring-neutral-200 transition focus:ring-4 focus:ring-orange-500 border-none placeholder:text-neutral-400"
				{...rest}
			/>
			{errors?.map((error, index) => (
				<span key={index} className="text-red-500 font-medium">
					{error}
				</span>
			))}
		</div>
	);
}
