import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
	return (
		<section className="flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white p-12 text-center">
			<h1 className="mb-4 font-extrabold text-5xl text-gray-900">
				Instant Chat Links for Seamless Conversations
			</h1>
			<p className="mb-8 text-gray-600 text-xl">
				QuickChat makes it effortless to create secure chat links and start
				conversations in seconds.
			</p>
			<Link href="/dashboard">
				<Button size="lg" className="animate-pulse">
					Start Chatting
				</Button>
			</Link>

			<div className="mt-12 flex w-full max-w-5xl justify-center">
				{/* Placeholder for Illustration/Image */}
				<img
					src="/images/conversation.svg"
					alt="Illustration"
					className="h-auto w-full"
				/>
			</div>
		</section>
	);
}
