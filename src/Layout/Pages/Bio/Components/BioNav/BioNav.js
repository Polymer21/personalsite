import React, { Component } from 'react'
import "./BioNav.css"
import { Link } from "react-router-dom"


class BioNav extends Component {
    render() {
        return(
            <div className="Nav">
                <div className="nav-Home">
                    <Link to="/"> Home </Link>
                </div>
                <Link  to="/bio" className="Bio-Link"> 
                    <div className="nav-Bio">
                        Bio
                    </div>
                </Link>
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

export default BioNav