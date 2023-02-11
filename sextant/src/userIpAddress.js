import React, { Component } from 'react';


class PublicIPAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
        url: props.url,
        ipAddress
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then(response => response.json())
      .then(data => this.setState({ ipAddress: data.ip}));
  }

  return (){
    return (
      <div className="PublicIpAddress">
      <p>Your public IP address is: {this.state.ipAddress}</p>
      </div>
    );
  }
  
}

export default PublicIPAddress;
