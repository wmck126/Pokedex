import React from 'react';
import { useNavigate } from "react-router-dom"

{/* 
For some reason, the trainerID does not want to associate to a trainer until the page is refreshed when creating a new pokemon
For now, fix is to refresh page and association will be made
Need to research why this isn't working properly
*/}
export default function Body () {
    const navigate = useNavigate()
    function toPokemon() {
        navigate("/pokemon")
        window.location.reload(false)
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