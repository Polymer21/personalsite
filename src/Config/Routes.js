import React, {Component} from "react"
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import BioContainer from "../Layout/Pages/Bio/BioContainer"
import HomeContainer from "../Layout/Pages/Home/Home"
import ProjectsContainer from "../Layout/Pages/Projects/ProjectsContainer"
import ResumeContainer from "../Layout/Pages/Resume/ResumeContainer"


class Routes extends Component {
    render() {
        return(
           <div>
                <Router>
                    <div>
                        <Route exact path='/' component={HomeContainer} />
                        <Route path='/bio' component={BioContainer} />
                        <Route path='/resume' component={ResumeContainer} />
                        <Route path='/projects' component={ProjectsContainer} /> 
                    </div>
               </Router>
           </div>
        )
    }
}

export default Routes