import React, { useState, useEffect } from 'react';

function PublicIPAddress() {
  const [ipAddress, setIPAddress] = useState('');

  useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => setIPAddress(data.ip));
  }, []);

  return (
    <div>
      <p>Your public IP address is: {ipAddress}</p>
    </div>
  );
}

export default PublicIPAddress;
