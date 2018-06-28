import React from 'react'

import { NavLink } from 'react-router-dom'

import './Menu.css'

const MenuLink = ({to, children, ...props}) => (
    <div className="Menu-item">
      <NavLink to={to} activeClassName="Menu-NavLink-active" {...props}>{ children }</NavLink>
    </div>
)

const Menu = () => (
  <div className="Menu">

      <MenuLink to="/" exact={true}>Home</MenuLink>
      <MenuLink to="/discography">Discography</MenuLink>
      <MenuLink to="/nicknames">Nicknames</MenuLink>
      <MenuLink to="/doggpound">Doggpound</MenuLink>
      <MenuLink to="/api-docs">APIzzle</MenuLink>
  </div>
)

export { Menu }
