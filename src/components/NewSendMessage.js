import React, { useState, useEffect } from "react";

import { contractws, getSentMessages } from "../helpers/Web3Helper";
import EncryptMessage from "../EncryptMessage";

export default (props) => {
  const [messages, setMessages] = useState([]);
  // why is it structured like this what is the purpose?
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
    // What is this?
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
