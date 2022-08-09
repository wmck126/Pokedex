import React from 'react';


export default function PokemonDropDownList({pokemon, trainer, type, id}) {
  
  
    return (
      <div key={id}>
        <h2>{pokemon}</h2>
        <p>{type}</p>
        <p>{trainer}</p>
      </div>
      
      
    )
}