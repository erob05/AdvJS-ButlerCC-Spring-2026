const express = require('express');
const app = express();
const path = require('path');
const {items} = require('./data');

app.use(express.static('./indexbanner'));

app.get('/', (req, res) => {
    // res.status(200).send('<h1>Welcome to home page</h1>');
    res.status(200).sendFile(path.resolve(__dirname, './indexbanner/index.html'));
});

app.get('/about', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './indexbanner/about.html'));
});

app.get('/api/info', (req, res) => {
    res.status(200).json({items});
});

app.get('/api/paper', (req,res) => {
    const singleItem =items.find((item)=>item.id === Number(1));
    res.status(200).json(singleItem);
});

app.get('/api/rock', (req,res) => {
    const singleItem =items.find((item)=>item.id === Number(2));
    res.status(200).json(singleItem);
});

app.get('/api/scissors', (req,res) => {
    const singleItem =items.find((item)=>item.id === Number(3));
    res.status(200).json(singleItem);
});

app.get('/api/cleaver', (req,res) => {
    const singleItem =items.find((item)=>item.id === Number(4));
    res.status(200).json(singleItem);
});

app.use((req, res)=>{
    res.status(404).send('<h1>Resource Not Found</h1> <p>Sorry about that. Do you want to go <a href="/">Home</a>?');
});

app.listen(8080, () => {
    console.log('server listening at http://localhost:8080/');
});