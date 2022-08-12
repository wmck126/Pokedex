import React from 'react';


export default function PokemonDropDownList({pokemon, trainer, type, id, onDeletePoke, best_move, image_url}) {
  
  function handleDeleteClick(){
    fetch(`http://localhost:9292/pokemon/${id}`, {
      method: 'DELETE'
    })
    .then((r) => r.json())
    .then((deletedPoke) => onDeletePoke(deletedPoke)) 
  }
  
    return (
      <div key={id} id="pokemonCard">
        <h2 id="pokemonTitle">{pokemon}</h2>
        <img src={image_url} alt="Pokemon picture" id="pokemonPic"/>
        <p id="pokemonType">Type: {type}</p>
        <p id="pokemonBestMove">Best move: {best_move}</p>
        <p id="pokemonTrainer">Trainer: {trainer}</p>
        <button onClick={handleDeleteClick} id="pokemonDeleteButton">Delete pokemon</button>
      </div>
      
      
    )
}