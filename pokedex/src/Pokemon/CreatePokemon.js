import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import Navbar from '../Navbar';


export default function CreatePokemon({onAddPokemon, pokemon}) {
  const [pokeName, setPokeName] = useState("")
  const [types, setTypes] = useState("")
  const [bestMove, setBestMove] = useState("")
  const [trainerId, setTrainerID] = useState(0)
  const [imageurl, setImageUrl] = useState("")
  console.log(imageurl)

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
          image_url: imageurl,
          trainer_id: trainerId
        })
      })
      .then(r => r.json())
      .then(data =>onAddPokemon(data))
    }

  const navigate = useNavigate()
  function toPokemon() {
      navigate("/pokemon")
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


        {/* Why is this not working?!?! */}
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
        <label id="label1">Select the trainer associated with the pokemon: 
          <select id="dropdownTrainer" onChange={setTrainerID}>
            {pokemon.map((data) =>
            <option>{data.trainer.name}</option>
            )}
          </select>
        </label>
        <button onClick={handleSubmit} id="submitbtn">Submit</button>
        
        <button onClick={toPokemon}>Go back to list of pokemon</button>
        </div>
      </form>
      
    </div>
    </>
  )
  }
