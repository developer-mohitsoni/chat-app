import { Card } from "@/components/ui/card";
export default function UserReviews() {
	return (
		<section className="bg-gray-50 p-12">
			<h2 className="mb-8 text-center font-bold text-3xl">
				What Our Users Say
			</h2>
			<div className="flex flex-col justify-center space-y-6 md:flex-row md:space-x-6 md:space-y-0">
				<Card className="p-6 text-center">
					<p className="text-gray-700 text-lg">
						“QuickChat is a game-changer! The fastest way to start a chat.”
					</p>
					<div className="mt-4">
						<img
							src="/images/user1.png"
							alt="User 1"
							className="mx-auto h-12 w-12 rounded-full"
						/>
						<div className="mt-2 text-gray-800">John Doe, Developer</div>
					</div>
				</Card>
				<Card className="p-6 text-center">
					<p className="text-gray-700 text-lg">
						“The encryption is top-notch. I feel secure using QuickChat.”
					</p>
					<div className="mt-4">
						<img
							src="/images/user2.png"
							alt="User 2"
							className="mx-auto h-12 w-12 rounded-full"
						/>
						<div className="mt-2 text-gray-800">Jane Smith, Designer</div>
					</div>
				</Card>
			</div>
		</section>
	);
}
