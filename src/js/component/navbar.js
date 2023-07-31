import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const params = useParams()
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
						{store.favorites.map(([itemName, itemId]) => {
							return (
								<li key={itemId}>
									<Link to={`/learnMore/characters/${itemId}`} className="dropdown-item">{itemName}</Link>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
