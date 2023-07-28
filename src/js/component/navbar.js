import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/" title="Image from freepnglogos.com">
				<img src="https://www.freepnglogos.com/uploads/star-wars-logo-33.png" width="80" alt="star wars logo" />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
						<i className="fa-solid fa-book-journal-whills p-3"></i>
					</a>

					<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
