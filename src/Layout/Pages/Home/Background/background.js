import React, { Component } from 'react' 
import "./background.css" 
import {object} from 'prop-types'

class Background extends Component {
    static propTypes = {
        weatherState: object.isRequired
        
      }

      state = {
        weatherBackground: 'background',
      }

    updateBackground = (weatherState) => {
        let weatherClass 
        if (weatherState.isSnowing) {
            weatherClass="snowBackground"
        }
        else if (weatherState.isRaining) {
            weatherClass= "rainyBackground"
        }
        else if (weatherState.isClear) {
            weatherClass= "clearBackground"
        }
        else if (weatherState.isDrizzle) {
            weatherClass= "drizzleBackground"
        }
        else if (weatherState.isCloudy) {
        weatherClass= "cloudyBackground"
        } 
        else if (weatherState.isFoggy) {
            weatherClass= "fogBackground"
        } else {
            weatherClass= "background"
        }
        this.setState({weatherBackground: weatherClass})

        console.log("weatherClass", weatherClass)
    }
    
    componentDidMount() {
        this.updateBackground(this.props.weatherState)
    }

    componentWillReceiveProps(nextProps){
        this.updateBackground(nextProps.weatherState)
    }

    render() {
        return (
            <div className={this.state.weatherBackground}>
            
            </div>
        )
    }
}

export default Background 