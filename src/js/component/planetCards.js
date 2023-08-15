import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetCards = (props) => {
    console.log(props.item.uid)
    const { store, actions } = useContext(Context)
    const { name, population, terrain } = props.item.properties
    return (
        <Fragment>
            <div className="card bg-dark" style={{ minWidth: "18rem" }}>
                <img src={
                    props.item.uid == 1
                        ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
                        : `https://starwars-visualguide.com/assets/img/planets/${props.item.uid}.jpg`
                } className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Population: {population}</p>
                    <p className="card-text">Terrain: {terrain}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/learnMore/planets/${props.item.uid}`} className="btn btn-secondary">Learn more!!</Link>
                        <button className="btn btn-secondary favorite"
                            onClick={() => {
                                actions.setFavorites(name, props.item.uid, "planets")
                                console.log(name)
                            }}
                        ><i className="fa-solid fa-book-journal-whills"></i></button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}