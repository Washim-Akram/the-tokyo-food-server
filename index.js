const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const chef = require('./data/chef.json');
const popular = require('./data/popular.json');
const review = require('./data/review.json');

app.get('/', (req, res) => {
    res.send('The Tokyo Food Server is Running.')
});

app.get('/chef', (req, res) => {
    res.send(chef);
});

app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChef = chef.find(c => parseInt(c.id) === id);
    res.send(selectedChef);
});

app.get('/popular', (req, res) => {
    res.send(popular);
});

app.get('/review', (req, res) => {
    res.send(review);
});

app.listen(port, () => {
    console.log(`The Tokyo Food Server Listening on Port: ${port}`);
});
