
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
