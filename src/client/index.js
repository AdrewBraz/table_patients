//@ts-check
import React from 'react'
import { hydrate } from 'react-dom';
import Routes from './components/Routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers/'

const preloadedState = window.__PRELOADED_STATE__;

console.log(preloadedState + 'kkkkkkkkkkkkjjjjjjjjjjjjjlllllllllll')

const store = configureStore({reducer, preloadedState})

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
)