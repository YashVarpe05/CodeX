"use client";

import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const RecentProjects = () => {
	return (
		<div className="py-20">
			<h1 className="heading">
				A small selection of{" "}
				<span className="text-purple">recent projects</span>
			</h1>
			<div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
				{projects.map((item) => (
					<div
						className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
						key={item.id}
					>
						<PinContainer
							title="/ui.aceternity.com"
							href="https://twitter.com/mannupaaji"
						>
							<div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
								<div
									className="relative w-full h-full overflow-hidden lg:rounded-3xl"
									style={{ backgroundColor: "#13162D" }}
								>
<<<<<<< HEAD
									<Image
										src="/bg.png"
										alt="bgimg"
										width={1920}
										height={1080}
										className="w-full h-full object-cover"
									/>
=======
									<Image src="/bg.png" alt="bgimg" />
>>>>>>> 665e10348d5d61c2ed3f39e98f8aab70f4fd58ce
								</div>
								<Image
									src={item.img}
									alt="cover"
<<<<<<< HEAD
									width={400}
									height={300}
									className="z-10 absolute bottom-0 w-full h-full object-cover"
								/>
								<Image
									src={item.logo}
									alt={`${item.title} logo`}
									width={40}
									height={40}
									className="absolute top-4 left-4 w-10 h-10"
=======
									className="z-10 absolute bottom-0"
>>>>>>> 665e10348d5d61c2ed3f39e98f8aab70f4fd58ce
								/>
							</div>

							<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
								{item.title}
							</h1>

							<p
								className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
								style={{
									color: "#BEC1DD",
									margin: "1vh 0",
								}}
							>
								{item.des}
							</p>

							<div className="flex items-center justify-between mt-7 mb-3">
								<div className="flex items-center">
									{item.iconLists.map((icon, index) => (
										<div
											key={index}
											className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
											style={{
												transform: `translateX(-${5 * index + 2}px)`,
											}}
										>
<<<<<<< HEAD
											<Image
												src={icon}
												alt="icon5"
												width={24}
												height={24}
												className="p-2"
											/>
=======
											<Image src={icon} alt="icon5" className="p-2" />
>>>>>>> 665e10348d5d61c2ed3f39e98f8aab70f4fd58ce
										</div>
									))}
								</div>

								<div className="flex justify-center items-center">
									<p className="flex lg:text-xl md:text-xs text-sm text-purple">
										Check Live Site
									</p>
									<FaLocationArrow className="ms-3" color="#CBACF9" />
								</div>
							</div>
						</PinContainer>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecentProjects;
