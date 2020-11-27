import React, { Component, useState, useEffect } from "react";

import {
  getContract,
  contract,
  contractws,
  w3,
  users_address,
  getPrivateMessage,
  getBlockNumber,
  getSentMessages,
} from "./helpers/Web3Helper";
import EncryptMessage from "./EncryptMessage";

export default (props) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    contractws.events.allEvents(
      "allEvents",
      {
        fromBlock: "latest",
      },
      async function(err, data) {
        console.log("");
        await fetch();
      }
    );

    fetch().then(function() {});
  }, []);

  async function fetch() {
    const messages = await getSentMessages();
    setMessages(messages);
  }

  return (
    <div>
      {messages.map((message) => (
        <EncryptMessage message={message} key={message.id} />
      ))}
    </div>
  );
};
