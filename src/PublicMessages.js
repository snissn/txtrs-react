import React from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import ecies from 'eth-ecies'
import StartConversationButton from './StartConversationButton'
import { w3, getContract, contract, contractws, web3init, getBlockNumber, colorHash, contrast } from "./Web3Helper"

const blendstyle = {
  color: 'white'
}

export default class PublicMessages extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      publicMessages: {
        data: []
      },
      account: ''
    };
  }

  async setUpListeners() {
    var that = this;
    contractws.events.allEvents("allEvents", {

      fromBlock: 'latest'

    }, async function (err, data) {
      console.log("event", data);
      await that.fetch();
    });
  }


  async fetch() {
    var account = await w3.eth.getAccounts()
    const response = await this.getPublicMessages()
    this.setState({ publicMessages: { "data": response }, account: account })
  }

  async componentDidMount() {
    await this.fetch()
    await this.setUpListeners();
  }

  async getPublicMessages() {
    var messages_count = await contractws.methods.get_public_message_count().call();
    var messages = []
    for (var index = messages_count - 1; index >= 0; index--) {
      var message = await contractws.methods.get_public_message_message(index).call()
      var sender = await contractws.methods.get_public_message_sender(index).call()
      messages.push({ message: message, sender: sender, id: index })
    }
    return messages;
  };


  render() {
    const elements = ['a', 'b', 'c'];
    return (
      <div>
        {
          this.state.publicMessages.data.map((message, index) => <Panel bsStyle="info" key={message.id} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{message.sender}</Panel.Title>
            </Panel.Heading>
            <Panel.Body style={{ backgroundColor: colorHash.hex(message.sender) }}>
              <p style={{ color: contrast(colorHash.hex(message.sender)) }}>
                {message.message}</p>
              <div> <StartConversationButton address={message.sender} /></div>
            </Panel.Body>
          </Panel>)

        }
      </div>
    )


  }
}
