!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o,a,i,s=function(){function i(e,t,n,r,o,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.id=e,this.model=t,this.producedYear=n,this.capacity=r,this.averageSpeed=o,this.speedUnit=i.showAverageSpeed(a),this.weightUnit="kg"}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(i,[{key:"showCapacityInPounds",value:function(){switch(this.weightUnit){case"kg":this.weightUnit="lb",this.capacity=2.205*this.capacity;break;case"lb":this.weightUnit="kg",this.capacity=this.capacity/2.205}}}]),i}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}i=function(e){var t;switch(e){case"newShip":t="nm";break;case"newTruck":t="km"}return t},(a="showAverageSpeed")in(o=s)?Object.defineProperty(o,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[a]=i;var _=function(){function c(e,t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var o=arguments.length,a=new Array(2<o?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];return(r=u(this,(n=l(c)).call.apply(n,[this].concat(a)))).license=e,r.gasType=t,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(c,s),c}();function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(){function c(e,t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var o=arguments.length,a=new Array(2<o?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];return(r=d(this,(n=y(c)).call.apply(n,[this].concat(a)))).name=e,r.countOfTeam=t,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(c,s),c}();function C(e,t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,C),this.transportModel=e,this.costKg=t,this.costKm=n}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function o(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o)}return function(e,t,n){t&&m(e.prototype,t),n&&m(e,n)}(o,null,[{key:"addElements",value:function(e){for(var t=document.getElementById("addedShips"),n=document.getElementById("addedTrucks"),r=document.getElementById("addedCosts");t.hasChildNodes();)t.removeChild(t.lastChild);for(;n.hasChildNodes();)n.removeChild(n.lastChild);for(;r.hasChildNodes();)r.removeChild(r.lastChild);e[0][0].map(function(e){return o.domRender(e,t)}),e[0][1].map(function(e){return o.domRender(e,n)}),e[1].map(function(e){return o.domRender(e,r)})}},{key:"domRender",value:function(e,t){var n=document.createElement("div");n.classList.add("element"),"addedCosts"===t.id?n.innerHTML='\n        <ul class="element__list">\n            <li class="element__list-item">\n              <span>Model: </span>\n              <span>'.concat(e.transportModel,'</span>\n            </li>\n            <li class="element__list-item">\n              <span>Cost (by 1 kg): </span>\n              <span>').concat(e.costKg,'</span>\n            </li>\n            <li class="element__list-item">\n              <span>Cost (by 1 km): </span>\n              <span>').concat(e.costKm,"</span>\n            </li>\n        </ul>\n      "):n.innerHTML='\n        <ul class="element__list">\n            <li class="element__list-item">\n              <span>ID: </span>\n              <span>'.concat(e.id,'</span>\n            </li>\n            <li class="element__list-item">\n              <span>Model: </span>\n              <span>').concat(e.model,'</span>\n            </li>\n            <li class="element__list-item">\n              <span>').concat(e.name?"Name:":"License:"," </span>\n              <span>").concat(e.name||e.license,'</span>\n            </li>\n            <li class="element__list-item">\n              <span>Produced Year: </span>\n              <span>').concat(e.producedYear,'</span>\n            </li>\n            <li class="element__list-item">\n              <span>Capacity: </span>\n              <span>').concat(e.capacity).concat(e.weightUnit,'</span>\n            </li>\n            <li class="element__list-item">\n              <span>Average Speed: </span>\n              <span>').concat(e.averageSpeed).concat(e.speedUnit,'</span>\n            </li>\n            <li class="element__list-item">\n              <span>').concat(e.countOfTeam?"Count Of Team: ":"Type of gas: ","</span>\n              <span>").concat(e.countOfTeam||e.gasType,"</>\n            </li>\n        </ul>\n      "),t.appendChild(n)}}]),o}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&b(e.prototype,t),n&&b(e,n)}(e,null,[{key:"updateCapacity",value:function(e){e.preventDefault(),this.store[0][0].forEach(function(e){return e.showCapacityInPounds()}),this.store[0][1].forEach(function(e){return e.showCapacityInPounds()}),E.addElements(this.store)}},{key:"create",value:function(e){e.preventDefault();var t=e.target,n=e.target.id,r="".concat((+new Date).toString(16));if("newShip"===n){var o=t.querySelector("#name").value,a=t.querySelector("#team").value,i=t.querySelector("#shipModel").value,c=t.querySelector("#shipYear").value,s=t.querySelector("#shipCapacity").value,u=t.querySelector("#speedNm").value,l=new O(o,a,r,i,c,s,u,n);this.store[0][0].push(l),localStorage[".store"]=JSON.stringify(this.store)}if("newTruck"===n){var f=t.querySelector("#license").value,p=t.querySelector("#gas").value,d=t.querySelector("#truckModel").value,y=t.querySelector("#truckYear").value,h=t.querySelector("#truckCapacity").value,m=t.querySelector("#speedKm").value,b=new _(f,p,r,d,y,h,m,n);this.store[0][1].push(b),localStorage[".store"]=JSON.stringify(this.store)}if("cost"===n){var v=t.querySelector("#transportModel").value,w=t.querySelector("#costKg").value,g=t.querySelector("#costKm").value,S=new C(v,w,g);this.store[1].push(S),localStorage[".store"]=JSON.stringify(this.store)}E.addElements(this.store)}}]),e}();v(w,"costOfDelivery",[]),v(w,"ships",[]),v(w,"trucks",[]),v(w,"transport",[w.ships,w.trucks]),v(w,"store",[w.transport,w.costOfDelivery]);function g(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"runStore",function(e){"capacity"===e.target.id?w.updateCapacity(e):w.create(e)}),document.getElementById(e).addEventListener("submit",this.runStore)}document.addEventListener("DOMContentLoaded",function(){return new g("newShip")}),document.addEventListener("DOMContentLoaded",function(){return new g("newTruck")}),document.addEventListener("DOMContentLoaded",function(){return new g("cost")}),document.addEventListener("DOMContentLoaded",function(){return new g("capacity")})}]);