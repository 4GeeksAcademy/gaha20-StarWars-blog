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
					<a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
						Favorites {store.favorites.length == 0 ? "" : store.favorites.length}
						<i className="fa-solid fa-book-journal-whills p-3"></i>
					</a>

					<ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
						{store.favorites.map(({ itemName, itemId, itemGroup }) => {
							return (
								<li className="d-flex" key={itemId}>
									<Link to={`/learnMore/${itemGroup}/${itemId}`} className="dropdown-item">{itemName}</Link>
									<i className="fa-solid fa-xmark m-2"
										onClick={() => {
											actions.deleteFavorite(itemName)
										}}
									></i>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
