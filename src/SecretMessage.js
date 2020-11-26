
import React from 'react';
import { getContract, contract, w3, users_address, getPrivateMessage, private_message_bob_stage_2 } from "./Web3Helper"

import ReactDOM from 'react-dom';
const ecies = require('eth-ecies')

export default class SecretMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.message.stage == 3) {
      return (<div><p>{this.props.message.plaintext}</p></div>);
    }
    else {
      return (<></>)
    }
  }
}

