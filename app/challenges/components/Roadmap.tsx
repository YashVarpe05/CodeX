"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { developmentPaths } from "@/data/roadmapData";

interface RoadmapNode {
	id: string;
	title: string;
	description?: string;
	status?: string;
	children?: RoadmapNode[];
}

export default function Roadmap() {
	const [selectedPath, setSelectedPath] =
		useState<keyof typeof developmentPaths>("frontend");

	const renderNode = (node: RoadmapNode) => (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="mb-6"
		>
			<div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
				<h3
					className={`text-xl font-semibold ${
						node.status === "required"
							? "text-blue-400"
							: node.status === "recommended"
							? "text-green-400"
							: "text-yellow-400"
					}`}
				>
					{node.title}
				</h3>
				<p className="text-gray-300 mt-2">{node.description}</p>

				{node.children && (
					<div className="ml-6 mt-4 border-l-2 border-gray-700 pl-6">
						{node.children.map((child) => (
							<div key={child.id}>{renderNode(child)}</div>
						))}
					</div>
				)}
			</div>
		</motion.div>
	);

	return (
		<div className="max-w-6xl mx-auto">
			<div className="flex gap-4 mb-8">
				{Object.entries(developmentPaths).map(([key, path]) => (
					<motion.button
						key={key}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() =>
							setSelectedPath(key as keyof typeof developmentPaths)
						}
						className={`px-6 py-3 rounded-xl ${
							selectedPath === key ? "bg-blue-600" : "bg-gray-700/50"
						}`}
					>
						{path.title}
					</motion.button>
				))}
			</div>

			<motion.div
				key={selectedPath}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				{renderNode(developmentPaths[selectedPath])}
			</motion.div>
		</div>
	);
}
