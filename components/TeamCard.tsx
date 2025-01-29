"use client";
import React from "react";
import { PinContainer } from "@/src/components/ui/3d-pin";
function AnimatedPinDemo() {
	return (
		<div className="h-[40rem] w-full flex items-center justify-center ">
			<PinContainer
				title="/lovdy jaa naaa "
				href="https://twitter.com/mannupaaji"
			>
				<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
					<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
						Chuty
					</h3>
					<div className="text-base !m-0 !p-0 font-normal">
						<span className="text-slate-500 ">bc mc lovdya az</span>
					</div>
					<div className="flex flex-1 w-full  h-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
						<img
							className="h-full w-full  object-cover"
							src="https://plus.unsplash.com/premium_photo-1735775899847-40dad89e6bd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
							alt=""
						/>
					</div>
				</div>
			</PinContainer>
		</div>
	);
}

export default AnimatedPinDemo;
