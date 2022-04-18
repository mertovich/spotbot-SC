const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataManager  = require('./dataManager');
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
  
  let bot = {
    bot_name : req.body.Bot_Name,
    bot_token : req.body.Bot_Token
  }
  let botJSON = JSON.stringify(bot)

  fs.writeFile('bot.txt', `${botJSON}`, function (err) {
    if (err) throw err;
    console.log('bot file saved!');
  });

  res.send('Token saved!')
  res.status(200)
  res.end()
})

app.get('/bot/start',urlencodedParser, function (req, res) {
  const bot = require('./bot')
  res.status(200)
  res.end()
})

app.get('/bot/users',function(req,res){

  var data = dataManager.Users;
  var dataJSON = JSON.parse(data);
  res.send(dataJSON);
  res.status(200)
  res.end()
})

app.listen(3000)