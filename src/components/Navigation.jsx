import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./Navigation.css";

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
			if (window.innerWidth > 768) {
				setIsMobileMenuOpen(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);

		// Initial check
		handleResize();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [location]);

	const navItems = [
		{ path: "/", label: "Home" },
		{ path: "/gallery", label: "Gallery" },
		{ path: "/contact", label: "Contact" },
	];

	const menuVariants = {
		closed: {
			opacity: 0,
			x: "100%",
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 40
			}
		},
		open: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 40
			}
		}
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className={`navigation ${isScrolled ? "scrolled" : ""}`}
		>
			<div className="nav-container container">
				<Link to="/" className="nav-logo">
					<span className="logo-text">Chef Daniel Racine</span>
				</Link>

				{/* Desktop Menu */}
				{!isMobile && (
					<div className="nav-menu">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`nav-link ${location.pathname === item.path ? "active" : ""
									}`}
							>
								{item.label}
							</Link>
						))}
					</div>
				)}

				{/* Mobile Menu Toggle */}
				<div className="mobile-menu-toggle">
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>

				{/* Mobile Menu Overlay */}
				<AnimatePresence>
					{isMobile && isMobileMenuOpen && (
						<motion.div
							initial="closed"
							animate="open"
							exit="closed"
							variants={menuVariants}
							className="nav-menu mobile"
						>
							{navItems.map((item) => (
								<Link
									key={item.path}
									to={item.path}
									className={`nav-link ${location.pathname === item.path ? "active" : ""
										}`}
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{item.label}
								</Link>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
};

export default Navigation;
