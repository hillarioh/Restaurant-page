!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(2),a=t(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var a=(o=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([a]).join("\n")}var o,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function c(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],a=0;a<e.length;a++){var i=e[a],s=n.base?i[0]+n.base:i[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var p=c(l),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(o[p].references++,o[p].updater(u)):o.push({identifier:l,updater:g(u,n),references:1}),r.push(l)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,p=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(n,a);else{var i=document.createTextNode(a),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(i,o[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,a=t.media,i=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function g(e,n){var t,r,a;if(n.singleton){var i=h++;t=m||(m=d(n)),r=u.bind(null,t,i,!1),a=u.bind(null,t,i,!0)}else t=d(n),r=f.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=c(t[r]);o[a].references--}for(var i=s(e,n),d=0;d<t.length;d++){var l=c(t[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}t=i}}}},function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r)()(!1);a.push([e.i,"body {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: rgb(238, 227, 227);\r\n    font-family: 'Quicksand', sans-serif;\r\n}\r\n\r\n#content {\r\n    margin: 4rem 5rem;\r\n    padding: 3rem;\r\n    min-height: 100vh;\r\n    background: white;\r\n    border-radius: 2rem;\r\n\r\n}\r\n\r\n.logo>h2 {\r\n    line-height: 1rem;\r\n    font-weight: 800;\r\n    font-size: 2.5em;\r\n}\r\n\r\n#h-ul {\r\n    display: flex;\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\nli {\r\n    margin: 0 2rem;\r\n    font-weight: 600;\r\n    font-size: 20px;\r\n}\r\n\r\n.mainContent {\r\n    height: 70vh;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.mainContent>p {\r\n    font-size: 2.5rem;\r\n    font-weight: 800;\r\n    line-height: 2.5rem;\r\n    color: black;\r\n    font-family: 'Fruktur';\r\n}\r\n\r\n#foods {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    clear: both;\r\n\r\n}\r\n\r\n.item {\r\n    flex: 30%;\r\n    max-width: 30%;\r\n    margin: 1rem;\r\n    padding: 14px 8px;\r\n    border: 1px solid rgba(67, 82, 67, 0.933);\r\n}\r\n\r\n.item:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.item h5 {\r\n    font-family: \"Roboto\", sans-serif;\r\n    font-weight: 600;\r\n    margin: 0;\r\n}\r\n\r\n.item p {\r\n    color: #888;\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n    margin: 0;\r\n}\r\n\r\n#img {\r\n    height: 220px;\r\n    max-width: 100% !important;\r\n    background-position: 0 100%;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.contlist {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.contlist .cnt {\r\n    flex: 30%;\r\n    max-width: 30%;\r\n    margin: 1rem;\r\n    padding: 14px 8px;\r\n    text-align: center;\r\n}\r\n\r\n.contlist .cnt i{\r\n    font-size: 2rem;\r\n}",""]),n.default=a},function(e,n,t){"use strict";t.r(n);t(0);let r=document.createElement("header"),a=document.createElement("div");a.classList.add("logo");let i=document.createElement("h2"),o=document.createElement("p");i.classList.add("my-1","mx-0"),o.classList.add("m-0","p-1"),i.textContent="TOCO NICO",o.textContent="Traditional delicacies",a.appendChild(i),a.appendChild(o),a.classList.add("d-flex","flex-column");let c=document.createElement("ul");c.setAttribute("id","h-ul");let s=document.createElement("li");s.textContent="Home";let d=document.createElement("li");d.textContent="Menu";let l=document.createElement("li");l.textContent="Contact",c.appendChild(s),c.appendChild(d),c.appendChild(l),r.appendChild(a),r.appendChild(c),r.classList.add("d-flex","justify-content-between","align-items-center","p-1");var p=r,u=t.p+"00daf2d800178a720d701e8a1d3bdf5b.png",f=t.p+"fc521a41632cd4f86fb5ad01d1b7b9a0.jpg";const m=document.createElement("div");m.classList.add("mainContent");const h=document.createElement("p");h.textContent="Enjoy the luxury of Toco nico, Located less than 20Kms from Jomo Kenyatta International Airport.";const g=document.createElement("img");g.src=u,g.style.width="40vw",m.appendChild(h),m.appendChild(g);var b=m;var v={fid1:{name:"Hamburger ",image:f,price:5},fid2:{name:"Beans with potato",image:t.p+"0ca84ea5b49d7f8e8054b5eb2ae124e7.jpg",price:5},fid3:{name:"Fish ugali with traditional veges",image:t.p+"ca550657167f7ff5e693d496689fd75c.jpg",price:50},fid4:{name:"Local smashed maizel",image:t.p+"7f9c36309645481f1fb38d10f70f1d6f.jpg",price:10},fid5:{name:"Pilau special ",image:t.p+"9cfd92d8c04bbb84e7930180f45ff3a6.jpg",price:15},fid6:{name:"Fried potatos mix",image:t.p+"a764d1e55b0eb88a4a0948746008652a.jpg",price:50},fid7:{name:"Fried meat and skales",image:t.p+"cf4bb9d6917c9ed27cbaa84a8ba8705a.jpg",price:40},fid8:{name:"Chaposmocha",image:t.p+"5a8fc6e409d7b00d890dd3c2a0dcb2ef.jpg",price:30},fid9:{name:"Fried chickenl",image:t.p+"95315c2681bc0f8dde6e2d14d5557c2d.jpg",price:60}};const y=document.createElement("div");y.setAttribute("id","foods");for(let e in v){const n=document.createElement("div");n.setAttribute("class","item");const t=document.createElement("div");t.setAttribute("id","img");const r=document.createElement("h5"),a=document.createElement("p");t.style.backgroundImage=`url('${v[e].image}')`,n.appendChild(t),r.textContent=v[e].name,n.appendChild(r),a.textContent="Price: $"+v[e].price,n.appendChild(a),y.appendChild(n)}const x=document.createElement("div");x.classList.add("pt-3","bg-secondary");const C=document.createElement("h3");C.textContent="Contact Us",C.classList.add("text-center"),x.appendChild(C);const w=document.createElement("div");w.setAttribute("class","contlist");w.innerHTML='\n    <div class="takeaway cnt">\n        <i class="fas fa-shipping-fast"></i>\n        <h4 class="m-0 p-0">Take away</h4>\n        <p class="m-0 p-0">+254702338066</p>\n\n   </div>\n    <div class="email cnt">\n        <i class="fas fa-envelope-open"></i>\n        <h4 class="m-0 p-0">Email</h4>\n        <p class="m-0 p-0">okerioh@gmail.com</p>\n    </div>\n    <div class="hours cnt">\n        <i class="fas fa-concierge-bell"></i>\n        <h4 class="m-0 p-0">Opening hours</h4>\n        <p class="m-0 p-0">on - Fri : noon - 9pm</p>\n        <p class="m-0 p-0">Sat & Sun : 9am - 5pm</p>\n    </div>\n    <div class="address cnt">\n        <i class="fas fa-map-marked-alt"></i>\n        <h4 class="m-0 p-0">Location</h4>\n        <p class="m-0 p-0">Ngong road, near Junction</p>\n    </div>\n    <div class="social cnt">\n        <i class="fab fa-twitter"></i>\n        <h4 class="m-0 p-0">Twitter</h4>\n    </div>',x.appendChild(w);var j=x;const E=document.getElementById("content");E.appendChild(p),E.appendChild(b),E.appendChild(j)}]);