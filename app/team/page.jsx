"use client";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import GlowingEffectTeamcard from "@/components/GlowingTeamcard";
import TimelineDemo from "@/components/TimeLineEvent";
import GlowingEffectDemoSecond from "@/components/GlowingTeamcard";
import TeamSection from "@/components/Team";
import Team from "@/components/Team";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Sagar from "@/components/Sagar";
import Shubham from "@/components/Shubham";
import Yash2 from "@/components/Yash";
import Sayali from "@/components/Sayali";
import Darshana from "@/components/Darshana";
import Harshad from "@/components/Harshad";
import Om from "@/components/Om";
import Pratik from "@/components/Pratik";
import PratikS from "@/components/PratikS";
import Tanishq from "@/components/Tanishq";
import Yogesh from "@/components/Yogesh";
import styles from "./team.module.css";

const TeamPage = () => {
	return (
		<>
			<div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black">
				<div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"></div>
				<div className="relative flex items-center justify-center flex-col w-full">
					<FloatingNav navItems={navItems} />
					<div className="flex justify-center relative my-10 md:my-20 z-10 px-4 mt-24">
						<TextGenerateEffect
							words=".... {CodeX} Tech Leaders;_ "
							className="text-center text-3xl md:text-5xl lg:text-6xl"
						/>
					</div>
				</div>

				<div className="container mx-auto px-4 py-8 min-h-screen">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-full">
						<div className="aspect-square h-96">
							<Sagar />
						</div>
						<div className="aspect-square h-96">
							<Shubham />
						</div>
						<div className="aspect-square h-96">
							<Sayali />
						</div>
						<div className="aspect-square h-96">
							<Darshana />
						</div>
						<div className="aspect-square h-96">
							<Harshad />
						</div>
						<div className="aspect-square h-96">
							<Om />
						</div>
						<div className="aspect-square h-96">
							<Pratik />
						</div>
						<div className="aspect-square h-96">
							<PratikS />
						</div>
						<div className="aspect-square h-96">
							<Tanishq />
						</div>
						<div className="aspect-square h-96">
							<Yogesh />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TeamPage;
