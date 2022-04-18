import React, { Component } from 'react'
import BotTable from '../components/BotTable'

export default class Bot extends Component {
  state = {
    BotInfo: [{}],
  }

  getBotInfo = () => {
    const headers = { 'Content-Type': 'application/json' }
    fetch('http://localhost:3000/bot', { headers })
        .then(response => response.json())
        .then(data => this.setState({ BotInfo: data }));
  }

  componentDidMount() {
    this.getBotInfo()
}
  
  render() {
    return (
      <div>
        <BotTable BotInfo={this.state.BotInfo} />
      </div>
    )
  }
}