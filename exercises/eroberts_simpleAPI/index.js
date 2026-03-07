const express = require('express');
const app = express();
const {items} = require('./data');

app.get('/', (req, res) => {
    // res.send('Welcome');
    res.send('<h1>Rock, Paper, Scissors Ring</h1> <a href="/api/items">Available Items</a>');
});

app.get('/api/items', (req, res) => {
    // res.json(items);
    const newListing = items.map((item)=>{
        const {name, desc, strength, weakness} = item;
        return {name, desc, strength, weakness}
    });
    res.json(newListing);
});

// app.get('/api/items/1', (req, res) => {
//     const singleItem = items.find((item)=>item.id===1);
//     res.json(singleItem);
// });

app.get('/api/items/:itemID', (req, res)=> {
    console.log(req.params);
    const {itemID} = req.params;
    const singleItem = items.find((item)=>item.id === Number(itemID));
    res.json(singleItem);
});

app.get('/query', (req, res) => {
    const {search, limit} = req.query;
    let sorted = [...items];
    if(search) {
        sorted = sorted.filter((item)=>{
            return item.desc.match(search);
        });
    }
    if (limit) {
        sorted = sorted.slice(0, Number(limit));
    }
    if (sorted.length < 1) {
        return res.status(200).json('No items matching your query were found.');
    }

    res.status(200).json(sorted);
});

app.listen(8080, () => {
    console.log('Server is running...');
});