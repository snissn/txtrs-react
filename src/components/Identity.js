import React, { Component, useState, useEffect } from "react";
import { w3 } from "../helpers/Web3Helper";
const blockies = require("ethereum-blockies-png");

export default function Identity() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      var x = await w3.eth.getAccounts();
      setAccount(x);
      // ...
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  if (!account) {
    return <div />;
  }
  return (
    <div>
      <img
        className="bd-placeholder-img mr-2 rounded-circle"
        width="45"
        height="45"
        src={blockies.createDataURL({ seed: account[0] })}
      />
      <strong>{account[0]}</strong>
    </div>
  );
}
