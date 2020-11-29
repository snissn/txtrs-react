import React, { Component } from "react";
import "./App.css";
import Txtrs from "./views/Txtrs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GithubIcon from "./assets/GithubIcon";

export default function App() {
  return (
    <div className="App">
      <h1 className="App-title">
        Txt.rs.2.6.5: Secure OTR messaging (like Signal) using a secure ethereum
        sidechain. For testing a new keypair is generated each time the page
        loads
      </h1>
      <h3 className="App-title">
        To demo the features, send a public chat message and then initiate a
        private message with yourself
      </h3>

      <GithubIcon />
      {/* Since we only have 1 route , we might not need react-router */}
      <Route exact path="/" component={Txtrs} />
    </div>
  );
}
