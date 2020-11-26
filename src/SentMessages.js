import React from 'react';

import { getContract, contract, w3 } from "./Web3Helper"
import ReactDOM from 'react-dom';

export default class SendPublicMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      errormessage: ''
    };
  }
  mySubmitHandler = async (event) => {
    event.preventDefault();
    var account = await w3.eth.getAccounts()
    console.log(this.state);
    var onetime_account = w3.eth.accounts.create(w3.utils.randomHex(32));
    const gasEstimate = await contract.methods.initiate_private_message(this.state.address, onetime_account.address).estimateGas()

    var send = await contract.methods.initiate_private_message(this.state.address, onetime_account.address).send({ gas: gasEstimate });
    return false;
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "message") {
      if (val == "") {
        err = <strong>Your message can't be blank</strong>;
      }
    }
    this.setState({ errormessage: err });
    this.setState({ [nam]: val });
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <p>
          <label for="address">Ethereum Address</label>
          <input
            type='text'
            name='address'
            placeholder="0xSatoshi"
            onChange={this.myChangeHandler}
          />
        </p>
        <p>
          <label for="message">Secret Message</label>
          <input
            type='text'
            name='message'
            placeholder="Secret Message"
            onChange={this.myChangeHandler}
          />
        </p>
        <input
          type='submit'
        />

        {this.state.errormessage}
      </form>
    );
  }
}



