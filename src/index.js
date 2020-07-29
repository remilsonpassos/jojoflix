import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Route, Switch , BrowserRouter, } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';


const Pag404 = () => ( <div>Página 404</div>)


ReactDOM.render(

<BrowserRouter>
<Switch>

<Route path="/" component={Home} exact/>
<Route path="/cadastro/video" component={CadastroVideo} exact/>
<Route path="/cadastro/categoria" component={CadastroCategoria} exact/>

<Route component={Pag404}/>


</Switch>


</BrowserRouter>,
  document.getElementById('root')
);
