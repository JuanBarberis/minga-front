import React from 'react'
import NavBar from '../navbar/NavBar'
import './header.css'
import {useState} from "react";


export default function Header() {
  const [render,setRender] = useState(false);
  function handleRender (){
    setRender(!render)
  }

  return (
    <div className='header'>
      <div className="home-header">
        <img onClick={handleRender} className="menu" src={require('../../assets/image/menu.png')} alt="menu-hamburguesa" />
        <img className="logo" src={require('../../assets/image/logo-minga.png')} alt="logo-minga" />
      </div>
     {render ? <NavBar handleRender={handleRender}/>  : ""}
    </div>
  )
}
