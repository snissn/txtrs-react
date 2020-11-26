import React from 'react';
import { getContract, contract, w3, users_address, getPrivateMessage, colorHash, contrast } from "./Web3Helper"
import Card from 'react-bootstrap/Card'

import ReactDOM from 'react-dom';
const ecies = require('eth-ecies')

export default class Convo extends React.Component {
  constructor(props) {
    super(props);
    console.log("PROPS", props);
    this.state = {
      message: props.message,
      errormessage: props.message
    };
    this.onSendSecretMessage = this.onSendSecretMessage.bind(this);

  }
  async componentDidMount() {
  }
  onSendSecretMessage = async (event) => {
    event.preventDefault();
    var private_message = getPrivateMessage(this.state.message.address)
    // the damn library adds the "0x04" prevailing byte so we need to slice(2) the hex rep
    //https://github.com/libertylocked/eth-ecies/blob/master/index.js#L74
    var bob_public = this.state.message.bob_public;
    var public_key = Buffer.from(bob_public.slice(2), 'hex');
    var account = await w3.eth.getAccounts()
    var encrypt = ecies.encrypt(public_key, this.state.secret_message);
    var send = await private_message.methods.alice_send_encrypted_message(encrypt.toString('hex')).send({ gasPrice: 0, from: account[0] });
    return false;
  }

  myChangeHandler = (event) => {
    this.setState({ secret_message: event.target.value });

    return;
    let nam = event.target.name;
  }
  render() {
    var message = this.state.message;
    return (
      <Card bsStyle="info" key={message.id} className="centeralign">
        <Card.Header as="h3">
          {(() => {
            switch (message.stage) {
              case "1": return "Key request sent.";
              case "2": return "Recipient has shared one time use encryption keys with you. Time to encrypt and send the message!";
              case "3": return "Conversation #" + message.id
              case "4": return "Encrypted Message received by " + message.bob;
              default: return "unknown stage ";
            }
          })()}

        </Card.Header>
        <Card.Body style={{ backgroundColor: colorHash.hex(message.bob), color: contrast(colorHash.hex(message.bob)) }}>

          <div>
            <p>
              conversation wtih
                  </p>
            <p>
              {message.bob}
            </p>
            <p>
              {message.id} total messages
                  </p>

          </div>


        </Card.Body>
      </Card>
    )
  }
}





