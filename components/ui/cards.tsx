import React, { forwardRef } from "react";
import Image from "next/image";

interface CardsProps {
	id: string;
	frontSrc: string;
	frontAlt: string;
	backText: string;
}

const Cards = forwardRef<HTMLDivElement, CardsProps>(
	({ id, frontSrc, frontAlt, backText }, ref) => {
		return (
			<div className="card" ref={ref} id={id}>
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<Image
							src={frontSrc}
							alt={frontAlt}
							fill
							style={{ objectFit: "cover" }}
						/>
					</div>
					<div className="flip-card-back">
						<p>{backText}</p>
					</div>
				</div>
			</div>
		);
	}
);

Cards.displayName = "Cards";
export default Cards;
