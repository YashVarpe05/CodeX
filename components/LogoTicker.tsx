import React from "react";
import apexLogo from "../public/logo-acme.png";
import cloudinaryLogo from "../public/logo-celestial.png";
import dockerLogo from "../public/logo-echo.png";
import hostingerLogo from "../public/logo-pulse.png";
import streamLogo from "../public/logo-quantum.png";

const LogoTicker = () => {
	return (
		<section className="bg-slate-950">
			<div className="container">
				<div className="flex items-center justify-center py-10">
					<div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20% black_80% transparent)]">
						{/* <h2></h2> */}
						<div className="flex flex-none gap-20 ">
							{[
								apexLogo,
								cloudinaryLogo,
								dockerLogo,
								hostingerLogo,
								streamLogo,
							].map((logo) => (
								<img
									src={logo.src}
									alt="logo"
									key={logo.src}
									className="h-6 w-auto"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LogoTicker;
