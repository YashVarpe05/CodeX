"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";

function GlowingEffectDemoSecond() {
	return (
		<ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
			<GridItem
				area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
				img="/cards.png"
				title="Do things the right way"
				description="Running out of copy so I'll write anything."
			/>

			<GridItem
				area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
				img="settings.png"
				title="The best AI code editor ever."
				description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
			/>

			<GridItem
				area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
				img="lock.png"
				title="You should buy Aceternity UI Pro"
				description="It's the best money you'll ever spend"
			/>

			<GridItem
				area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
				img="sparkles.png"
				title="This card is also built by Cursor"
				description="I'm not even kidding. Ask my mom if you don't believe me."
			/>

			<GridItem
				area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
				img="search.png"
				title="Coming soon on Aceternity UI"
				description="I'm writing the code as I record this, no shit."
			/>
		</ul>
	);
}

interface GridItemProps {
	area: string;
	img: string;
	title: string;
	description: React.ReactNode;
}

const GridItem = ({ area, img, title, description }: GridItemProps) => {
	return (
		<li className={`min-h-[14rem] list-none ${area}`}>
			<a href="#">
				<div
					className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3"
					style={{
						backgroundImage: `url(./${img})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<GlowingEffect
						blur={0}
						borderWidth={3}
						spread={100}
						glow={true}
						disabled={false}
						proximity={64}
						inactiveZone={0.01}
					/>
					<div className="absolute inset-0 rounded-2.5xl bg-black opacity-40" />
					<div className="relative flex h-full flex-col justify-between gap-6 p-6">
						<div className="space-y-3 text-white">
							<h3 className="pt-0.5 text-xl font-semibold md:text-2xl">
								{title}
							</h3>
							<h2 className="font-sans text-sm md:text-base">{description}</h2>
						</div>
					</div>
				</div>
			</a>
		</li>
	);
};

export default GlowingEffectDemoSecond;
