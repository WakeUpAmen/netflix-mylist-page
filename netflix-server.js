'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');

const app         = express();

const itemRouter  = require('./item-router');

const mongoose    = require('mongoose');
mongoose.connect('mongodb://admin:admin1@ds161391.mlab.com:61391/netflix-demo');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

const port = process.env.PORT || 8888;    

app.get('/', (req, res) => {
                res.json({ message: 'welcome to our home page!' });   
});

app.use('/api', itemRouter);

app.listen(port, () => {
                console.log('Netflix happens on port ' + port)}
);