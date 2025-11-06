import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navigation.css";

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [location]);

	const navItems = [
		{ path: "/", label: "Home" },
		{ path: "/gallery", label: "Gallery" },
		{ path: "/cv", label: "CV & References" },
		{ path: "/contact", label: "Contact" },
	];

	return (
		<nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
			<div className="nav-container container">
				<Link to="/" className="nav-logo">
					<span className="logo-text">Chef Daniel Racine</span>
				</Link>

				<div className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
					{navItems.map((item) => (
						<Link
							key={item.path}
							to={item.path}
							className={`nav-link ${
								location.pathname === item.path ? "active" : ""
							}`}
						>
							{item.label}
						</Link>
					))}
				</div>

				<button
					className="mobile-menu-toggle"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label="Toggle menu"
				>
					{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>
		</nav>
	);
};

export default Navigation;
