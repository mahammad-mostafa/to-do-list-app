(()=>{"use strict";var e={516:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),o=n.n(r),i=n(645),s=n.n(i),c=n(667),a=n.n(c),l=new URL(n(211),n.b),d=s()(o()),p=a()(l);d.push([e.id,`@font-face {\n  font-family: 'icons';\n  src: url(${p}) format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^="icon-"],\n[class*=" icon-"] {\n  font-family: 'icons', serif !important;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-refresh::before {\n  content: "\\e900";\n}\n\n.icon-enter::before {\n  content: "\\e901";\n}\n\n.icon-drag::before {\n  content: "\\e902";\n}\n\n.icon-done::before {\n  content: "\\e903";\n}\n\n.icon-remove::before {\n  content: "\\e904";\n}\n`,""]);const u=d},426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),s=n.n(i)()(o());s.push([e.id,":root {\n  --text-color: #333;\n  --accent-color: #999;\n  --primary-color: #ddd;\n  --secondary-color: #eee;\n  --bright-color: #fff;\n  --done-color: #090;\n}\n\nhtml,\nbody,\nform,\nh1,\nul,\np {\n  font-size: inherit;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  font: 16px tahoma, serif;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-color);\n}\n\nbutton {\n  font-size: inherit;\n  background: none;\n  border: 0;\n}\n\ninput[type=text] {\n  flex-grow: 1;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  background-color: transparent;\n  border: 0;\n  outline: 0;\n}\n\n.selected {\n  background-color: var(--secondary-color) !important;\n}\n\n.completed {\n  color: var(--accent-color);\n  text-decoration: line-through;\n}\n\n.section {\n  width: 100%;\n  max-width: 500px;\n  margin: 10px;\n  background-color: var(--bright-color);\n  box-shadow: 0 0 10px var(--primary-color);\n}\n\n.section-heading {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  line-height: 50px;\n  padding: 0 15px;\n}\n\n.section-heading button,\n.section-form button,\n.section-list button {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  padding: 0;\n  color: var(--accent-color);\n}\n\n.section-heading button:hover,\n.section-form button:hover,\n.section-list button:hover {\n  color: var(--text-color);\n}\n\n.section-form {\n  height: 50px;\n  padding: 0 15px;\n  display: flex;\n  align-items: center;\n  border-top: 1px solid var(--primary-color);\n  border-bottom: 1px solid var(--primary-color);\n}\n\n.section-form input {\n  font-style: italic;\n}\n\n.section-list {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--secondary-color);\n  border-radius: 1px;\n}\n\n.section-list li {\n  height: 50px;\n  display: flex;\n  gap: 10px;\n  padding: 0 15px;\n  align-items: center;\n  background-color: var(--bright-color);\n  border-bottom: 1px solid var(--primary-color);\n}\n\n.section-list input[type=checkbox] {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  appearance: none;\n  border-radius: 2px;\n  border: 2px solid var(--accent-color);\n  margin: 0;\n}\n\n.section-list input[type=checkbox]:checked {\n  border: 0;\n}\n\n.section-list input[type=checkbox]:checked::after {\n  content: '\\e903';\n  font-size: initial;\n  font-family: icons, serif;\n  color: var(--done-color);\n}\n\n.section-list input[type=checkbox]:hover {\n  border-color: var(--text-color);\n}\n\n.section-list .icon-drag {\n  cursor: move;\n}\n\n.section-button {\n  width: 100%;\n  height: 50px;\n  cursor: pointer;\n  color: var(--accent-color);\n  padding: 0 15px;\n  background-color: var(--primary-color);\n}\n\n.section-button:hover {\n  color: var(--text-color);\n  text-decoration: underline;\n}\n",""]);const c=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(s[a]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],c=0;c<e.length;c++){var a=e[c],l=r.base?a[0]+r.base:a[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=n(p),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var c=n(i[s]);t[c].references--}for(var a=r(e,o),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=a}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},211:(e,t,n)=>{e.exports=n.p+"icons.ttf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),s=n.n(i),c=n(565),a=n.n(c),l=n(216),d=n.n(l),p=n(589),u=n.n(p),m=n(516),h={};h.styleTagTransform=u(),h.setAttributes=a(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=n(426),g={};g.styleTagTransform=u(),g.setAttributes=a(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;class v{constructor(e,t){this.index=parseInt(e,10),this.description=t,this.completed=!1}static displayItem=e=>{const t=document.createElement("li");let n="";return e.completed?(n+='<input type="checkbox" checked/>',n+=`<input type="text" class="completed" name="completed" value="${e.description}" readonly/>`):(n+='<input type="checkbox" name="completed"/>',n+=`<input type="text" name="description" value="${e.description}" readonly/>`),n+='<button type="button" class="icon-drag"></button>',t.id=e.index,t.innerHTML=n,t};static compareTask=(e,t)=>e.index===parseInt(t,10);static isCompleted=e=>e.completed;static setIndex=(e,t)=>(e.index=parseInt(t,10),e);static updateDescription=(e,t)=>(e.description=t,e);static changeStatus=e=>(e.completed=!e.completed,e)}const b=new class{constructor(){this.items=JSON.parse(localStorage.getItem("items"))||[]}displayList=()=>{const e=new DocumentFragment;return this.items.forEach((t=>{e.appendChild(v.displayItem(t))})),e};createItem=e=>{this.items.push(new v(this.items.length+1,e)),this.storeList()};removeItem=e=>{this.items=this.items.filter(this.sortIndexes.bind(this,{counter:1,type:"task",position:e})),this.storeList()};updateDescription=(e,t)=>{const n=this.searchIndex(e);-1!==n&&v.updateDescription(this.items[n],t),this.storeList()};changeStatus=e=>{const t=this.searchIndex(e);-1!==t&&v.changeStatus(this.items[t]),this.storeList()};clearCompleted=()=>{this.items=this.items.filter(this.sortIndexes.bind(this,{counter:1,type:"status",position:null})),this.storeList()};searchIndex=e=>this.items.findIndex((t=>v.compareTask(t,e)));sortIndexes=(e,t)=>!1===this.compareItems(e.type,t,e.position)?(v.setIndex(t,e.counter),e.counter+=1,t):null;compareItems=(e,t,n=null)=>{switch(e){case"task":return v.compareTask(t,n);case"status":return v.isCompleted(t);default:return null}};storeList=()=>{localStorage.setItem("items",JSON.stringify(this.items))}},x=document.querySelector(".icon-refresh"),y=document.querySelector(".section-form"),w=document.querySelector(".section-list"),I=document.querySelector(".section-button"),k=()=>{w.innerHTML="",w.appendChild(b.displayList())},S=e=>{const t=e.target.parentNode.id;e.target.value.trim()?b.updateDescription(t,e.target.value.trim()):b.removeItem(t),e.target.removeEventListener("change",S),k()};y.addEventListener("submit",(e=>{e.preventDefault(),y.description.value&&(b.createItem(y.description.value.trim()),y.reset(),k())})),w.addEventListener("click",(e=>{const t=e.target.parentNode.id;switch(e.target.type){case"checkbox":b.changeStatus(t),k();break;case"text":e.target.removeAttribute("readonly"),e.target.addEventListener("change",S),e.target.nextSibling.className="icon-remove",e.target.parentNode.classList.add("selected"),e.target.addEventListener("blur",(e=>{setTimeout((()=>{null!==e.target&&(e.target.nextSibling.className="icon-drag",e.target.parentNode.classList.remove("selected"))}),100)}));break;case"button":"icon-remove"===e.target.className&&(b.removeItem(t),k())}})),I.addEventListener("click",(()=>{b.clearCompleted(),k()})),x.addEventListener("click",k),k()})()})();