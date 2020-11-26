import React from 'react';
import Card from 'react-bootstrap/Card'

import { getContract, contract, w3, colorHash, contrast } from "./Web3Helper"
import ReactDOM from 'react-dom';

export default class SendPublicMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      errormessage: '',
      account: ''
    };
  }
  async componentDidMount() {
    var account = await w3.eth.getAccounts()
    this.setState({ account: account })
  }
  mySubmitHandler = async (event) => {
    event.preventDefault();
    var account = await w3.eth.getAccounts()
    console.log("")

    const gasEstimate = await contract.methods.send_public_message(this.state.message).estimateGas()

    var send = await contract.methods.send_public_message(this.state.message).send({ gas: gasEstimate });//, {from:account}).send({from:account, value:0})
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
      <Card bsStyle="info" classNameName="centeralign">
        <Card.Header as="h3">
          Send Public Message

             </Card.Header>
        <Card.Body style={{ backgroundColor: colorHash.hex(this.state.account) }} >
          <form onSubmit={this.mySubmitHandler}>
            <input
              type='text'
              name='message'
              onChange={this.myChangeHandler}
            />
            <input
              type='submit'
              value='Share'
            />

            {this.state.errormessage}
          </form>
        </Card.Body>
      </Card>
    );
  }
}



