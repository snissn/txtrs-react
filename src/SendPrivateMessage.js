import React from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import {getContract, contract, w3, users_address, getPrivateMessage} from "./Web3Helper"
import EncryptMessage from './EncryptMessage'

import ReactDOM from 'react-dom';

export default class SendPublicMessage extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      message: '',
      sentMessages : [],
      errormessage: ''
    };
  }
  async componentDidMount() {
		console.log("start send private msg");
    const response = await this.getSentMessages()
    console.log('send messages response is ',response);
    this.setState({sentMessages: response})
  }
  async getSentMessages() {
	console.log("get prv msg addr", users_address);
    var messages_count = await contract.methods.get_sent_messages_total(users_address).call();
    console.log("private received messages count", messages_count);
    var messages = []
    for(var index = messages_count-1; index >= 0 ;index-- ){
      console.log("index is", index)
      var private_message_addr = await contract.methods.get_sent_message(users_address,index).call()
			var private_message = getPrivateMessage(private_message_addr)
			console.log("private messsage is", private_message);
      console.log("trying to call stage lol");
			var stage = await private_message.methods.stage().call()
			var alice = await private_message.methods.alice().call()
			var bob = await private_message.methods.bob().call()
      var message = {stage:stage,alice:alice,bob:bob, id:index}
      if (stage == "2"){
        var bob_x = await private_message.methods.bob_x_public().call()
        var bob_y = await private_message.methods.bob_y_public().call()
        message['bob_x']=bob_x
        message['bob_y']=bob_y
      }
      if(stage==1){
      }
      messages.push(message);
      console.log(private_message, 'is at stage', stage);
      console.log(private_message, 'is at stage', stage);

      //var sender = await contract.methods.get_public_message_sender(index).call()
      //messages.push({message:message, sender:sender, id:index})
    }
    return messages;
  };
  mySubmitHandler = async (event) => {
    event.preventDefault();
    var account = await  w3.eth.getAccounts()
    var send = await contract.methods.initiate_private_message(this.state.address).send();
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
    <div>
      <form onSubmit={this.mySubmitHandler}>
      <div>
      <label htmlFor="address">Ethereum Address</label>
      <input
        type='text'
        name='address'
        placeholder="0xSatoshi"
        onChange={this.myChangeHandler}
      />
      </div>
      <input
        type='submit'
      />
 
      {this.state.errormessage}
      </form>
        <div>
        { this.state.sentMessages.map(message => 
      <EncryptMessage message={message}/>
          
          )
        }
        </div>
      </div>
    );
  }
}



