import React, { Component } from "react";
import "./App.css";
import Txtrs from "./views/Txtrs";
import Identity from "./components/Identity";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Txt.rs
        </a>
        <div class="  my-2 my-lg-0">
          <Identity />
        </div>
      </nav>

      <h1 className="App-title">
        Secure OTR messaging (like Signal) using a secure ethereum sidechain.
      </h1>
      <p>
        To demo the secure chat, send a public chat message and then click the
        chat button to initiate a private message with yourself
      </p>

      {/* Since we only have 1 route , we might not need react-router */}
      <Route exact path="/" component={Txtrs} />
    </div>
  );
}
