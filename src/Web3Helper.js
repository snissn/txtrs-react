import Web3 from 'web3'


import abi from './abi_txtrs.json'
import abi_private_message from './abi_private_message.json'
console.log(abi_private_message);

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");
export var w3 = new Web3(window.ethereum);
var contract_address = "0x6954fd4298F36FE38f254CF6789ebF755bb0035E";
  
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
  var send = await contract.methods.pm_bob_reply(private_message_addr, pub_key_readable).send({gasPrice:0,from:accounts[0]})

}
  function hexToRgb(hex) {
    if (!hex || hex === undefined || hex === '') {
      return undefined;
    }

    const result =
          /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : undefined;
  }
  function rgbToYIQ({r, g, b}) {
    return ((r * 299) + (g * 587) + (b * 114)) / 1000;
  }

export function contrast(colorHex: string | undefined,
                         threshold: number = 128): string {
    if (colorHex === undefined) {
        return '#000';
    }

    const rgb: RGB | undefined = hexToRgb(colorHex);

    if (rgb === undefined) {
        return '#000';
    }

    return rgbToYIQ(rgb) >= threshold ? '#000' : '#fff';
}

var ColorHash = require('color-hash');
export var colorHash = new ColorHash();

export async function web3init(){
  if(!window.ethereum){
    return false;
  }
  await window.ethereum.enable();//'https://rpc.goerli.mudit.blog/');
  var account = await  w3.eth.getAccounts()
  contract.options.from=account[0]
	users_address = account[0];
  return true;
}

