import React, {useState} from 'react';
import Navbar from '../Framework/Navbar';


export default function CreatePokemon({onAddPokemon, pokemon, trainer}) {
  const [pokeName, setPokeName] = useState("")
  const [types, setTypes] = useState("")
  const [bestMove, setBestMove] = useState("")
  const [trainerId, setTrainerID] = useState(1)
  const [imageurl, setImageUrl] = useState("")

  function handleSubmit(e){
    e.preventDefault()

    fetch("http://localhost:9292/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        poke_name: pokeName,
        types: types,
        best_move: bestMove,
        trainer_id: trainerId,
        image_url: imageurl
      })
    })
    .then(r => r.json())
    .then(data => {
      const tr = trainer.find((t) => t.id === data.trainer_id)
      const newPokemon = {...data}
      newPokemon.trainer = tr
      onAddPokemon(newPokemon)
    })
  }

  return (
    <>
    <Navbar />
    <div id="createPokemonForm">
      <form onSubmit={handleSubmit} >
        <div id="labels">

        <label id="label1">Enter a pokemon name: 
          <input type="text"
          onChange={(e) => setPokeName(e.target.value)}
          />
        </label>

        <label id="label1" >Enter an image URL for the pokemon: 
          <input type="text" placeholder="www.example.png"
          onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>

        <label id="label1">Enter the pokemon's type: 
          <input type="text" 
          onChange={(e) => setTypes(e.target.value)}
          />
        </label>

        <label id="label1">Enter its best move: 
          <input type="text" 
          onChange={(e) => setBestMove(e.target.value)}
          />
        </label>

{/* ******************************************************************** */}

        <label id="label1">Select the trainer associated with the pokemon: 
          <select id="dropdownTrainer" onChange={(e) => setTrainerID(e.target.value)}>
            {trainer.map((data) => {
              console.log("Trainer data: ",data) 
              return <option key={data.id} value={data.id}>{data.name}</option>})}
          </select>
        </label>

        <button id="submitbtn" type='submit'>Submit</button>
        
        </div>
      </form>
    </div>
    </>
  )
  }
