import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import CustomerDetails from './CustomerDetails'
import web3 from 'web3'

var abi = [{"constant":false,"inputs":[{"name":"message_text","type":"string"},{"name":"recipient","type":"address"}],"name":"create_message","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"username","type":"bytes32"}],"name":"create_txtr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"},{"name":"addr","type":"address"}],"name":"get_one_message_recipient","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"message_text","type":"string"}],"name":"send_public_message","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"},{"name":"addr","type":"address"}],"name":"get_one_sent_message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"get_sent_user_message_total","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"get_user_message_total","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"get_public_message_address","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"},{"name":"addr","type":"address"}],"name":"get_one_message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"txtrs","outputs":[{"name":"name","type":"bytes32"},{"name":"owner","type":"address"},{"name":"exists","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"},{"name":"addr","type":"address"}],"name":"get_one_message_sender","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"get_public_message_sender","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"get_public_message_message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"get_public_message_count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"message_addr","type":"address"},{"indexed":false,"name":"message","type":"string"},{"indexed":true,"name":"_from","type":"address"}],"name":"NewPublicMessage","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"}],"name":"NewTxtr","type":"event"}]

var w3 = new web3('https://rpc.goerli.mudit.blog/');
var contract_address = "0x39012AEb632B355876D5c75B46b2d40313477547";


var contract =  new w3.eth.Contract(abi, contract_address);

export default class Arts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedArt: 1
    }
  }

  //function which is called the first time the component loads
  async componentDidMount() {
    const response = await this.getPublicMessages()
    console.log('response is ',response);
    this.setState({publicMessages: {"data":response}})
  }

  //Function to get the Art Data from json
  async getPublicMessages() {
    var messages_count = 1;//await contract.methods.get_public_message_count.call();
    console.log("messages count", messages_count);
    var messages = []
    for(var index = 0; index < messages_count; index++){
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
      <div className="col-md-3">
        {

          this.state.publicMessages.data.map(message => <Panel bsStyle="info" key={message.id} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{message.message}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>{message.sender}</p>
            </Panel.Body>
          </Panel>)
        }
      </div>
    </div>)
  }

}


