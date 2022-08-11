import React from 'react';
import PokemonDropDownList from './PokemonDropDownList';
import { useNavigate } from "react-router-dom"


export default function Pokemon({pokemon}) {
    const navigate = useNavigate()
    function toHome() {
        navigate("/")
    }

    function toCreatePokemon() {
        navigate("/createpokemon")
    }

    return (
        <div>
        <h3>Select a pokemon to learn more!</h3>
        {pokemon.map((data) => (
            <PokemonDropDownList 
                pokemon={data.poke_name}
                trainer={data.trainer.name}
                type = {data.types}
                id = {data.id}
                />
        ))}
        <button onClick={toHome}>Home</button>
        <button onClick={toCreatePokemon}>Create a pokemon</button>
        </div>
    )
}