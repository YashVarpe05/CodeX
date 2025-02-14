"use client";

import { navItems } from "@/data";
import TimeLineEvent from "@/components/TimeLineEvent";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
// import {  } from "@/components/LogoTicker";
// import LogoTicker from "@/components/LogoTicker";
import FooterMap from "@/components/FooterMap";
import FloatingSocial from "@/components/Floatingsocial";
import Teamsection from "@/components/Teamsection";
import { IconTimelineEvent } from "@tabler/icons-react";
import Link from "next/link";
import Shery from "sheryjs";
import { useEffect } from "react";

const Home = () => {
	useEffect(() => {
		Shery.mouseFollower({
			// skew: true,
			ease: "cubic-bezier(1, 1, 1, 1)",
			// duration: 1,
		});
	}, []); // Move Shery initialization to useEffect

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
