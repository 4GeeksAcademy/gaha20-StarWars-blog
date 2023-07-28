import React, { useContext } from "react";
import { MainCard } from "../component/mainCard";
import { Context } from "../store/appContext";

export const LearnMore = () => {
    const { store, actions } = useContext(Context)
    return (
        <MainCard />
    )
}