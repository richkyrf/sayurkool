// app.js

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;
var cors = require('cors');
const path = require('path');

require('dotenv').config();

// Mongoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.db, { useNewUrlParser: true } )
    .then(() => { // if all is ok we will be here
      console.log('Start');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

// Required application specific custom router module
var itemRouter = require('../src/routes/itemRouter');

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

// Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
response.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

// Start the server
app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});
