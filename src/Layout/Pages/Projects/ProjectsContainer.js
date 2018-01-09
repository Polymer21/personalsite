import React, { Component } from "react"
import Nav from "../../Nav/Nav"
import "./ProjectsContainer.css"

class ProjectsContainer extends Component {

    render() {
        return (
            <div className='projectsContainer'>
                <div className='projectsContainer-Nav'>
                    <Nav/>
                </div>
                <div className="AboutMe">
                    <div className="words">
                        About Me 
                    </div>
                </div>
                    <div className="Notsure">
                    
                    </div>
                    <div className="project3">
                    </div>
            </div>
        )
    }
}

export default ProjectsContainer 