const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser')
const dataManager  = require('./dataManager');
const fs = require('fs');
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded()
app.use(cors());
app.use(express.json());

app.get('/bot', function (req, res) {
  let data = dataManager.botInfo;
  let botInfo = JSON.parse(data);
  res.send(botInfo);
  res.status(200);
  res.end();
})

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
  let botInfoList = []
  botInfoList.push(bot)
  let botInfoJSON = JSON.stringify(botInfoList)

  fs.writeFile('bot.txt', `${botInfoJSON}`, function (err) {
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