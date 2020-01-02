import Web3 from 'web3'


import abi from './abi_txtrs.json'
import abi_private_message from './abi_private_message.json'
console.log(abi_private_message);

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");
export var w3 = new Web3(window.ethereum);
var contract_address = "0x96a375eb89230e1fdb9e721e86aed67629faa40c";
  
export var users_address;

window.w3 = w3;

export const  contract =  new w3.eth.Contract(abi, contract_address);

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

