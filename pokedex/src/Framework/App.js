import React, {useState, useEffect} from 'react';
import Homepage from './Homepage';
import Pokemon from '../Pokemon/Pokemon';
import Trainer from '../Trainer/Trainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateTrainer from '../Trainer/CreateTrainer';
import CreatePokemon from '../Pokemon/CreatePokemon';

function App() {

  const [pokemon, setPokemon] = useState([])
  const [trainer, setTrainer] = useState([])


  useEffect(() => {
    fetch("http://localhost:9292/pokemon")
    .then(r => r.json())
    .then(data =>setPokemon(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/trainer")
    .then(r => r.json())
    .then(data =>setTrainer(data))
}, [])



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pokemon" element={<Pokemon pokemon={pokemon}/>} />
          <Route path="/trainer" element={<Trainer trainer={trainer}/>} />
          <Route path='/createtrainer' element={<CreateTrainer />}/>
          <Route path='/createpokemon' element={<CreatePokemon pokemon={pokemon}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;