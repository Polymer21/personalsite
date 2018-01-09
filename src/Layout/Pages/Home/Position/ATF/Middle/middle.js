import React, { Component } from 'react'
import { Router, Link } from "react-router-dom"
import "./middle.css"
import Tim from "./Firstname.png"
import Hoyt from "./Lastname.svg"
import City from "./Location.svg"
import Bio from "./Bio.png"

class Middle extends Component {
    render () {
        return (
            <div className="Middle">
                <div className="firstname">
                    <img src={Tim} alt="Tim"/>
                </div>
                <div className='lastname'>
                    <img src={Hoyt} alt='Hoyt'/>
                </div>
                <div className='location'>
                    <img src={City} alt='Salt Lake City'/>
                </div>
                <div className='bio'>
                        <Link to='/Bio'>
                        <img src={Bio} alt='bio'/> 
                        </Link>
                </div>
            </div>
        )
    }
}


export default Middle