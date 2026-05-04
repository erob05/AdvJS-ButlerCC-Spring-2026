const express = require('express');
const app = express();
const dater = require('./dater');
const logger = require('./logger');
const info = require('./routes/routeInfo');

app.use(dater);
app.use('/info', info);

// Routes
app.get('/', dater, logger, (req,res)=>{
    //res.status(200).send('Home');
    return res.status(200).send(`Welcome! Today's date is ${req.formattedToday}.`);
    res.end;
});

app.listen(8080,()=>{
    console.log('Server running at http://localhost:8080/');
});