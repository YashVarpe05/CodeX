"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
	gradientBackgroundStart = "rgb(108, 0, 162)",
	gradientBackgroundEnd = "rgb(0, 17, 82)",
	firstColor = "18, 113, 255",
	secondColor = "221, 74, 255",
	thirdColor = "100, 220, 255",
	fourthColor = "200, 50, 50",
	fifthColor = "180, 180, 50",
	pointerColor = "140, 100, 255",
	size = "80%",
	blendingValue = "hard-light",
	children,
	className,
	interactive = true,
	containerClassName,
}: {
	gradientBackgroundStart?: string;
	gradientBackgroundEnd?: string;
	firstColor?: string;
	secondColor?: string;
	thirdColor?: string;
	fourthColor?: string;
	fifthColor?: string;
	pointerColor?: string;
	size?: string;
	blendingValue?: string;
	children?: React.ReactNode;
	className?: string;
	interactive?: boolean;
	containerClassName?: string;
}) => {
	const interactiveRef = useRef<HTMLDivElement>(null);
	const [curX, setCurX] = useState(0);
	const [curY, setCurY] = useState(0);
	const [tgX, setTgX] = useState(0);
	const [tgY, setTgY] = useState(0);

	const initGradient = () => {
		const gradientElement = document.querySelector(".gradients-container");
		if (!gradientElement) return;

		const gradients = gradientElement.querySelectorAll("div");
		gradients.forEach((gradient) => {
			if (gradient.classList.contains("animate-first")) {
				gradient.style.opacity = "1";
				gradient.style.transform = "translate3d(0px, 0px, 0px)";
			} else if (gradient.classList.contains("animate-second")) {
				gradient.style.opacity = "0.8";
				gradient.style.transform = "translate3d(-400px, 0px, 0px)";
			} else if (gradient.classList.contains("animate-third")) {
				gradient.style.opacity = "0.8";
				gradient.style.transform = "translate3d(400px, 0px, 0px)";
			} else if (gradient.classList.contains("animate-fourth")) {
				gradient.style.opacity = "0.7";
				gradient.style.transform = "translate3d(-200px, 0px, 0px)";
			} else if (gradient.classList.contains("animate-fifth")) {
				gradient.style.opacity = "1";
				gradient.style.transform = "translate3d(-800px, 800px, 0px)";
			}
		});
	};

	useEffect(() => {
		document.body.style.setProperty(
			"--gradient-background-start",
			gradientBackgroundStart
		);
		document.body.style.setProperty(
			"--gradient-background-end",
			gradientBackgroundEnd
		);
		document.body.style.setProperty("--first-color", firstColor);
		document.body.style.setProperty("--second-color", secondColor);
		document.body.style.setProperty("--third-color", thirdColor);
		document.body.style.setProperty("--fourth-color", fourthColor);
		document.body.style.setProperty("--fifth-color", fifthColor);
		document.body.style.setProperty("--pointer-color", pointerColor);
		document.body.style.setProperty("--size", size);
		document.body.style.setProperty("--blending-value", blendingValue);
	}, [
		gradientBackgroundStart,
		gradientBackgroundEnd,
		firstColor,
		secondColor,
		thirdColor,
		fourthColor,
		fifthColor,
		pointerColor,
		size,
		blendingValue,
	]);

	useEffect(() => {
		function move() {
			if (!interactiveRef.current) return;
			const newCurX = curX + (tgX - curX) / 20;
			const newCurY = curY + (tgY - curY) / 20;
			setCurX(newCurX);
			setCurY(newCurY);
			interactiveRef.current.style.transform = `translate(${Math.round(
				newCurX
			)}px, ${Math.round(newCurY)}px)`;
		}
		move();
	}, [tgX, tgY, curX, curY]);

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (interactiveRef.current) {
			const rect = interactiveRef.current.getBoundingClientRect();
			setTgX(event.clientX - rect.left);
			setTgY(event.clientY - rect.top);
		}
	};

	const [isSafari, setIsSafari] = useState(false);
	useEffect(() => {
		setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
	}, []);

	useEffect(() => {
		initGradient();
	}, []);

	return (
		<div
			className={cn(
				"w-full h-full absolute overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
				containerClassName
			)}
		>
			<svg className="hidden">
				<defs>
					<filter id="blurMe">
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="10"
							result="blur"
						/>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
							result="goo"
						/>
						<feBlend in="SourceGraphic" in2="goo" />
					</filter>
				</defs>
			</svg>
			<div className={cn("", className)}>{children}</div>
			<div
				className={cn(
					"gradients-container h-full w-full blur-lg",
					isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
				)}
			>
				<div
					className={cn(
						`absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
						`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
						`[transform-origin:center_center]`,
						`animate-first`,
						`opacity-100`
					)}
				></div>
				<div
					className={cn(
						`absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
						`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
						`[transform-origin:calc(50%-400px)]`,
						`animate-second`,
						`opacity-100`
					)}
				></div>
				<div
					className={cn(
						`absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
						`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
						`[transform-origin:calc(50%+400px)]`,
						`animate-third`,
						`opacity-100`
					)}
				></div>
				<div
					className={cn(
						`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
						`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
						`[transform-origin:calc(50%-200px)]`,
						`animate-fourth`,
						`opacity-70`
					)}
				></div>
				<div
					className={cn(
						`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
						`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
						`[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
						`animate-fifth`,
						`opacity-100`
					)}
				></div>

				{interactive && (
					<div
						ref={interactiveRef}
						onMouseMove={handleMouseMove}
						className={cn(
							`absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
							`[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
							`opacity-70`
						)}
					></div>
				)}
			</div>
		</div>
	);
};
