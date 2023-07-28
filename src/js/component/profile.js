import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = () => {
    const params = useParams()
    const { store, actions } = useContext(Context)

    return (
        console.log(params)
    )
}