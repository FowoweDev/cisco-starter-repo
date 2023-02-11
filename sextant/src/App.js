import React, { Component } from 'react';
import './App.css';
import Banner from './topBanner';
import Exhibit from './Exhibit';
import PublicIPAddress from './userIpAddress';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Banner bannerText="Sextant" />
        <Exhibit name="Public IPv4 Address">
          <PublicIPAddress url="https://api.ipify.org?format=json"/>
        </Exhibit>
        <Exhibit name="Public IPv6 Adress">
        <PublicIPAddress url="https://api64.ipify.org?format=json"/>
        </Exhibit>
        <Exhibit name="Don't forget me, I am an Exhibit!"></Exhibit>
      </div>
    );
  }
}

export default App;
