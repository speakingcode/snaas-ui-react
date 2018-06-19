import React from 'react'

import { Link } from 'react-router-dom'

import './Menu.css'

const Menu = () => (
  <div className="Menu">

    <div className="Menu-item">
      <Link to="/">Home</Link>
    </div>
    <div className="Menu-item">
      <Link to="/discography">Discography</Link>
    </div>
    <div className="Menu-item">
      <Link to="/nicknames">Nicknames</Link>
    </div>
    <div className="Menu-item">
      <Link to="/doggpound">Doggpound</Link>
    </div>

    <div className="Menu-item">
      <Link to="/api-docs">APIzzle</Link>
    </div>
  </div>
)

export { Menu }
