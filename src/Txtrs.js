import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import CustomerDetails from './CustomerDetails'
import SendPublicMessage from "./SendPublicMessage"
import PublicMessages from "./PublicMessages"
import SendPrivateMessage from './SendPrivateMessage'
import ReceivedMessages from './ReceivedMessages'

import {getContract, contract, web3init} from "./Web3Helper"

export default class Arts extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  //function which is called the first time the component loads
  async componentDidMount() {
    await web3init();

    const response = await this.getPublicMessages()
    console.log('response is ',response);
    this.setState({publicMessages: {"data":response}})
  }

  //Function to get the Art Data from json
  async getPublicMessages() {
    var messages_count = await contract.methods.get_public_message_count().call();
    console.log("messages count", messages_count);
    var messages = []
    for(var index = messages_count-1; index >= 0 ;index-- ){
      console.log("index is", index)
      var message = await contract.methods.get_public_message_message(index).call()
      var sender = await contract.methods.get_public_message_sender(index).call()
      messages.push({message:message, sender:sender, id:index})
    }
    return messages;
  };

  render() {
    if (!this.state.publicMessages)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-4">
      <div>
      <SendPublicMessage />
      <PublicMessages />
      </div>
        </div>
      <div className="col-md-4">
      <p>Send Private Message</p>
      <SendPrivateMessage />
      </div>
      <div className="col-md-4">
      <p>Incoming Private Messages</p>
      <ReceivedMessages />
      </div>
    </div>)
  }

}


