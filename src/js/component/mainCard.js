import React from "react";

export const MainCard = () => {
    return (
        <div className="card mb-3" style="max-width: 540px;">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..."></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div className="border-top border-color-danger text-danger">
                <p>Name</p>
                <p>Climate</p>
                <p>Population</p>
                <p>Orbital Period</p>
                <p>Rotation Period</p>
                <p>Diameter</p>
            </div>
        </div>
    )
}