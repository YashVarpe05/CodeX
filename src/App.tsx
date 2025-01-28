import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatingNavBar from "./components/FloatingNavBar";
import Page from "@/app/page";
import Challanges from "./components/Challanges";
import Event from "./components/Event";
function App() {
	return (
		<Router>
			<div>
				{/* Your existing content */}
				<Routes>
					<Route path="/" element={<Page />} />
					<Route path="/about" element={<Challanges />} />
					<Route path="/events" element={<Event />} />
					{/* Add more routes as needed */}
				</Routes>
				<FloatingNavBar />
			</div>
		</Router>
	);
}

export default App;
