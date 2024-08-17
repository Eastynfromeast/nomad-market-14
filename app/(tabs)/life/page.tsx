import db from "@/lib/db";
import { formatToTimeAgo } from "@/lib/utils";
import { ChatBubbleBottomCenterIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

async function getPosts() {
	const posts = await db.post.findMany({
		select: {
			id: true,
			title: true,
			description: true,
			views: true,
			created_at: true,
			_count: {
				select: {
					comments: true,
					likes: true,
				},
			},
		},
	});
	return posts;
}

export const metadata = {
	title: "동네생활",
};

export default async function Life() {
	const posts = await getPosts();
	console.log(posts);
	return (
		<div className="p-5 flex flex-col">
			{posts.map(post => (
				<Link
					key={post.id}
					href={`/posts/${post.id}`}
					className="pb-5 mb-5 border-b border-neutral-500 text-neutral-200 flex flex-col last:pb-0 last:border-b-0"
				>
					<h2 className="text-white text-lg font-semibold">{post.title}</h2>
					<p>{post.description}</p>
					<div className="flex items-center justify-between text-sm">
						<ul className="flex gap-4 items-center">
							<li>{formatToTimeAgo(post.created_at.toString())}</li>
							<li>.</li>
							<li>조회 {post.views}</li>
						</ul>
						<div className="flex gap-4 items-center *:flex *:gap-1 *:items-center">
							<span>
								<HandThumbUpIcon className="size-4" />
								{post._count.likes}
							</span>
							<span>
								<ChatBubbleBottomCenterIcon className="size-4" />
								{post._count.comments}
							</span>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}
