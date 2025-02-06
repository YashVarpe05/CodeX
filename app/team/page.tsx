"use client";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import GlowingEffectTeamcard from "@/components/GlowingTeamcard";
import TimelineDemo from "@/components/TimeLineEvent";
import InfiniteMenu from "@/InfiniteMenu/InfiniteMenu";
import GlowingEffectDemoSecond from "@/components/GlowingTeamcard";
import TeamSection from "@/components/Team";
import Team from "@/components/Team";

const TeamPage = () => {
	return (
		<>
			<div className="flex items-center justify-center flex-col">
				<FloatingNav navItems={navItems} />
				<h1 className="text-white text-4xl">Team Page</h1>
				<div className="w-[80vw] h-[80vh] flex overflow-hidden items-center justify-center ">
					{/* <GlowingEffectDemoSecond /> */}
					{/* <TeamSection /> */}
					<Team />
					<Team />
					<Team />
					<Team />
				</div>
				<div className="w-[80vw] h-[80vh] flex overflow-hidden items-center justify-center ">
					{/* <GlowingEffectDemoSecond /> */}
					{/* <TeamSection /> */}
					<Team />
					<Team />
					<Team />
					<Team />
				</div>{" "}
				<div className="w-[80vw] h-[80vh] flex overflow-hidden items-center justify-center ">
					{/* <GlowingEffectDemoSecond /> */}
					{/* <TeamSection /> */}
					<Team />
					<Team />
					<Team />
					<Team />
				</div>{" "}
				<div className="w-[100vw] h-[80vh] flex overflow-hidden items-center justify-center ">
					{/* <GlowingEffectDemoSecond /> */}
					{/* <TeamSection /> */}
					<Team />
					<Team />
					<Team />
					<Team />
				</div>
			</div>
		</>
	);
};

export default TeamPage;
