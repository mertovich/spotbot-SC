import React, { Component } from 'react'
import UsersList from '../components/UsersList'

export default class Users extends Component {
  state = {
    Users: [],
  }

  getUserList = () => {
    fetch('http://localhost:3000/bot/users')
      .then(response => response.json())
      .then(data => this.setState({ Users: data }))
  }

  componentDidMount() {
    this.getUserList()
  }

  render() {
    return (
      <div>
        <UsersList Users={this.state.Users} />
      </div>
    )
  }
}
