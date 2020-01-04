import React from 'react'

import { NavLink } from 'react-router-dom'

import './Menu.css'

const MenuLink = ({to, children, ...props}) => (
    <div className="Menu-item">
      <NavLink to={to} activeClassName="Menu-NavLink-active" {...props}>{ children }</NavLink>
    </div>
)

const Menu = ({isLoggedIn, onSignInClick}) => (
  <div className="Menu">

      <MenuLink to="/" exact={true}>Home</MenuLink>
      <MenuLink to="/discography">Discography</MenuLink>
      <MenuLink to="/nicknames">Nicknames</MenuLink>
      <MenuLink to="/doggpound">Doggpound</MenuLink>
      <MenuLink to="/api-docs">APIzzle</MenuLink>
      { !isLoggedIn &&
        <a href="#" onClick={()=>{onSignInClick()}}>Sign In/Register</a>
      }
  </div>
)

export { Menu }
