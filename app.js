const express = require('express')
const app = express()
const bot = require('./bot')

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)