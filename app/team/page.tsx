"use client";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import React from "react";
import TeamCard from "@/components/TeamCard";
import DecryptedText from "@/DecryptedText/DecryptedText";
const page = () => {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />

				<div className="grid grid-flow-col  grid-cols-4 grid-rows-1 gap-[10rem]">
					<TeamCard />
					<TeamCard />
					<TeamCard />
					<TeamCard />
				</div>
			</div>
		</main>
	);
};

export default page;
