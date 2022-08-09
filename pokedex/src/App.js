import React, {useState, useEffect} from 'react';
import Homepage from './Homepage';
import Pokemon from './Pokemon';
import Trainer from './Trainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([])


  useEffect(() => {
    fetch("http://localhost:9001/pokemon")
    .then(r => r.json())
    .then(data =>setPokemon(data))
  }, [])



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pokemon" element={<Pokemon pokemon={pokemon}/>} />
          <Route path="/trainer" element={<Trainer pokemon={pokemon}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
