import React from "react";

export default function Quiz() {
	return (
		<div className="p-4 m-4 border rounded shadow-lg bg-white max-w-xl mx-auto">
			<h2 className="text-2xl font-bold mb-4">Solve this Quiz</h2>
			{/* ...quiz logic and question details... */}
			<button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
				Submit
			</button>
		</div>
	);
}
