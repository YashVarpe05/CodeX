"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { quizCategories } from "@/data/quizData";

export default function Quiz() {
	const [selectedCategory, setSelectedCategory] = useState(quizCategories[0]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showAnswer, setShowAnswer] = useState(false);

	return (
		<div className="max-w-4xl mx-auto">
			<div className="mb-8">
				<div className="flex gap-4 overflow-x-auto pb-4">
					{quizCategories.map((category) => (
						<motion.button
							key={category.id}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => {
								setSelectedCategory(category);
								setCurrentQuestion(0);
							}}
							className={`px-6 py-3 rounded-xl whitespace-nowrap ${
								selectedCategory.id === category.id
									? "bg-blue-600"
									: "bg-gray-700/50"
							}`}
						>
							{category.name}
						</motion.button>
					))}
				</div>
			</div>

			<motion.div
				key={selectedCategory.id + currentQuestion}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl"
			>
				<div className="bg-blue-600/10 rounded-lg p-4 mb-6">
					<h3 className="text-xl font-semibold text-blue-400">
						{selectedCategory.name}
					</h3>
					<p className="text-2xl mt-2">
						{selectedCategory.questions[currentQuestion].question}
					</p>
				</div>

				<div className="grid gap-4">
					{selectedCategory.questions[currentQuestion].options.map(
						(option, index) => (
							<motion.button
								key={index}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="text-left p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all"
								onClick={() => {
									/* Handle answer */
								}}
							>
								{option}
							</motion.button>
						)
					)}
				</div>
			</motion.div>
		</div>
	);
}
