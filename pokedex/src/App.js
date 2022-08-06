
import Homepage from './Homepage';
import Pokemon from './Pokemon';
import Trainer from './Trainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/trainer" element={<Trainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
