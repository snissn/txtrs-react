
import React from 'react';

import Card from 'react-bootstrap/Card'
import ecies from 'eth-ecies'
import { getContract, contract, w3, users_address, getPrivateMessage, getBlockNumber } from "./Web3Helper"
import StartConversation from "./StartConversation"

export default class Conversations extends React.Component {

  myChangeHandler = (event) => {
    this.setState({ address: event.target.value });
  }

  async mySubmitHandler(props, event) {
    event.preventDefault();
    var account = await w3.eth.getAccounts()
    const gasEstimate = await contract.methods.pm_init(props.address).estimateGas()

    var send = await contract.methods.pm_init(props.address).send({ gasPrice: 0, from: account[0], gas: gasEstimate });
    return false;
  }
  render() {
    return (
      <div>
        <div>
          <Card bsStyle="info" className="centeralign">
            <Card.Header as="h3">
              Start a new Conversation
            </Card.Header>
            <Card.Body >
              <form onSubmit={(event) => this.mySubmitHandler(this.state, event)}>
                <div>
                  <label htmlFor="address">Ethereum Address</label>
                  <input
                    type='text'
                    name='address'
                    placeholder="0xSatoshi"
                    onChange={this.myChangeHandler}
                  />
                </div>
                <div>
                  <input
                    type='submit'
                    value='Start'
                  />
                </div>
              </form>
            </Card.Body>
          </Card>



          <StartConversation />
        </div>
      </div>
    )
  }
}
