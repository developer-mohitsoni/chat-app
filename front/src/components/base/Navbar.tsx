"use client";
import type { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";
import LoginModal from "../auth/LoginModal";
import { Button } from "../ui/button";
export default function Navbar({ user }: { user: CustomUser | null }) {
	return (
		<nav className="flex items-center justify-between bg-white p-6 shadow-sm">
			<h1 className="font-extrabold text-xl md:text-2xl">QuickChat</h1>
			<div className="flex items-center space-x-2 text-gray-700 md:space-x-6">
				<Link href="/">Home</Link>
				<Link href="#features">Features</Link>
				{!user ? (
					<LoginModal />
				) : (
					<Link href="/dashboard">
						<Button>Dashboard</Button>
					</Link>
				)}
			</div>
		</nav>
	);
}
