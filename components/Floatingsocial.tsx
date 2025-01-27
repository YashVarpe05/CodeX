import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
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

function FloatingDockDemo() {
	const links = [
		{
			title: "Instagram",
			icon: (
				<IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#",
		},
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
		<div className="flex items-center justify-center h-[5rem] w-full">
			<FloatingDock
				mobileClassName="translate-y-20" // only for demo, remove for production
				items={links}
			/>
		</div>
	);
}

export default FloatingDockDemo;
