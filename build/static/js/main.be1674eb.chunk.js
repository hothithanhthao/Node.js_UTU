(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(42)},22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(15),u=n.n(r),i=(n(22),n(4)),l=n(5),s=n(7),c=n(6),m=n(8),h=n(2),p=n.n(h),d="https://mighty-waters-40351.herokuapp.com/api/persons",v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(f,null)}}]),t}(o.a.Component),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).addName=function(e){e.preventDefault();var t=n.state.persons.slice(),a={name:n.state.newName,number:n.state.newNumber},o=t.concat({name:n.state.newName,number:n.state.newNumber});p.a.post(d,a).then(function(e){console.log(e.data),0==n.handleCheck(n.state.newName)?n.setState({persons:o,newName:"",newNumber:""}):n.setState({persons:t,newName:"",newNumber:""})})},n.handleNameChange=function(e){console.log(e.target.value),n.setState({newName:e.target.value})},n.handleNumberChange=function(e){console.log(e.target.value),n.setState({newNumber:e.target.value})},n.handleRemove=function(e){var t="https://mighty-waters-40351.herokuapp.com/api/persons".concat(e.id);p.a.delete(t).then(function(t){n.setState(function(t){return{persons:t.persons.filter(function(t){return t.id!==e.id})}})}).catch(function(e){console.log(e)})},n.removeMovie=function(e,t){e.preventDefault(),n.handleRemove&&n.handleRemove(t)},n.state={persons:[],newName:"",newNumber:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get(d).then(function(t){e.setState({persons:t.data})})}},{key:"handleCheck",value:function(e){return this.state.persons.some(function(t){return e===t.name})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h2",null,"Puhelinluettelo"),o.a.createElement("form",{onSubmit:this.addName},o.a.createElement("div",null,"nimi: ",o.a.createElement("input",{value:this.state.newName,onChange:this.handleNameChange})),o.a.createElement("div",null,"numero: ",o.a.createElement("input",{value:this.state.newNumber,onChange:this.handleNumberChange})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"lis\xe4\xe4"))),o.a.createElement("h2",null,"Numerot"),o.a.createElement("ul",null,this.state.persons.map(function(t,n){return o.a.createElement("li",{key:n},t.name," ",t.number," ",o.a.createElement("button",{type:"submit",onClick:function(n){return e.removeMovie(n,t)}},"poista"))})))}}]),t}(o.a.Component),b=v;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.be1674eb.chunk.js.map