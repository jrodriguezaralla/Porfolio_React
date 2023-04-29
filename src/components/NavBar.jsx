import React, { useState } from 'react';

const NavBar = () => {
	const [activeMenu, setActiveMenu] = useState(false);
	return (
		<div className="App">
			<nav className="navbar">
				<div className="navbar-logo">
					<a href="#">Jonathan Rodriguez Aralla</a>
				</div>
				<div className="nav-link">
					<ul className={`navbar-menu ${activeMenu ? 'active' : ''}`}>
						<li className="nav-item">
							<a href="#">Home</a>
						</li>
						<li className="nav-item">
							<a href="#">About</a>
						</li>
						<li className="nav-item">
							<a href="#">Projects</a>
						</li>
						<li className="nav-item">
							<a href="#">Contact</a>
						</li>
					</ul>
					<div onClick={() => setActiveMenu(!activeMenu)}>
						<img src="menu-btn.png" alt="menu hamburger" className="hamburger" />
					</div>
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
