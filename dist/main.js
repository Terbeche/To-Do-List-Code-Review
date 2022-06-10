"use strict";(self.webpackChunkset_up_webpack=self.webpackChunkset_up_webpack||[]).push([[179],{426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([e.id,"* {\r\n  box-sizing: border-box;\r\n  background: #ddd;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n}\r\n\r\n#title {\r\n  display: none;\r\n}\r\n\r\n.to-do-list {\r\n  background-color: white;\r\n  padding: 1rem;\r\n  margin: 2rem;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  background-color: white;\r\n}\r\n\r\n.task {\r\n  margin-bottom: 1rem;\r\n  background-color: white;\r\n  display: flex;\r\n}\r\n\r\n.task-remove {\r\n  margin-left: auto;\r\n}\r\n\r\n.task-edit {\r\n  margin-left: 2rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.task-completed {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.task-description {\r\n  background-color: white;\r\n}\r\n\r\n#to-do-add {\r\n  color: #444;\r\n}\r\n\r\n#to-do-clear {\r\n  text-align: center;\r\n}\r\n",""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},43:(e,t,n)=>{var r=n(379),o=n.n(r),a=n(795),s=n.n(a),i=n(569),c=n.n(i),l=n(565),d=n.n(l),p=n(216),u=n.n(p),m=n(589),f=n.n(m),h=n(426),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=u(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const y=document.querySelector(".to-do-list"),g=document.createElement("ul"),k=document.createElement("li");k.innerHTML="Today's To Do",k.classList.add("task"),g.appendChild(k);const b=document.createElement("input");b.type="text",b.classList.add("task"),b.id="to-do-add",b.placeholder="Add to your list...",b.innerHTML="Add to your list...",g.appendChild(b);const L=document.createElement("li");L.innerHTML="Clear all completed",L.classList.add("task"),L.id="to-do-clear";let E,x=JSON.parse(localStorage.getItem("toDoList"))||[];const T=new class{addTask=e=>(E=x.length+1,x.push({description:e,myIndex:E,completed:!1}),localStorage.setItem("toDoList",JSON.stringify(x)),{description:e,myIndex:E,completed:!1});createTask=({description:e})=>{const t=document.createElement("li");t.classList.add("task"),t.classList.add("the-task");const n=document.createElement("input");n.type="checkbox",n.id=E,n.classList.add("task-completed");const r=document.createElement("label");r.for=E,r.innerHTML=e,r.classList.add("task-description"),t.appendChild(n),t.appendChild(r);const o=document.createElement("button");o.classList.add("task-remove"),o.innerText="Remove";const a=document.createElement("button");a.classList.add("task-edit"),a.innerText="Edit",n.addEventListener("change",(t=>{if(n.checked){for(let t=0;t<x.length;t+=1)x[t].description===e&&(x[t].completed=!0);localStorage.setItem("toDoList",JSON.stringify(x))}else if(!1===n.checked){for(let t=0;t<x.length;t+=1)x[t].description===e&&(x[t].completed=!1);localStorage.setItem("toDoList",JSON.stringify(x))}})),L.addEventListener("click",(e=>{x=x.filter((e=>!1===e.completed)),localStorage.setItem("toDoList",JSON.stringify(x))})),o.onclick=function(){let t;o.parentElement.remove();for(let n=0;n<x.length;n+=1)x[n].description===e&&(t=n);x.splice(t,1);for(let e=0;e<x.length;e+=1)x[e].myIndex=e+1;localStorage.setItem("toDoList",JSON.stringify(x))},a.onclick=function(){const e=document.createElement("input");e.type="text",e.classList.add="edit-input",e.value=r.innerHTML,t.appendChild(e),e.focus(),r.style.display="none",e.addEventListener("keypress",(t=>{"Enter"===t.key&&(t.preventDefault(),x[0].description=e.value,localStorage.setItem("toDoList",JSON.stringify(x)),r.innerHTML=`${e.value}`,e.style.display="none",r.style.display="flex")}))},t.appendChild(o),t.appendChild(a),g.appendChild(t)}};x.forEach(T.createTask),b.addEventListener("keypress",(e=>{if("Enter"===e.key){e.preventDefault();const t=T.addTask(b.value);T.createTask(t),b.value=""}})),y.appendChild(g),y.appendChild(L)}},e=>{e(e.s=43)}]);