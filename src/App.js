import React, { Component } from 'react';
import './App.css';
import Home from "./Layout/Pages/Home/Home"
import Routes from "./Config/Routes"


class App extends Component {

  render() {
    return (

      <div className="app">
        <Routes/>
      </div>
    )
  }
}


export default App