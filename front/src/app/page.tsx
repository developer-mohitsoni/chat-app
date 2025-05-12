import FeatureSection from "@/components/base/FeatureSection";
import Footer from "@/components/base/Footer";
import HeroSection from "@/components/base/HeroSection";
import Navbar from "@/components/base/Navbar";
import UserReviews from "@/components/base/UserReviews";
import { getServerSession } from "next-auth";
import {
	type CustomSession,
	authOptions
} from "./api/auth/[...nextauth]/options";
export default async function LandingPage() {
	const session: CustomSession | null = await getServerSession(authOptions);
	return (
		<div className="flex min-h-screen flex-col ">
			{/* Header */}
			<Navbar user={session?.user ?? null} />
			{/* Hero Section */}
			<HeroSection />

			{/* Features Section */}
			<FeatureSection />

			{/* User Reviews Section */}
			<UserReviews />

			{/* Footer */}
			<Footer />
		</div>
	);
}
