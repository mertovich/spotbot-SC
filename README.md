# spotbot

spotbot is a new generation discord bot, it has an easy to use and simple user panel

## Getting Started

### Dependencies

* [node](https://nodejs.org/en/ "node").

### Installing

```
$ git clone https://github.com/spotbot/spotbot.git
```

### Executing program

Run it in the project file

```
$ npm install
```

```
$ node app.js
```

run it in the web folder inside the project file `/spotbot/web`

```
$ npm install
```

```
$ npm start
```

## API Documentation

###  POST `bot/token`
* body
- Bot_Token
- Bot_Name

### GET `bot/users`
* Spotbot shows online users on all active servers

### GET `bot`
* Shows the registered bot information

### GET `bot/delete`
* Deletes the registered bot

### GET `bot/start`
* Starts the Discord bot

### GET `bot/winners`
* returns a list of winners


## License

This project is licensed under the [MIT] License - see the LICENSE.md file for details

