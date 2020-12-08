import React, { useState, useEffect } from "react";

import { contract, w3 } from "../helpers/Web3Helper";

export default function SendPublicMessage() {
  const [message, setMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [account, setAccount] = useState();
  const [sendStatus, setSendStatus] = useState();

  useEffect(() => {
    w3.eth.getAccounts().then((response) => {
      setAccount(response);
    });
  }, []);

  const mySubmitHandler = async (event) => {
    event.preventDefault();
    if (message === "") {
      setErrorMessage("Your message cannot be empty");
    } else {
      setSendStatus('Sending');
      contract.methods
        .send_public_message(message)
        .estimateGas()
        .then((gasEstimate) => {
          contract.methods
            .send_public_message(message)
            .send({ gas: gasEstimate })
            .then(() => {
                setSendStatus('');
                setMessage('');
            })
        })
    }
  };

  return (
    <div className="panel-footer">
      <form onSubmit={mySubmitHandler}>
        <div className="input-group">
          <input
            autocomplete="off"
            className="form-control input-sm"
            placeholder="Type your message here..."
            type="text"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            disabled={sendStatus === 'Sending'}
          />
          <span className="input-group-btn">
            <input
              className={sendStatus === 'Sending' ? 'btn btn-sm btn-danger' : 'btn btn-sm btn-warning'}
              style={{ fontSize: 19 }}
              type="submit"
              value={sendStatus === 'Sending' ? 'Sharing...' : "Share"}
            />
          </span>
          <br />
          {errorMessage && errorMessage}
        </div>
      </form>
    </div>
  );
}
