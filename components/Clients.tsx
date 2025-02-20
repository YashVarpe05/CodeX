"use client";

import React from "react";
import Image from "next/image";

import { companies, testimonials } from "@/data";
<<<<<<< HEAD
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";
=======
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import Image from "next/image";
>>>>>>> 665e10348d5d61c2ed3f39e98f8aab70f4fd58ce

const Clients = () => {
	return (
		<section id="testimonials" className="py-20">
			<h1 className="heading">
				Kind words from
				<span className="text-purple"> Reviewers</span>
			</h1>

			<div className="flex flex-col items-center max-lg:mt-10">
				<div
					// remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
					className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
				>
					<InfiniteMovingCards
						items={testimonials.map(item => ({
							...item,
							img: "" // Adding empty img property to satisfy type requirement
						}))}
						direction="right" 
						speed="slow"
					/>
				</div>

				<div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
					{companies.map((company) => (
						<React.Fragment key={company.id}>
							<div className="flex md:max-w-60 max-w-32 gap-2">
								<Image
									src={company.img}
									alt={company.name}
									width={40}
									height={40}
									className="md:w-10 w-5"
								/>
								<Image
									src={company.nameImg}
									alt={company.name}
									width={company.id === 4 || company.id === 5 ? 100 : 150}
									height={50}
									className="md:w-24 w-20"
								/>
							</div>
						</React.Fragment>
					))}
				</div>
			</div>
		</section>
	);
};

export default Clients;
