(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(7),c=n.n(r),i=n(8),l=n(4),d=n(3),s=n(6);var m=function(e){var t=e.onAddTask,n=a.a.useState(""),o=Object(d.a)(n,2),r=o[0],c=o[1],i=function(){r&&(t(r),c(""))};return a.a.createElement("div",{className:"todo__add-field"},a.a.createElement("input",{value:r,onChange:function(e){var t=e.currentTarget.value;c(t)},onKeyUp:function(e){13===e.keyCode&&i()},type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438..."}),a.a.createElement("button",{onClick:i,className:"todo__add-field-button"},a.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M8 1V15",stroke:"#C7C7C7",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M1 8H15",stroke:"#C7C7C7",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))))};var u=function(){var e=a.a.useState([{text:"\u0418\u0437\u0443\u0447\u0438\u0442\u044c ReactJS",completed:!0},{text:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c TODO \u043d\u0430 ReactJS",completed:!1}]),t=Object(d.a)(e,2),n=t[0],o=t[1],r=function(e){o((function(t){return t.map((function(t,n){return e===n?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}))},c=function(e){o((function(t){return t.filter((function(t,n){return e!==n}))}))};return a.a.createElement("div",{className:"todo"},a.a.createElement("div",{className:"todo__header"},a.a.createElement("h4",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447")),a.a.createElement(m,{onAddTask:function(e){o((function(t){return[].concat(Object(i.a)(t),[{text:e,completed:!1}])}))}}),a.a.createElement("div",{className:"todo__list"},n.map((function(e,t){return a.a.createElement(s.a,{key:t,index:t,text:e.text,completed:e.completed,onToggleCompleted:r,onRemoveTask:c})}))))};n(15);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u,null)),document.getElementById("root"))},6:function(e,t,n){"use strict";(function(e){var o=n(0),a=n.n(o);t.a=function(t){var n=t.text,o=t.completed,r=t.index,c=t.onToggleCompleted,i=t.onRemoveTask;return a.a.createElement("div",{className:"todo__list-item ".concat(o?"todo__list-item--completed":"")},a.a.createElement("div",{onClick:function(){c(r)},className:"todo__list-item-check"},a.a.createElement("svg",{width:"11",height:"8",viewBox:"0 0 11 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))),a.a.createElement("p",null,n),a.a.createElement("div",{onClick:function(){e.confirm("\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443?")&&i(r)},className:"todo__list-item-remove"},a.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M8 1V15",stroke:"#C7C7C7",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M1 8H15",stroke:"#C7C7C7",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))))}}).call(this,n(14))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.6cd48ee3.chunk.js.map