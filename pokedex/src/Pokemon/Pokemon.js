import React from 'react';
import PokemonDropDownList from './PokemonDropDownList';
import { useNavigate } from "react-router-dom"
import Navbar from '../Framework/Navbar';



export default function Pokemon({pokemon, onDeletePoke}) {
    const navigate = useNavigate()

    function toCreatePokemon() {
        navigate("/createpokemon")
    }

    return (
        <>
        <Navbar />
        <div id="pokemonList">
        <h2 key="pokemon">Pokemon</h2>
        {pokemon.map((data) => (data.trainer ?
            <PokemonDropDownList key={data.id}
                pokemon={data.poke_name}
                trainer={data.trainer.name}
                type = {data.types}
                best_move = {data.best_move}
                id = {data.id}
                image_url = {data.image_url}
                onDeletePoke= {onDeletePoke}
                />
        : null))}
        <button onClick={toCreatePokemon} id="createPokemon">Create a pokemon</button>
        </div>
        </>
    )
}