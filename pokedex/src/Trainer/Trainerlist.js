import React from 'react'

export default function TrainerList({trainer, img_url, gym, pokemon, id}) {

  return (
    <div key={id}>
      <h2>{trainer}</h2>
      <img src={img_url} />
      <p>{gym}</p>
      <p>{pokemon}</p>
    </div>
  )
}