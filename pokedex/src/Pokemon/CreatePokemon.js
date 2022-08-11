import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom"


export default function CreatePokemon({onAddPokemon}) {
  const [pokeName, setPokeName] = useState("")
  const [types, setTypes] = useState("")
  const [bestMove, setBestMove] = useState("")
  const [trainerId, setTrainerID] = useState(0)

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
          trainer_id: trainerId
        })
      })
      .then(r => r.json())
      .then(data =>onAddPokemon(data))
    }

    const navigate = useNavigate()
    function toHome() {
      navigate("/")
  }

  function toPokemon() {
      navigate("/pokemon")
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="labels">
        <label>Enter a pokemon name: 
          <input type="text"
          onChange={(e) => setPokeName(e.target.value)}
          />
        </label>
        <label>Enter the pokemon's type: 
          <input type="text" 
          onChange={(e) => setTypes(e.target.value)}
          />
        </label>
        <label>Enter its best move: 
          <input type="text" 
          onChange={(e) => setBestMove(e.target.value)}
          />
        </label>
        <label>Enter the trainer associated with the pokemon: 
          <input type="text" 
          onChange={(e) => setTrainerID(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit} id="submitbtn">Submit</button>
        </div>
        
      </form>
      <button onClick={toPokemon}>Go back to list of pokemon</button>
      <button onClick={toHome}>Go home</button>
    </div>
  )
  }
