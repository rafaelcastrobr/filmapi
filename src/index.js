import './Global.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Popular from './pages/OtherPages/Popular'
import Recentes from './pages/OtherPages/Recentes'

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={ <Home />}/>
    <Route path="/details/:id" element={ <Details />}/>
    <Route path="/popular/" element={ <Popular />} />
    <Route path="/recentes/" element={ <Recentes />} />
  </Routes> 
  </BrowserRouter>,
  document.getElementById('root')
);
