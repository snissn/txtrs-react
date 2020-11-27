import React from "react";
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
import Convo from "./Convo";

import ReactDOM from "react-dom";

export default class StartConversation extends React.Component {
  async setUpListeners() {
    var that = this;
    contractws.events.allEvents(
      "allEvents",
      {
        fromBlock: "latest",
      },
      async function(err, data) {
        console.log("LOGGING THAT EVENT PICKED UP NEWS");
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
    console.log("start send private msg");
    await this.setUpListeners();
    const response = await this.getSentMessages();
  }
  async getSentMessages() {
    var account = await w3.eth.getAccounts();
    this.state.account = account;
    var messages_count = await contractws.methods
      .get_sent_messages_total(users_address)
      .call();
    var messages = this.state.sentMessages;
    var show_once_alice = { account: true };
    var show_once_bob = { account: true };
    for (var index = messages_count - 1; index >= 0; index--) {
      var private_message_addr = await contractws.methods
        .get_sent_message(users_address, index)
        .call();
      var private_message = getPrivateMessageWS(private_message_addr);
      var stage = await private_message.methods.stage().call();
      var alice = await private_message.methods.alice().call();
      var bob = await private_message.methods.bob().call();
      var message = { stage: stage, alice: alice, bob: bob, id: index };
      if (stage == "2") {
        continue;
      }
      message["address"] = "address";
      message["id"] = index;
      if (stage == 1) {
      }
      if (
        (show_once_alice[message["alice"]] && show_once_bob[message["bob"]]) ||
        false
      ) {
        continue;
      }
      messages.push(message);
      show_once_alice[message["alice"]] = true;
      show_once_bob[message["bob"]] = true;
    }
    this.setState({ sentMessages: messages });
    return messages;
  }
  mySubmitHandler = async (event) => {
    event.preventDefault();
    var account = await w3.eth.getAccounts();
    const gasEstimate = await contract.methods
      .pm_init(this.state.address)
      .estimateGas();

    var send = await contract.methods
      .pm_init(this.state.address)
      .send({ gasPrice: 0, from: account[0], gas: gasEstimate });
    return false;
  };

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    if (nam === "message") {
      if (val == "") {
        err = <strong>Your message can't be blank</strong>;
      }
    }
    this.setState({ errormessage: err });
    this.setState({ [nam]: val });
  };
  render() {
    return (
      <div>
        {this.state.sentMessages.map((message) => (
          <Convo message={message} key={message.id} />
        ))}
      </div>
    );
  }
}
