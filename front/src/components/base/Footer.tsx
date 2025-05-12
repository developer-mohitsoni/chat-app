import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-900 p-6 text-white">
			<div className="flex justify-between">
				<div>
					<div>© 2024 QuickChat. All rights reserved.</div>
					<div className="mt-2 space-x-4">
						<Link href="/privacy-policy">Privacy Policy</Link>
						<Link href="/terms-of-service">Terms of Service</Link>
					</div>
				</div>
				<div className="space-y-4">
					<Input
						placeholder="Subscribe to our newsletter"
						className="border-none bg-gray-800"
					/>
					<Button>Subscribe</Button>
				</div>
			</div>
		</footer>
	);
}
