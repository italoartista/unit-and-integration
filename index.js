// app.js
const express = require('express');
const app = express();

app.use(express.json());

let objects = [];

app.post('/objects', (req, res) => {
    const object = req.body;
    objects.push(object);
    res.status(201).send(object);
});

app.get('/objects', (req, res) => {
    res.status(200).send(objects);
});

app.delete('/objects/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    objects = objects.filter(obj => obj.id !== id);
    res.status(204).send();
});

module.exports = { app };