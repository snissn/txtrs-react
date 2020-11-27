
import React from 'react';
import { getContract, contract, w3, users_address, getPrivateMessage, private_message_bob_stage_2 } from "./Web3Helper"
import Button from 'react-bootstrap/Button'
import ReactDOM from 'react-dom';
const ecies = require('eth-ecies')

export default class StartConversationButton extends React.Component {
  constructor(props) {
    super(props);
  }
  async handleClick(props) {

    var account = await w3.eth.getAccounts()
    const gasEstimate = await contract.methods.pm_init(this.props.address).estimateGas()

    var send = await contract.methods.pm_init(this.props.address).send({ gas: gasEstimate, gasPrice: 0, from: account[0] });
    return false;
  }
  render() {
    return (

      <Button variant="primary" onClick={(event) => this.handleClick(this.props)} > Chat</Button>
    )
  }


}
