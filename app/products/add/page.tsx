"use client";

import Button from "@/components/button";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { getUploadUrl, uploadProduct } from "./actions";
import { z } from "zod";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductFormType, productSchema } from "./schema";
import Input from "@/components/rhf-input";

const mb = 1024 * 1024; // 1mb
const sizeLimit = mb * 2;

const fileSchema = z.object({
	type: z.string().refine(value => value.includes("image"), { message: "이미지 파일만 업로드 가능합니다" }),
	size: z.number().max(sizeLimit, "2MB 이하의 파일만 업로드 가능합니다."),
});

export default function AddProduct() {
	const [preview, setPreview] = useState("");
	const [fileError, setFileError] = useState<string[]>([]);
	const [uploadUrl, setUploadUrl] = useState("");
	const [file, setFile] = useState<File | null>(null);

	const {
		register,
		handleSubmit,
		setValue,
		setError,
		formState: { errors },
	} = useForm<ProductFormType>({
		resolver: zodResolver(productSchema),
	});

	const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
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
			setFile(file);
			setFileError([]);

			const { success, result } = await getUploadUrl();
			if (success) {
				const { id, uploadURL } = result;
				setUploadUrl(uploadURL);
				setValue("photo", `https://imagedelivery.net/q-lAPPNo8Q6bxo1lIjEnjA/${id}`);
			}
		}
	};

	const interceptAction = handleSubmit(async (data: ProductFormType) => {
		// const file = data.get("photo");
		if (!file) {
			return;
		}
		// upload imge to cloudflare
		const cloudflareForm = new FormData();
		cloudflareForm.append("file", file);
		const response = await fetch(uploadUrl, {
			method: "POST",
			body: cloudflareForm,
		});
		if (response.status !== 200) {
			return;
		}
		// replace `photo` in formData

		const formData = new FormData();
		formData.append("title", data.title);
		formData.append("price", data.price + "");
		formData.append("description", data.description);
		formData.append("photo", data.photo);

		// call uploadProduct()
		// return uploadProduct(formData);
		const errors = await uploadProduct(formData);
		if (errors) {
			// setError("")
		}
	});

	const onValid = async () => {
		await interceptAction();
	};

	// const [state, dispatch] = useFormState(interceptAction, null);

	return (
		<div className="flex flex-col gap-5 py-8 px-6">
			<div className="flex flex-col gap-2 text-center *:font-medium">
				<h1 className="text-2xl">상품 추가하기</h1>
			</div>
			<form action={onValid} className="flex flex-col gap-5">
				<label
					htmlFor="photo"
					className="border-2 aspect-square border-dashed rounded-md flex flex-col justify-center items-center text-neutral-300 border-neutral-300 cursor-pointer group bg-center bg-cover"
					style={{ backgroundImage: `url(${preview})` }}
				>
					{preview === "" ? (
						<>
							<PhotoIcon className="w-20  transition group-hover:text-neutral-400" />
							<p className="text-neutral-400 text-sm">사진을 추가해주세요.</p>
							{errors.photo?.message ? <p className="text-red-500">{errors.photo?.message}</p> : null}
						</>
					) : null}
				</label>
				<input onChange={onImageChange} type="file" id="photo" name="photo" accept="image/*" className="hidden" />
				{fileError !== null && <p className="text-red-500">{fileError[0]}</p>}
				<Input {...register("title")} type="text" placeholder="상품명" required errors={[errors.title?.message ?? ""]} />
				<Input {...register("price")} type="number" placeholder="상품 가격" required errors={[errors.price?.message ?? ""]} />
				<Input {...register("description")} type="text" placeholder="상품에 대한 설명을 적으세요" required errors={[errors.description?.message ?? ""]} />
				<Button text="상품 업로드하기" />
			</form>
		</div>
	);
}
