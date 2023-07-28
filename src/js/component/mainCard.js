import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const MainCard = (props) => {
    const params = useParams()
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.getDetailed(params.group, params.id)
    }, [store[params.group]])

    if (params.group == "planets" && store.details["properties"]) {
        return (
            <div className="card mb-3 bg-dark text-light" style={{ maxWidth: "1980px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={
                            store.details.uid == 1
                                ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
                                : `https://starwars-visualguide.com/assets/img/planets/${store.details.uid}.jpg`
                        } className="card-img-top" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.details.properties.name}</h5>
                            <p className="card-text">{store.details.description}</p>
                            <p className="card-text"><small className="text-muted">Updated by the Force</small></p>
                        </div>
                    </div>
                </div>
                <div className="text-danger d-flex justify-content-between">
                    <div className="container border-start border-danger" style={{ minWidth: "160px" }}>
                        <h3>Terrain</h3>
                        <p>{store.details.properties.terrain}</p>
                    </div>
                    <div className="container border-start border-danger" style={{ minWidth: "160px" }}>
                        <h3>Climate</h3>
                        <p>{store.details.properties.climate}</p>
                    </div>
                    <div className="container border-start border-danger" style={{ minWidth: "160px" }}>
                        <h3>Population</h3>
                        <p>{store.details.properties.population}</p>
                    </div>
                    <div className="container border-start border-danger" style={{ minWidth: "160px" }}>
                        <h3>Orbital Period</h3>
                        <p>{store.details.properties.orbital_period}</p>
                    </div>
                    <div className="container border-start border-danger" style={{ minWidth: "160px" }}>
                        <h3>Rotation Period</h3>
                        <p>{store.details.properties.rotation_period}</p>
                    </div>
                    <div className="container border-start border-danger" style={{ minWidth: "160px" }}>
                        <h3>Diameter</h3>
                        <p>{store.details.properties.diameter}</p>
                    </div>
                    <div className="container border-start border-danger" style={{ minWidth: "160px" }}>
                        <h3>Gravity</h3>
                        <p>{store.details.properties.gravity}</p>
                    </div>
                    <div className="container border-start border-danger" style={{ minWidth: "160px" }}>
                        <h3>Surface Water</h3>
                        <p>{store.details.properties.surface_water}</p>
                    </div>
                </div>
            </div>
        )
    }
    if (params.group == "characters" && store.details["properties"]) {
        return (
            <div className="card mb-3 bg-dark text-light" style={{ maxWidth: "960px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${store.details.uid}.jpg`} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.details.properties.name}</h5>
                            <p className="card-text">{store.details.description}</p>
                            <p className="card-text"><small className="text-muted">Updated by the Force</small></p>
                        </div>
                    </div>
                </div>
                <div className="text-danger d-flex justify-content-between">
                    <div className="container border-start border-danger" style={{ minWidth: "160px" }}>
                        <h3>Name</h3>
                        <p>{store.details.properties.name}</p>
                    </div>
                    <div className="container border-start border-danger" style={{ minWidth: "160px" }}>
                        <h3>Birth Year</h3>
                        <p>{store.details.properties.birth_year}</p>
                    </div>
                    <div className="container border-start border-danger" style={{ minWidth: "160px" }}>
                        <h3>Eyes Color</h3>
                        <p>{store.details.properties.eye_color}</p>
                    </div>
                    <div className="container border-start border-danger" style={{ minWidth: "160px" }}>
                        <h3>Gender</h3>
                        <p>{store.details.properties.gender}</p>
                    </div>
                    <div className="container border-start border-danger" style={{ minWidth: "160px" }}>
                        <h3>Hair Color</h3>
                        <p>{store.details.properties.hair_color}</p>
                    </div>
                    <div className="container border-start border-danger" style={{ minWidth: "160px" }}>
                        <h3>Skin Color</h3>
                        <p>{store.details.properties.skin_color}</p>
                    </div>
                </div>
            </div>
        )
    }
}