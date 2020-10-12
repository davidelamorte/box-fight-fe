(this["webpackJsonpbox-game-fe"]=this["webpackJsonpbox-game-fe"]||[]).push([[0],{126:function(e,t,a){e.exports=a(170)},130:function(e,t,a){},153:function(e,t){},169:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),c=a.n(r),i=(a(130),a(10)),l=a(105),s=a.n(l),m=a(200),u=a(201),d=a(75),f=a.n(d),p=function(e){var t=e.setServer,a=Object(n.useState)(null),r=Object(i.a)(a,2),c=r[0],l=r[1];return o.a.createElement("div",{className:f.a.serverConnection},o.a.createElement("div",{className:f.a.title},"Connect to Server"),o.a.createElement("form",{noValidate:!0,autoComplete:"off"},o.a.createElement(m.a,{onChange:function(e){l(e.target.value)},label:"Server URL"})),o.a.createElement(u.a,{className:f.a.button,onClick:function(){c&&t(s()(c))},variant:"contained",color:"secondary"},"Connect"))},E=a(43),g=a.n(E),v=a(12),b=a(42),_=a(87),h=function(e){var t=e.position,a=e.color,r=e.speed,c=e.onClick,i=e.expand,l=Object(n.useRef)(null);Object(v.f)((function(){return l.current.rotation.x=l.current.rotation.y+=.01}));var s=Object(_.b)({scale:i?[1.4,1.4,1.4]:[1,1,1]});return o.a.createElement(_.a.mesh,{onClick:c,scale:s.scale,castShadow:!0,position:t,ref:l},o.a.createElement("boxBufferGeometry",{attach:"geometry"}),o.a.createElement(b.b,{attach:"material",color:a,speed:r,factor:.6}))};Object(b.d)();var y=function(e){var t=e.server,a=Object(n.useState)(null),r=Object(i.a)(a,2),c=r[0],l=r[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:g.a.start},o.a.createElement("div",{className:g.a.title},"BOX ",o.a.createElement("strong",null,"FIGHT")),o.a.createElement(u.a,{className:g.a.button,onClick:function(){t.emit("newGame")},variant:"contained",color:"secondary"},"New Game"),o.a.createElement("div",{className:g.a.join},o.a.createElement(m.a,{onChange:function(e){l(e.target.value)},id:"standard-basic",label:"Game Code"}),o.a.createElement(u.a,{className:g.a.button2,onClick:function(){t.emit("joinGame",c)},variant:"contained",color:"primary"},"Join Game"))),o.a.createElement(v.a,{className:g.a.canvas,shadowMap:!0,colorManagement:!0,camera:{position:[0,2,10],fov:60}},o.a.createElement("ambientLight",{intensity:.3}),o.a.createElement("directionalLight",{castShadow:!0,position:[0,10,0],intensity:1.5,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),o.a.createElement("pointLight",{position:[-10,0,-20],intensity:.5}),o.a.createElement("pointLight",{position:[0,-10,-0],intensity:1.5}),o.a.createElement(h,{position:[4,0,1],color:"#03a9f4",speed:5}),o.a.createElement(h,{position:[-4,0,1],color:"#f50057",speed:5}),o.a.createElement("group",null,o.a.createElement("mesh",{receiveShadow:!0,rotation:[-Math.PI/2,0,0],position:[0,-3,0]},o.a.createElement("planeBufferGeometry",{attach:"geometry",args:[100,100]}),o.a.createElement("shadowMaterial",{attach:"material",opacity:.3})))))},w=a(76),j=a.n(w),O=function(e){var t=e.gameData,a=e.server,n=e.player,r=e.gameStarted,c=e.roomName,i=e.restartGame;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{colorManagement:!0,camera:{position:[-5,3,10],fov:100}},o.a.createElement("directionalLight",{castShadow:!0,position:[0,10,0],intensity:1.5}),o.a.createElement("pointLight",{position:[-10,0,-20],intensity:.5}),o.a.createElement("pointLight",{position:[0,-10,-0],intensity:1.5}),t&&t.boxes.map((function(e,c){return o.a.createElement(h,{key:c,position:e.position,color:t.colors[e.owner],speed:6,onClick:function(){return function(e){r&&a.emit("gameChange",{key:e,player:n})}(c)},expand:e.owner===n})})),!r&&o.a.createElement(b.a,null,o.a.createElement("div",{className:j.a.main},o.a.createElement("div",{className:j.a.waiting},"Room name: ",o.a.createElement("strong",null,c),". Waiting for player 2.",o.a.createElement("div",{onClick:i,className:j.a.goBack},"Go Back.")))),r&&o.a.createElement(b.c,null)))},S=a(60),k=a.n(S),N=function(e){var t=e.endResults,a=e.restartGame;return o.a.createElement("div",{className:k.a.end},o.a.createElement("div",{className:k.a.playerOne},o.a.createElement("strong",null,"Player One:")," ",t[1]),o.a.createElement("div",{className:k.a.playerTwo},o.a.createElement("strong",null,"Player Two:")," ",t[2]),o.a.createElement(u.a,{className:k.a.button,onClick:a,variant:"contained",color:"secondary"},"Restart"))},C=(a(169),function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),l=Object(i.a)(c,2),s=l[0],m=l[1],u=Object(n.useState)(null),d=Object(i.a)(u,2),f=d[0],E=d[1],g=Object(n.useState)(null),v=Object(i.a)(g,2),b=v[0],_=v[1],h=Object(n.useState)(!1),w=Object(i.a)(h,2),j=w[0],S=w[1],k=Object(n.useState)(null),C=Object(i.a)(k,2),G=C[0],x=C[1];Object(n.useEffect)((function(){a&&a.on("gameStarted",(function(e){m(e.gameData),E(e.player),_(e.roomName)}))}),[a]),Object(n.useEffect)((function(){a&&a.on("playerJoined",(function(e){S(!0)}))}),[a]),Object(n.useEffect)((function(){a&&a.on("gameChange",(function(e){m(e.gameData)}))}),[a]),Object(n.useEffect)((function(){a&&a.on("endGame",(function(e){x(e.results)}))}),[a]);var B=function(){m(null),E(null),_(null),S(!1),x(null)};return o.a.createElement("div",{className:"app"},!a&&o.a.createElement(p,{setServer:r}),a&&!s&&o.a.createElement(y,{server:a,setgameData:m}),s&&a&&!G&&o.a.createElement(O,{gameData:s,server:a,player:f,gameStarted:j,roomName:b,restartGame:B}),G&&o.a.createElement(N,{endResults:G,restartGame:B}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t,a){e.exports={start:"start_start__2tcII",title:"start_title__J0aBQ",button:"start_button__1MQUr",button2:"start_button2__3kymg",join:"start_join__39Kb7",canvas:"start_canvas__39xwX"}},60:function(e,t,a){e.exports={end:"end_end__1b5ge",playerOne:"end_playerOne__2yYBY",playerTwo:"end_playerTwo__2kZs9",button:"end_button__10kDx"}},75:function(e,t,a){e.exports={serverConnection:"server-connection_serverConnection__G5jAj",title:"server-connection_title__2FhWh",button:"server-connection_button__T8Ga_"}},76:function(e,t,a){e.exports={main:"main_main__2oLaU",waiting:"main_waiting__nS83C",goBack:"main_goBack__2GJni"}}},[[126,1,2]]]);
//# sourceMappingURL=main.eafb08c7.chunk.js.map