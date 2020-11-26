import React from 'react';
import ecies from 'eth-ecies'
import StartConversationButton from './StartConversationButton'
import { w3, getContract, contract, contractws, web3init, getBlockNumber, colorHash, contrast } from "./Web3Helper"
import BlockiesIdenticon from "./BlockiesIdenticon"
import Media from 'react-bootstrap/Media'


import Spinner from 'react-bootstrap/Spinner'
const blockies = require('ethereum-blockies-png')

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
    if (this.state.publicMessages.data.length == 0) {
      return <div>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>

      </div>
    }

    return (
      <div className="container-fluid">
        {
          this.state.publicMessages.data.map((message, index) =>
            <div className="container-fluid">

              <Media>


                <img
                  width={64}
                  height={64}

                  className="mr-3"
                  src={blockies.createDataURL({ seed: message.sender })}
                />




                <Media.Body>
                  <h5>               {message.sender}</h5>

                  <p>
                    {message.message}
                  </p>
                  <StartConversationButton address={message.sender} />
                </Media.Body>
              </Media>
            </div>

          )
        }
      </div>
    )


  }
}
