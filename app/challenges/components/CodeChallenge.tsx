"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { codeChallenges, challengeCategories } from "@/data/challengesData";

export default function CodeChallenge() {
	const [selectedCategory, setSelectedCategory] = useState<string>("All");
	const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");

	const filteredChallenges = codeChallenges.filter(
		(challenge) =>
			(selectedCategory === "All" || challenge.category === selectedCategory) &&
			(selectedDifficulty === "All" ||
				challenge.difficulty === selectedDifficulty)
	);

	return (
		<div className="max-w-6xl mx-auto">
			<div className="flex gap-4 mb-6">
				<select
					className="bg-gray-700 rounded-lg px-4 py-2"
					onChange={(e) => setSelectedCategory(e.target.value)}
				>
					<option value="All">All Categories</option>
					{challengeCategories.map((cat) => (
						<option key={cat} value={cat}>
							{cat}
						</option>
					))}
				</select>

				<select
					className="bg-gray-700 rounded-lg px-4 py-2"
					onChange={(e) => setSelectedDifficulty(e.target.value)}
				>
					<option value="All">All Difficulties</option>
					<option value="Easy">Easy</option>
					<option value="Medium">Medium</option>
					<option value="Hard">Hard</option>
				</select>
			</div>

			<div className="grid gap-4">
				{filteredChallenges.map((challenge) => (
					<motion.div
						key={challenge.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
					>
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-xl font-semibold">{challenge.title}</h3>
							<span
								className={`px-3 py-1 rounded-full text-sm ${
									challenge.difficulty === "Easy"
										? "bg-green-500/20 text-green-400"
										: challenge.difficulty === "Medium"
										? "bg-yellow-500/20 text-yellow-400"
										: "bg-red-500/20 text-red-400"
								}`}
							>
								{challenge.difficulty}
							</span>
						</div>

						<div className="space-y-4">
							<p className="text-gray-300">{challenge.description}</p>
							<div className="bg-gray-900/50 p-4 rounded-lg">
								<h4 className="text-sm font-semibold text-gray-400 mb-2">
									Constraints:
								</h4>
								<ul className="list-disc list-inside text-sm text-gray-400">
									{challenge.constraints.map((constraint, i) => (
										<li key={i}>{constraint}</li>
									))}
								</ul>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
