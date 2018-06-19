import React, { Component } from 'react'
import { Route }            from 'react-router-dom'

import { Menu }             from './Menu.js'
import logo                 from './logo.png'

import './App.css'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Snoop as a Service</h1>
        </header>
        <div className="App-menu-container">
          <Menu />
        </div>
        <div className="App-section-container">
          <Route exact path='/' component={() => "Home"} />
          <Route path="/discography" component={()=>"Discography"} />
          <Route path="/nicknames" component={()=>"Nicknames"} />
          <Route path="/doggpound" component={()=>"Doggpound"} />
          <Route path="/api-docs" component={()=>"API Docs"} />
        </div>

      </div>
    );
  }
}

export default App;
