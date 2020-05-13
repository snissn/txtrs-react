import React from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import ecies from 'eth-ecies'

//import {getContract, contract, w3, users_address, getPrivateMessage, getBlockNumber} from "./Web3Helper"


import {getContract, contract, web3init, getBlockNumber} from "./Web3Helper"

export default class PublicMessages extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      publicMessages:{
        data: []
      }
    };
  }
  
  async setUpListeners(){
    var block_number = await getBlockNumber()
    var that = this;
    contract.events.allEvents("allEvents",{
    
        fromBlock: 'latest'

    },async function(err,data){
      console.log("event", data);
      await that.fetch();
    });
  }


  async fetch(){
    const response = await this.getPublicMessages()
    this.setState({publicMessages: {"data":response}})
  }

  async componentDidMount() {
    await this.fetch()
    await this.setUpListeners();
  }

  async getPublicMessages() {
    var messages_count = await contract.methods.get_public_message_count().call();
    var messages = []
    for(var index = messages_count-1; index >= 0 ;index-- ){
      var message = await contract.methods.get_public_message_message(index).call()
      var sender = await contract.methods.get_public_message_sender(index).call()
      messages.push({message:message, sender:sender, id:index})
    }
    return messages;
  };


  render(){
          const elements = ['a','b','c'];
          console.log("HERE");
          console.log(this.state.publicMessages);
        return (
          <div>
          {
          this.state.publicMessages.data.map((message,index) => <Panel bsStyle="info" key={message.id} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{message.message}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>{message.sender}</p>
            </Panel.Body>
          </Panel>)
        
          }
        </div>
        )


  }
  }
