import React from "react";
import {
  getContract,
  contract,
  w3,
  users_address,
  getPrivateMessage,
  getBlockNumber,
} from "./Web3Helper";
import EncryptMessage from "./EncryptMessage";

import ReactDOM from "react-dom";

export default class Messages extends React.Component {
  render() {
    return (
      <div>
        <h2>Active Conversations</h2>
      </div>
    );
  }
}
