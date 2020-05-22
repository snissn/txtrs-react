/**
 *Submitted for verification at Etherscan.io on 2019-12-22
*/

pragma solidity ^0.4.14;
pragma experimental ABIEncoderV2;


contract PublicMessage{

    string message;
    address sender;

    function PublicMessage(string _message, address _sender){
        message = _message;
        sender=_sender;
        
    }
    function get_message() returns (string){
        return message;
    }
    function get_message_sender() returns (address){
        return sender;
    }
}



contract PrivateMessage{

    string public encrypted_message;
    address public alice;
    address public bob;
    string public bob_public;
    uint256 public stage;

    bool public bob_finalized;
    bool public bob_error;

    event NewPrivateMessage(address PrivateMessage, address alice, address bob); 
    function PrivateMessage(address _alice, address _bob){ // initiated by alice
        //privte messages are initialized by alice along side bob's address and her one time address she created
        require(stage==0);
        require(msg.sender != _bob);
        stage=1;
        bob=_bob;
        alice = _alice;
        emit NewPrivateMessage(address(this), alice, bob);
    }
    event NewBobReply(address PrivateMessage,address alice, address bob, string bob_public);
    function bob_reply(string _bob_public) public{
        
        require(stage==1);
        stage=2;
        require(tx.origin == bob);
        bob_public=_bob_public;
        emit NewBobReply(address(this),alice, bob, bob_public);
    }
    event NewAliceSendEncryptedMessage(address PrivateMessage, address alice, address bob, string bob_public, string encrypted_message);
    function alice_send_encrypted_message (string _encrypted_message) public{
        require(stage==2);
        stage=3;
        require(tx.origin == alice);
        encrypted_message=_encrypted_message;
        emit NewAliceSendEncryptedMessage(address(this), alice, bob, bob_public,encrypted_message);
    }
    event NewBobFinal(address PrivateMessage, address alice, address bob, bool bob_error);
    function bob_final(bool _error) public{
        require(stage==3);
        stage=4;
        require(tx.origin == bob);
        bob_finalized=true;
        bob_error=_error;
        emit NewBobFinal(address(this), alice, bob, bob_error);
    }

}




contract Message{

    string message;
    address sender;
    address recipient;

    function Message(string _message, address _sender, address _recipient ){
        message = _message;
        sender=_sender;
        recipient=_recipient;
    }
    function get_message() returns (string){
        return message;
    }
    function get_message_sender() returns (address){
        return sender;
    }
    function get_message_recipient() returns (address){
        return recipient;
    }
}

contract Txtrs {


    struct Txtr {
        bytes32 name;   // short name (up to 32 bytes)
        address owner;
        address[] all_sent_messages;
        address[] all_received_messages;
        address[] all_public_messages;
        bool exists;
        
    }


    mapping(address => Txtr) public txtrs;

    address[] txtrs_list;

    address[] public_messages;
    uint256 public_messages_length;



    //todo function for changing ownership of a username
    
    //todo have Txtr be erc721 token
    

    event NewPublicMessage(address message_addr, string message, address indexed _from);
    event NewTxtr(address indexed _from);


    //private message events:

    event NewPrivateMessage(address PrivateMessage, address alice, address bob); 
    event NewBobReply2(address PrivateMessage,address alice, address bob, string bob_public);
    event NewAliceSendEncryptedMessage(address PrivateMessage, address alice, address bob, string bob_public, string encrypted_message);
    event NewBobFinal(address PrivateMessage, address alice, address bob, bool bob_error);
    
    function pm_init(address bob ) returns (address){
        address alice = msg.sender;
        address  message =  address( new PrivateMessage ({_alice:alice,_bob:bob}));
        if(!txtrs[alice].exists){
            create_txtr_on_receive(alice);
        }
        txtrs[alice].all_sent_messages.push(message);
        if(!txtrs[bob].exists){
            create_txtr_on_receive(bob);
        }
        txtrs[bob].all_received_messages.push(message);
        emit NewPrivateMessage(message, alice, bob);
        return message;
    }
    function pm_bob_reply(address pm,string bob_public){
      PrivateMessage my_pm = PrivateMessage(pm);
      my_pm.bob_reply(bob_public);
      emit NewBobReply2(pm,my_pm.alice(), my_pm.bob(),bob_public);
    }
    function pm_alice_send_encrypted_message(address pm, string _encrypted_message){
      PrivateMessage my_pm = PrivateMessage(pm);
      my_pm.alice_send_encrypted_message(_encrypted_message);
      emit NewAliceSendEncryptedMessage(pm, my_pm.alice(), my_pm.bob(),my_pm.bob_public(), _encrypted_message);
    }
    function pm_bob_final(address pm, bool _error){
      PrivateMessage my_pm = PrivateMessage(pm);
      my_pm.bob_final(_error);
      emit NewBobFinal(pm, my_pm.alice(), my_pm.bob(), _error);
    }



    function send_public_message(string message_text) returns (address){
        
        address message = address(new PublicMessage({_message:message_text, _sender:msg.sender }));
        if(!txtrs[msg.sender].exists){
            txtrs[msg.sender]=create_txtr_on_receive(msg.sender);
            emit NewTxtr(msg.sender);
        }
        txtrs[msg.sender].all_public_messages.push(message);
        public_messages.push(message);
        public_messages_length+=1;
        emit NewPublicMessage(message, message_text,msg.sender);

        return message;
        
    }
    
    function get_public_message_count() returns (uint256){
        return public_messages.length;
    }
        
    function get_public_message_address(uint256 index) returns (address){
        return public_messages[index];
    }
    function get_public_message_message(uint256 index) returns (string){
        address addr = public_messages[index];
        PublicMessage message = PublicMessage(addr);
        return message.get_message();
    }
    function get_public_message_sender(uint256 index) returns (address){
        address addr = public_messages[index];
        PublicMessage message = PublicMessage(addr);
        return message.get_message_sender();
    }
    
    function  create_txtr_on_public_message(address addr) private returns (Txtr){
        address[] storage all_sent_messages;
        address[] storage all_received_messages;
        address[] storage all_public_messages;
        txtrs_list.push(addr);
        return Txtr({name:'', owner:addr, all_sent_messages: all_sent_messages,all_received_messages:all_received_messages,all_public_messages:all_public_messages,exists:true });
    }


    function  create_txtr_on_receive(address addr) private returns (Txtr){
        address[] storage all_sent_messages;
        address[] storage all_received_messages;
        address[] storage all_public_messages;
        txtrs_list.push(addr);
        return Txtr({name:'', owner:addr, all_sent_messages: all_sent_messages,all_received_messages:all_received_messages,all_public_messages:all_public_messages,exists:true });
    }
    function    create_txtr(bytes32 username) {
       address[] storage all_sent_messages;
       address[] storage all_received_messages;
       address[] storage all_public_messages;
       txtrs[msg.sender] = Txtr({name:username, owner:msg.sender, all_sent_messages: all_sent_messages,all_received_messages:all_received_messages,all_public_messages:all_public_messages,exists:true });
       txtrs_list.push(msg.sender);
    }

    function create_message(string message_text, address recipient) returns (address){
            

        address message = address(new Message({_message:message_text, _sender:msg.sender, _recipient:recipient }));
        if(!txtrs[msg.sender].exists){
            txtrs[msg.sender]=create_txtr_on_receive(msg.sender);
        }
        txtrs[msg.sender].all_sent_messages.push(message);
        
        if(!txtrs[recipient].exists){
            txtrs[recipient]=create_txtr_on_receive(recipient);
        }
        txtrs[recipient].all_received_messages.push(message);
        return message;
    }
    
    function get_received_messages_total(address addr) public returns (uint256) {
        return txtrs[addr].all_received_messages.length;
    }
    
    
    function get_received_message(address addr, uint256 index) public returns (address) {
        return address(txtrs[addr].all_received_messages[index]);
    }    


    function get_sent_messages_total(address addr) public returns (uint256) {
        return txtrs[addr].all_sent_messages.length;
    }
    
    function get_sent_message(address addr, uint256 index) public returns (address) {
        return address(txtrs[addr].all_sent_messages[index]);
    }    


    
    
    function get_one_message(uint256 index, address addr) public returns (string) {
        address _msg =  txtrs[addr].all_received_messages[index];
        Message message = Message(_msg);
        return message.get_message();
    }
    function get_one_message_sender(uint256 index, address addr) public returns (address) {
        address _msg =  txtrs[addr].all_received_messages[index];
        Message message = Message(_msg);
        return message.get_message_sender();
    }
    function get_one_message_recipient(uint256 index, address addr) public returns (address) {
        address _msg =  txtrs[addr].all_received_messages[index];
        Message message = Message(_msg);
        return message.get_message_recipient();
    }    

    function get_sent_user_message_total(address addr) public returns (uint256) {
        return txtrs[addr].all_sent_messages.length;
    }
    function get_one_sent_message(uint256 index, address addr) public returns (string) {
        address _msg =  txtrs[addr].all_sent_messages[index];
        Message message = Message(_msg);
        return message.get_message();
    }

}


