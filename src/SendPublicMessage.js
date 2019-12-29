import React from 'react';
import Panel from 'react-bootstrap/lib/Panel'

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

    var send = await contract.methods.send_public_message(this.state.message).send();//, {from:account}).send({from:account, value:0})
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
          <Panel bsStyle="info" className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">
              Send Public Message

						</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
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
            </Panel.Body>
          </Panel>
    );
  }
}



