import React, { useState, useEffect } from "react";

import { contract, w3 } from "../helpers/Web3Helper";

export default function SendPublicMessage() {
  const [message, setMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [account, setAccount] = useState();

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
      contract.methods
        .send_public_message(message)
        .estimateGas()
        .then((gasEstimate) => {
          contract.methods
            .send_public_message(message)
            .send({ gas: gasEstimate });
        });
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
            onChange={(event) => setMessage(event.target.value)}
          />
          <span className="input-group-btn">
            <input
              className="btn btn-warning btn-sm"
              style={{ fontSize: 19 }}
              type="submit"
              value="Share"
            />
          </span>
          <br />
          {errorMessage && errorMessage}
        </div>
      </form>
    </div>
  );
}
