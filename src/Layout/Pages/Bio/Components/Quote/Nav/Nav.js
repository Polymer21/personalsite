import React, { Component } from 'react'
import "./Nav.css"
import { Link } from "react-router-dom"


class Nav extends Component {
    render() {
        return(
            <div className="Nav">
                <div className="nav-Home">
                    <Link to="/"> Home </Link>
                </div>
                <div className="nav-Bio">
                    <Link to="/bio"> Bio </Link>
                </div>
                <div className="nav-Projects">
                    <Link to="/projects"> Projects </Link>
                </div>
                <div className="nav-Resume">
                    <Link to="/resume"> Resume </Link> 
                </div>
            </div>
        )
    }
}

export default Nav