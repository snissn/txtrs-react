import Web3 from 'web3'


import abi from './abi_txtrs.json'
import abi_private_message from './abi_private_message.json'
console.log(abi_private_message);

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");
export var w3 = new Web3(window.ethereum);
var contract_address = "0xA8ADF136F81AD056448ec5Be5BAED18c8a785fBa";
  
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

export async function private_message_bob_stage_2(private_message_addr){

  var privateKey = w3.utils.randomHex(32)
  const ec = new EC("secp256k1");
  const ephemPrivKey = ec.keyFromPrivate(privateKey);
  const ephemPubKey = ephemPrivKey.getPublic();
  const ephemPubKeyEncoded = Buffer.from(ephemPubKey.encode());
  const pub_key_readable = Buffer.from(ephemPubKey.encode()).toString('hex')


  window.db[pub_key_readable] = privateKey
  console.log('window.db',window.db);
  window.localStorage.setItem(pub_key_readable, privateKey);
  

  var accounts = await  w3.eth.getAccounts()
  await window.ethereum.enable()
  var private_message = getPrivateMessage(private_message_addr)
  var send = await private_message.methods.bob_reply(pub_key_readable).send({gasPrice:0,from:accounts[0]})

}
export async function web3init(){
  await window.ethereum.enable();//'https://rpc.goerli.mudit.blog/');
  var account = await  w3.eth.getAccounts()
  contract.options.from=account[0]
	users_address = account[0];
}

