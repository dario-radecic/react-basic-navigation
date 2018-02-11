import React from "react"
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom"
import HomePage from "../components/HomePage"
import AboutPage from "../components/AboutPage"
import PortfolioPage from "../components/PortfolioPage"
import ContactPage from "../components/ContactPage"
import LoginPage from "../components/LoginPage"
import NotFoundPage from "../components/NotFoundPage"
import Header from "../components/Header"

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={AboutPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter