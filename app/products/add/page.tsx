"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { uploadProduct } from "./actions";
import { z } from "zod";
import { useFormState } from "react-dom";

const mb = 1024 * 1024; // 1mb
const sizeLimit = mb * 2;

const fileSchema = z.object({
	type: z.string().refine(value => value.includes("image"), { message: "이미지 파일만 업로드 가능합니다" }),
	size: z.number().max(sizeLimit, "2MB 이하의 파일만 업로드 가능합니다."),
});

export default function AddProduct() {
	const [preview, setPreview] = useState("");
	const [fileError, setFileError] = useState<string[]>([]);
	const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { files },
		} = event;
		if (!files) {
			return;
		}
		const file = files[0];

		const result = fileSchema.safeParse(file);
		if (!result.success) {
			setFileError(result.error.flatten().fieldErrors.size || ["이미지 파일만 업로드 가능합니다"]);
		} else {
			const url = URL.createObjectURL(file);
			setPreview(url);
			setFileError([]);
		}
	};
	const [state, dispatch] = useFormState(uploadProduct, null);
	return (
		<div className="flex flex-col gap-5 py-8 px-6">
			<div className="flex flex-col gap-2 text-center *:font-medium">
				<h1 className="text-2xl">상품 추가하기</h1>
			</div>
			<form action={dispatch} className="flex flex-col gap-5">
				<label
					htmlFor="photo"
					className="border-2 aspect-square border-dashed rounded-md flex flex-col justify-center items-center text-neutral-300 border-neutral-300 cursor-pointer group bg-center bg-cover"
					style={{ backgroundImage: `url(${preview})` }}
				>
					{preview === "" ? (
						<>
							<PhotoIcon className="w-20  transition group-hover:text-neutral-400" />
							<p className="text-neutral-400 text-sm">사진을 추가해주세요.</p>
						</>
					) : null}
				</label>
				<input onChange={onImageChange} type="file" id="photo" name="photo" accept="image/*" className="hidden" />
				{fileError !== null && <p className="text-red-500">{fileError[0]}</p>}
				<Input name="title" type="text" placeholder="상품명" required errors={state?.fieldErrors.title} />
				<Input name="price" type="number" placeholder="상품 가격" required errors={state?.fieldErrors.price} />
				<Input name="description" type="text" placeholder="상품에 대한 설명을 적으세요" required errors={state?.fieldErrors.description} />
				<Button text="상품 업로드하기" />
			</form>
		</div>
	);
}
