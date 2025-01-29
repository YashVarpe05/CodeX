"use client";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import React from "react";
import TimeLineEvent from "@/components/TimeLineEvent";
import { FeaturesSectionDemo } from "@/components/FeatureSectionDemo";

const EventsPage = () => {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<FeaturesSectionDemo />
				<TimeLineEvent />
				
			</div>
		</main>
	);
};

export default EventsPage;
