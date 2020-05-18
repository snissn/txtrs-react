import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Txtrs from './Txtrs'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Txt.rs.2.2</h1>
          <h3 className="App-subtitle">Connect <a href="http://metamask.io" target="_blank">Metamask.io</a> to the MaticV3 testnet</h3>
          <h4 className="App-subtitle"> https://testnetv3.matic.network/ </h4> 
        </header>
       <Route exact path='/' component={Txtrs} />
      </div>
    </Router>
    );
  }
}

export default App;
