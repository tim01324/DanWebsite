import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import SmoothScroll from "./components/SmoothScroll";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
	return (
		<Router>
			<SmoothScroll>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Layout>
				<Analytics />
			</SmoothScroll>
		</Router>
	);
}

export default App;
