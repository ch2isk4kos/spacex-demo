import React from 'react';
import './App.css';
import logo from './spacex-logo.png';
import Launches from './components/Launches';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <img src={logo} alt="SpaceX" style={{ width: "300", display: "block", margin: "auto" }} />
      {/* <Launches /> */}
      
      <Switch>
        <Route exact path={"/"} component={Launches} />
        <Route exact path={"/launch/:flight_number"} component={""} />
      </Switch>
    </div>
  );
}

export default App;
