(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(63),r=t.n(i),c=t(139),l=t(142),o=t(141),m=t(140);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(70);var u=t(10),h=t(11),g=t(13),p=t(12),d=t(14),f=t(34),v=t.n(f),b=(t(72),t(74),t(76),function(e){function a(){return Object(u.a)(this,a),Object(g.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"message"},s.a.createElement("span",{className:"message__author"},this.props.message.userName,":"),this.props.message.message,this.props.message.imageUrl?s.a.createElement("img",{src:this.props.message.imageUrl}):"")}}]),a}(n.Component)),E=t(9),N=t.n(E),O=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(g.a)(this,Object(p.a)(a).call(this,e))).state={userName:"machin",message:"",list:[],imageUrl:""},t.messageRef=N.a.database().ref().child("messages"),t.listenMessages(),t.fileInput=s.a.createRef(),t.imgCanvas=s.a.createRef(),t}return Object(d.a)(a,e),Object(h.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.user&&this.setState({userName:e.user.displayName})}},{key:"handleChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSend",value:function(){if(this.state.message){var e={userName:this.state.userName,message:this.state.message,imageUrl:this.state.imageUrl};this.messageRef.push(e),this.setState({message:""})}}},{key:"handleImage",value:function(){var e=this;if(console.log("pas l\xe0",this.fileInput.current.files[0].name),console.log("pas l\xe0",this.fileInput),this.fileInput.current.files[0]){var a=this.fileInput.current.files[0],t=new Image;t.src=URL.createObjectURL(a),console.log("img.src == ",t.src),console.log("refcanvas == ",this.imgCanvas),t.onload=function(){console.log("img onooaded");var n=e.imgCanvas;e.imgCanvas.current.getContext("2d").drawImage(t,0,0,t.width,t.height,0,0,200,100),console.log("pouf",n),n.current.toBlob(function(t){N.a.storage().ref("images/").child(a.name).put(t).then(function(a){a.ref.getDownloadURL().then(function(a){e.state.imageUrl=a})})},"image/webp",.8)}}}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.handleSend()}},{key:"listenMessages",value:function(){var e=this;this.messageRef.limitToLast(10).on("value",function(a){e.setState({list:Object.values(a.val())})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"form"},s.a.createElement("div",{className:"form__message"},this.state.list.map(function(e,a){return s.a.createElement(b,{key:a,message:e})})),s.a.createElement("canvas",{ref:this.imgCanvas}),s.a.createElement("div",{className:"form__row"},s.a.createElement("input",{type:"file",ref:this.fileInput,onChange:this.handleImage.bind(this)}),s.a.createElement("input",{className:"form__input",type:"text",placeholder:"Type message",value:this.state.message,onChange:this.handleChange.bind(this),onKeyPress:this.handleKeyPress.bind(this)}),s.a.createElement("button",{className:"form__button",onClick:this.handleSend.bind(this)},"send")))}}]),a}(n.Component);N.a.initializeApp({apiKey:"AIzaSyALICxrbBP-GYzzLzIkt8_MXikoHkuUvDs",authDomain:"chat-room-3bdaa.firebaseapp.com",databaseURL:"https://chat-room-3bdaa.firebaseio.com",projectId:"chat-room-3bdaa",storageBucket:"chat-room-3bdaa.appspot.com",messagingSenderId:"159061712966"});var k=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(g.a)(this,Object(p.a)(a).call(this,e))).state={user:null},t}return Object(d.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.auth().onAuthStateChanged(function(a){e.setState({user:a})})}},{key:"handleSignIn",value:function(){var e=new N.a.auth.GoogleAuthProvider;N.a.auth().signInWithPopup(e)}},{key:"handleLogOut",value:function(){N.a.auth().signOut()}},{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"app__header"},s.a.createElement("img",{src:v.a,className:"app__logo",alt:"logo"}),s.a.createElement("h2",null,"CHATROOM DE L'AMOUR"),this.state.user?s.a.createElement("button",{className:"app__button",onClick:this.handleLogOut.bind(this)},"Logout"):s.a.createElement("button",{className:"app__button",onClick:this.handleSignIn.bind(this)},"Sign in")),s.a.createElement("div",{className:"app__list"},this.state.user?s.a.createElement(O,{user:this.state.user}):s.a.createElement("p",null,"disonect")))}}]),a}(n.Component),y=function(e){function a(){return Object(u.a)(this,a),Object(g.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"app__header"},s.a.createElement("img",{src:v.a,className:"app__logo",alt:"logo"}),s.a.createElement("h2",null,"PAGE DE L'AMOUR")))}}]),a}(n.Component),_=function(){return s.a.createElement("nav",{className:"navbar"},s.a.createElement("ul",{className:"navbar-list clearfix"},s.a.createElement("li",{className:"navbar-item"},s.a.createElement(c.a,{className:"navbar-link",to:"".concat("","/")},"Home")),s.a.createElement("li",{className:"navbar-item"},s.a.createElement(c.a,{className:"navbar-link",to:"".concat("","/page")},"Page"))))},j=function(){return s.a.createElement("main",{className:"container"},s.a.createElement(l.a,null,s.a.createElement(o.a,{exact:!0,path:"".concat("","/"),component:k}),s.a.createElement(o.a,{exact:!0,path:"".concat("","/page"),component:y})))};r.a.render(s.a.createElement(m.a,{basename:"/"},s.a.createElement(function(){return s.a.createElement("div",{className:""},s.a.createElement(_,null),s.a.createElement(j,null))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},34:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},65:function(e,a,t){e.exports=t(136)},70:function(e,a,t){},72:function(e,a,t){},74:function(e,a,t){},76:function(e,a,t){}},[[65,2,1]]]);
//# sourceMappingURL=main.cdf746bf.chunk.js.map