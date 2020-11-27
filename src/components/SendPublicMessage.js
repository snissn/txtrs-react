import React from "react";
import Card from "react-bootstrap/Card";

import {
  getContract,
  contract,
  w3,
  colorHash,
  contrast,
} from "../helpers/Web3Helper";

export default class SendPublicMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      errormessage: "",
      account: "",
    };
  }
  async componentDidMount() {
    var account = await w3.eth.getAccounts();
    this.setState({ account: account });
  }
  mySubmitHandler = async (event) => {
    event.preventDefault();
    var account = await w3.eth.getAccounts();
    console.log("");

    const gasEstimate = await contract.methods
      .send_public_message(this.state.message)
      .estimateGas();

    var send = await contract.methods
      .send_public_message(this.state.message)
      .send({ gas: gasEstimate }); //, {from:account}).send({from:account, value:0})
    return false;
  };

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    if (nam === "message") {
      if (val == "") {
        err = <strong>Your message can't be blank</strong>;
      }
    }
    this.setState({ errormessage: err });
    this.setState({ [nam]: val });
  };
  render() {
    return (
      <div className="panel-footer">
        <form onSubmit={this.mySubmitHandler}>
          <div className="input-group">
            <input
              autocomplete="off"
              className="form-control input-sm"
              placeholder="Type your message here..."
              type="text"
              name="message"
              onChange={this.myChangeHandler}
            />
            <span className="input-group-btn">
              <input
                className="btn btn-warning btn-sm"
                style={{ fontSize: 19 }}
                type="submit"
                value="Share"
              />
            </span>
            {this.state.errormessage}
          </div>
        </form>
      </div>
    );
  }
}
