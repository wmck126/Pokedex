import React from 'react';
import PokemonDropDownList from './PokemonDropDownList';
import { useNavigate } from "react-router-dom"
import Navbar from '../Navbar';



export default function Pokemon({pokemon}) {
    const navigate = useNavigate()
    function toHome() {
        navigate("/")
    }

    function toCreatePokemon() {
        navigate("/createpokemon")
    }

    return (
        <>
        <Navbar />
        <div id="pokemonList">
        <h2>Pokemon</h2>
        {pokemon.map((data) => (
            <PokemonDropDownList 
                pokemon={data.poke_name}
                trainer={data.trainer.name}
                type = {data.types}
                best_move = {data.best_move}
                id = {data.id}
                image_url = {data.image_url}
                />
        ))}
        <button onClick={toCreatePokemon} id="createPokemon">Create a pokemon</button>
        </div>
        </>
    )
}