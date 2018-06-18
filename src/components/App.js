import React, { Component } from 'react';

import { Menu } from './Menu.js'
import logo from './logo.png';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Snoop as a Service</h1>
        </header>
        <div className="menu-container">
          <Menu />
        </div>
        <div>
          body<br/>

            body2
        </div>

      </div>
    );
  }
}

export default App;
