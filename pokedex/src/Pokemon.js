import React from 'react';
import PokemonDropDownList from './PokemonDropDownList';
import { useNavigate } from "react-router-dom"


export default function Pokemon({pokemon}) {
    const navigate = useNavigate()
    function toHome() {
        navigate("/")
    }

    return (
        <div>
        <h3>Select a pokemon to learn more!</h3>
        {pokemon.map((data) => (
            <PokemonDropDownList 
                pokemon={data.pokemon}
                trainer={data.trainer}
                type = {data.type}
                id = {data.id}
                />
        ))}
        <button onClick={toHome}>Home</button>
        
        </div>
    )
}