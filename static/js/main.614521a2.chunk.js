(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e){e.exports=[{constant:!1,inputs:[{name:"_encrypted_message",type:"string"}],name:"alice_send_encrypted_message",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_bob_public",type:"string"}],name:"bob_reply",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"encrypted_message",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"bob_finalized",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"bob_error",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_error",type:"bool"}],name:"bob_final",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"bob_public",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"stage",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"bob",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"alice",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"_alice",type:"address"},{name:"_bob",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"PrivateMessage",type:"address"},{indexed:!1,name:"alice",type:"address"},{indexed:!1,name:"bob",type:"address"}],name:"NewPrivateMessage",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"PrivateMessage",type:"address"},{indexed:!1,name:"alice",type:"address"},{indexed:!1,name:"bob",type:"address"},{indexed:!1,name:"bob_public",type:"string"}],name:"NewBobReply",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"PrivateMessage",type:"address"},{indexed:!1,name:"alice",type:"address"},{indexed:!1,name:"bob",type:"address"},{indexed:!1,name:"bob_public",type:"string"},{indexed:!1,name:"encrypted_message",type:"string"}],name:"NewAliceSendEncryptedMessage",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"PrivateMessage",type:"address"},{indexed:!1,name:"alice",type:"address"},{indexed:!1,name:"bob",type:"address"},{indexed:!1,name:"bob_error",type:"bool"}],name:"NewBobFinal",type:"event"}]},2:function(e,t,n){"use strict";(function(e){n.d(t,"h",function(){return d}),n.d(t,"g",function(){return l}),n.d(t,"b",function(){return m}),n.d(t,"e",function(){return b}),n.d(t,"d",function(){return y}),n.d(t,"f",function(){return f}),n.d(t,"c",function(){return h}),n.d(t,"a",function(){return v}),n.d(t,"i",function(){return x});var a=n(1),s=n.n(a),r=n(9),c=n(237),i=n.n(c),o=n(238),u=n(137);console.log(u);var l,p=n(47).ec,d=(new p("secp256k1"),new i.a(window.ethereum));window.w3=d;var m=new d.eth.Contract(o,"0xA1d3AC64638Fd91c8a5aFD43747749403fcC2D99");function b(e){return new d.eth.Contract(u,e)}function y(e){return new d.eth.getBlockNumber}function f(e){return g.apply(this,arguments)}function g(){return(g=Object(r.a)(s.a.mark(function t(n){var a,r,c,i,o,u,l;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=d.utils.randomHex(32),r=new p("secp256k1"),c=r.keyFromPrivate(a),i=c.getPublic(),e.from(i.encode()),o=e.from(i.encode()).toString("hex"),window.db[o]=a,console.log("window.db",window.db),window.localStorage.setItem(o,a),t.next=11,d.eth.getAccounts();case 11:return u=t.sent,t.next=14,window.ethereum.enable();case 14:return l=b(n),t.next=17,l.methods.bob_reply(o).send({gasPrice:0,from:u[0]});case 17:t.sent;case 18:case"end":return t.stop()}},t)}))).apply(this,arguments)}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128;if(void 0===e)return"#000";var n,a=function(e){if(e&&void 0!==e&&""!==e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:void 0}}(e);return void 0===a?"#000":(299*(n=a).r+587*n.g+114*n.b)/1e3>=t?"#000":"#fff"}var v=new(n(585));function x(){return w.apply(this,arguments)}function w(){return(w=Object(r.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.enable();case 2:return e.next=4,d.eth.getAccounts();case 4:t=e.sent,m.options.from=t[0],l=t[0];case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}}).call(this,n(5).Buffer)},238:function(e){e.exports=[{constant:!1,inputs:[{name:"message_text",type:"string"},{name:"recipient",type:"address"}],name:"create_message",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"username",type:"bytes32"}],name:"create_txtr",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"},{name:"addr",type:"address"}],name:"get_one_message",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"},{name:"addr",type:"address"}],name:"get_one_message_recipient",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"},{name:"addr",type:"address"}],name:"get_one_message_sender",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"},{name:"addr",type:"address"}],name:"get_one_sent_message",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"}],name:"get_public_message_address",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"get_public_message_count",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"}],name:"get_public_message_message",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"}],name:"get_public_message_sender",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"},{name:"index",type:"uint256"}],name:"get_received_message",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"get_received_messages_total",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"},{name:"index",type:"uint256"}],name:"get_sent_message",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"get_sent_messages_total",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"get_sent_user_message_total",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"pm",type:"address"},{name:"_encrypted_message",type:"string"}],name:"pm_alice_send_encrypted_message",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"pm",type:"address"},{name:"_error",type:"bool"}],name:"pm_bob_final",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"pm",type:"address"},{name:"bob_public",type:"string"}],name:"pm_bob_reply",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"bob",type:"address"}],name:"pm_init",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"message_text",type:"string"}],name:"send_public_message",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"message_addr",type:"address"},{indexed:!1,name:"message",type:"string"},{indexed:!0,name:"_from",type:"address"}],name:"NewPublicMessage",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"}],name:"NewTxtr",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"PrivateMessage",type:"address"},{indexed:!1,name:"alice",type:"address"},{indexed:!1,name:"bob",type:"address"}],name:"NewPrivateMessage",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"PrivateMessage",type:"address"},{indexed:!1,name:"alice",type:"address"},{indexed:!1,name:"bob",type:"address"},{indexed:!1,name:"bob_public",type:"string"}],name:"NewBobReply2",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"PrivateMessage",type:"address"},{indexed:!1,name:"alice",type:"address"},{indexed:!1,name:"bob",type:"address"},{indexed:!1,name:"bob_public",type:"string"},{indexed:!1,name:"encrypted_message",type:"string"}],name:"NewAliceSendEncryptedMessage",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"PrivateMessage",type:"address"},{indexed:!1,name:"alice",type:"address"},{indexed:!1,name:"bob",type:"address"},{indexed:!1,name:"bob_error",type:"bool"}],name:"NewBobFinal",type:"event"},{constant:!0,inputs:[{name:"",type:"address"}],name:"txtrs",outputs:[{name:"name",type:"bytes32"},{name:"owner",type:"address"},{name:"exists",type:"bool"}],payable:!1,stateMutability:"view",type:"function"}]},239:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return w});var a=n(1),s=n.n(a),r=n(9),c=n(12),i=n(11),o=n(13),u=n(14),l=n(15),p=n(0),d=n.n(p),m=n(7),b=n.n(m),y=n(35),f=n.n(y),g=n(2),h=n(240),v=n(241);window.db={},window.rec_state={};var x=n(47).ec,w=function(t){function n(e){var t;return Object(c.a)(this,n),(t=Object(o.a)(this,Object(u.a)(n).call(this,e))).state={receivedMessages:[],errormessage:"",keys:{},message:void 0},t}return Object(l.a)(n,t),Object(i.a)(n,[{key:"fetch",value:function(){var e=Object(r.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPrivateMessages();case 2:t=e.sent,this.setState({receivedMessages:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(r.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setUpListeners();case 2:return e.next=4,this.fetch();case 4:window.rec_state=this.state;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setUpListeners",value:function(){var e=Object(r.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.d)();case 2:e.sent,t=this,g.b.events.allEvents("allEvents",{fromBlock:"latest"},function(){var e=Object(r.a)(s.a.mark(function e(n,a){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("event",a),e.next=3,t.fetch();case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPrivateMessages",value:function(){var t=Object(r.a)(s.a.mark(function t(){var n,a,r,c,i,o,u,l,p,d,m,b,y,h,v,w,_;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.b.methods.get_received_messages_total(g.g).call();case 2:n=t.sent,a=[],r=n-1;case 5:if(!(r>=0)){t.next=33;break}return t.next=8,g.b.methods.get_received_message(g.g,r).call();case 8:return c=t.sent,i=Object(g.e)(c),t.next=12,i.methods.stage().call();case 12:return o=t.sent,u="",t.next=16,i.methods.alice().call();case 16:return l=t.sent,t.next=19,i.methods.bob().call();case 19:return p=t.sent,t.next=22,i.methods.bob_public().call();case 22:return d=t.sent,t.next=25,i.methods.encrypted_message().call();case 25:if(m=t.sent,"3"==o&&(b=new x("secp256k1"),y=e.from(d,"hex").toString("hex"),console.log("should be same kesy bob",d,y),h=window.localStorage[y])){v=e.from(y.slice(2),"hex"),f.a.encrypt(v,"test"),w=b.keyFromPrivate(h);try{u=f.a.decrypt(w,e.from(m,"hex")).toString()}catch(s){console.log(s)}console.log("plaintext2",u)}_={plaintext:u,stage:o,alice:l,bob:p,id:r,address:c,encrypted_message:m,bob_public:d},a.push(_);case 30:r--,t.next=5;break;case 33:return t.abrupt("return",a);case 34:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return d.a.createElement("div",null,this.state.receivedMessages.map(function(e){return d.a.createElement(b.a,{bsStyle:"info",key:e.id,className:"centeralign"},d.a.createElement(b.a.Heading,null,d.a.createElement(b.a.Title,{componentClass:"h3"},function(){switch(e.stage){case"1":return"Incoming Conversation request";case"2":return"Waiting on recieving encrypted message ";case"3":return"Encrypted Message received";case"4":return"Encrypted Message received and status = Read";default:return"unknown stage "}}())),d.a.createElement(b.a.Body,{style:{backgroundColor:g.a.hex(e.alice),color:Object(g.c)(g.a.hex(e.alice))}},d.a.createElement("p",null,function(){switch(e.stage){case"1":return"incoming message request from "+e.alice;case"2":return"Waiting on an encrypted message from "+e.alice;case"3":return"Secure message from "+e.alice;default:return e.alice}}()),d.a.createElement(h.a,{account:e.address,stage:e.stage}),d.a.createElement(v.a,{message:e})))}))}}]),n}(d.a.Component)}).call(this,n(5).Buffer)},240:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(12),s=n(11),r=n(13),c=n(14),i=n(15),o=n(0),u=n.n(o),l=n(2),p=(n(27),n(35),function(e){function t(e){return Object(a.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){console.log(e.account);var t=Object(l.e)(e.account);console.log(t),Object(l.f)(e.account)}},{key:"render",value:function(){var e=this;return 1==this.props.stage?u.a.createElement("div",null,u.a.createElement("p",null,this.props.account),u.a.createElement("input",{type:"button",style:{color:"black"},value:"Accept Conversation",onClick:function(t){return e.handleClick(e.props)}})):u.a.createElement(u.a.Fragment,null)}}]),t}(u.a.Component))},241:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(12),s=n(11),r=n(13),c=n(14),i=n(15),o=n(0),u=n.n(o),l=(n(2),n(27),n(35),function(e){function t(e){return Object(a.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return 3==this.props.message.stage?u.a.createElement("div",null,u.a.createElement("p",null,this.props.message.plaintext)):u.a.createElement(u.a.Fragment,null)}}]),t}(u.a.Component))},242:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return h});n(48);var a=n(1),s=n.n(a),r=n(9),c=n(12),i=n(11),o=n(13),u=n(14),l=n(15),p=n(49),d=n(0),m=n.n(d),b=n(7),y=n.n(b),f=n(2),g=(n(27),n(35)),h=function(t){function n(t){var a;return Object(c.a)(this,n),(a=Object(o.a)(this,Object(u.a)(n).call(this,t))).onSendSecretMessage=function(){var t=Object(r.a)(s.a.mark(function t(n){var r,c,i,o,u;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=Object(f.e)(a.state.message.address),c=a.state.message.bob_public,i=e.from(c.slice(2),"hex"),t.next=6,f.h.eth.getAccounts();case 6:return o=t.sent,u=g.encrypt(i,a.state.secret_message),t.next=10,r.methods.alice_send_encrypted_message(u.toString("hex")).send({gasPrice:0,from:o[0]});case 10:return t.sent,t.abrupt("return",!1);case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),a.myChangeHandler=function(e){a.setState({secret_message:e.target.value})},console.log("PROPS",t),a.state={message:t.message,errormessage:t.message},a.onSendSecretMessage=a.onSendSecretMessage.bind(Object(p.a)(Object(p.a)(a))),a}return Object(l.a)(n,t),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.message;return console.log("MESSAGE",e),m.a.createElement(y.a,{bsStyle:"info",key:e.id,className:"centeralign"},m.a.createElement(y.a.Heading,null,m.a.createElement(y.a.Title,{componentClass:"h3"},function(){switch(e.stage){case"1":return"Key request sent.";case"2":return"Recipient has shared one time use encryption keys with you. Time to encrypt and send the message!";case"3":return"Conversation #"+e.id;case"4":return"Encrypted Message received by "+e.bob;default:return"unknown stage "}}())),m.a.createElement(y.a.Body,{style:{backgroundColor:f.a.hex(e.bob),color:Object(f.c)(f.a.hex(e.bob))}},m.a.createElement("div",null,m.a.createElement("p",null,"conversation wtih"),m.a.createElement("p",null,e.bob),m.a.createElement("p",null,e.id," total messages"))))}}]),n}(m.a.Component)}).call(this,n(5).Buffer)},246:function(e,t,n){e.exports=n(588)},251:function(e,t,n){},253:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},254:function(e,t,n){},376:function(e,t){},401:function(e,t){},403:function(e,t){},446:function(e,t){},448:function(e,t){},477:function(e,t){},588:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(27),c=n.n(r),i=(n(251),n(12)),o=n(11),u=n(13),l=n(14),p=n(15),d=(n(253),n(254),n(1)),m=n.n(d),b=n(9),y=n(7),f=n.n(y),g=n(236),h=n.n(g),v=(a.Component,n(48)),x=n(2),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).mySubmitHandler=function(){var e=Object(b.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x.h.eth.getAccounts();case 3:return e.sent,e.next=6,x.b.methods.send_public_message(n.state.message).send();case 6:return e.sent,e.abrupt("return",!1);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.myChangeHandler=function(e){var t=e.target.name,a=e.target.value,r="";"message"===t&&""==a&&(r=s.a.createElement("strong",null,"Your message can't be blank")),n.setState({errormessage:r}),n.setState(Object(v.a)({},t,a))},n.state={message:"",errormessage:"",account:""},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.h.eth.getAccounts();case 2:t=e.sent,this.setState({account:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement(f.a,{bsStyle:"info",className:"centeralign"},s.a.createElement(f.a.Heading,null,s.a.createElement(f.a.Title,{componentClass:"h3"},"Send Public Message")),s.a.createElement(f.a.Body,{style:{backgroundColor:x.a.hex(this.state.account)}},s.a.createElement("form",{onSubmit:this.mySubmitHandler},s.a.createElement("input",{type:"text",name:"message",onChange:this.myChangeHandler}),s.a.createElement("input",{type:"submit",value:"Share"}),this.state.errormessage)))}}]),t}(s.a.Component),_=(n(35),n(35),function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){var e=Object(b.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.h.eth.getAccounts();case 2:return n=e.sent,e.next=5,x.b.methods.pm_init(this.props.address).send({gasPrice:0,from:n[0]});case 5:return e.sent,e.abrupt("return",!1);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("p",null,this.props.account),s.a.createElement("input",{type:"button",value:"Start a secret conversation",onClick:function(t){return e.handleClick(e.props)}}))}}]),t}(s.a.Component)),E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={publicMessages:{data:[]},account:""},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"setUpListeners",value:function(){var e=Object(b.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.d)();case 2:e.sent,t=this,x.b.events.allEvents("allEvents",{fromBlock:"latest"},function(){var e=Object(b.a)(m.a.mark(function e(n,a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("event",a),e.next=3,t.fetch();case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetch",value:function(){var e=Object(b.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.h.eth.getAccounts();case 2:return t=e.sent,e.next=5,this.getPublicMessages();case 5:n=e.sent,this.setState({publicMessages:{data:n},account:t});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(b.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch();case 2:return e.next=4,this.setUpListeners();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPublicMessages",value:function(){var e=Object(b.a)(m.a.mark(function e(){var t,n,a,s,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.b.methods.get_public_message_count().call();case 2:t=e.sent,n=[],a=t-1;case 5:if(!(a>=0)){e.next=16;break}return e.next=8,x.b.methods.get_public_message_message(a).call();case 8:return s=e.sent,e.next=11,x.b.methods.get_public_message_sender(a).call();case 11:r=e.sent,n.push({message:s,sender:r,id:a});case 13:a--,e.next=5;break;case 16:return e.abrupt("return",n);case 17:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",null,this.state.publicMessages.data.map(function(e,t){return s.a.createElement(f.a,{bsStyle:"info",key:e.id,className:"centeralign"},s.a.createElement(f.a.Heading,null,s.a.createElement(f.a.Title,{componentClass:"h3"},e.sender)),s.a.createElement(f.a.Body,{style:{backgroundColor:x.a.hex(e.sender)}},s.a.createElement("p",{style:{color:Object(x.c)(x.a.hex(e.sender))}},e.message),s.a.createElement("div",null," ",s.a.createElement(_,{address:e.sender}))))}))}}]),t}(s.a.Component),k=n(97),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={message:"",sentMessages:[],errormessage:"",account:""},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"setUpListeners",value:function(){var e=Object(b.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.d)();case 2:t=e.sent,n=this,x.b.events.allEvents("allEvents",{fromBlock:t,toBlock:"latest"},function(){var e=Object(b.a)(m.a.mark(function e(t,a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("LOGGING THAT EVENT PICKED UP NEWS"),e.next=3,n.getSentMessages();case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("start send private msg"),e.next=3,this.setUpListeners();case 3:return e.next=5,this.getSentMessages();case 5:t=e.sent,console.log("send messages response is ",t);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getSentMessages",value:function(){var e=Object(b.a)(m.a.mark(function e(){var t,n,a,s,r,c,i,o,u,l,p;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.h.eth.getAccounts();case 2:return t=e.sent,this.state.account=t,e.next=6,x.b.methods.get_sent_messages_total(x.g).call();case 6:n=e.sent,a=[],s=n-1;case 9:if(!(s>=0)){e.next=36;break}return e.next=12,x.b.methods.get_sent_message(x.g,s).call();case 12:return r=e.sent,c=Object(x.e)(r),e.next=16,c.methods.stage().call();case 16:return i=e.sent,e.next=19,c.methods.alice().call();case 19:return o=e.sent,e.next=22,c.methods.bob().call();case 22:if(u=e.sent,l={stage:i,alice:o,bob:u,id:s},"2"!=i){e.next=30;break}return e.next=28,c.methods.bob_public().call();case 28:p=e.sent,l.bob_public=p;case 30:l.address=r,l.id=s,a.push(l);case 33:s--,e.next=9;break;case 36:return this.setState({sentMessages:a}),e.abrupt("return",a);case 38:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",null,this.state.sentMessages.map(function(e){return s.a.createElement(k.a,{message:e,key:e.id})}))}}]),t}(s.a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h2",null,"Active Conversation here "))}}]),t}(s.a.Component),M=n(239),S=n(242),C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).mySubmitHandler=function(){var e=Object(b.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x.h.eth.getAccounts();case 3:return a=e.sent,e.next=6,x.b.methods.pm_init(n.state.address).send({gasPrice:0,from:a[0]});case 6:return e.sent,e.abrupt("return",!1);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.myChangeHandler=function(e){var t=e.target.name,a=e.target.value,r="";"message"===t&&""==a&&(r=s.a.createElement("strong",null,"Your message can't be blank")),n.setState({errormessage:r}),n.setState(Object(v.a)({},t,a))},n.state={message:"",sentMessages:[],errormessage:"",account:""},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"setUpListeners",value:function(){var e=Object(b.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.d)();case 2:t=e.sent,n=this,x.b.events.allEvents("allEvents",{fromBlock:t,toBlock:"latest"},function(){var e=Object(b.a)(m.a.mark(function e(t,a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("LOGGING THAT EVENT PICKED UP NEWS"),e.next=3,n.getSentMessages();case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("start send private msg"),e.next=3,this.setUpListeners();case 3:return e.next=5,this.getSentMessages();case 5:e.sent;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getSentMessages",value:function(){var e=Object(b.a)(m.a.mark(function e(){var t,n,a,s,r,c,i,o,u,l,p,d;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.h.eth.getAccounts();case 2:return t=e.sent,this.state.account=t,e.next=6,x.b.methods.get_sent_messages_total(x.g).call();case 6:n=e.sent,a=this.state.sentMessages,s={account:!0},r={account:!0},c=n-1;case 11:if(!(c>=0)){e.next=39;break}return e.next=14,x.b.methods.get_sent_message(x.g,c).call();case 14:return i=e.sent,o=Object(x.e)(i),e.next=18,o.methods.stage().call();case 18:return u=e.sent,e.next=21,o.methods.alice().call();case 21:return l=e.sent,e.next=24,o.methods.bob().call();case 24:if(p=e.sent,d={stage:u,alice:l,bob:p,id:c},"2"!=u){e.next=28;break}return e.abrupt("continue",36);case 28:if(d.address="address",d.id=c,!s[d.alice]||!r[d.bob]){e.next=33;break}return e.abrupt("continue",36);case 33:a.push(d),s[d.alice]=!0,r[d.bob]=!0;case 36:c--,e.next=11;break;case 39:return this.setState({sentMessages:a}),e.abrupt("return",a);case 41:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",null,this.state.sentMessages.map(function(e){return s.a.createElement(S.a,{message:e,key:e.id})}))}}]),t}(s.a.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("h4",null,"Start a new conversation"),s.a.createElement(f.a,{bsStyle:"info",className:"centeralign"},s.a.createElement(f.a.Heading,null,s.a.createElement(f.a.Title,{componentClass:"h3"},"Start a new Conversation")),s.a.createElement(f.a.Body,null,s.a.createElement("form",{onSubmit:this.mySubmitHandler},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"address"},"Ethereum Address"),s.a.createElement("input",{type:"text",name:"address",placeholder:"0xSatoshi",onChange:this.myChangeHandler})),s.a.createElement("div",null,s.a.createElement("input",{type:"submit",value:"Start"}))))),s.a.createElement(C,null)))}}]),t}(s.a.Component),P=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.i)();case 2:return e.next=4,this.getPublicMessages();case 4:t=e.sent,console.log("response is ",t),this.setState({publicMessages:{data:t}});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPublicMessages",value:function(){var e=Object(b.a)(m.a.mark(function e(){var t,n,a,s,r,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.b.methods.get_public_message_count().call();case 2:t=e.sent,console.log("messages count",t),n=[],a=0,s=t-1;case 7:if(!(s>=0)){e.next=22;break}if(5!=(a+=1)){e.next=11;break}return e.abrupt("break",22);case 11:return console.log("index is",s),e.next=14,x.b.methods.get_public_message_message(s).call();case 14:return r=e.sent,e.next=17,x.b.methods.get_public_message_sender(s).call();case 17:c=e.sent,n.push({message:r,sender:c,id:s});case 19:s--,e.next=7;break;case 22:return e.abrupt("return",n);case 23:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.publicMessages?s.a.createElement("div",{className:"addmargin"},s.a.createElement("div",{className:"col-md-3"},s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement(E,null))),s.a.createElement("div",{className:"col-md-3"},s.a.createElement("div",null,s.a.createElement("h2",null,"Encrypted Conversations"),s.a.createElement(N,null))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"row"},s.a.createElement(j,null)),s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("p",null,"Send Private Message"),s.a.createElement(O,null)),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("p",null,"Incoming Private Messages"),s.a.createElement(M.a,null))))):s.a.createElement("p",null,"Loading data")}}]),t}(a.Component),A=n(591),B=n(592),H=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log("Host URL"),s.a.createElement(A.a,{basename:""},s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("h1",{className:"App-title"},"Txt.rs.2.2"),s.a.createElement("h3",{className:"App-subtitle"},"Connect ",s.a.createElement("a",{href:"http://metamask.io",target:"_blank"},"Metamask.io")," to the MaticV3 testnet"),s.a.createElement("h4",{className:"App-subtitle"}," https://testnetv3.matic.network/ ")),s.a.createElement(B.a,{exact:!0,path:"/",component:P})))}}]),t}(a.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(s.a.createElement(H,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");T?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):D(e)})}}()},97:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return h});n(48);var a=n(1),s=n.n(a),r=n(9),c=n(12),i=n(11),o=n(13),u=n(14),l=n(15),p=n(49),d=n(0),m=n.n(d),b=n(7),y=n.n(b),f=n(2),g=(n(27),n(35)),h=function(t){function n(t){var a;return Object(c.a)(this,n),(a=Object(o.a)(this,Object(u.a)(n).call(this,t))).onSendSecretMessage=function(){var t=Object(r.a)(s.a.mark(function t(n){var r,c,i,o,u;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=Object(f.e)(a.state.message.address),c=a.state.message.bob_public,i=e.from(c.slice(2),"hex"),t.next=6,f.h.eth.getAccounts();case 6:return o=t.sent,u=g.encrypt(i,a.state.secret_message),t.next=10,r.methods.alice_send_encrypted_message(u.toString("hex")).send({gasPrice:0,from:o[0]});case 10:return t.sent,t.abrupt("return",!1);case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),a.myChangeHandler=function(e){a.setState({secret_message:e.target.value})},console.log("PROPS",t),a.state={message:t.message,errormessage:t.message},a.onSendSecretMessage=a.onSendSecretMessage.bind(Object(p.a)(Object(p.a)(a))),a}return Object(l.a)(n,t),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.message;return console.log("MESSAGE",e),m.a.createElement(y.a,{bsStyle:"info",key:e.id,className:"centeralign"},m.a.createElement(y.a.Heading,null,m.a.createElement(y.a.Title,{componentClass:"h3"},function(){switch(e.stage){case"1":return"Key request sent.";case"2":return"Encrypted Channel";case"3":return"Encrypted Message sent to "+e.bob;case"4":return"Encrypted Message received by "+e.bob;default:return"unknown stage "}}())),m.a.createElement(y.a.Body,{style:{backgroundColor:f.a.hex(e.bob),color:Object(f.c)(f.a.hex(e.bob))}},this.renderForm(e)))}},{key:"renderForm",value:function(e){return"2"==e.stage?m.a.createElement("form",{onSubmit:this.onSendSecretMessage},m.a.createElement("label",{htmlFor:"Receiver"},"Receiver"),m.a.createElement("div",{name:"Receiver"},e.bob),m.a.createElement("label",{htmlFor:"message"},"Secret Message"),m.a.createElement("input",{type:"text",name:"message",placeholder:"Secret Message",value:this.state.secret_message,onChange:this.myChangeHandler}),m.a.createElement("input",{type:"submit"})):"1"==e.stage?m.a.createElement("span",null,"Conversation with ",e.bob," requsted "):m.a.createElement("span",null,"Message Sent")}}]),n}(m.a.Component)}).call(this,n(5).Buffer)}},[[246,2,1]]]);
//# sourceMappingURL=main.614521a2.chunk.js.map