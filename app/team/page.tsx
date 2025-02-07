"use client";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import GlowingEffectTeamcard from "@/components/GlowingTeamcard";
import TimelineDemo from "@/components/TimeLineEvent";
import InfiniteMenu from "@/InfiniteMenu/InfiniteMenu";
import GlowingEffectDemoSecond from "@/components/GlowingTeamcard";
import TeamSection from "@/components/Team";
import Team from "@/components/Team";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const TeamPage = () => {
	return (
		<>
			<div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black">
				<div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] opacity-30"></div>
				<div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"></div>
				<div className="relative flex items-center justify-center flex-col w-full">
					<FloatingNav navItems={navItems} />
					<div className="flex justify-center relative my-10 md:my-20 z-10 px-4 mt-24">
						<TextGenerateEffect
							words=".... {CodeX} Tech Leaders;_ "
							className="text-center text-3xl md:text-5xl lg:text-6xl"
						/>
					</div>
					<div className="w-full min-h-[100vh] md:h-screen max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-6 p-4 sm:p-4">
						<Team />
						<Team />
						<Team />
						<Team />
					</div>
					<div className="w-full min-h-[100vh] md:h-screen max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-6 p-4 sm:p-4">
						<Team />
						<Team />
						<Team />
						<Team />
					</div>
					<div className="w-full min-h-[100vh] md:h-screen max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-6 p-4 sm:p-4">
						<Team />
						<Team />
						<Team />
						<Team />
					</div>
					<div className="w-full min-h-[100vh] md:h-screen max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-6 p-4 sm:p-4">
						<Team />
						<Team />
						<Team />
						<Team />
					</div>
				</div>
			</div>
		</>
	);
};

export default TeamPage;
