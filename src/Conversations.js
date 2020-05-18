
import React from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import ecies from 'eth-ecies'
import {getContract, contract, w3, users_address, getPrivateMessage, getBlockNumber} from "./Web3Helper"
import StartConversation from "./StartConversation"

export default class Conversations extends React.Component {
  render(){
  return (
    <div>
      CONVERSATIONS 
      <StartConversation/>
    </div>
  )
  }
}
