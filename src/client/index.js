//@ts-check
import React from 'react'
import { hydrate } from 'react-dom';
import Routes from './components/Routes';
import { BrowserRouter } from 'react-dom';

hydrate(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
     document.getElementById('root'))