import React, { Component } from 'react';
import './App.css';
import Banner from './topBanner';
import Exhibit from './Exhibit';
import PublicIPAddress from './userIpAddress';
import PylonConnector from './PylonConnector';

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
        <Exhibit name="Pylon Packet Latency">
            <PylonConnector />     
        </Exhibit>
      </div>
    );
  }
}

export default App;
