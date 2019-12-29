import Web3 from 'web3'


import abi from './abi_txtrs.json'
import abi_private_message from './abi_private_message.json'
console.log(abi_private_message);

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");
export var w3 = new Web3(window.ethereum);
var contract_address = "0x30bd9D63482bAcf849859A71863DbBe12B079Cd2";
  
export var users_address;

window.w3 = w3;

export const  contract =  new w3.eth.Contract(abi, contract_address);

var privateKey = w3.utils.randomHex(32)
var onetime_account = w3.eth.accounts.create(privateKey);
console.log('onetimeaccount',onetime_account.privateKey)
const ephemPrivKey = ec.keyFromPrivate(privateKey);
const ephemPubKey = ephemPrivKey.getPublic();
console.log('keys',ephemPrivKey, ephemPubKey);
const ephemPubKeyEncoded = Buffer.from(ephemPubKey.encode());

var bob_x = ephemPubKeyEncoded.slice(1,33)
var bob_y = ephemPubKeyEncoded.slice(33, 65)
console.log('pubkey',ephemPubKeyEncoded) // 65 bytes ship to blockchain for Bob's key
console.log('bob keys',bob_x, bob_y) // 65 bytes ship to blockchain for Bob's key




export function getContract(){
  return contract; 
}
export function getPrivateMessage(addr){
	return  new w3.eth.Contract(abi_private_message, addr);
}
export function getBlockNumber(addr){
	return  new w3.eth.getBlockNumber();
}

export async function web3init(){
  await window.ethereum.enable();//'https://rpc.goerli.mudit.blog/');
  var account = await  w3.eth.getAccounts()
  contract.options.from=account[0]
	users_address = account[0];
}

