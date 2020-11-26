
import React from 'react';
import { getContract, contract, w3, users_address, getPrivateMessage, private_message_bob_stage_2 } from "./Web3Helper"

import ReactDOM from 'react-dom';
const ecies = require('eth-ecies')

export default class AcceptMessageButton extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(props) {
    private_message_bob_stage_2(props.account);
  }
  render() {
    if (this.props.stage == 1) {
      return (<div><p>{this.props.account}</p><input type="button" style={{ color: 'black' }} value="Accept Conversation" onClick={(event) => this.handleClick(this.props)} /></div>)
    }
    else {
      return (<></>)
    }
  }
}
