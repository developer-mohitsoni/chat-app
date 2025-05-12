"use client";
import type { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Env from "@/lib/env";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { toast } from "sonner";
import type { ChatGroupType } from "../../../types";
import EditGroupChat from "./EditGroupChat";
const DeleteChatGroup = dynamic(() => import("./DeleteChatGroup"));

export default function GroupChatCardMenu({
	group,
	user
}: {
	group: ChatGroupType;
	user: CustomUser;
}) {
	const [deleteDialog, setDeleteDialog] = useState(false);
	const [editDialoag, setEditDialog] = useState(false);

	const handleCopy = () => {
		navigator.clipboard?.writeText(`${Env.APP_URL}/chat/${group.id}`);
		toast.success("Link copied successfully!");
	};

	return (
		<>
			{deleteDialog && (
				<Suspense fallback={<p>Loading...</p>}>
					<DeleteChatGroup
						open={deleteDialog}
						setOpen={setDeleteDialog}
						groupId={group.id}
						token={user.token as string}
					/>
				</Suspense>
			)}
			{editDialoag && (
				<Suspense fallback={<p>Loading...</p>}>
					<EditGroupChat
						open={editDialoag}
						setOpen={setEditDialog}
						user={user}
						group={group}
					/>
				</Suspense>
			)}

			<DropdownMenu>
				<DropdownMenuTrigger>
					<DotsVerticalIcon className="h-5 w-5" />
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem onClick={handleCopy}>Copy</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setEditDialog(true)}>
						Edit
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setDeleteDialog(true)}>
						Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}
