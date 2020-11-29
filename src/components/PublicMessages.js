import React from "react";
import StartConversationButton from "../StartConversationButton";
import { w3, contractws } from "../helpers/Web3Helper";
import Media from "react-bootstrap/Media";
import EllipsisWithTooltip from "react-ellipsis-with-tooltip";

const blockies = require("ethereum-blockies-png");

export default class PublicMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      publicMessages: {
        data: [],
      },
      account: "",
    };
  }

  async setUpListeners() {
    var that = this;
    contractws.events.allEvents(
      "allEvents",
      {
        fromBlock: "latest",
      },
      async function(err, data) {
        console.log("event", data);
        await that.fetch();
      }
    );
  }

  async fetch() {
    var account = await w3.eth.getAccounts();
    const response = await this.getPublicMessages();
    this.setState({ publicMessages: { data: response }, account: account });
  }

  async componentDidMount() {
    await this.fetch();
    await this.setUpListeners();
  }

  async getPublicMessages() {
    var messages_count = await contractws.methods
      .get_public_message_count()
      .call();
    var messages = [];
    for (
      var index = messages_count - 1;
      index >= Math.max(0, messages_count - 10);
      index--
    ) {
      var message = await contractws.methods
        .get_public_message_message(index)
        .call();
      var sender = await contractws.methods
        .get_public_message_sender(index)
        .call();
      messages.push({ message: message, sender: sender, id: index });
    }
    return messages;
  }

  render() {
    if (this.state.publicMessages.data.length == 0) {
      return (
        <div>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        {this.state.publicMessages.data.map((message, index) => (
          <div className="container-fluid">
            <Media>
              <Media.Body>
                <div className="media text-left text-muted pt-3">
                  <img
                    className="bd-placeholder-img mr-2 rounded-circle"
                    width="45"
                    height="45"
                    src={blockies.createDataURL({ seed: message.sender })}
                  />
                  <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <strong className="d-block text-secondary">
                      <EllipsisWithTooltip placement="bottom">
                        @{message.sender}
                      </EllipsisWithTooltip>
                    </strong>
                    {message.message}
                  </p>
                  <div class="col-sm-2">
                    <StartConversationButton address={message.sender} />
                  </div>
                </div>
              </Media.Body>
            </Media>
          </div>
        ))}
      </div>
    );
  }
}
