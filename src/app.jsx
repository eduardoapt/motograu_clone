import './app.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Game from './game'
import StartGame from './start-game'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StartGame />}></Route>
          <Route path="/:token" element={<Game />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
