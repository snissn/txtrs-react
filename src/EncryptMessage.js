import React from "react";
import Card from "react-bootstrap/Card";

import {
  getContract,
  contract,
  w3,
  users_address,
  getPrivateMessage,
  colorHash,
  contrast,
} from "./helpers/Web3Helper";

import ReactDOM from "react-dom";
const ecies = require("eth-ecies");

export default class EncryptMessage extends React.Component {
  constructor(props) {
    super(props);

    console.log("PROPS", props);
    this.state = {
      secret_message: "",
    };
    this.onSendSecretMessage = this.onSendSecretMessage.bind(this);
  }
  async componentDidMount() {}
  onSendSecretMessage = async (event) => {
    event.preventDefault();
    var private_message = getPrivateMessage(this.props.message.address);
    // the damn library adds the "0x04" prevailing byte so we need to slice(2) the hex rep
    //https://github.com/libertylocked/eth-ecies/blob/master/index.js#L74
    var bob_public = this.props.message.bob_public;
    var public_key = Buffer.from(bob_public.slice(2), "hex");
    var account = await w3.eth.getAccounts();
    var encrypt = ecies.encrypt(public_key, this.state.secret_message);
    var contract = getContract();
    const gasEstimate = await contract.methods
      .pm_alice_send_encrypted_message(
        this.props.message.address,
        encrypt.toString("hex")
      )
      .estimateGas();
    console.log("account in encrypt message is", account);
    var send = await contract.methods
      .pm_alice_send_encrypted_message(
        this.props.message.address,
        encrypt.toString("hex")
      )
      .send({ gas: gasEstimate, gasPrice: 0, from: account[0] });
    return false;
  };

  myChangeHandler = (event) => {
    this.setState({ secret_message: event.target.value });

    return;
  };
  render() {
    var message = this.props.message;
    console.log("MESSAGE", message);
    return (
      <Card bsStyle="info" key={message.id} className="centeralign">
        <Card.Header as="h3">
          {(() => {
            switch (message.stage) {
              case "1":
                return "Key request sent.";
              case "2":
                return "Encrypted Channel";
              case "3":
                return "Encrypted Message sent to " + message.bob;
              case "4":
                return "Encrypted Message received by " + message.bob;
              default:
                return "unknown stage ";
            }
          })()}
        </Card.Header>
        <Card.Body
          style={{
            backgroundColor: colorHash.hex(message.bob),
            color: contrast(colorHash.hex(message.bob)),
          }}
        >
          {this.renderForm(message)}
        </Card.Body>
      </Card>
    );
  }
  renderForm(message) {
    if (message.stage == "2") {
      return (
        <form onSubmit={this.onSendSecretMessage} className="form">
          <label htmlFor="Receiver">Receiver</label>
          <div name="Receiver">{message.bob}</div>
          <label htmlFor="message">Secret Message</label>
          <input
            type="text"
            name="message"
            placeholder="Secret Message"
            value={this.state.secret_message}
            onChange={this.myChangeHandler}
          />
          <input type="submit" value="Send" />
        </form>
      );
    }
    if (message.stage == "1") {
      return <span>Conversation with {message.bob} requsted </span>;
    }
    return <span>Message Sent</span>;
  }
}
