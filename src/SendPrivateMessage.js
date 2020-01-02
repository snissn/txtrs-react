import React from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import {getContract, contract, w3, users_address, getPrivateMessage, getBlockNumber} from "./Web3Helper"
import EncryptMessage from './EncryptMessage'

import ReactDOM from 'react-dom';

export default class SendPublicMessage extends React.Component {
  async setUpListeners(){
    var block_number = await getBlockNumber()
    var that = this;
    contract.events.allEvents("allEvents",{
    
        fromBlock: block_number,
        toBlock: 'latest'

    },async function(err,data){
      console.log("LOGGING THAT EVENT PICKED UP NEWS")
      await that.getSentMessages();
    });
  }
	constructor(props) {
    super(props);
    this.state = {
      message: '',
      sentMessages : [],
      errormessage: '',
      account:''
    };
  }
  async componentDidMount() {
		console.log("start send private msg");
    await this.setUpListeners();
    const response = await this.getSentMessages()
    console.log('send messages response is ',response);
  }
  async getSentMessages() {
    var account = await  w3.eth.getAccounts()
    this.state.account = account;
    var messages_count = await contract.methods.get_sent_messages_total(users_address).call();
    var messages = []
    for(var index = messages_count-1; index >= 0 ;index-- ){
      var private_message_addr = await contract.methods.get_sent_message(users_address,index).call()
			var private_message = getPrivateMessage(private_message_addr)
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
      message['address']=private_message_addr
      message['id'] = index;
      if(stage==1){
      }
      messages.push(message);
    }
    this.setState({sentMessages: messages})
    return messages;
  };
  mySubmitHandler = async (event) => {
    event.preventDefault();
    var account = await  w3.eth.getAccounts()
    var send = await contract.methods.pm_init(this.state.address).send({gasPrice:0,from:account[0]});
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
    <p>
    hi {this.state.account}
    </p>
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
      <EncryptMessage message={message} key={message.id}/>
          
          )
        }
        </div>
      </div>
    );
  }
}



