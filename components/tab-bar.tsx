"use client";

import {
	HomeIcon as SolidHomeIcon,
	NewspaperIcon as SolidNewspaperIcon,
	ChatBubbleLeftEllipsisIcon as SolidChatIcon,
	VideoCameraIcon as SolidVideoCameraIcon,
	UserIcon as SolidUserIcon,
} from "@heroicons/react/24/solid";
import {
	HomeIcon as OutlineHomeIcon,
	NewspaperIcon as OutlineNewspaperIcon,
	ChatBubbleLeftEllipsisIcon as OutlineChatIcon,
	VideoCameraIcon as OutlineVideoCameraIcon,
	UserIcon as OutlineUserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabBar() {
	const pathname = usePathname();
	return (
		<div className="fixed bottom-0 w-full mx-auto max-w-screen-sm grid grid-cols-5 border-neutal-600 border-t px-3 py-3 bg-neutral-800 *:flex *:flex-col *:justify-center *:items-center *:gap-px *:text-white ">
			<Link href="/home">
				{pathname === "/home" ? <SolidHomeIcon className="size-7" /> : <OutlineHomeIcon className="size-7" />}
				<span className="text-sm">홈</span>
			</Link>
			<Link href="/life">
				{pathname === "/life" ? <SolidNewspaperIcon className="size-7" /> : <OutlineNewspaperIcon className="size-7" />}
				<span className="text-sm">동네생활</span>
			</Link>
			<Link href="/chat">
				{pathname === "/chat" ? <SolidChatIcon className="size-7" /> : <OutlineChatIcon className="size-7" />}
				<span className="text-sm">채팅</span>
			</Link>
			<Link href="/live">
				{pathname === "/live" ? <SolidVideoCameraIcon className="size-7" /> : <OutlineVideoCameraIcon className="size-7" />}
				<span className="text-sm">쇼핑</span>
			</Link>
			<Link href="/profile">
				{pathname === "/profile" ? <SolidUserIcon className="size-7" /> : <OutlineUserIcon className="w-7 h-7" />}
				<span className="text-sm">나의 당근</span>
			</Link>
		</div>
	);
}
