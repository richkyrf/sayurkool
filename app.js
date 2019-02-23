// app.js

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;
var cors = require('cors');

// Mongoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://fannywijaya:UBJb7hR4a5x6SflF@cluster0-shard-00-00-cb9p3.mongodb.net:27017,cluster0-shard-00-01-cb9p3.mongodb.net:27017,cluster0-shard-00-02-cb9p3.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true } )
    .then(() => { // if all is ok we will be here
      console.log('Start');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

// Required application specific custom router module
var itemRouter = require('./src/routes/itemRouter');

// Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

// Start the server
app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});
