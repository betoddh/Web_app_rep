const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let names = [];
let tasks = [];


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/greet', (req, res) => {
    const name = req.query.name;
    if (name) {
        names.push(name);
    }
    res.json(names);
});


app.put('/greet/:name', (req, res) => {
    const name = req.params.name;
    if (name) {
        names.push(name);
    }
    res.json(names);
});


app.use((req, res, next) => {
    if (req.path === '/greet' && !req.query.name) {
        return res.status(400).send('Nombre requerido');
    }
    next();
});


app.post('/task', (req, res) => {
    const { task } = req.body;
    if (task) {
        tasks.push(task);
    }
    res.json(tasks);
});


app.get('/task', (req, res) => {
    res.json(tasks);
});


app.delete('/task/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
    }
    res.json(tasks);
});


app.patch('/task/:index/up', (req, res) => {
    const index = parseInt(req.params.index);
    if (index > 0 && index < tasks.length) {
        [tasks[index - 1], tasks[index]] = [tasks[index], tasks[index - 1]];
    }
    res.json(tasks);
});

app.patch('/task/:index/down', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < tasks.length - 1) {
        [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
    }
    res.json(tasks);
});


app.get('/wazzup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'wazzup.html'));
});

app.listen(3000, () => {
    console.log('localhost:3000');
});