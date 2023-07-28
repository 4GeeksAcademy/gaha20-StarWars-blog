import React, { Fragment, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";
import { PlanetCards } from "../component/planetCards";


export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<Fragment>
			<h1>Characters</h1>
			<div className="d-flex cardFather mx-3 py-3 gap-3">
				{store.characters.map((character) => {
					return (
						<Cards item={character} key={character._id} />
					)
				})}
			</div>
			<h1>Planets</h1>
			<div className="d-flex cardFather mx-3 py-3 gap-3">
				{store.planets.map((planet) => {
					return (
						<PlanetCards item={planet} key={planet._id} />
					)
				})}

			</div>
		</Fragment>
	);
};
