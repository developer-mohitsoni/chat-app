import { Card } from "@/components/ui/card";

export default function FeatureCard({
	icon,
	title,
	description
}: {
	icon: string;
	title: string;
	description: string;
}) {
	return (
		<Card className="bg-card p-6">
			<div className="mb-4 text-3xl">{icon}</div>
			<h3 className="mb-2 font-semibold text-xl">{title}</h3>
			<p className="text-muted-foreground">{description}</p>
		</Card>
	);
}
