import React from 'react';
import { useNavigate } from "react-router-dom"


export default function Body () {
    const navigate = useNavigate()
    function toPokemon() {
        navigate("/pokemon")
    }

    function toTrainer() {
        navigate("/trainer")
    }

    return (
        <div>
        <button onClick={toTrainer}>Find trainer info</button>
        <button onClick={toPokemon}>Find pokemon info</button>
        </div>
    )
}