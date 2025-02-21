"use client";
import dynamic from "next/dynamic";
import { navItems } from "@/data";
import TimeLineEvent from "@/components/TimeLineEvent";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Link from "next/link";

// Dynamically import components that use browser APIs
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Teamsection = dynamic(() => import("@/components/Teamsection"), {
	ssr: false,
});

const Home = () => {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<TimeLineEvent />
				{/* <RecentProjects /> */}
				<Clients />
				{/* <TeamCard /> */}
				<Teamsection />

				<Experience />

				<Approach />
				<Footer />
				<Link href="/form">
					<button className="your-existing-button-classes">Connect</button>
				</Link>
			</div>
		</main>
	);
};

export default Home;
