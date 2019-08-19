(window["webpackJsonpmy-redux-app"]=window["webpackJsonpmy-redux-app"]||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,n){e.exports=n(33)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),s=n.n(i),u=(n(25),n(1)),l=n(2),o=n(4),c=n(3),d=n(5),m=n(16),p=n.n(m),h=(n(26),n(27),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).initialState={users:{id:"",name:"",surname:"",job:""}},n.state=n.initialState,n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tableDiv"},r.a.createElement("h1",null,"Hello, this is list of users "),r.a.createElement("table",{className:"table table-sm"},r.a.createElement(f,null),r.a.createElement(E,{users:this.props.users,deleteUser:this.props.deleteUser,updateCurrentEditUser:this.props.updateCurrentEditUser,updateCurrentDetailUser:this.props.updateCurrentDetailUser})))}}]),t}(a.Component)),f=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Surname")))},E=function(e){var t=e.users.map(function(t,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.surname),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.updateCurrentDetailUser(t.id)}},"detail")),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.updateCurrentEditUser(t.id)}},"edit")),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.deleteUser(t.id)}},"Delete")))});return r.a.createElement("tbody",null,t)},b=h,v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).handleChange=function(e){switch(e.target.name){case"name":n.setState({name:e.target.value});break;case"surname":n.setState({surname:e.target.value});break;default:n.setState({job:e.target.value})}},n.handleSubmit=function(e){n.setState(n.initialState),n.props.addUser(n.state)},n.initialState={name:"",surname:"",job:""},n.state=n.initialState,n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"registerDiv"},r.a.createElement("h2",null," Register: "),r.a.createElement("form",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),r.a.createElement("label",null,"Surname"),r.a.createElement("input",{type:"text",name:"surname",value:this.state.surname,onChange:this.handleChange}),r.a.createElement("label",null,"Job"),r.a.createElement("input",{type:"text",name:"job",value:this.state.job,onChange:this.handleChange}),r.a.createElement("input",{type:"button",value:"Submit",onClick:this.handleSubmit})))}}]),t}(a.Component),y=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).handleChange=function(e){"name"===e.target.name?n.setState({name:e.target.value}):n.setState({surname:e.target.value})},n.handleSubmit=function(e){n.props.updateUser({id:n.props.currentEditUser.id,name:n.state.name,surname:n.state.surname,job:n.props.job})},n.initialState={name:n.props.currentEditUser.name,surname:n.props.currentEditUser.surname},n.state=n.initialState,n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.currentEditUser.id=e.currentEditUser.id,this.setState({name:e.currentEditUser.name,surname:e.currentEditUser.surname})}},{key:"render",value:function(){return r.a.createElement("div",{className:"editDiv"},r.a.createElement("h2",null," Edit: "),r.a.createElement("form",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),r.a.createElement("label",null,"Surname"),r.a.createElement("input",{type:"text",name:"surname",value:this.state.surname,onChange:this.handleChange}),r.a.createElement("input",{type:"button",value:"Submit",onClick:this.handleSubmit})))}}]),t}(a.Component),U=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).initialState={job:"I work as a superhero",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",name:n.props.currentDetailUser.name,surname:n.props.currentDetailUser.surname},n.state=n.initialState,n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.currentDetailUser.id=e.currentDetailUser.id,this.props=e,this.setState({name:e.currentDetailUser.name,surname:e.currentDetailUser.surname})}},{key:"render",value:function(){return r.a.createElement("div",{className:"cardContainer"},r.a.createElement("h2",{className:"h2Detail"}," Detail "),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__image-container"},r.a.createElement("img",{className:"card__image",src:"https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80",alt:""})),r.a.createElement("div",{className:"card__content"},r.a.createElement("h1",{className:"card__title"},this.props.currentDetailUser.name," ",this.props.currentDetailUser.surname),r.a.createElement("p",null," id: ",this.props.currentDetailUser.id," "),r.a.createElement("p",null," ",this.state.job," "),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus quam facere illo et quisquam quia earum nesciunt porro."))))}}]),t}(a.Component),g=n(11),j="users: loadUsers",D="currentEditUser: updateUser",O="currentDetailUser: updateUser",S="updateDivIsHidden : true";function C(){return function(e){fetch("http://localhost:8888/user").then(function(e){return e.json()}).then(function(t){e({type:j,payload:{users:t}})})}}var w=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onLoadRequest()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"})),r.a.createElement(b,{users:this.props.users,deleteUser:function(t){e.props.onDeleteRequest(t)},updateCurrentEditUser:function(t){e.props.onUpdateCurrentEditUser(t)},updateCurrentDetailUser:function(t){e.props.onUpdateCurrentDetailUser(t)}}),r.a.createElement(v,{addUser:function(t){e.props.onAddRequest(t)}}),!this.props.updateDivIsHidden&&r.a.createElement(y,{currentEditUser:this.props.currentEditUser,updateUser:function(t){e.props.onUpdateRequest(t)}}),!this.props.detailDivIsHidden&&r.a.createElement(U,{currentDetailUser:this.props.currentDetailUser}))}}]),t}(a.Component),k={onLoadRequest:C,onDeleteRequest:function(e){return function(t){return fetch("http://localhost:8888/user/"+e,{method:"delete"}).then(function(e){return e.json()},t(C()))}},onAddRequest:function(e){return function(t){fetch("http://localhost:8888/user",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,surname:e.surname,job:e.job})}),t(C())}},onUpdateRequest:function(e){return function(t){fetch("http://localhost:8888/user/"+e.id,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.name,surname:e.surname})}),t({type:S,payload:{updateDivIsHidden:!0}}),t(C())}},onUpdateCurrentEditUser:function(e){return{type:D,payload:{userId:e}}},onUpdateCurrentDetailUser:function(e){return{type:O,payload:{userId:e}}}},I=Object(g.b)(function(e,t){return{users:e.users,currentDetailUser:e.currentDetailUser,currentEditUser:e.currentEditUser,detailDivIsHidden:e.detailDivIsHidden,updateDivIsHidden:e.updateDivIsHidden}},k)(w);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n(18),_=n(8),H=n(19);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(n,!0).forEach(function(t){Object(H.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var P=Object(_.c)(Object(_.a)(N.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__({trace:!0,traceLimit:25})),R=Object(_.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return x({},e,{users:t.payload.users});case D:var n=e.users.filter(function(e){return e.id===t.payload.userId})[0];return x({},e,{currentEditUser:n,updateDivIsHidden:!1});case O:return n=e.users.filter(function(e){return e.id===t.payload.userId})[0],e.currentDetailUser.id===n.id?x({},e,{detailDivIsHidden:!e.detailDivIsHidden}):x({},e,{currentDetailUser:n,detailDivIsHidden:!1});case S:return x({},e,{updateDivIsHidden:t.payload});default:return e}},{users:[{id:"",name:"",surname:""}],currentEditUser:{id:"",name:"",surname:""},currentDetailUser:{id:"",name:"",surname:""},detailDivIsHidden:!0,updateDivIsHidden:!0},P);s.a.render(r.a.createElement(g.a,{store:R},r.a.createElement(I,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.adb0def1.chunk.js.map