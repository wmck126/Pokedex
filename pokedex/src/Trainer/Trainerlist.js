import React from 'react'

export default function TrainerList({trainer, img_url, gym, pokemon, id}) {

  return (
    <div key={id} id="trainerCard">
      <h3 id="trainerTitle">{trainer}</h3>
      <img src={img_url} alt="a pic of a trainer" id="trainerPic"/>
      <p id="trainerGym">Gym: {gym}</p>
      <p id="trainerPoke">Pokemon: {pokemon}</p>
    </div>
  )
}