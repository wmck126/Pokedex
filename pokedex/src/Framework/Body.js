import React from 'react';
import { useNavigate } from "react-router-dom"

export default function Body () {
    const navigate = useNavigate()
    function toPokemon() {
        navigate("/pokemon")
        //window.location.reload(false)
    }

    function toTrainer() {
        navigate("/trainer")
    }

    return (
        <div>
        <button id="trainerButton" onClick={toTrainer}>Find trainer info</button>
        <button id="pokemonButton" onClick={toPokemon}>Find pokemon info</button>
        </div>
    )
}