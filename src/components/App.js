import React, { useState }  from 'react'
import {
  Switch,
  Route
}                           from 'react-router-dom'

import { Menu }             from './Menu'
import { Home }             from './Home'
import { Discography }      from './Discography'
import { Nicknames }        from './Nicknames'
import { DoggPound }        from './DoggPound'
import { ApiDocs }          from './ApiDocs'
import { PageNotFound }     from './PageNotFound'
import logo                 from './logo.png'

import './App.css'



const App = () => {
  const [loginModalOpen, setLoginModal] = useState(false)

  const toggleLoginModal = () => {
    setLoginModal(!loginModalOpen)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">(¯`·.¸¸.- °º  º° -.¸¸.·´¯)</h1>
        <h1 className="App-title">°·.¸.·°¯°·.¸.·°¯°·.¸.- $иσσρ αѕ α $єяνι¢є -.¸.·°¯°·.¸.·°¯°·.¸.·°</h1>
        <h1 className="App-title">•._.••´¯``•.¸¸.•`  `•.¸¸.•´´¯`••._.•</h1>
      </header>

      <div className="App-menu-container">
        <Menu
          isSignedIn={false}
          onSignInClick={
            () => {
              toggleLoginModal()
            }
          }
        />
      </div>

      <div className="App-section-container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/discography" component={Discography} />
          <Route path="/nicknames" component={Nicknames} />
          <Route path="/doggpound" component={DoggPound} />
          <Route path="/api-docs" component={ApiDocs} />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>

      <div className="App-footer">
        CC-SA-BY | http://speakingcode.com | github.com/speakingcode
      </div>
    </div>
  );
}

export default App;
