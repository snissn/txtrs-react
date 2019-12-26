import React from 'react';
import ecies from 'eth-ecies'
import {getContract, contract, w3, users_address, getPrivateMessage} from "./Web3Helper"
import ReactDOM from 'react-dom';

const EC = require("elliptic").ec;

export default class ReceivedMessages extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      receivedMessages: [],
      errormessage: ''
    };
  }
  
  async componentDidMount() {
		console.log("start rec msg");
    const response = await this.getPrivateMessages()
    console.log('received messages response is ',response);
    this.setState({receivedMessages: response})
  }
  async private_message_bob_stage_2(private_message){
    alert("private message bob");
    console.log(private_message);
    var bob_reply = {}
    var privateKey = w3.utils.randomHex(32)
    var onetime_account = w3.eth.accounts.create(privateKey);


const ec = new EC("secp256k1");




    const ephemPrivKey = ec.keyFromPrivate(privateKey);
    const ephemPubKey = ephemPrivKey.getPublic();
    const ephemPubKeyEncoded = Buffer.from(ephemPubKey.encode());
    var bob_x = ephemPubKeyEncoded.slice(1,33)
    bob_reply['bob_x'] = bob_x
    var bob_y = ephemPubKeyEncoded.slice(33, 65)
    bob_reply['bob_y'] = bob_y;
    console.log('pubkey',ephemPubKeyEncoded) // 65 bytes ship to blockchain for Bob's key
    console.log('bob keys',bob_x, bob_y) // 65 bytes ship to blockchain for Bob's key

    var accounts = await  w3.eth.getAccounts()
    await window.ethereum.enable()
    var send = await private_message.methods.bob_reply(bob_x,bob_y).send({from:accounts[0]})
    //post this to blockchain 

    //save private key in indexedb

  }

  async getPrivateMessages() {
	console.log("get prv msg addr", users_address);
    var messages_count = await contract.methods.get_received_messages_total(users_address).call();
    console.log("private received messages count", messages_count);
    var messages = []
    for(var index = messages_count-1; index >= 0 ;index-- ){
      console.log("index is", index)
      var private_message_addr = await contract.methods.get_received_message(users_address,index).call()
			var private_message = getPrivateMessage(private_message_addr)
			console.log("private messsage is", private_message);
      this.private_message_bob_stage_2(private_message);
      return;
      console.log("trying to call stage lol");
			var stage = await private_message.methods.stage().call()
      console.log(private_message, 'is at stage', stage);
      if (stage == 1){
        this.private_message_bob_stage_2(private_message);
      }

      //var sender = await contract.methods.get_public_message_sender(index).call()
      //messages.push({message:message, sender:sender, id:index})
    }
    return messages;
  };

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <p>
      <label htmlFor="address">Ethereum Address</label>
      <input
        type='text'
        name='address'
        placeholder="0xSatoshi"
        onChange={this.myChangeHandler}
      />
      </p>
      <p>
      <label htmlFor="message">Secret Message</label>
      <input
        type='text'
        name='message'
        placeholder="Secret Message"
        onChange={this.myChangeHandler}
      />
      </p>
      <input
        type='submit'
      />
 
      {this.state.errormessage}
      </form>
    );
  }
}



