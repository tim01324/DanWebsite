import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/cv" element={<CV />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Layout>
			<Analytics />
		</Router>
	);
}

export default App;
