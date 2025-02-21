import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

interface SocialMediaItem {
	id: number;
	img: string;
	name: string;
}

const Footer = () => {
	return (
		<footer className="w-full pt-20 pb-10" id="contact">
			{/* background grid */}
			<div className="w-full absolute left-0 -bottom-72 min-h-96">
				<Image
					src="/footer-grid.svg"
					alt="grid"
					width={1920}
					height={1080}
					className="w-full h-full opacity-50"
				/>
			</div>

			<div className="flex flex-col items-center">
				<h1 className="heading lg:max-w-[45vw]">
					Ready to take <span className="text-purple">your</span> Carrier
					presence to the next level?
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					Reach out to CodeX today and let&apos;s discuss how We can help you
					achieve your goals.
				</p>
				<a href="mailto:contact@jsmastery.pro">
					<MagicButton
						title="Let's get in touch"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</a>
			</div>
			<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
				<p className="md:text-base text-sm md:font-normal font-light">
					Copyright © 2024 CodeX
				</p>

				<div className="flex items-center md:gap-3 gap-6">
					{(socialMedia as SocialMediaItem[]).map((info) => (
						<div
							key={info.id}
							className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
						>
							<Image
								src={info.img}
								alt={info.name}
								width={24}
								height={24}
								className="w-6"
/>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
