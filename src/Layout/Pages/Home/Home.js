import React, {Component} from "react"
import "./Home.css"
import Top from './Position/ATF/Top/top.js'
import Middle from './Position/ATF/Middle/middle.js'
import Bottom from './Position/ATF/Bottom/bottom.js'
import Background from './Background/background'
import Nav from '../../Nav/Nav'



class Home extends Component {
  
  
  state = {
    homeContainer: '',
    countryId: 'us',
    zipId: '90210',
    weatherState: {}
}

getWeather = async (zipId, countryId) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipId},${countryId}&appid=1f210d40d831307ebb83d34190cfb667`)
    try {
        const result = await response.json() 
        return result
    } catch(err){
        console.log(err) 
    }   
}

async componentDidMount() {
  const weather1 = await this.getWeather(this.state.zipId, this.state.countryId) 
  const weatherState = {
    isSnowing: false,
    isRaining: false,
    isDrizzle: false,
    isClear: false,
    isCloudy: false,
    isFoggy: false,
    tempMin: weather1.main.temp_min,
    tempMax: weather1.main.temp_max,
    temp: weather1.main.temp,
    humidityLevel: weather1.main.humidity
    
  }
  for (const weatherStatus of weather1.weather){
      console.log("weatherStatus", weatherStatus)
      if (weatherStatus.main === 'Clouds'){
        weatherState.isCloudy = true
      }
      else if (weatherStatus.main === 'Clear'){
        weatherState.isClear = true
      }
      else if (weatherStatus.main === 'Snow') {
        weatherState.isSnowing = true
      }
      else if (weatherStatus.main === 'Rain') {
        weatherState.isRaining = true
      }
      else if (weatherStatus.main === 'Fog')
        weatherState.isFoggy = true
  }
  console.log("weather", weather1, weatherState)
  this.setState({weatherState})
  console.log("state weather", this.state.weatherState)
  
 
}

  render() {
    return (
      <div className="Home">
          <Background weatherState={this.state.weatherState}/>
          <div className="Home-Nav">
            <Nav/>
          </div>
          <Top/>
          <Middle/>
          <Bottom/> 
      </div>
    );
  }
}

export default Home