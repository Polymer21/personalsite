import React, {Component} from "react"
import { Link } from "react-router-dom"
import "./BioContainer.css"
import Nav from "../../Nav/Nav"
import Me from "./Components/Me/Me" 
import Interests from "./Components/Interests/Interests"
import Quote from "./Components/Quote/Quote"


class Bio extends Component {
    
    render () {
        return (
            <div className='bioContainer'>
                <Me/>
                <Interests/>
                <Quote/>
                <div className='bioContainer-interests'>

                </div>
                <div className='bioContainer-hobbies'>
                </div>
                <div className='bioContainer-quote'>
                </div>
                
            </div>
        )
    }
}

export default Bio