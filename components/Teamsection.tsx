import React from "react";
import TeamCard from "@/TiltedCard/TiltedCard";
import ShinyText from "@/ShinyText/ShinyText";
const Teamsection = () => {
	return (
		<>
			<div className=" text-center mb-8">
				<ShinyText
					text="Teams"
					disabled={false}
					speed={3}
					className="text-5xl font-extrabold text-center"
				/>
			</div>

			<div className="flex items-center gap-10 ">
				<TeamCard
					imageSrc="https://images.unsplash.com/photo-1737625775722-9214c9cddf97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
					altText="Kendrick Lamar - GNX Album Cover"
					captionText="Kendrick Lamar - GNX"
					containerHeight="300px"
					containerWidth="300px"
					imageHeight="300px"
					imageWidth="300px"
					rotateAmplitude={12}
					scaleOnHover={1.2}
					showMobileWarning={false}
					showTooltip={true}
					displayOverlayContent={true}
					overlayContent={
						<p className="tilted-card-demo-text m-5 px-3 py-3 bg-[#544b4b81] rounded font-semibold">
							Kendrick Lamar - GNX
						</p>
					}
				/>
				<TeamCard
					imageSrc="https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
					altText="Kendrick Lamar - GNX Album Cover"
					captionText="Kendrick Lamar - GNX"
					containerHeight="300px"
					containerWidth="300px"
					imageHeight="300px"
					imageWidth="300px"
					rotateAmplitude={12}
					scaleOnHover={1.2}
					showMobileWarning={false}
					showTooltip={true}
					displayOverlayContent={true}
					overlayContent={
						<p className="tilted-card-demo-text m-5 px-3 py-3 bg-[#544b4b81] rounded font-semibold">
							Kendrick Lamar - GNX
						</p>
					}
				/>
				<TeamCard
					imageSrc="https://images.unsplash.com/photo-1736754073585-11dcffe6da63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
					altText="Kendrick Lamar - GNX Album Cover"
					captionText="Kendrick Lamar - GNX"
					containerHeight="300px"
					containerWidth="300px"
					imageHeight="300px"
					imageWidth="300px"
					rotateAmplitude={12}
					scaleOnHover={1.2}
					showMobileWarning={false}
					showTooltip={true}
					displayOverlayContent={true}
					overlayContent={
						<p className="tilted-card-demo-text m-5 px-3 py-3 bg-[#544b4b81] rounded font-semibold">
							Kendrick Lamar - GNX
						</p>
					}
				/>
				<TeamCard
					imageSrc="https://images.unsplash.com/photo-1736444865981-1f01548f5af8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
					altText="Kendrick Lamar - GNX Album Cover"
					captionText="Kendrick Lamar - GNX"
					containerHeight="300px"
					containerWidth="300px"
					imageHeight="300px"
					imageWidth="300px"
					rotateAmplitude={12}
					scaleOnHover={1.2}
					showMobileWarning={false}
					showTooltip={true}
					displayOverlayContent={true}
					overlayContent={
						<p className="tilted-card-demo-text m-5 px-3 py-3 bg-[#544b4b81] rounded font-semibold">
							Kendrick Lamar - GNX
						</p>
					}
				/>
			</div>
		</>
	);
};

export default Teamsection;
