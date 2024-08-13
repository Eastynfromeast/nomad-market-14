"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function AddProduct() {
	const [preview, setPreview] = useState("");
	const onImageChange = () => {};
	return (
		<div className="flex flex-col gap-5 py-8 px-6">
			<div className="flex flex-col gap-2 text-center *:font-medium">
				<h1 className="text-2xl">상품 추가하기</h1>
			</div>
			<form className="flex flex-col gap-5">
				<label
					htmlFor="photo"
					className="border-2 aspect-square border-dashed rounded-md flex flex-col justify-center items-center text-neutral-300 border-neutral-300 cursor-pointer group"
				>
					<PhotoIcon className="w-20  transition group-hover:text-neutral-400" />
					<p className="text-neutral-400 text-sm">사진을 추가해주세요.</p>
				</label>
				<input onChange={onImageChange} type="file" id="photo" name="photo" className="hidden" />
				<Input name="title" type="text" placeholder="상품명" required errors={[]} />
				<Input name="price" type="number" placeholder="상품 가격" required errors={[]} />
				<Input name="description" type="text" placeholder="상품에 대한 설명을 적으세요" required errors={[]} />
				<Button text="상품 업로드하기" />
			</form>
		</div>
	);
}
