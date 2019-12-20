import Web3 from 'web3'

var abi = [{"constant":false,"inputs":[{"name":"message_text","type":"string"},{"name":"recipient","type":"address"}],"name":"create_message","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"username","type":"bytes32"}],"name":"create_txtr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"},{"name":"addr","type":"address"}],"name":"get_one_message_recipient","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"message_text","type":"string"}],"name":"send_public_message","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"},{"name":"addr","type":"address"}],"name":"get_one_sent_message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"get_sent_user_message_total","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"get_user_message_total","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"get_public_message_address","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"},{"name":"addr","type":"address"}],"name":"get_one_message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"txtrs","outputs":[{"name":"name","type":"bytes32"},{"name":"owner","type":"address"},{"name":"exists","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"},{"name":"addr","type":"address"}],"name":"get_one_message_sender","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"get_public_message_sender","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"get_public_message_message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"get_public_message_count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"message_addr","type":"address"},{"indexed":false,"name":"message","type":"string"},{"indexed":true,"name":"_from","type":"address"}],"name":"NewPublicMessage","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"}],"name":"NewTxtr","type":"event"}]

export var w3 = new Web3(window.ethereum);
var contract_address = "0x39012AEb632B355876D5c75B46b2d40313477547";


export const  contract =  new w3.eth.Contract(abi, contract_address);


export function getContract(){
  return contract; 
}

export async function web3init(){
  await window.ethereum.enable();//'https://rpc.goerli.mudit.blog/');
  var account = await  w3.eth.getAccounts()
  contract.options.from=account[0]
}

