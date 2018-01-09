import React, { Component } from 'react'
import "./Me.css"
import BioNav from "../BioNav/BioNav"

class Me extends Component {
    render(){
        return(
            <div className="sectionMe">
                <div className="bioNav">
                    <BioNav/>
                </div>
                <div className="bracket">
                </div>
                <div className="bracket1">
                </div>
                <div className="photo">
                </div>
                <div className="name">
                    <p><strong> Tim Hoyt </strong></p>
                </div>
                <div className="age">
                    21
                </div>
                <div className="discriptionTitle">
                    <strong>What Up?</strong>
                </div>
                <div className="discriptionBox">
                    <p className="discriptionWords">

                    </p>
                </div>
                <div className="Links">
                     <div className="linkedIn">
                    <img className="linkedInImage" src={require('./LinkedInLogo.png')} alt='LinkedIn'/>
                    </div>
                    <div className="gitHub">
                        <img className="gitHubImage" src={require('./githublogo.png')} alt='gitHub'/>
                    </div>
                    <div className="instagram">
                        <img className="instagramImage" src={require('./instagramlogo.png')} alt='Instagram'/>
                    </div> 
                </div>
            </div>

        )
    }
}

export default Me