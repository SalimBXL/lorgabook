import React from 'react'
import logo from "./logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <img className="Header-logo" src={logo} alt=" Logo" />
      <div className="Header-titles">
        <h1 className="Header-title">LorgaBook</h1>
        <strong className="Header-subtitle">Logbook Manager</strong>
      </div>
    </div>
  )
}

export default Header