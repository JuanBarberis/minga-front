import React from 'react'
import './navbarstyle.css'

export default function NavBar() {
  return (
    <nav>
      <div className="nav-home">
        <img className="menu" src={require('../../assets/image/menu.png')} alt="menu-hamburguesa" />
        <img className="logo" src={require('../../assets/image/logo-minga.png')} alt="logo-minga" />
      </div>
    </nav>
  )
}
