import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import Header from "./Components/Header";
import Video from "./pages/Video";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter>
				<div className="bg-neutral-800 text-white min-h-screen">
					<Header />
					<Routes>
						<Route path="/upload" element={<Upload />} />
						<Route path="/" element={<Dashboard />} />
						<Route path="/playVideo/:id" element={<Video />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
