import React from 'react';
import './App.css';
import { Link } from 'react-router'


function App() {
  return (
    
    <div className="App">
      <div className="center">
        <h1 className="h1">Livraria</h1>
        <h2 className="h2 text-white"> Bem-vind@ ao sistema da livraria</h2>
         <button id="button" className="btn btn-primary btn-lg" type="button"><Link to="/cadastroAutor" className="text-white">Adicionar Autor</Link></button>
         </div>
      </div>
    
  );
}

export default App;
