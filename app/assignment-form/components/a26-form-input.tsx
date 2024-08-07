interface A26FormInputProps {
	type: string;
	name: string;
	placeholder: string;
	required: boolean;
	errors: string[];
}

export default function FormInput({ type, name, placeholder, required, errors }: A26FormInputProps) {
	return (
		<div className="flex flex-col gap-2 text-sm">
			<div className="w-full relative">
				<span className="size-4 block absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 ">
					{name === "email" && (
						<svg className="w-full fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
							<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
						</svg>
					)}
					{name === "username" && (
						<svg className="w-full fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
							/>
						</svg>
					)}
					{name === "password" && (
						<svg className="w-full fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path
								clipRule="evenodd"
								fillRule="evenodd"
								d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
							/>
						</svg>
					)}
				</span>
				<input
					className="py-3 pr-3 pl-10 w-full rounded-3xl outline-none ring ring-transparent bg-white focus:ring-orange-500 focus:outline-orange-300 invalid:ring-red-400 empty:ring-gray-300 empty:ring-1"
					name={name}
					type={type}
					placeholder={placeholder}
					required={required}
				/>
			</div>
			{errors?.map((error, index) => (
				<p key={index} className="text-rose-500 font-medium px-2">
					{error}
				</p>
			))}
		</div>
	);
}
