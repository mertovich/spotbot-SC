const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs');
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded()

app.post('/bot/token',urlencodedParser, function (req, res) {
  console.log(req.body.Bot_Token)
  // write the token to the file
  fs.writeFile('.env', `TOKEN=${req.body.Bot_Token}`, function (err) {
    if (err) throw err;
    console.log('Token saved!');
  });
  res.send('Token saved!')
  res.status(200)
  res.end()
})

app.listen(3000)