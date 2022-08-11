import React from 'react';


export default function PokemonDropDownList({pokemon, trainer, type, id, onDeletePoke}) {
  
  function handleDeleteClick(){
    fetch(`http://localhost:9292/pokemon/${id}`, {
      method: 'DELETE'
    })
    .then((r) => r.json())
    .then((deletedPoke) => onDeletePoke(deletedPoke)) 
  }
  
    return (
      <div key={id}>
        <h2>{pokemon}</h2>
        <p>{type}</p>
        <p>{trainer}</p>
        <button onClick={handleDeleteClick}>Delete pokemon</button>
      </div>
      
      
    )
}