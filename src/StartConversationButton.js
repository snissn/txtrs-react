
import React from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import {getContract, contract, w3, users_address, getPrivateMessage, private_message_bob_stage_2} from "./Web3Helper"

import ReactDOM from 'react-dom';
const ecies = require('eth-ecies')

export default class StartConversationButton extends React.Component {
	constructor(props) {
    super(props);
  }
  async handleClick(props){

    var account = await  w3.eth.getAccounts()
    var send = await contract.methods.pm_init(this.props.address).send({gasPrice:0,from:account[0]});
    return false;
  }
  render(){
      return (<div><p>{this.props.account}</p><input type="button" value="Start a secret conversation" onClick={(event)=>this.handleClick(this.props)}/></div>)
  }


}
