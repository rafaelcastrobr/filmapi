import './Global.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Details from './pages/Details/Details';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={ <Home />}/>
    <Route path="/details/:id" element={ <Details />}/>
  </Routes>
   
  </BrowserRouter>,
  document.getElementById('root')
);
