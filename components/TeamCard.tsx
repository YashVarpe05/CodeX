"use client";
import React from "react";
import { PinContainer } from "@/src/components/ui/3d-pin";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody, BallCollider, CuboidCollider } from "@react-three/rapier";
import * as THREE from "three";
import type { TeamMember } from "../data/teamData";

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

export function TeamCard({
	member,
	position,
}: {
	member: TeamMember;
	position: [number, number, number];
}) {
	const band = useRef(),
		fixed = useRef(),
		j1 = useRef(),
		j2 = useRef(),
		j3 = useRef(),
		card = useRef();
	const { nodes, materials } = useGLTF(member.modelPath);

	const segmentProps = {
		type: "dynamic",
		canSleep: true,
		colliders: false,
		angularDamping: 2,
		linearDamping: 2,
	};

	return (
		<group position={position}>
			<RigidBody ref={fixed} {...segmentProps} type="fixed" />
			<RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
				<BallCollider args={[0.1]} />
			</RigidBody>
			{/* ...existing physics bodies... */}
			<RigidBody position={[2, 0, 0]} ref={card} {...segmentProps}>
				<CuboidCollider args={[0.8, 1.125, 0.01]} />
				<group scale={2.25} position={[0, -1.2, -0.05]}>
					<mesh geometry={nodes.card.geometry}>
						<meshPhysicalMaterial
							map={materials.base.map}
							map-anisotropy={32}
							clearcoat={1}
							clearcoatRoughness={0.15}
							roughness={0.3}
							metalness={0.5}
						/>
					</mesh>
					{/* Add name and role text here if needed */}
				</group>
			</RigidBody>
		</group>
	);
}

export default AnimatedPinDemo;
