"use client";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
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
				<div className="flex flex-col items-center justify-center w-full">
					{/* Card Section */}
					<div className="w-[80vw] h-[80vh] flex overflow-hidden items-center justify-center ">
						<Sagar />
						<Shubham />
						<Sayali />
						<Darshana />
					</div>
					<div className="w-[80vw] h-[80vh] flex overflow-hidden items-center justify-center ">
						<Harshad />
						<Om />
						<Pratik />
						<PratikS />
					</div>
					<div className="w-[80vw] h-[80vh] flex overflow-hidden items-center justify-center ">
						<Tanishq />
						<Yogesh />
					</div>
				</div>
			</div>
			{/* </div> */}
		</>
	);
};

export default TeamPage;
