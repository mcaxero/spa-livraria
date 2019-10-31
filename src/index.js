import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Registro from './Components/Registro/form';
import * as serviceWorker from './serviceWorker';
import {Router,Route,browserHistory} from 'react-router';
import Cadastro from './Components/CadastroLivro/cadastro';
import Catalogo from './Components/Catalogo/Catalogo';

//indicando as rotas
ReactDOM.render(
    (<Router history={browserHistory}>
        <Route path="/" component ={App}/>
        <Route path="/cadastroAutor" component={Registro}/>
        <Route path="/cadastroLivro" component={Cadastro}/>  
        <Route path="/listaAutores" component={Catalogo}/> 
    </Router>), 
    document.getElementById('root'));


serviceWorker.unregister();
