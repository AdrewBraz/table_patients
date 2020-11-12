// @ts-check
import express from 'express';
import html from './html'
import fetchData from './fetchData';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const app = express();

app.get('/', async (req, res) => {
    const patients = await fetchData(req.path).then(data => data)
    const initialState = {
        appState: {},
        patients
    }
    const store = configureStore({reducer, preloadedState: initialState});
    res.send(html(req, store))
})

app.use(express.static('public'));

app.listen(4000, () => {
    console.log('its working')
})