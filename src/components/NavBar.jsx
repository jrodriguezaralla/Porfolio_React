import React, { useState } from "react";

const NavBar = () => {
	const [activeMenu, setActiveMenu] = useState(false);
	return (
		<div className="App">
			<nav className="navbar">
				<div className="navbar-logo">
					<a href="#">Logo</a>
				</div>
				<ul className={`navbar-menu ${activeMenu ? "active" : ""}`}>
					<li className="nav-item">
						<a href="#" className="nav-link">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							About
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							Projects
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							Contact
						</a>
					</li>
				</ul>
				<div className="hamburger" onClick={() => setActiveMenu(!activeMenu)}>
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
			</nav>

			<div className="container">
				<h1>Welcome to my portfolio</h1>
				<p>Check out my latest projects and get in touch with me!</p>
			</div>
		</div>
	);
};

export default NavBar;
