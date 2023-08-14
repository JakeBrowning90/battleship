(()=>{"use strict";var e={917:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const l=o},426:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([e.id,"html, body {\n    background-color: rgb(191, 191, 191);\n    color: white;\n    font-family: 'Courier New', monospace;\n    /* display: grid;\n    grid-template-rows: 30px 1fr 30px; */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n    width: 100%;\n}\n\na, a:visited {\n    color: white;\n}\n\nh1 {\n    font-size: 6vh;\n}\n\nfooter, .startScreenBase, .gameInfoBanner > *, .fleetStatus, .corner, .lastAttack {\n    background-color: #003e5d;\n}\n\nheader, footer, main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nmain {\n    height: 100%;\n    background: rgb(2,0,36);\n    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);\n}\n\n.startScreenBase {\n    height: 50%;\n    width: 50%;\n    padding: 10px;\n    display: grid;\n    grid-template-rows: 2fr repeat(5, 1fr);\n    grid-template-columns: 3fr 1fr 1fr;\n}\n\n.startScreenTitle {\n    grid-column: 1 / -1;\n}\n\n#startGameBtn {\n    grid-column: 1 / -1;\n    justify-self: center;\n    align-self: center;\n    height: 50%;\n    width: 50%;\n}\n\n.startScreenBase > * {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.gameScreenBase {\n    height: 100%;\n    width: 100%;\n    /* background-color: #c9d5ea; */\n    background: rgb(2,0,36);\n    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);\n    display: grid;\n    grid-template-rows: 1fr 3fr;\n    grid-template-columns: repeat(4, 1fr);\n}\n\n.gameScreenBase > * {\n    box-sizing: border-box;\n}\n\n.gameInfoBanner {\n    margin-top: 30px;\n    grid-column: 2 / -2;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 1fr 1fr;\n    gap: 5px;\n}\n\n.gameInfoBanner > * {\n    box-sizing: border-box;\n    padding: 5px;\n}\n\n#gameStatus {\n    grid-column: 1 / -1;\n    font-size: 2em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#gameInstructions {\n    grid-column: 1 / 2;\n}\n\n#shipsKey {\n\n}\n\n#resetButton {\n    background-color: #807f7f;\n    color: white;\n    font-weight: bold;\n}\n\n#resetButton:hover {\n    background-color: #cd3737;\n    color: white;\n    font-weight: bold;\n}\n\n/* .instructionDiv {\n    grid-column: 1 / -1;\n} */\n\n.playerHalf {\n    padding: 30px;\n    height: 100%;\n    width: 100%;\n    place-self: center;\n    box-sizing: border-box;\n    display: grid;\n    grid-template-columns: 3fr repeat(11, 1fr);\n    grid-template-rows:1fr repeat(11, 1fr);\n}\n\n.player1Half {\n    grid-column: 1 / 3;\n}\n\n.player2Half {\n    grid-column: -1 / -3;\n}\n\n.fleetStatus {\n    grid-row: 1 / -1;\n    display: flex;\n    justify-content: center;\n    padding-top: 5px;\n}\n\n.lastAttack {\n    height: 100%;\n    width: 100%;\n    grid-column: 2 / -1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.corner, .navMarker {\n    box-sizing: border-box;\n    border: 1px solid black;\n    background-color: #807f7f;\n\n}\n\n.corner {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    height: 100%;\n    width: 100%;\n}\n\n.navMarker {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.grid {\n    box-sizing: border-box;\n    background-color: whitesmoke;\n    grid-row: 3 / -1;\n    grid-column: 3 / -1;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.tile {\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    border: 1px solid grey;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hasShip {\n    /* background-color: rgba(31, 126, 31, 0.564); */\n}\n\n.struckShip {\n    background-color: rgba(255, 0, 0, 0.759);\n}\n\n.missedShot {\n    background-color: rgba(0, 0, 255, 0.500);\n}\n\nfooter {\n    height:50px;\n}\n\n/* .placeShipBtn {\n    grid-column: -1 / -3;\n    grid-row: 2 / 4;\n    margin: 5px;\n}\n\n.radioDiv {\n    grid-column: 1 / 3;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n}\n\n.errorField {\n    grid-column: -1 / -3;\n} */",""]);const l=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(o[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var p=n(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var m=a(h,r);r.byIndex=l,t.splice(l,0,{identifier:u,updater:m,references:1})}o.push(u)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var l=n(i[o]);t[l].references--}for(var s=r(e,a),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),i=n(569),o=n.n(i),l=n(565),s=n.n(l),c=n(216),d=n.n(c),u=n(589),p=n.n(u),h=n(917),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=o().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var f=n(426),g={};function b(){const e=document.querySelector("main");for(;e.firstChild;)e.removeChild(e.lastChild)}g.styleTagTransform=p(),g.setAttributes=s(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=d(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;class y{constructor(e,t){this.name=e,this.length=t,this.hitCounter=0,this.sunk=!1}hit(){return this.hitCounter++,this.hitCounter}isSunk(){if(this.hitCounter==this.length)return this.sunk=!0,this.sunk}}class v{constructor(e,t){this.allSpaces=this.generateSpaces(),this.occupiedSpaces=[],this.missedShots=[],this.fleet=[new y("Carrier",5),new y("Battleship",4),new y("Destroyer",3),new y("Submarine",3),new y("Patrol boat",2)],this.CPU=e,this.autoPlace=t,this.isActiveBoard=!1}generateSpaces(){let e=[];for(let t=0;t<10;t++){let n=[];for(let e=0;e<10;e++){let r={};r.coord=`${t}, ${e}`,r.contains=null,r.tried=!1,n[e]=r}e[t]=n}return e}placeShips(){for(let e=0;e<this.fleet.length;e++){let t,n,r;do{do{t=this.getOrientation(this.fleet[e].name,this.fleet[e].length),n=this.getPlacement(this.fleet[e].length,t)}while(0==this.isShipOnBoard(n,this.fleet[e].length,t));r=this.getProposedSpaces(t,n,this.fleet[e].length)}while(this.doesPlacementClash(r));for(let r=0;r<this.fleet[e].length;r++)"h"==t?this.allSpaces[n[0]][n[1]+r].contains=this.fleet[e]:"v"==t&&(this.allSpaces[n[0]+r][n[1]].contains=this.fleet[e]);this.occupiedSpaces.push(...r)}}getOrientation(e,t){let n,r;if(1==this.autoPlace||1==this.CPU){let e=Math.floor(2*Math.random());0==e?n="h":1==e&&(n="v")}else do{n=prompt("Enter "+e+" (length: "+t+") orientation (h or v):"),"h"!=n&&"v"!=n||(r=1)}while(1!=r);return n}getPlacement(){let e,t;if(1==this.autoPlace||1==this.CPU)e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random());else{do{e=parseInt(prompt("Enter row (0-9):"))}while(e<0||e>9);do{t=parseInt(prompt("Enter column (0-9):"))}while(t<0||t>9)}return[e,t]}getProposedSpaces(e,t,n){let r=[];for(let a=0;a<n;a++)"h"==e?r.push(this.allSpaces[t[0]][t[1]+a].coord):"v"==e&&r.push(this.allSpaces[t[0]+a][t[1]].coord);return r}isShipOnBoard(e,t,n){return"h"==n?e[1]+t<=10||(0==this.autoPlace&&alert("Off the grid horizontally, try again"),!1):"v"==n?e[0]+t<=10||(0==this.autoPlace&&alert("Off the grid vertically, try again"),!1):void 0}doesPlacementClash(e){for(let t=0;t<e.length;t++)if(this.occupiedSpaces.includes(e[t]))return 0==this.autoPlace&&alert("Conflict with previous ship, try again"),!0;return!1}receiveAttack(e,t){let n=this.allSpaces[e[0]][e[1]];return n.tried=!0,null==n.contains?(this.missedShots.push(e),t.textContent="Miss!",null):(t.textContent=n.contains.name+" hit!",n.contains.hit(),n.contains.isSunk(),1==n.contains.sunk&&(t.textContent=n.contains.name+" sunk!"),n.contains.name)}updateTile(e,t){null!=t?(e.classList.add("struckShip"),e.textContent=t.charAt(0)):e.classList.add("missedShot")}getCoordForCPU(){return[Math.floor(10*Math.random()),Math.floor(10*Math.random())]}isFleetSunk(){let e=0;for(let t=0;t<this.fleet.length;t++)1==this.fleet[t].sunk&&e++;return e==this.fleet.length}}class C{constructor(e,t,n){this.name=e,this.isCPU=t,this.autoPlace=n,this.gameBoard=new v(t,n),this.moveHistory=[],this.isTurn=!1,this.lastHit=null}getPlayerAttack(){let e,t,n;do{null!=this.lastHit&&(this.lastHit[0],this.lastHit[0],this.lastHit[1],this.lastHit[1]),t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random()),e=[t,n],this.moveHistory.includes(`${t}, ${n}`)&&0==this.isCPU&&console.log("Square already played, try again.")}while(this.moveHistory.includes(`${t}, ${n}`));return this.moveHistory.push(`${t}, ${n}`),e}}!function e(){const t=document.querySelector("main"),n=document.createElement("form");n.classList.add("startScreenBase");const r=document.createElement("h1");r.classList.add("startScreenTitle"),r.textContent="Battleship";const a=document.createElement("label");a.setAttribute("for","player1NameInput"),a.textContent="Player 1 name:";const i=document.createElement("input");i.setAttribute("required",""),i.setAttribute("id","player1NameInput"),i.setAttribute("name","player1NameInput");const o=document.createElement("label");o.setAttribute("for","player1AutoPlace"),o.textContent="Auto-place ships:";const l=document.createElement("input");l.setAttribute("type","checkbox"),l.setAttribute("id","player1AutoPlaceCheckbox"),l.setAttribute("name","player1AutoPlaceCheckbox");const s=document.createElement("label");s.setAttribute("for","player1AICheckbox"),s.textContent="AI player:";const c=document.createElement("input");c.setAttribute("type","checkbox"),c.setAttribute("id","player1AICheckbox"),c.setAttribute("name","player1AICheckbox"),c.disabled=!0;const d=document.createElement("label");d.setAttribute("for","player2NameInputLabel"),d.textContent="Player 2 name:";const u=document.createElement("input");u.setAttribute("required",""),u.setAttribute("id","player2NameInput"),u.setAttribute("name","player2NameInput");const p=document.createElement("label");p.setAttribute("for","player2Checkbox"),p.textContent="AI player:";const h=document.createElement("input");h.setAttribute("type","checkbox"),h.setAttribute("id","player2AICheckbox"),h.setAttribute("name","player2AICheckbox");const m=document.createElement("label");m.setAttribute("for","player2AutoPlace"),m.textContent="Auto-place ships:";const f=document.createElement("input");f.setAttribute("type","checkbox"),f.setAttribute("id","player2AutoPlaceCheckbox"),f.setAttribute("name","player2AutoPlaceCheckbox");const g=document.createElement("input");g.setAttribute("type","submit"),g.setAttribute("id","startGameBtn"),g.setAttribute("value","Start Game"),t.appendChild(n),n.appendChild(r),n.appendChild(a),n.appendChild(o),n.appendChild(s),n.appendChild(i),n.appendChild(l),n.appendChild(c),n.appendChild(d),n.appendChild(m),n.appendChild(p),n.appendChild(u),n.appendChild(f),n.appendChild(h),n.appendChild(g),n.addEventListener("submit",(t=>{t.preventDefault();let n=new C(i.value,c.checked,l.checked),r=new C(u.value,h.checked,f.checked);b(),function(){const t=document.querySelector("main"),n=document.createElement("div");n.classList.add("gameScreenBase");const r=document.createElement("div");r.setAttribute("id","gameInfoBanner"),r.classList.add("gameInfoBanner");const a=document.createElement("div");a.setAttribute("id","gameStatus");const i=document.createElement("div");i.setAttribute("id","gameInstructions"),i.textContent="Click a square on your opponent's grid to attack. Sink all 5 ships to win!";const o=document.createElement("div");o.setAttribute("id","shipsKey");const l=document.createElement("ul"),s=document.createElement("li");s.textContent="Carrier - 5";const c=document.createElement("li");c.textContent="Battleship - 4";const d=document.createElement("li");d.textContent="Destroyer - 3";const u=document.createElement("li");u.textContent="Submarine - 3";const p=document.createElement("li");p.textContent="Patrol boat - 2",l.appendChild(s),l.appendChild(c),l.appendChild(d),l.appendChild(u),l.appendChild(p);const h=document.createElement("button");h.setAttribute("id","resetButton"),h.textContent="Reset game",h.addEventListener("click",(()=>{console.log("Reset!"),b(),e()}));const m=document.createElement("div");m.classList.add("player1Half","playerHalf");const f=document.createElement("div");f.classList.add("player2Half","playerHalf"),document.createElement("div").classList.add("playerBoard"),document.createElement("div").classList.add("playerBoard");const g=document.createElement("div");g.setAttribute("id","player1Fleet"),g.classList.add("fleetStatus");const y=document.createElement("div");y.setAttribute("id","player2Fleet"),y.classList.add("fleetStatus");const v=document.createElement("div");v.setAttribute("id","player1LastAttack"),v.classList.add("lastAttack");const C=document.createElement("div");C.setAttribute("id","player2LastAttack"),C.classList.add("lastAttack");const x=document.createElement("div");x.classList.add("grid"),x.setAttribute("id","player1Grid");const k=document.createElement("div");function A(e){let t=document.createElement("div");t.classList.add("corner"),e.appendChild(t);for(let t=0;t<10;t++){let n=document.createElement("div");n.classList.add("navMarker"),n.textContent=t,e.appendChild(n)}for(let t=0;t<10;t++){let n=document.createElement("div");n.classList.add("navMarker"),n.textContent=t,e.appendChild(n)}}k.classList.add("grid"),k.setAttribute("id","player2Grid"),t.appendChild(n),n.appendChild(r),r.appendChild(a),r.appendChild(i),r.appendChild(o),o.appendChild(l),r.appendChild(h),n.appendChild(m),m.appendChild(g),m.appendChild(v),m.appendChild(x),A(m),n.appendChild(f),f.appendChild(y),f.appendChild(C),f.appendChild(k),A(f)}(),function(e,t){const n=document.querySelector("#gameStatus"),r=document.querySelector("#player1Grid"),a=document.querySelector("#player2Grid"),i=document.querySelector("#player1LastAttack"),o=document.querySelector("#player2LastAttack"),l=document.querySelector("#player1Fleet"),s=document.querySelector("#player2Fleet");function c(e,t,r,a){for(let o=0;o<10;o++)for(let l=0;l<10;l++){let s=document.createElement("div");s.classList.add("tile"),s.setAttribute("id",`${[o,l]}`),s.addEventListener("click",(()=>{if(1==e.gameBoard.isActiveBoard&&0==e.gameBoard.allSpaces[o][l].tried){let t=e.gameBoard.receiveAttack([o,l],r);if(e.gameBoard.updateTile(s,t),e.gameBoard.isFleetSunk())d(a,e);else if(1!=e.isCPU||e.gameBoard.isFleetSunk())0!=e.isCPU||e.gameBoard.isFleetSunk()||(n.textContent=e.name+", attack "+a.name+"'s fleet!",e.gameBoard.isActiveBoard=!1,a.gameBoard.isActiveBoard=!0);else{let t=e.getPlayerAttack(),n=a.gameBoard.receiveAttack(t,i),r=document.getElementById(t);a.gameBoard.updateTile(r,n),a.gameBoard.isFleetSunk()&&d(e,a)}}})),t.appendChild(s)}}function d(e,t){n.textContent=e.name+" wins!",t.gameBoard.isActiveBoard=!1,e.gameBoard.isActiveBoard=!1}l.textContent=e.name+"'s fleet",s.textContent=t.name+"'s fleet",0==e.autoPlace&&alert(e.name+", place ships"),e.gameBoard.placeShips(),0==t.autoPlace&&alert(t.name+", place ships"),t.gameBoard.placeShips(),c(e,r,i,t),c(t,a,o,e),n.textContent=e.name+", attack "+t.name+"'s fleet!",t.gameBoard.isActiveBoard=!0}(n,r)}))}()})()})();