import React from "react"
import { Link } from "react-router-dom"

const NotFoundPage = () => (
  <div className="container-main">
    <p className="container-main-p">Error 404 - Page Not Found! -> <Link className="navlink-default" to="/">Go Home</Link></p>
  </div>
)

export default NotFoundPage