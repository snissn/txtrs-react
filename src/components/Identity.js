import React, { Component, useState, useEffect } from "react";
import { w3 } from "../helpers/Web3Helper";

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
  return <div>{account[0]}</div>;
}
