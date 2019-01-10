'use strict';
// ## express server ##
var bodyParser = require('body-parser')
var express = require('express');
var app = express();
var dialogflowModule = require('./dialogflow/dialogflow.js');

console.log("starting server ..");
//firestoreModule.initializeDatabase();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.post('/', function(req, res) {
  console.log("app post /");
  
    res.send({
        "test": true
    });/*
  dialogflowModule.handleRequest(req).then((responseJSON) => {
    res.send(responseJSON);
    console.log("responding with" + responseJSON);
  });*/
})

app.get('/', function(req, res) {
  console.log("app get /");
  res.send('Hullo!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

