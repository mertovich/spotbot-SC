import React from 'react'
import NavBar from './components/NavBar'
import {Route, Routes} from 'react-router-dom'
import Bot from './pages/Bot'
import Users from './pages/Users'

const App = () => {
  return (
    <div>
      <NavBar/>
    <Routes>
      <Route path='/' element={<Bot/>} />
      <Route path='/users' element={<Users/>} />
    </Routes>
    </div>
  )
}

export default App