import React from "react";
import TeamCard from "@/TiltedCard/TiltedCard";
import ShinyText from "@/ShinyText/ShinyText";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FloatingDockDemo from "./Floatingsocial";

const Teamsection = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
			<div className="text-center mb-8">
				<ShinyText
					text="Teams"
					disabled={false}
					speed={3}
					className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center"
				/>
			</div>

			<Slider {...settings}>
				<div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 px-2 sm:px-4 lg:px-16">
					<div className="w-[250px] sm:w-[300px]">
						<TeamCard
							imageSrc="https://images.unsplash.com/photo-1737625775722-9214c9cddf97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
							altText="Kendrick Lamar - GNX Album Cover"
							captionText="Kendrick Lamar - GNX"
							containerHeight="250px"
							containerWidth="250px"
							imageHeight="250px"
							imageWidth="250px"
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
							className="sm:containerHeight-[300px] sm:containerWidth-[300px] sm:imageHeight-[300px] sm:imageWidth-[300px]"
						/>
					</div>
					<div className="mt-2 md:mt-0 scale-75 sm:scale-90 md:scale-100">
						<FloatingDockDemo />
					</div>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 px-2 sm:px-4 lg:px-16">
					<div className="w-[250px] sm:w-[300px]">
						<TeamCard
							imageSrc="https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
							altText="Kendrick Lamar - GNX Album Cover"
							captionText="Kendrick Lamar - GNX"
							containerHeight="250px"
							containerWidth="250px"
							imageHeight="250px"
							imageWidth="250px"
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
							className="sm:containerHeight-[300px] sm:containerWidth-[300px] sm:imageHeight-[300px] sm:imageWidth-[300px]"
						/>
					</div>
					<div className="mt-2 md:mt-0 scale-75 sm:scale-90 md:scale-100">
						<FloatingDockDemo />
					</div>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 px-2 sm:px-4 lg:px-16">
					<div className="w-[250px] sm:w-[300px]">
						<TeamCard
							imageSrc="https://images.unsplash.com/photo-1736754073585-11dcffe6da63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
							altText="Kendrick Lamar - GNX Album Cover"
							captionText="Kendrick Lamar - GNX"
							containerHeight="250px"
							containerWidth="250px"
							imageHeight="250px"
							imageWidth="250px"
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
							className="sm:containerHeight-[300px] sm:containerWidth-[300px] sm:imageHeight-[300px] sm:imageWidth-[300px]"
						/>
					</div>
					<div className="mt-2 md:mt-0 scale-75 sm:scale-90 md:scale-100">
						<FloatingDockDemo />
					</div>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 px-2 sm:px-4 lg:px-16">
					<div className="w-[250px] sm:w-[300px]">
						<TeamCard
							imageSrc="https://images.unsplash.com/photo-1736444865981-1f01548f5af8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
							altText="Kendrick Lamar - GNX Album Cover"
							captionText="Kendrick Lamar - GNX"
							containerHeight="250px"
							containerWidth="250px"
							imageHeight="250px"
							imageWidth="250px"
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
							className="sm:containerHeight-[300px] sm:containerWidth-[300px] sm:imageHeight-[300px] sm:imageWidth-[300px]"
						/>
					</div>
					<div className="mt-2 md:mt-0 scale-75 sm:scale-90 md:scale-100">
						<FloatingDockDemo />
					</div>
				</div>
			</Slider>
		</div>
	);
};

export default Teamsection;
