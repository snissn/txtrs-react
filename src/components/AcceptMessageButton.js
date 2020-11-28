import React from "react";
import { private_message_bob_stage_2 } from "../helpers/Web3Helper";

export default function AcceptMessageButton({ account, stage }) {
  const handleClick = (account) => {
    private_message_bob_stage_2(account);
  };

  if (stage == 1) {
    return (
      <div>
        <p>{account}</p>
        <input
          type="button"
          style={{ color: "black" }}
          value="Accept Conversation"
          onClick={() => handleClick(account)}
        />
      </div>
    );
  }

  return null;
}
