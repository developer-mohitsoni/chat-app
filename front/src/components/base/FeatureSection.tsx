import FeatureCard from "./FeatureCard";

export default function FeatureSection() {
	return (
		<section
			id="features"
			className="grid grid-cols-1 gap-8 p-12 md:grid-cols-2 lg:grid-cols-3"
		>
			<FeatureCard
				icon="🚀"
				title="Instant Setup"
				description="Generate a room link in seconds. No account required."
			/>
			<FeatureCard
				icon="🔒"
				title="Secure"
				description="Passcode protection for your private conversations."
			/>
			<FeatureCard
				icon="💻"
				title="Cross-Platform"
				description="Works on any device with a modern web browser."
			/>
		</section>
	);
}
