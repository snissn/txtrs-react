(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e){e.exports=[{constant:!1,inputs:[{name:"_encrypted_message",type:"string"}],name:"alice_send_encrypted_message",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_bob_public",type:"string"}],name:"bob_reply",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"encrypted_message",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"bob_finalized",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"bob_error",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_error",type:"bool"}],name:"bob_final",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"bob_public",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"stage",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"bob",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"alice",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"_alice",type:"address"},{name:"_bob",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"PrivateMessage",type:"address"},{indexed:!1,name:"alice",type:"address"},{indexed:!1,name:"bob",type:"address"}],name:"NewPrivateMessage",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"PrivateMessage",type:"address"},{indexed:!1,name:"alice",type:"address"},{indexed:!1,name:"bob",type:"address"},{indexed:!1,name:"bob_public",type:"string"}],name:"NewBobReply",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"PrivateMessage",type:"address"},{indexed:!1,name:"alice",type:"address"},{indexed:!1,name:"bob",type:"address"},{indexed:!1,name:"bob_public",type:"string"},{indexed:!1,name:"encrypted_message",type:"string"}],name:"NewAliceSendEncryptedMessage",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"PrivateMessage",type:"address"},{indexed:!1,name:"alice",type:"address"},{indexed:!1,name:"bob",type:"address"},{indexed:!1,name:"bob_error",type:"bool"}],name:"NewBobFinal",type:"event"}]},237:function(e){e.exports=[{constant:!1,inputs:[{name:"message_text",type:"string"},{name:"recipient",type:"address"}],name:"create_message",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"username",type:"bytes32"}],name:"create_txtr",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"},{name:"addr",type:"address"}],name:"get_one_message",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"},{name:"addr",type:"address"}],name:"get_one_message_recipient",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"},{name:"addr",type:"address"}],name:"get_one_message_sender",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"},{name:"addr",type:"address"}],name:"get_one_sent_message",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"}],name:"get_public_message_address",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"get_public_message_count",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"}],name:"get_public_message_message",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"}],name:"get_public_message_sender",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"},{name:"index",type:"uint256"}],name:"get_received_message",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"get_received_messages_total",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"},{name:"index",type:"uint256"}],name:"get_sent_message",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"get_sent_messages_total",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"get_sent_user_message_total",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"pm",type:"address"},{name:"_encrypted_message",type:"string"}],name:"pm_alice_send_encrypted_message",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"pm",type:"address"},{name:"_error",type:"bool"}],name:"pm_bob_final",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"pm",type:"address"},{name:"bob_public",type:"string"}],name:"pm_bob_reply",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"bob",type:"address"}],name:"pm_init",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"message_text",type:"string"}],name:"send_public_message",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"message_addr",type:"address"},{indexed:!1,name:"message",type:"string"},{indexed:!0,name:"_from",type:"address"}],name:"NewPublicMessage",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"}],name:"NewTxtr",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"PrivateMessage",type:"address"},{indexed:!1,name:"alice",type:"address"},{indexed:!1,name:"bob",type:"address"}],name:"NewPrivateMessage",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"PrivateMessage",type:"address"},{indexed:!1,name:"alice",type:"address"},{indexed:!1,name:"bob",type:"address"},{indexed:!1,name:"bob_public",type:"string"}],name:"NewBobReply2",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"PrivateMessage",type:"address"},{indexed:!1,name:"alice",type:"address"},{indexed:!1,name:"bob",type:"address"},{indexed:!1,name:"bob_public",type:"string"},{indexed:!1,name:"encrypted_message",type:"string"}],name:"NewAliceSendEncryptedMessage",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"PrivateMessage",type:"address"},{indexed:!1,name:"alice",type:"address"},{indexed:!1,name:"bob",type:"address"},{indexed:!1,name:"bob_error",type:"bool"}],name:"NewBobFinal",type:"event"},{constant:!0,inputs:[{name:"",type:"address"}],name:"txtrs",outputs:[{name:"name",type:"bytes32"},{name:"owner",type:"address"},{name:"exists",type:"bool"}],payable:!1,stateMutability:"view",type:"function"}]},238:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return h});var a=n(61),s=n(5),r=n.n(s),i=n(11),c=n(18),o=n(15),u=n(20),l=n(19),p=n(21),m=n(0),d=n.n(m),y=n(9),b=n.n(y),g=n(8),f=(n(60),n(94)),h=function(t){function n(t){var s;return Object(c.a)(this,n),(s=Object(u.a)(this,Object(l.a)(n).call(this,t))).onSendSecretMessage=function(){var t=Object(i.a)(r.a.mark(function t(n){var a,i,c,o,u;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=Object(g.c)(s.props.message.address),i=s.props.message.bob_public,c=e.from(i.slice(2),"hex"),t.next=6,g.e.eth.getAccounts();case 6:return o=t.sent,u=f.encrypt(c,s.state.message),t.next=10,a.methods.alice_send_encrypted_message(u.toString("hex")).send({gasPrice:0,from:o[0]});case 10:return t.sent,t.abrupt("return",!1);case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),s.myChangeHandler=function(e){var t=e.target.name,n=e.target.value,r="";"message"===t&&""==n&&(r=d.a.createElement("strong",null,"Your message can't be blank")),s.setState({errormessage:r}),s.setState(Object(a.a)({},t,n))},s.state={message:"",sentMessages:[],errormessage:""},s}return Object(p.a)(n,t),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.message;return d.a.createElement(b.a,{bsStyle:"info",key:e.id,className:"centeralign"},d.a.createElement(b.a.Heading,null,d.a.createElement(b.a.Title,{componentClass:"h3"},function(){switch(e.stage){case"1":return"Key request sent.";case"2":return"Recipient has shared one time use encryption keys with you. Time to encrypt and send the message!";case"3":return"Encrypted Message sent to "+e.bob;case"4":return"Encrypted Message received by "+e.bob;default:return"unknown stage "}}())),d.a.createElement(b.a.Body,null,d.a.createElement("p",null,e.bob),d.a.createElement("p",null,e.bob_public),this.renderForm(e)))}},{key:"renderForm",value:function(e){return"2"==e.stage?d.a.createElement("form",{onSubmit:this.onSendSecretMessage},d.a.createElement("label",{htmlFor:"message"},"Secret Message"),d.a.createElement("input",{type:"text",name:"message",placeholder:"Secret Message",onChange:this.myChangeHandler}),d.a.createElement("input",{type:"submit"})):d.a.createElement("span",null,"Message Sent")}}]),n}(d.a.Component)}).call(this,n(3).Buffer)},239:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return v});var a=n(5),s=n.n(a),r=n(11),i=n(18),c=n(15),o=n(20),u=n(19),l=n(21),p=n(0),m=n.n(p),d=n(9),y=n.n(d),b=n(94),g=n.n(b),f=n(8);window.db={},window.rec_state={};var h=n(45).ec,v=function(t){function n(e){var t;return Object(i.a)(this,n),(t=Object(o.a)(this,Object(u.a)(n).call(this,e))).state={receivedMessages:[],errormessage:"",keys:{}},t}return Object(l.a)(n,t),Object(c.a)(n,[{key:"fetch",value:function(){var e=Object(r.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPrivateMessages();case 2:t=e.sent,this.setState({receivedMessages:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(r.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setUpListeners();case 2:return e.next=4,this.fetch();case 4:window.rec_state=this.state;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"private_message_bob_stage_2",value:function(){var t=Object(r.a)(s.a.mark(function t(n){var a,r,i,c,o,u,l;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={},console.log("state2",this.state),r=f.e.utils.randomHex(32),i=new h("secp256k1"),c=i.keyFromPrivate(r),o=c.getPublic(),e.from(o.encode()),u=e.from(o.encode()).toString("hex"),u,a.bob_public=u,this.state.keys[u]=r,window.db[u]=r,console.log("window.db",window.db),window.localStorage.setItem(u,r),t.next=16,f.e.eth.getAccounts();case 16:return l=t.sent,t.next=19,window.ethereum.enable();case 19:return t.next=21,n.methods.bob_reply(u).send({gasPrice:0,from:l[0]});case 21:t.sent,console.log("state3",this.state);case 23:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"setUpListeners",value:function(){var e=Object(r.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.b)();case 2:e.sent,t=this,f.a.events.allEvents("allEvents",{fromBlock:"latest"},function(){var e=Object(r.a)(s.a.mark(function e(n,a){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("event",a),e.next=3,t.fetch();case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPrivateMessages",value:function(){var t=Object(r.a)(s.a.mark(function t(){var n,a,r,i,c,o,u,l,p,m,d,y,b,v,x,_,w;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.methods.get_received_messages_total(f.d).call();case 2:n=t.sent,a=[],r=n-1;case 5:if(!(r>=0)){t.next=36;break}return t.next=8,f.a.methods.get_received_message(f.d,r).call();case 8:return i=t.sent,c=Object(f.c)(i),t.next=12,c.methods.stage().call();case 12:return o=t.sent,u="",t.next=16,c.methods.stage().call();case 16:return o=t.sent,t.next=19,c.methods.alice().call();case 19:return l=t.sent,t.next=22,c.methods.bob().call();case 22:return p=t.sent,t.next=25,c.methods.bob_public().call();case 25:return m=t.sent,t.next=28,c.methods.encrypted_message().call();case 28:if(d=t.sent,"1"==o&&this.private_message_bob_stage_2(c),"3"==o&&(y=new h("secp256k1"),b=e.from(m,"hex").toString("hex"),console.log("should be same kesy bob",m,b),v=window.localStorage[b],console.log("pub_key_readable",b),console.log("ethPrivKey",v),console.log("encrypted_message",d),v)){x=e.from(b.slice(2),"hex"),g.a.encrypt(x,"test"),_=y.keyFromPrivate(v);try{u=g.a.decrypt(_,e.from(d,"hex")).toString()}catch(s){console.log(s)}console.log("plaintext2",u)}w={plaintext:u,stage:o,alice:l,bob:p,id:r,address:i,encrypted_message:d,bob_public:m},a.push(w);case 33:r--,t.next=5;break;case 36:return t.abrupt("return",a);case 37:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("form",{onSubmit:this.mySubmitHandler},m.a.createElement("p",null,m.a.createElement("label",{htmlFor:"address"},"Ethereum Address"),m.a.createElement("input",{type:"text",name:"address",placeholder:"0xSatoshi",onChange:this.myChangeHandler})),m.a.createElement("p",null,m.a.createElement("label",{htmlFor:"message"},"Secret Message"),m.a.createElement("input",{type:"text",name:"message",placeholder:"Secret Message",onChange:this.myChangeHandler})),m.a.createElement("input",{type:"submit"}),this.state.errormessage),m.a.createElement("p",null,"hi"),this.state.receivedMessages.map(function(e){return m.a.createElement(y.a,{bsStyle:"info",key:e.id,className:"centeralign"},m.a.createElement(y.a.Heading,null,m.a.createElement(y.a.Title,{componentClass:"h3"},function(){switch(e.stage){case"1":return"Key request sent for One Time Use Public Keys.";case"2":return"Waiting on recieving encrypted message ";case"3":return"Encrypted Message received";case"4":return"Encrypted Message received and status = Read";default:return"unknown stage "}}())),m.a.createElement(y.a.Body,null,m.a.createElement("p",null,e.alice),m.a.createElement("p",null,e.plaintext),m.a.createElement("p",null,e.encrypted_message)))}))}}]),n}(m.a.Component)}).call(this,n(3).Buffer)},242:function(e,t,n){e.exports=n(579)},247:function(e,t,n){},249:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},250:function(e,t,n){},372:function(e,t){},395:function(e,t){},397:function(e,t){},438:function(e,t){},440:function(e,t){},469:function(e,t){},579:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(60),i=n.n(r),c=(n(247),n(18)),o=n(15),u=n(20),l=n(19),p=n(21),m=(n(249),n(250),n(5)),d=n.n(m),y=n(11),b=n(9),g=n.n(b),f=n(235),h=n.n(f),v=(a.Component,n(61)),x=n(8),_=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).mySubmitHandler=function(){var e=Object(y.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x.e.eth.getAccounts();case 3:return e.sent,e.next=6,x.a.methods.send_public_message(n.state.message).send();case 6:return e.sent,e.abrupt("return",!1);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.myChangeHandler=function(e){var t=e.target.name,a=e.target.value,r="";"message"===t&&""==a&&(r=s.a.createElement("strong",null,"Your message can't be blank")),n.setState({errormessage:r}),n.setState(Object(v.a)({},t,a))},n.state={message:"",errormessage:""},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(g.a,{bsStyle:"info",className:"centeralign"},s.a.createElement(g.a.Heading,null,s.a.createElement(g.a.Title,{componentClass:"h3"},"Send Public Message")),s.a.createElement(g.a.Body,null,s.a.createElement("form",{onSubmit:this.mySubmitHandler},s.a.createElement("input",{type:"text",name:"message",onChange:this.myChangeHandler}),s.a.createElement("input",{type:"submit"}),this.state.errormessage)))}}]),t}(s.a.Component),w=n(238),E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).mySubmitHandler=function(){var e=Object(y.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x.e.eth.getAccounts();case 3:return a=e.sent,e.next=6,x.a.methods.pm_init(n.state.address).send({gasPrice:0,from:a[0]});case 6:return e.sent,e.abrupt("return",!1);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.myChangeHandler=function(e){var t=e.target.name,a=e.target.value,r="";"message"===t&&""==a&&(r=s.a.createElement("strong",null,"Your message can't be blank")),n.setState({errormessage:r}),n.setState(Object(v.a)({},t,a))},n.state={message:"",sentMessages:[],errormessage:"",account:""},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"setUpListeners",value:function(){var e=Object(y.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.b)();case 2:t=e.sent,n=this,x.a.events.allEvents("allEvents",{fromBlock:t,toBlock:"latest"},function(){var e=Object(y.a)(d.a.mark(function e(t,a){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("LOGGING THAT EVENT PICKED UP NEWS"),e.next=3,n.getSentMessages();case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("start send private msg"),e.next=3,this.setUpListeners();case 3:return e.next=5,this.getSentMessages();case 5:t=e.sent,console.log("send messages response is ",t);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getSentMessages",value:function(){var e=Object(y.a)(d.a.mark(function e(){var t,n,a,s,r,i,c,o,u,l,p;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.e.eth.getAccounts();case 2:return t=e.sent,this.state.account=t,e.next=6,x.a.methods.get_sent_messages_total(x.d).call();case 6:n=e.sent,a=[],s=n-1;case 9:if(!(s>=0)){e.next=36;break}return e.next=12,x.a.methods.get_sent_message(x.d,s).call();case 12:return r=e.sent,i=Object(x.c)(r),e.next=16,i.methods.stage().call();case 16:return c=e.sent,e.next=19,i.methods.alice().call();case 19:return o=e.sent,e.next=22,i.methods.bob().call();case 22:if(u=e.sent,l={stage:c,alice:o,bob:u,id:s},"2"!=c){e.next=29;break}return e.next=27,i.methods.bob_public().call();case 27:p=e.sent,l.bob_public=p;case 29:l.address=r,l.id=s,a.push(l);case 33:s--,e.next=9;break;case 36:return this.setState({sentMessages:a}),e.abrupt("return",a);case 38:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"hi ",this.state.account),s.a.createElement("form",{onSubmit:this.mySubmitHandler},s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"address"},"Ethereum Address"),s.a.createElement("input",{type:"text",name:"address",placeholder:"0xSatoshi",onChange:this.myChangeHandler})),s.a.createElement("input",{type:"submit"}),this.state.errormessage),s.a.createElement("div",null,this.state.sentMessages.map(function(e){return s.a.createElement(w.a,{message:e,key:e.id})})))}}]),t}(s.a.Component),M=n(239),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={selectedArt:1},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.f)();case 2:return e.next=4,this.getPublicMessages();case 4:t=e.sent,console.log("response is ",t),this.setState({publicMessages:{data:t}});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPublicMessages",value:function(){var e=Object(y.a)(d.a.mark(function e(){var t,n,a,s,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.methods.get_public_message_count().call();case 2:t=e.sent,console.log("messages count",t),n=[],a=t-1;case 6:if(!(a>=0)){e.next=18;break}return console.log("index is",a),e.next=10,x.a.methods.get_public_message_message(a).call();case 10:return s=e.sent,e.next=13,x.a.methods.get_public_message_sender(a).call();case 13:r=e.sent,n.push({message:s,sender:r,id:a});case 15:a--,e.next=6;break;case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.publicMessages?s.a.createElement("div",{className:"addmargin"},s.a.createElement("div",{className:"col-md-4"},s.a.createElement("div",null,s.a.createElement(_,null)),this.state.publicMessages.data.map(function(e){return s.a.createElement(g.a,{bsStyle:"info",key:e.id,className:"centeralign"},s.a.createElement(g.a.Heading,null,s.a.createElement(g.a.Title,{componentClass:"h3"},e.message)),s.a.createElement(g.a.Body,null,s.a.createElement("p",null,e.sender)))})),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("p",null,"Send Private Message"),s.a.createElement(E,null)),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("p",null,"Incoming Private Messages"),s.a.createElement(M.a,null))):s.a.createElement("p",null,"Loading data")}}]),t}(a.Component),O=n(583),j=n(584),S=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log("Host URL"),s.a.createElement(O.a,{basename:""},s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("h1",{className:"App-title"},"Txt.rs"),s.a.createElement("h3",{className:"App-subtitle"},"Connect ",s.a.createElement("a",{href:"http://metamask.io",target:"_blank"},"Metamask.io")," to a new network:"),s.a.createElement("h2",{className:"App-subtitle"},"http://chain.txt.rs:8545/")),s.a.createElement(j.a,{exact:!0,path:"/",component:k})))}}]),t}(a.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(s.a.createElement(S,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");C?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):N(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):N(e)})}}()},8:function(e,t,n){"use strict";n.d(t,"e",function(){return p}),n.d(t,"d",function(){return l}),n.d(t,"a",function(){return m}),n.d(t,"c",function(){return d}),n.d(t,"b",function(){return y}),n.d(t,"f",function(){return b});var a=n(5),s=n.n(a),r=n(11),i=n(236),c=n.n(i),o=n(237),u=n(135);console.log(u);new(0,n(45).ec)("secp256k1");var l,p=new c.a(window.ethereum);window.w3=p;var m=new p.eth.Contract(o,"0x96a375eb89230e1fdb9e721e86aed67629faa40c");function d(e){return new p.eth.Contract(u,e)}function y(e){return new p.eth.getBlockNumber}function b(){return g.apply(this,arguments)}function g(){return(g=Object(r.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.enable();case 2:return e.next=4,p.eth.getAccounts();case 4:t=e.sent,m.options.from=t[0],l=t[0];case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}}},[[242,2,1]]]);
//# sourceMappingURL=main.49b5d95b.chunk.js.map