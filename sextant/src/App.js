import React, { Component } from 'react';
import './App.css';
import Banner from './topBanner';
import Exhibit from './Exhibit';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Banner bannerText="Sextant" />
        <Exhibit name="I am an Exhibit!"></Exhibit>
        <Exhibit name="I am also an Exhibit!"></Exhibit>
        <Exhibit name="Don't forget me, I am an Exhibit!"></Exhibit>
      </div>
    );
  }
}

export default App;
