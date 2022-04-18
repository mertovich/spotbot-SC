import React, { Component } from 'react'
import BotTable from '../components/BotTable'

export default class Bot extends Component {
  state = {
    BotInfo: []
  }

  getBotInfo = () => {
    const headers = { 'Content-Type': 'application/json' }
    fetch('http://localhost:3000/bot', { headers })
      .then(response => response.json())
      .then(data => this.setState({ BotInfo: data }));
  }

  registerBot = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Bot_Token: this.state.botToken, Bot_Name: this.state.botName })
    };
    fetch('http://localhost:3000/bot/token', requestOptions)
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.registerBot()
  }


  componentDidMount() {
    this.getBotInfo()
  }

  render() {
    return (
      <div>
        <BotTable BotInfo={this.state.BotInfo} handleChange={this.handleChange} handleSubmit={this.handleSubmit}  />
      </div>
    )
  }
}