import CreateChat from "@/components/chatGroup/CreateChat";
import DashNav from "@/components/chatGroup/DashNav";
import GroupChatCard from "@/components/chatGroup/GroupChatCard";
import { fetchChatGroups } from "@/fetch/groupFetch";
import { getServerSession } from "next-auth";
import type { ChatGroupType } from "../../../types";
import {
	type CustomSession,
	type CustomUser,
	authOptions
} from "../api/auth/[...nextauth]/options";

export default async function dashboard() {
	const session: CustomSession | null = await getServerSession(authOptions);
	const groups: Array<ChatGroupType> | [] = await fetchChatGroups(
		session?.user?.token as string
	);
	return (
		<div>
			<DashNav
				name={session?.user?.name as string}
				image={session?.user?.image ?? undefined}
			/>
			<div className="container">
				<div className="mt-6 text-end">
					<CreateChat user={session?.user as CustomUser} />
				</div>

				{/* If Groups */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{groups.length > 0 &&
						groups.map((item, index) => (
							<GroupChatCard
								group={item}
								key={item.id}
								user={session?.user as CustomUser}
							/>
						))}
				</div>
			</div>
		</div>
	);
}
