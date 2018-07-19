import React, { Component } from 'react';
import './App.css';
import Nav from './Components/NavBar/NavBar.js'
import LandingPage from './Components/Landing/Landing.js';



class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Nav></Nav>
        <LandingPage></LandingPage>
      </div>
    );
  }
}

export default App;
