// @ts-check
import express from 'express';
import html from './html'
const app = express();

app.get('/', (req, res) => {
    res.send(html(req))
})

app.use(express.static('public'));

app.listen(4000, () => {
    console.log('its working')
})