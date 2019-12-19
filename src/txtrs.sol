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
    
    function get_user_message_total(address addr) public returns (uint256) {
        return txtrs[addr].all_received_messages.length;
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


