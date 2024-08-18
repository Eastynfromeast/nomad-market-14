import db from "@/lib/db";
import getSession from "@/lib/session";
import { formatToTimeAgo } from "@/lib/utils";
import { EyeIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { HandThumbUpIcon as OutlineThumbUpIcon } from "@heroicons/react/24/outline";
import { revalidatePath, unstable_cache as nextCache, revalidateTag } from "next/cache";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getPost(id: number) {
	try {
		const post = await db.post.update({
			where: {
				id,
			},
			data: {
				views: {
					increment: 1,
				},
			},
			include: {
				user: {
					select: {
						username: true,
						avatar: true,
					},
				},
				_count: {
					select: {
						comments: true,
					},
				},
			},
		});
		return post;
	} catch (e) {
		return null;
	}
}

const getCachedPost = nextCache(getPost, ["post-detail"], {
	tags: [`post-detail`],
	revalidate: 60,
});

async function getLikeStatus(postId: number, userId: number) {
	// const session = await getSession();
	const isLiked = await db.like.findUnique({
		where: {
			id: {
				postId,
				userId,
			},
		},
	});
	const likeCount = await db.like.count({
		where: {
			postId,
		},
	});
	return {
		likeCount,
		isLiked: Boolean(isLiked),
	};
}

async function getCachedLikeStatus(postId: number) {
	const session = await getSession();
	const userId = session.id;
	const cachedOperation = nextCache(getLikeStatus, ["post-like-status"], {
		tags: [`like-status-${postId}`],
	});
	return cachedOperation(postId, userId!);
}

export default async function PostDetail({ params }: { params: { id: string } }) {
	const id = Number(params.id);
	if (isNaN(id)) {
		return notFound();
	}
	const post = await getCachedPost(id);
	if (!post) {
		return notFound();
	}
	const likePost = async () => {
		"use server";
		const session = await getSession();
		try {
			await db.like.create({
				data: {
					postId: id,
					userId: session.id!,
				},
			});
			revalidateTag(`like-status-${id}`);
		} catch (e) {}
	};
	const dislikePost = async () => {
		"use server";
		const session = await getSession();
		try {
			await db.like.delete({
				where: {
					id: {
						postId: id,
						userId: session.id!,
					},
				},
			});
			revalidateTag(`like-status-${id}`);
		} catch (e) {}
	};
	const { likeCount, isLiked } = await getCachedLikeStatus(id);
	return (
		<div className="p-5 text-white">
			<div className="mb-3">
				<Image width={28} height={28} className="size-7 rounded-full" src={post.user.avatar!} alt={post.user.username} />
				<div>
					<h3 className="text-sm font-semibold">{post.user.username}</h3>
					<div className="text-xs">
						<span>{formatToTimeAgo(post.created_at.toString())}</span>
					</div>
				</div>
			</div>
			<h2 className="text-lg font-semibold">{post.title}</h2>
			<p className="mb-5">{post.description}</p>
			<div className="flex flex-col gap-5 items-start">
				<div className="flex items-center gap-2 text-neutral-400 text-sm">
					<EyeIcon className="size-5" />
					<span>조회 {post.views}</span>
				</div>
				<form action={isLiked ? dislikePost : likePost}>
					<button
						className={`flex items-center gap-2 text-neutral-400 text-sm border border-neutral-400 rounded-full p-2 transition-colors ${
							isLiked ? "bg-orange-500 text-white border-orange-500" : "hover:bg-white hover:text-neutral-800"
						}`}
					>
						{isLiked ? <HandThumbUpIcon className="size-5" /> : <OutlineThumbUpIcon className="size-5" />}
						{isLiked ? <span>{likeCount}</span> : <span>공감하기 ({likeCount})</span>}
					</button>
				</form>
			</div>
		</div>
	);
}
