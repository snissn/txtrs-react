import React from 'react';
import Panel from 'react-bootstrap/lib/Panel'
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
    const response = await this.getPrivateMessages()
    console.log("response",response)
    this.setState({receivedMessages: response})
  }
  async private_message_bob_stage_2(private_message){
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

    var accounts = await  w3.eth.getAccounts()
    await window.ethereum.enable()
    var send = await private_message.methods.bob_reply(bob_x,bob_y).send({from:accounts[0]})
    //post this to blockchain 

    //save private key in indexedb

  }

  async getPrivateMessages() {
    var messages_count = await contract.methods.get_received_messages_total(users_address).call();
    var messages = []
    for(var index = messages_count-1; index >= 0 ;index-- ){
      var private_message_addr = await contract.methods.get_received_message(users_address,index).call()
			var private_message = getPrivateMessage(private_message_addr)
      this.private_message_bob_stage_2(private_message);
			var stage = await private_message.methods.stage().call()
      if (stage == 1){
        this.private_message_bob_stage_2(private_message);
      }
      if(stage == 3){
        alert("decrypt using bob key");
        //decrypt using bob key
      }

			var stage = await private_message.methods.stage().call()
			var alice = await private_message.methods.alice().call()
			var bob = await private_message.methods.bob().call()
      var message = {stage:stage,alice:alice,bob:bob, id:index, address: private_message_addr}
      messages.push(message);
      console.log('messages',messages);

      //var sender = await contract.methods.get_public_message_sender(index).call()
    }
    return messages;
  };

  render() {
    return (
<div>
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
      <p>hi</p>
        { 

				this.state.receivedMessages.map(message => <Panel bsStyle="info" key={message.id} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">
										{(() => {
											switch (message.stage) {
												case "1":   return "Key request sent for One Time Use Public Keys.";
												case "2": return "Waiting on recieving encrypted message ";
												case "3":  return "Encrypted Message received!" ;
												case "4":  return "Encrypted Message received and status = Read";
												default:      return "unknown stage ";
											}
										})()}
						</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
							<p>
									{message.alice}

							</p>
            </Panel.Body>
          </Panel>)
        }
</div>
    );
  }
}



