Run a "dev chain" as follows:


./geth --dev --datadir dev-chain-dir --rpc --gasprice 0 --rpc --rpcaddr "0.0.0.0" --rpcport 80 --rpcvhosts=* --verbosity 5 --rpccorsdomain="*" --rpcapi "eth,net,web3,network,debug,txpool" --ws --wsaddr 0.0.0.0 --wsport 8546 --wsorigins "*" 




1. testing from perosn recving messages
incoming private messages event listener
2. testing for person  sending messages
outgoing check for listeners




latest todo:
almost basically have it all working!
need to refactor the Events to be inside the txtrs contract, not in the separate Private Messages contract - makes the event listener way simpler
Need to set up all of the proper event handler listeners
need to make sure the public key in receive messages is working properly so decryption actually happens
add in the final step





latest todo:

yahoo we have the encrypted message in javascript!
we need to send it and then have bob read it

then we need to do key management for bob and follow the contract for new events to update things!





create a list of all users that are online (how? require user check in every minute ? 
create sub keys that are registered that you can use to automatically send keep alive pings?)


For private encrypted messages, a new shared secret will be generated each time 


alice 
message
pub key 
secret key
half of aes key

bob
pub key 
secret key
half of aes key


alice declares that she wants to send a message to bob
alice creates a new keypair and a new secret. 
she sends a smart contract transaction with her new keypair public key and requesting bob set up a secure channel
bob sees the request and complies.
he generates a new keypair and a new secret and he sends the secret in an encrypted message into the channel encrypted to alice's public key

alice now knows bob's new pub key so she can
1) generate an aes256 encrypted version of her message using the alice + bob halves of the aes key, generate a pub key encrypted message to Bob for her half of the encrypt key

bob now attempts to decrypt the message and either sends a "message read" fial message to the blockchain or sends an error message and lets alice try again
