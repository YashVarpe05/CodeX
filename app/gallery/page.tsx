"use client";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

import TimelineDemo from "@/components/TimeLineEvent";
import InfiniteMenu from "@/gallery/InfiniteMenu/InfiniteMenu";
import BlurText from "@/BlurText/BlurText";
const items = [
	{
		image: "https://picsum.photos/300/300",
		link: "https://google.com/",
		// title: "Item 1",
		// description: "This is pretty cool, right?",
	},
	{
		image: "https://picsum.photos/400/400",
		link: "https://google.com/",
		// title: "Item 2",
		// description: "This is pretty cool, right?",
	},
	{
		image: "https://picsum.photos/500/500",
		link: "https://google.com/",
		// title: "Item 3",
		// description: "This is pretty cool, right?",
	},
	{
		image: "https://picsum.photos/600/600",
		link: "https://google.com/",
		// title: "Item 4",
		// description: "This is pretty cool, right?",
	},
];
const handleAnimationComplete = () => {
	console.log("Animation completed!");
};

const TeamPage = () => {
	return (
		<>
			<FloatingNav navItems={navItems} />
			<div className="mt-32 text-center flex items-center justify-center ">
				<BlurText
					text="Let's explore (by double tapping and move the cursor)!"
					delay={150}
					animateBy="words"
					direction="top"
					onAnimationComplete={handleAnimationComplete}
					className="text-2xl mb-8"
				/>
			</div>
			<div style={{ height: "h-screen", position: "relative" }}>
				<InfiniteMenu items={items} />
			</div>
		</>
	);
};

export default TeamPage;
