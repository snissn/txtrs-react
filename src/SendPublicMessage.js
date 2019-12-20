import React from 'react';

import {getContract, contract, w3} from "./Web3Helper"
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
    var account = await  w3.eth.getAccounts()
    alert(account+"You are submitting " + this.state.message);

    var send = await contract.methods.send_public_message(this.state.message).send();//, {from:account}).send({from:account, value:0})
    alert(send);
    return false;
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "message") {
      if (val =="" ) {
        err = <strong>Your message can't be blank</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <input
        type='text'
        name='message'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />
 
      {this.state.errormessage}
      </form>
    );
  }
}



