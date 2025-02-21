import React from "react";
import dynamic from "next/dynamic";
import {
	IconBrandGithub,
	IconBrandX,
	IconExchange,
	IconHome,
	IconBrandInstagram,
	IconNewSection,
	IconBrandLinkedin,
	IconTerminal2,
	IconBrandGmail,
} from "@tabler/icons-react";
import Image from "next/image";
import { title } from "process";

const FloatingDock = dynamic(
	() => import("@/components/ui/floating-dock").then((mod) => mod.FloatingDock),
	{ ssr: false }
);

function FloatingDockDemo() {
	const links = [
		{
			title: "Linkedin",
			icon: (
				<IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},
		{
			title: "Gmail",
			icon: (
				<IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},
		{
			title: "Twitter",
			icon: (
				<IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},
		{
			title: "GitHub",
			icon: (
				<IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},
	];
	return (
		<div className="flex items-center justify-center h-[4rem] sm:h-[5rem] w-full">
			<FloatingDock
				mobileClassName="translate-y-16 sm:translate-y-20 scale-75 sm:scale-90 md:scale-100"
				items={links}
			/>
		</div>
	);
}

export default FloatingDockDemo;
