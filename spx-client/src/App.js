import React from 'react';
import './App.css';
import logo from './spacex-logo.png';
import Launches from './components/Launches';

function App() {
  return (
    <div className="main">
      <img src={logo} alt="SpaceX" style={{ display: "block", margin: "auto" }} />
      <Launches />
    </div>
  );
}

export default App;
