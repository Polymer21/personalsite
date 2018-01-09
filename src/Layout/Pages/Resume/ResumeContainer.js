import React, { Component } from "react"
import "./ResumeContainer.css"
import Nav from "../../Nav/Nav"
class ResumeContainer extends Component {

    render() {
        return(
            <div className="resume">
                <div className="nav">
                    <Nav/>
                </div>
                <div className="content">
                <img src={require("./TimResume.png")}/>
                </div>
            </div>

        )
    }
}

export default ResumeContainer
