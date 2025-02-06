import { forwardRef } from "react";
import React from "react";
import Image from "next/image";

const Card = forwardRef(({ id, frontSrc, frontAlt, backText }, ref) => {
	return (
		<div className="card" id={id} ref={ref}>
			<div className="card-wrapper">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<Image
							priority
							src={frontSrc}
							alt={frontAlt}
							width={500}
							height={500}
						/>
					</div>
					<div className="flip-card-back">
						<p>{backText}</p>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Card;
