import Web3 from "web3";

import abi from "../abi_txtrs.json";
import abi_private_message from "../abi_private_message.json";
const SignerProvider = require("ethjs-provider-signer");
const sign = require("ethjs-signer").sign;
const Eth = require("ethjs-query");

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

export var w3 = new Web3();

/*
const privateKey = 'e0f34403.................................29c8c861937';

*/

export var w3ws = new Web3("wss://chain.txt.rs:443");

var me = w3ws.eth.accounts.wallet.create(1)[0];
const address = me.address;
const privateKey = me.privateKey;

const account = w3.eth.accounts.privateKeyToAccount(privateKey);

export var localprovider = new SignerProvider("https://chain.txt.rs:443", {
  signTransaction: (rawTx, cb) => cb(null, sign(rawTx, privateKey)),
  accounts: (cb) => cb(null, [address]),
});
w3.setProvider(localprovider);

w3.eth.accounts.wallet.add(account);
w3.eth.defaultAccount = account.address;

w3.eth.getAccounts().then(function(a) {
  console.log("AOKNOW", a);
});
/*
export var localprovider = new SignerProvider('wss://chain.txt.rs:443', {
  signTransaction: (rawTx, cb) => cb(null, sign(rawTx, '0x...privateKey...')),
  accounts: (cb) => cb(null, ['0x407d73d8a49eeb85d32cf465507dd71d507100c1']),
});
export var w3 = new Web3(localprovider);

*/

console.log("W3", w3);

//export var w3ws = w3;// new Web3("wss://chain.txt.rs:443");
if (!!!window.ethereum) {
  //  w3 = w3ws
}
var contract_address = "0x6954fd4298F36FE38f254CF6789ebF755bb0035E";
var contract_address = "0x6954fd4298F36FE38f254CF6789ebF755bb0035E";
export var users_address;

window.w3 = w3;

export const contract = new w3.eth.Contract(abi, contract_address);
export const contractws = new w3ws.eth.Contract(abi, contract_address);

export function getContract() {
  return contract;
}
export function getPrivateMessageWS(addr) {
  return new w3ws.eth.Contract(abi_private_message, addr);
}
export function getPrivateMessage(addr) {
  return new w3.eth.Contract(abi_private_message, addr);
}
export function getBlockNumber(addr) {
  return new w3.eth.getBlockNumber();
}

export async function getSentMessages() {
  var account = await w3.eth.getAccounts();
  var messages_count = await contractws.methods
    .get_sent_messages_total(users_address)
    .call();
  var messages = [];
  for (var index = messages_count - 1; index >= 0; index--) {
    var private_message_addr = await contractws.methods
      .get_sent_message(users_address, index)
      .call();
    var private_message = getPrivateMessageWS(private_message_addr);
    var alice = await private_message.methods.alice().call();
    var bob = await private_message.methods.bob().call();
    var stage = await private_message.methods.stage().call();
    var message = { stage: stage, alice: alice, bob: bob, id: index };

    if (stage == 1) {
    }
    if (stage == "2") {
      var bob_public = await private_message.methods.bob_public().call();
      message["bob_public"] = bob_public;
    }
    message["address"] = private_message_addr;
    message["id"] = index;
    messages.push(message);
  }
  console.log("Messages", messages);
  return messages;
}

export async function private_message_bob_stage_2(private_message_addr) {
  var privateKey = w3.utils.randomHex(32);
  const ec = new EC("secp256k1");
  const ephemPrivKey = ec.keyFromPrivate(privateKey);
  const ephemPubKey = ephemPrivKey.getPublic();
  const ephemPubKeyEncoded = Buffer.from(ephemPubKey.encode());
  const pub_key_readable = Buffer.from(ephemPubKey.encode()).toString("hex");

  window.db[pub_key_readable] = privateKey;
  window.localStorage.setItem(pub_key_readable, privateKey);

  var accounts = await w3.eth.getAccounts();

  const gasEstimate = await contract.methods
    .pm_bob_reply(private_message_addr, pub_key_readable)
    .estimateGas();

  var send = await contract.methods
    .pm_bob_reply(private_message_addr, pub_key_readable)
    .send({ gas: gasEstimate, gasPrice: 0, from: accounts[0] });
}
function hexToRgb(hex) {
  if (!hex || hex === undefined || hex === "") {
    return undefined;
  }

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : undefined;
}
function rgbToYIQ({ r, g, b }) {
  return (r * 299 + g * 587 + b * 114) / 1000;
}

export function contrast(
  colorHex: string | undefined,
  threshold: number = 128
): string {
  if (colorHex === undefined) {
    return "#000";
  }

  const rgb: RGB | undefined = hexToRgb(colorHex);

  if (rgb === undefined) {
    return "#000";
  }

  return rgbToYIQ(rgb) >= threshold ? "#000" : "#fff";
}

var ColorHash = require("color-hash");
export var colorHash = new ColorHash();

export async function web3init() {
  if (!!window.ethereum) {
    // XXX if you want to re enable metamask run this next line:
    //  await window.ethereum.enable(); //'https://rpc.goerli.mudit.blog/');
  }

  var me = w3.eth.accounts.wallet.create(1)[0]["address"];
  console.log("default account", w3.eth.defaultAccount);
  console.log("me account", me);
  w3.eth.defaultAccount = me;
  console.log("default account", w3.eth.defaultAccount);
  var account = await w3.eth.getAccounts();
  console.log(account[0]);
  contract.options.from = account[0];
  users_address = account[0];
  return true;
}
