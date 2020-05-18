import React from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import {getContract, contract, w3, users_address, getPrivateMessage, getBlockNumber} from "./Web3Helper"
import EncryptMessage from './EncryptMessage'

import ReactDOM from 'react-dom';


export default class Messages extends React.Component {

  render() {
    return (
    <div><h2>Active Conversation here </h2></div>
    )
  }
}
