import React from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import ecies from 'eth-ecies'

//import {getContract, contract, w3, users_address, getPrivateMessage, getBlockNumber} from "./Web3Helper"
import StartConversationButton from './StartConversationButton'


import {getContract, contract, web3init, getBlockNumber} from "./Web3Helper"
var ColorHash = require('color-hash');
var colorHash = new ColorHash();

const blendstyle = {
            color:'white'
}
  function hexToRgb(hex) {
    if (!hex || hex === undefined || hex === '') {
      return undefined;
    }

    const result =
          /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : undefined;
  }
  function rgbToYIQ({r, g, b}) {
    return ((r * 299) + (g * 587) + (b * 114)) / 1000;
  }

export function contrast(colorHex: string | undefined,
                         threshold: number = 128): string {
    if (colorHex === undefined) {
        return '#000';
    }

    const rgb: RGB | undefined = hexToRgb(colorHex);

    if (rgb === undefined) {
        return '#000';
    }

    return rgbToYIQ(rgb) >= threshold ? '#000' : '#fff';
}


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
        return (
          <div>
          {
          this.state.publicMessages.data.map((message,index) => <Panel bsStyle="info" key={message.id} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{message.sender}</Panel.Title>
            </Panel.Heading>
            <Panel.Body style={{backgroundColor:colorHash.hex(message.sender)}}>
              <p style={{color:contrast(colorHash.hex(message.sender))}}>
              {message.message}</p>
              <p> <StartConversationButton  address={message.sender}/></p>
            </Panel.Body>
          </Panel>)
        
          }
        </div>
        )


  }
  }
