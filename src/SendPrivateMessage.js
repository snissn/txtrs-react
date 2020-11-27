import React from "react";
import Card from "react-bootstrap/Card";
import {
  getContract,
  contract,
  contractws,
  w3,
  users_address,
  getPrivateMessageWS,
  getBlockNumber,
} from "./Web3Helper";
import EncryptMessage from "./EncryptMessage";

import ReactDOM from "react-dom";

export default class SendPublicMessage extends React.Component {
  async setUpListeners() {
    var that = this;
    contractws.events.allEvents(
      "allEvents",
      {
        fromBlock: "latest",
      },
      async function(err, data) {
        await that.getSentMessages();
      }
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      sentMessages: [],
      errormessage: "",
      account: "",
    };
  }
  async componentDidMount() {
    await this.setUpListeners();
    const response = await this.getSentMessages();
  }
  async getSentMessages() {
    var account = await w3.eth.getAccounts();
    this.state.account = account;
    var messages_count = await contractws.methods
      .get_sent_messages_total(users_address)
      .call();
    var messages = [];
    for (var index = messages_count - 1; index >= 0; index--) {
      var private_message_addr = await contractws.methods
        .get_sent_message(users_address, index)
        .call();
      var private_message = getPrivateMessageWS(private_message_addr);
      var stage = await private_message.methods.stage().call();
      var alice = await private_message.methods.alice().call();
      var bob = await private_message.methods.bob().call();
      var message = { stage: stage, alice: alice, bob: bob, id: index };
      if (stage == 1) {
      }
      if (stage == "2") {
        var bob_public = await private_message.methods.bob_public().call();
        message["bob_public"] = bob_public;
      }
      message["address"] = private_message_addr;
      message["id"] = index;
      messages.push(message);
    }
    this.setState({ sentMessages: messages });
    return messages;
  }

  render() {
    return (
      <div>
        {this.state.sentMessages.map((message) => (
          <EncryptMessage message={message} key={message.id} />
        ))}
      </div>
    );
  }
}
