"use client";

import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { HandThumbUpIcon as OutlineThumbUpIcon } from "@heroicons/react/24/outline";
import { useOptimistic } from "react";
import { dislikePost, likePost } from "@/app/posts/[id]/actions";

interface LikeButtonProps {
	isLiked: boolean;
	likeCount: number;
	postId: number;
}

export default function LikeButton({ isLiked, likeCount, postId }: LikeButtonProps) {
	const [state, reducerFn] = useOptimistic({ isLiked, likeCount }, (prevState, payload) => ({
		isLiked: !prevState.isLiked,
		likeCount: prevState.isLiked ? prevState.likeCount - 1 : prevState.likeCount + 1,
	}));
	const onClick = async () => {
		reducerFn(undefined);
		if (isLiked) {
			await dislikePost(postId);
		} else {
			await likePost(postId);
		}
	};
	return (
		<form action={onClick}>
			<button
				className={`flex items-center gap-2 text-neutral-400 text-sm border border-neutral-400 rounded-full p-2 transition-colors ${
					state.isLiked ? "bg-orange-500 text-white border-orange-500" : "hover:bg-white hover:text-neutral-800"
				}`}
			>
				{state.isLiked ? <HandThumbUpIcon className="size-5" /> : <OutlineThumbUpIcon className="size-5" />}
				{state.isLiked ? <span>{state.likeCount}</span> : <span>공감하기 ({state.likeCount})</span>}
			</button>
		</form>
	);
}
