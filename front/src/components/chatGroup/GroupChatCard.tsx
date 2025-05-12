import type { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GroupChatCardMenu from "./GroupChatCardMenu";

export default function GroupChatCard({
	group,
	user
}: {
	group: GroupChatType;
	user: CustomUser;
}) {
	return (
		<Card>
			<CardHeader className="flex-row items-center justify-between ">
				<CardTitle className="text-2xl">{group.title}</CardTitle>
				<GroupChatCardMenu user={user} group={group} />
			</CardHeader>
			<CardContent>
				<p>
					Passcode :-<strong>{group.passcode}</strong>
				</p>
				<p>Created At :-{new Date(group.created_at).toDateString()}</p>
			</CardContent>
		</Card>
	);
}
