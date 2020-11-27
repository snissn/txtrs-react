import React, { useState, useEffect } from "react";

import SendPublicMessage from "../SendPublicMessage";
import PublicMessages from "../PublicMessages";
import ReceivedMessages from "../ReceivedMessages";
import NewSendMessage from "../NewSendMessage";

import { web3init } from "../Web3Helper";

export default function Txtrs() {
  const [networkName, setNetworkName] = useState("private");
  const [init, setInit] = useState(false);

  useEffect(() => {
    web3init().then((result) => {
      if (result) {
        window.w3.eth.net.getNetworkType().then((response) => {
          setNetworkName(response);
          setInit(true);
        });
      } else {
        setNetworkName("no-web3");
      }
    });
  }, []);

  // This is not used atm
  const getPublicMessages = async () => {
    let messages = [];
    return messages;
  };

  if (!init) {
    return <p>Loading ...</p>;
  }
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2>Public Chat</h2>

          <SendPublicMessage />
          <PublicMessages />
        </div>
        {/*
        <div className="col">
          <h2>Encrypted Conversations</h2>
          <Conversations />
        </div>
        */}

        <div className="col">
          <h2>Outgoing Secure Messages</h2>
          <NewSendMessage />
        </div>
        <div className="col">
          <h2>Incoming Secure Messages</h2>
          <ReceivedMessages />
        </div>
      </div>
    </div>
  );
}
