import React, { Component, useState, useEffect } from "react";


import Panel from 'react-bootstrap/lib/Panel'
import { getContract, contract, w3, users_address, getPrivateMessage, getBlockNumber, getSentMessages } from "./Web3Helper"
import EncryptMessage from './EncryptMessage'


export default (props) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        contract.events.allEvents("allEvents", {
            fromBlock: 'latest'
        }, async function (err, data) {
            console.log('')
            await fetch();
        });


        fetch().then(function () {

        })
    }, []);


    async function fetch() {
        const messages = await getSentMessages();
        setMessages(messages)
    }

    return (
        <div>
            {  messages.map((message) =>
                <EncryptMessage message={message} key={message.id} />

            )}
            <input type="submit" onClick={getSentMessages} />

            <input type="submit" value='fetch' onClick={fetch} />

        </div>
    );
};
