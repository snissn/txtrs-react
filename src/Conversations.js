
import React from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import ecies from 'eth-ecies'
import {getContract, contract, w3, users_address, getPrivateMessage, getBlockNumber } from "./Web3Helper"
import StartConversation from "./StartConversation"

export default class Conversations extends React.Component {
  render(){
  return (
    <div>
    <div>
      <h4>Start a new conversation</h4>

          <Panel bsStyle="info" className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">
          Start a new Conversation

						</Panel.Title>
            </Panel.Heading>
            <Panel.Body >
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
              <div>
                <input
                  type='submit'
                  value='Start'
                />
              </div>
              </form>
            </Panel.Body>
          </Panel>



      <StartConversation/>
    </div>
    </div>
  )
  }
}
