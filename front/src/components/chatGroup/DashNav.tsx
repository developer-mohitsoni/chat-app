"use client";
import ProfileMenu from "../auth/ProfileMenu";

export default function DashNav({
	image,
	name
}: {
	image?: string;
	name: string;
}) {
	return (
		<nav className="flex items-center justify-between bg-white px-6 py-2 shadow-sm">
			<h1 className="font-extrabold text-xl md:text-2xl">QuickChat</h1>
			<div className="flex items-center space-x-2 text-gray-700 md:space-x-6">
				<ProfileMenu name={name} image={image} />
			</div>
		</nav>
	);
}
