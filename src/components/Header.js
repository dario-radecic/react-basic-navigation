import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => (
  <header>
  <img className="header-image" src={ require("../img/logo.png")}/>
    <h1>Business name here</h1>
    <ul className="menu">
      <li><NavLink to="/" activeClassName="is-active" exact={true} className="navlink-default">Home</NavLink></li>
      <li><NavLink to="/about" activeClassName="is-active" className="navlink-default">About me</NavLink></li>
      <li><NavLink to="/portfolio" activeClassName="is-active" className="navlink-default">Portfolio</NavLink></li>
      <li><NavLink to="/contact" activeClassName="is-active" className="navlink-default">Contact</NavLink></li>
      <li><NavLink to="/login" activeClassName="is-active" className="navlink-default navlink-button">LOGIN</NavLink></li>
    </ul>
  </header>
)

export default Header