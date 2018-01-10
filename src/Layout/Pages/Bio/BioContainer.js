import React, {Component} from "react"
import { Link } from "react-router-dom"
import "./BioContainer.css"
import Nav from "../../Nav/Nav"
import Me from "./Components/Me/Me" 
import Interests from "./Components/Interests/Interests"
import Quote from "./Components/Quote/Quote"
import Hobbies from "./Components/Hobbies/Hobbies"


class BioContainer extends Component {
    
    render () {
        return (
            <div className='bioContainer'>
                <Me/>
                <Interests/>
                <Quote/>
                <Hobbies/>
            </div>
        )
    }
}

export default BioContainer