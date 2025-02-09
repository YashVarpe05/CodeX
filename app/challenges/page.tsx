"use client";
import React, { useState } from "react";
import Quiz from "./components/Quiz";
import CodeChallenge from "./components/CodeChallenge";
import Roadmap from "./components/Roadmap";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
export default function ChallengesPage() {
	const [activeTab, setActiveTab] = useState("quiz");

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
			<FloatingNav navItems={navItems} />
			<h1 className="text-4xl font-bold text-center mb-8">
				Challenges & Learning
			</h1>

			<div className="flex justify-center mb-8">
				<nav className="bg-gray-800 p-2 rounded-lg">
					{["quiz", "code", "roadmap"].map((tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`px-6 py-2 rounded-md mx-2 transition-all ${
								activeTab === tab
									? "bg-blue-600 text-white"
									: "text-gray-300 hover:bg-gray-700"
							}`}
						>
							{tab.charAt(0).toUpperCase() + tab.slice(1)}
						</button>
					))}
				</nav>
			</div>

			<div className="container mx-auto">
				{activeTab === "quiz" && <Quiz />}
				{activeTab === "code" && <CodeChallenge />}
				{activeTab === "roadmap" && <Roadmap />}
			</div>
		</div>
	);
}
