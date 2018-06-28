import React, { Component } from 'react'
import { Route }            from 'react-router-dom'

import { Menu }             from './Menu.js'
import { Discography }      from './Discography.js'
import logo                 from './logo.png'

import './App.css'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">(¯`·.¸¸.- °º  º° -.¸¸.·´¯)</h1>
          <h1 className="App-title">°·.¸.·°¯°·.¸.·°¯°·.¸.- $иσσρ αѕ α $єяνι¢є -.¸.·°¯°·.¸.·°¯°·.¸.·°</h1>
          <h1 className="App-title">•._.••´¯``•.¸¸.•`  `•.¸¸.•´´¯`••._.•</h1>
        </header>

        <div className="App-menu-container">
          <Menu />
        </div>

        <div className="App-section-container">
          <Route exact path='/' component={() => "Home"} />
          <Route path="/discography" component={Discography} />
          <Route path="/nicknames" component={()=>"Nicknames"} />
          <Route path="/doggpound" component={()=>"Doggpound"} />
          <Route path="/api-docs" component={()=>"API Docs"} />
        </div>

        <div className="App-footer">
          CC-SA-BY | http://speakingcode.com | github.com/speakingcode
        </div>
      </div>
    );
  }
}

export default App;
