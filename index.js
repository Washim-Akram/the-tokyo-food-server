const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const chef = require('./data/chef.json');

app.get('/', (req, res) => {
    res.send('The Tokyo Food Server is Running.')
});

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.listen(port, () => {
    console.log(`The Tokyo Food Server Listening on Port: ${port}`);
})