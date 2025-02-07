import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import React from "react";

const page = () => {
	return (
		<div className="text-center flex content-center items-center translate-x-1/2">
			<TextGenerateEffect
				words="{CodeX} weekly challenges are loading ..... " //the last underline it should me blinking
				className="text-center text-[40px] md:text-5xl lg:text-6xl"
			/>
		</div>
	);
};

export default page;
