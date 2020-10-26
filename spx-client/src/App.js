import React from 'react';
import './App.css';
// import logo from './spacex-logo.png';
import Home from './components/Home';
import Launches from './components/Launches';
import Launch from './components/Launch';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      {/* <Launches /> */}
      
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/launches"} component={Launches} />
        <Route exact path={"/launches/:flight_number"} component={Launch} />
      </Switch>
    </div>
  );
}

export default App;
