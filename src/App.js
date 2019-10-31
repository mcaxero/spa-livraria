import React from 'react';
import './App.css';
import { Link } from 'react-router'


function App() {
  return (
    
    <div className="App">
      <h1 className="h1">Livraria</h1>
       <button id="button" className="btn btn-primary btn-lg" type="button"><Link to="/cadastroAutor" className="text-white">Adicionar Autor</Link></button>
    </div>
    
  );
}

export default App;
