interface A26FormInputProps {
	type: string;
	name: string;
	placeholder: string;
	required: boolean;
	errors: string[];
}

export default function A26FormInput({ type, name, placeholder, required, errors }: A26FormInputProps) {
	return (
		<div className="flex flex-col gap-2">
			<input
				className="py-2 px-3 rounded-3xl outline-none ring ring-transparent focus:ring-orange-500 focus:outline-orange-300 "
				name={name}
				type={type}
				placeholder={placeholder}
				required={required}
			/>
			{errors?.map((error, index) => (
				<p key={index} className="text-red-500 font-medium">
					{error}
				</p>
			))}
		</div>
	);
}
