import React from "react";
import { Link } from "react-router-dom";

export const Cards = (props) => {
    console.log(props.item.uid)
    const { name, gender, hair_color, eye_color } = props.item.properties
    return (
        <div className="card bg-dark" style={{ minWidth: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.item.uid}.jpg`} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Gender: {gender}</p>
                <p className="card-text">Hair Color: {hair_color}</p>
                <p className="card-text">Eyes Color: {eye_color}</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/learnMore/characters/${props.item.uid}`} className="btn btn-secondary">Learn more!!</Link>
                    <Link to="#" className="btn btn-secondary favorite"><i className="fa-solid fa-book-journal-whills"></i></Link>
                </div>
            </div>
        </div>
    )
}