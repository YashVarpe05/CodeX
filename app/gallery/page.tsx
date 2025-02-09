"use client";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import BlurText from "@/BlurText/BlurText";
import InfiniteMenu from "@/gallery/InfiniteMenu/InfiniteMenu";
import { motion } from "framer-motion";

const items = [
	{
		image: "https://picsum.photos/800/600?random=1",
		link: "https://google.com/",
		// title: "Digital Innovation",
		category: "Technology",
		// description: "Exploring the future of digital transformation",
	},
	{
		image: "https://picsum.photos/800/600?random=2",
		link: "https://google.com/",
		// title: "Creative Design",
		category: "Art",
		// description: "Where creativity meets functionality",
	},
	{
		image: "https://picsum.photos/800/600?random=3",
		link: "https://google.com/",
		// title: "Modern Architecture",
		category: "Design",
		// description: "Stunning architectural masterpieces",
	},
	{
		image: "https://picsum.photos/800/600?random=4",
		link: "https://google.com/",
		// title: "Nature's Beauty",
		category: "Photography",
		// description: "Capturing moments in time",
	},
];

const handleAnimationComplete = () => {
	console.log("Animation completed!");
};

const TeamPage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-b">
			<FloatingNav navItems={navItems} />

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="mt-32 text-center flex items-center justify-center"
			>
				<BlurText
					text="Let's explore (by double tapping and move the cursor)!"
					delay={150}
					animateBy="words"
					direction="top"
					onAnimationComplete={handleAnimationComplete}
					className="text-4xl md:text-5xl font-bold text-white mb-8"
				/>
			</motion.div>

			<div style={{ height: "h-screen", position: "relative" }}>
				<InfiniteMenu items={items} />
			</div>
		</div>
	);
};

export default TeamPage;
