import React from 'react';
import './App.css';
import logo from './spacex-logo.png'; 

function App() {
  return (
    <div className="App">
      <img src={logo} alt="SpaceX" style={{ display: "block", margin: "auto" }}/>
    </div>
  );
}

export default App;
