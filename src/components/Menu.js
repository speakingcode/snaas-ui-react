import React from 'react'

import { Link } from 'react-router-dom'

import './Menu.css'

const Menu = () => (
  <div className="Menu">
    <div className="Menu-left">
      <Link to="/discography">Discography</Link>
    </div>
    <div className="Menu-left">
      <Link to="/names">Nicknames</Link>
    </div>
    <div className="Menu-left">
      <Link to="/doggpound">Doggpound</Link>
    </div>
    <div style={{clear: 'left'}} />
  </div>
)

export { Menu }
