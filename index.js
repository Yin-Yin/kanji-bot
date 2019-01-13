'use strict';
// ## express server ##
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const dialogflowModule = require('./dialogflow/dialogflow.js');
const kanjiModule = require('./kanji_module/kanji_module.js');

console.log("starting server ...");

app.use((req, res, next) => {

  // -----------------------------------------------------------------------
  // authentication middleware

  const auth = {login: process.env.login, password: process.env.password}

  // parse login and password from headers
  const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
  const [login, password] = new Buffer(b64auth, 'base64').toString().split(':')

  // Verify login and password are set and correct
  if (!login || !password || login !== auth.login || password !== auth.password) {
    res.set('WWW-Authenticate', 'Basic realm="401"') 
    res.status(401).send('Authentication required.')
    return
  }

  // -----------------------------------------------------------------------
  // Access granted...
  next()

})

kanjiModule.initKanjiData(); // initialize kanji data (load all Kanjis in memory from API)

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.post('/', function(req, res) {
  console.log("app post /");
  dialogflowModule.handleRequest(req, res);
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

