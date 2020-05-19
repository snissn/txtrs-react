import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import CustomerDetails from './CustomerDetails'
import SendPublicMessage from "./SendPublicMessage"
import PublicMessages from "./PublicMessages"
import SendPrivateMessage from './SendPrivateMessage'
import Messages from './Messages'
import ReceivedMessages from './ReceivedMessages'
import Conversations from './Conversations'

import {getContract, contract, web3init} from "./Web3Helper"

export default class Arts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      networkname:'private'
    }
  }

  //function which is called the first time the component loads
  async componentDidMount() {
    var did_init = await web3init();
    if(did_init){
      var networkname = await window.w3.eth.net.getNetworkType();
      this.setState({'networkname': networkname})

      const response = await this.getPublicMessages()
      console.log('response is ',response);
      this.setState({publicMessages: {"data":response}})
    }else{
      this.setState({networkname: 'no-web3'})
    }

  }

  //Function to get the Art Data from json
  async getPublicMessages() {
     if(this.state.networkname != 'private'){
         return {};
     }
    var messages_count = await contract.methods.get_public_message_count().call();

    console.log("messages count", messages_count);
    var messages = []
    var counter=0;
    for(var index = messages_count-1; index >= 0 ;index-- ){
      counter+=1;
      if(counter ==5){break;}
      console.log("index is", index)
      var message = await contract.methods.get_public_message_message(index).call()
      var sender = await contract.methods.get_public_message_sender(index).call()
      messages.push({message:message, sender:sender, id:index})
    }
    return messages;
    
  };

  render() {
    if(this.state.networkname == 'no-web3'){
      return (<div><h1>

      <a href="https://metamask.io" target="_blank">
      Install MetaMask to use the site
      </a>
      <a className="cover" href="https://metamask.io" target="_blank">
          <img  src="/assets/images/download-extension.png" />
      </a>

</h1>
      </div>)
    }
    if(this.state.networkname != 'private'){
        return (<div>
        <h1>Oops, you’re on the wrong network</h1>
          <h2>Simply open MetaMask and switch over to the custom MaticV3 testnet</h2>
          <h4 className="App-subtitle"> Add custom testnet RPC url: https://testnetv3.matic.network/ </h4> 
          <img className="metamask" src="/assets/images/metamask_example.png" />
          <img className="metamask" src="/assets/images/metamask_settings.png" />
        </div>)
    }
    if (!this.state.publicMessages){
        return (<p>Loading data</p>)
    }
    return (<div className="addmargin">
      <div className="col-md-3">
        <div>
          <SendPublicMessage />
          <PublicMessages />
        </div>
      </div>
      <div className="col-md-3">
        <div>
        <h2>Encrypted Conversations</h2>
        <Conversations />
        </div>
      </div>
      <div className="col-md-6">
      <div className="row">
        <Messages />
      </div>
      <div className="col-md-12">
        <div className="col-md-6">
          <p>Outgoing Secure Messages</p>
          <SendPrivateMessage />
        </div>
        <div className="col-md-6">
          <p>Incoming Secure Messages</p>
          <ReceivedMessages />
        </div>
      </div>
      </div>
    </div>)
  }

}


